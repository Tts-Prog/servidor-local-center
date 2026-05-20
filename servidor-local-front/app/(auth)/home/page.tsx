"use client";

import { useMemo, useState } from "react";

import Cabeçalho from "@/components/core/Cabeçalho";
import Footer from "@/components/core/footer";
import Navbar from "@/components/core/navbar";
import { PedidoCard } from "@/components/core/pedido-card";
import Sedebar from "@/components/budget/sedebar";
import {
  BellIcon,
  Droplets,
  Hammer,
  PaintRoller,
  Snowflake,
  Wrench,
  Zap,
} from "lucide-react";

import { SearchIcon } from "@/assets/icons/search";
import Link from "next/link";

type CategoryFilter =
  | "all"
  | "Electrical"
  | "Plumbing"
  | "Painting"
  | "Carpentry"
  | "Refrigeration";

const categoryOptions: {
  key: CategoryFilter;
  name: string;
  icon: React.ReactNode;
}[] = [
  {
    key: "all",
    name: "Todos os Serviços",
    icon: <Wrench size={20} />,
  },
  {
    key: "Electrical",
    name: "Elétrico",
    icon: <Zap size={20} />,
  },
  {
    key: "Plumbing",
    name: "Hidráulica",
    icon: <Droplets size={20} />,
  },
  {
    key: "Carpentry",
    name: "Carpintaria",
    icon: <Hammer size={20} />,
  },
  {
    key: "Painting",
    name: "Pintura",
    icon: <PaintRoller size={20} />,
  },
  {
    key: "Refrigeration",
    name: "Refrigeração",
    icon: <Snowflake size={20} />,
  },
];

const homeRequests = [
  {
    id: "reparos-gerais",
    title: "Reparos gerais",
    description:
      "Preciso de um profissional para fazer reparos gerais em casa.",
    image: "",
    category: {
      id: 1,
      name: "Reparos gerais",
      icone: "🔧",
    },
  },

  {
    id: "pintar-parede",
    title: "Pintar parede",
    description: "Preciso pintar uma parede da sala.",
    image: "",
    category: {
      id: 2,
      name: "Pintura",
      icone: "🎨",
    },
  },

  {
    id: "trocar-chuveiro",
    title: "Trocar chuveiro",
    description: "Preciso trocar um chuveiro elétrico antigo.",
    image: "",
    category: {
      id: 3,
      name: "Eletricista",
      icone: "⚡",
    },
  },

  {
    id: "ar-condicionado",
    title: "Instalação de ar condicionado",
    description: "Preciso instalar um ar-condicionado split.",
    image: "",
    category: {
      id: 4,
      name: "Refrigeração",
      icone: "❄️",
    },
  },

  {
    id: "reparar-vazamento",
    title: "Reparar vazamento",
    description: "Tenho um vazamento na pia do banheiro.",
    image: "",
    category: {
      id: 5,
      name: "Hidraulica",
      icone: "🚰",
    },
  },

  {
    id: "montar-guarda-roupa",
    title: "Montar guarda-roupa",
    description: "Preciso montar um guarda-roupa novo.",
    image: "",
    category: {
      id: 6,
      name: "Montagem de Moveis",
      icone: "🔨",
    },
  },
];

const matchesCategory = (
  request: (typeof homeRequests)[number],
  category: CategoryFilter,
) => {
  const normalized = request.category.name.toLowerCase();
  const title = request.title.toLowerCase();

  if (category === "all") {
    return true;
  }

  if (category === "Electrical") {
    return (
      normalized.includes("eletric") ||
      normalized.includes("electric") ||
      title.includes("eletric")
    );
  }

  if (category === "Plumbing") {
    return (
      normalized.includes("hidraul") ||
      title.includes("hidraul") ||
      title.includes("vazamento")
    );
  }

  if (category === "Painting") {
    return normalized.includes("pintura") || title.includes("pintar");
  }

  if (category === "Carpentry") {
    return (
      normalized.includes("montagem") ||
      normalized.includes("moveis") ||
      title.includes("montar")
    );
  }

  if (category === "Refrigeration") {
    return normalized.includes("refrig") || title.includes("ar condicionado");
  }

  return true;
};

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

  const [searchValue, setSearchValue] = useState("");

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const filteredRequests = useMemo(() => {
    return homeRequests.filter((request) => {
      if (!matchesCategory(request, activeCategory)) {
        return false;
      }

      const query = searchValue.trim().toLowerCase();

      if (!query) {
        return true;
      }

      return (
        request.title.toLowerCase().includes(query) ||
        request.description.toLowerCase().includes(query) ||
        request.category.name.toLowerCase().includes(query)
      );
    });
  }, [activeCategory, searchValue]);

  const activeCategoryName =
    categoryOptions.find((option) => option.key === activeCategory)?.name ||
    "Todos os serviços";

  return (
    <div className="bg-gray-100">
      <div className="min-h-screen bg-slate-50">
        <Navbar>
          <div className="flex flex-1 items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              {isSearchOpen && (
                <input
                  type="search"
                  value={searchValue}
                  onChange={(event) => setSearchValue(event.target.value)}
                  placeholder="Pesquisar serviços..."
                  className="h-10 w-40 sm:w-56 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-[#13a4ec] focus:ring-2 focus:ring-[#13a4ec]/20"
                />
              )}

              <button
                type="button"
                onClick={() => setIsSearchOpen((current) => !current)}
                aria-label={isSearchOpen ? "Fechar pesquisa" : "Abrir pesquisa"}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-900 shadow-sm transition hover:bg-slate-100"
              >
                <SearchIcon />
              </button>
            </div>

            <div className="hidden sm:block rounded-xl bg-white p-2 shadow-sm">
              <BellIcon />
            </div>

            <div className="hidden sm:block text-sm text-slate-600">
              <Link href="/registro">Sign in</Link>
            </div>
          </div>
        </Navbar>

        <div className="flex flex-1">
          <aside className="hidden w-72 border-r border-slate-200 bg-white p-6 xl:block">
            <Sedebar
              categories={categoryOptions}
              activeCategory={activeCategory}
              onCategorySelect={(categoryKey) => {
                setActiveCategory(categoryKey as CategoryFilter);
              }}
            />
          </aside>

          <main className="flex-1 p-6 md:p-10">
            <div className="flex flex-col">
              <Cabeçalho />
            </div>

            <div className="mx-0 mt-10 md:mx-8">
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-slate-500">Filtrando por</p>

                  <h2 className="text-2xl font-bold text-slate-900">
                    {activeCategoryName}
                  </h2>
                </div>

                <p className="text-sm text-slate-500">
                  Use a busca para filtrar títulos, categorias e descrições.
                </p>
              </div>

              {filteredRequests.length === 0 ? (
                <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center text-slate-600">
                  Nenhum serviço encontrado. Tente outro filtro ou termo de
                  pesquisa.
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {filteredRequests.map((request) => (
                    <PedidoCard
                      key={request.id}
                      title={request.title}
                      description={request.description}
                      image={request.image}
                      category={request.category}
                    />
                  ))}
                </div>
              )}
            </div>
          </main>
        </div>

        <Footer />
      </div>
    </div>
  );
}
