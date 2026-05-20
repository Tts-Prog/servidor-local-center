"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useState } from "react";
import { toast } from "sonner";

export const RightSection = () => {

    const [nome, setNome] = useState("");
    const [numero_identificado, setNumero_identificado] = useState("");
    const [data_nascimento, setData_nascimento] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [pais, setPais] = useState("");
    const [localidade, setLocalidade] = useState("");
    const [role, setRole] = useState("");

    const ChangeNome = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setNome(e.target.value);
        } else {
            setNome("");
        }
    }

    const ChangeNumero_identificado = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setNumero_identificado(e.target.value);
        } else {
            setNumero_identificado("");
        }
    }
    const ChangeData_nascimento = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setData_nascimento(e.target.value);
        } else {
            setData_nascimento("");
        }
    }

    const ChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setEmail(e.target.value);
        } else {
            setEmail("");
        }
    }

    const ChangeTelefone = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setTelefone(e.target.value);
        } else {
            setTelefone("");
        }
    }

    const ChangePais = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setPais(e.target.value);
        } else {
            setPais("");
        }
    }

    const ChangeLocalidade = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setLocalidade(e.target.value);
        } else {
            setLocalidade("");
        }
    }

    const ChangeRole = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setRole(e.target.value);
        } else {
            setRole("");
        }
    }

    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const response = await fetch("http://localhost:8080/user/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome: nome,
                numero_identificado: numero_identificado,
                data_nascimento: data_nascimento,
                telefone: telefone,
                pais: pais,
                email: email,
                localidade: localidade,
                role: role
            })
        })

        if (response.status === 200) {
            toast.success("Utilizador criado com sucesso");

            if (typeof window !== "undefined") {
                window.location.href = "/login";
            }
        } else {
            toast.error("Não foi possível criar conta, tente novamente.");
        }
    }

    console.log({ Nome: nome, Numero_identificado: numero_identificado, data_nascimento: data_nascimento, pais: pais, Email: email, localidade: localidade, role: role });

    return (
        <div className="bg-blue-300 w-1/2 flex flex-col justify-center">
            <Card className="h-full flex flex-col justify-center px-14 gap-16">
                <CardHeader>
                    <span className="text-5xl font-bold ">Registro</span>
                </CardHeader>

                <CardContent>
                    <div className="flex flex-col gap-2">
                        <Label className="">Nome</Label>
                        <Input type="nome"
                            placeholder="Your nome ..."
                            className="h-15 py-2 text-lg h-10"
                            value={nome}
                            onChange={ChangeNome}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label className="">Numero identificado</Label>
                        <Input type="Numero_identificado"
                            placeholder="Your Numero_identificado ..."
                            className="h-15 py-2 text-lg h-10"
                            value={numero_identificado}
                            onChange={ChangeNumero_identificado}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label className="">Data nascimento</Label>
                        <Input type="data_nascimento"
                            placeholder="Your data_nascimento ..."
                            className="h-15 py-2 text-lg h-10"
                            value={data_nascimento}
                            onChange={ChangeData_nascimento}
                        />
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <Label className="">Email</Label>
                            <Input type="text"
                                placeholder="example@email.com"
                                className="py-2 text-lg h-10"
                                value={email}
                                onChange={ChangeEmail}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label className="">Telefone</Label>
                            <Input type="telefone"
                                placeholder="Your telefone ..."
                                className="h-15 py-2 text-lg h-10"
                                value={telefone}
                                onChange={ChangeTelefone}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label className="">Pais</Label>
                            <Input type="pais"
                                placeholder="Your pais ..."
                                className="h-15 py-2 text-lg h-10"
                                value={pais}
                                onChange={ChangePais}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label className="">Localidade</Label>
                            <Input type="password"
                                placeholder="Your localidade ..."
                                className="h-15 py-2 text-lg h-10"
                                value={localidade}
                                onChange={ChangeLocalidade}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label className="">Role</Label>
                            <Input type="role"
                                placeholder="Your role ..."
                                className="h-15 py-2 text-lg h-10"
                                value={role}
                                onChange={ChangeRole}
                            />
                        </div>
                        <Button className="h-15 bg-[#13A4EC] roundede-md text-white w-full py-3 drop-shadow-lg drop-shadow-gray-200" onClick={handleLogin}>
                            Login
                        </Button>
                    </div>
                    <div>
                        <span>Don´t have an account yet?</span>
                        <Link href="/login" className="text-[#13A4EC] font-semibold">
                            Create Account
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
