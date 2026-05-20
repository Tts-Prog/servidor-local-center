"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { setCookie } from "nookies";

export const RightSection = () => {

    const [nome, setName] = useState("");
    const [numero_identificacao, setNumero] = useState("");
    const [data_nascimento, setDataNascimento] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [telefone, setTelefone] = useState("");
    const [pais, setPais] = useState("");
    const [localidade, setLocalidade] = useState("");
    const [role, setRole] = useState("");

    const ChangeNome = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setName(e.target.value);
        } else {
            setName("");
        }
    };
    const ChangeNumero = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setNumero(e.target.value);
        } else {
            setNumero("");
        }
    };
    const ChangeDataNascimento = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setDataNascimento(e.target.value);
        } else {
            setDataNascimento("");
        }
    };
    const ChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setEmail(e.target.value);
        } else {
            setEmail("");
        }
    };
    const ChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setPassword(e.target.value);
        } else {
            setPassword("");
        }
    };
    const ChangeTelefone = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setTelefone(e.target.value);
        } else {
            setTelefone("");
        }
    };
    const ChangePais = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setPais(e.target.value);
        } else {
            setPais("");
        }
    };
    const ChangeLocalidade = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setLocalidade(e.target.value);
        } else {
            setLocalidade("");
        }
    };
    const ChangeRole = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setRole(e.target.value);
        } else {
            setRole("");
        }
    };

    const handleRegistro = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const response = await fetch("http://localhost:8080/user/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nome: nome,
                numero_identificacao: numero_identificacao,
                data_nascimento: data_nascimento,
                email: email,
                password: password,
                telefone: telefone,
                pais: pais,
                localidade: localidade,
                role: "cliente",
            }),
        });
        if (response.status === 200) {
            toast.success("User criado com sucesso!");


            if (typeof window !== "undefined") {
                window.location.href = "/login";
            }
        } else {
            toast.error("Erro ao criar User!");
        }
    };

    return (
        <div className="w-1/2 flex flex-col justify-center">
            <Card className="h-full flex flex-col justify-center px-14">
                <CardHeader>
                    <span className="text-5xl font-bold ">Registro</span>
                </CardHeader>

                <CardContent>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <Label className="" htmlFor="nome">Nome</Label>
                            <Input
                                type="text"
                                id="nome"
                                placeholder="Your Name ..."
                                className="py-2 text-lg h-10"
                                value={nome}
                                onChange={ChangeNome}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label className="" htmlFor="numero">Número de Identificação</Label>
                            <Input
                                type="text"
                                id="numero"
                                placeholder="Your ID ..."
                                className="h-15 py-2 text-lg h-10"
                                value={numero_identificacao}
                                onChange={ChangeNumero}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label className="" htmlFor="data">Data de Nascimento</Label>
                            <Input
                                type="text"
                                id="data"
                                placeholder="Your Date of Birth ..."
                                className="h-15 py-2 text-lg h-10"
                                value={data_nascimento}
                                onChange={ChangeDataNascimento}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label className="" htmlFor="email">Email</Label>
                            <Input
                                type="text"
                                id="email"
                                placeholder="example@email.com"
                                className="py-2 text-lg h-10"
                                value={email}
                                onChange={ChangeEmail}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label className="" htmlFor="password">Password</Label>
                            <Input
                                type="password"
                                id="password"
                                placeholder="Your password ..."
                                className="h-15 py-2 text-lg h-10"
                                value={password}
                                onChange={ChangePassword}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label className="" htmlFor="telefone">Telefone</Label>
                            <Input
                                type="text"
                                id="telefone"
                                placeholder="Your Phone Number ..."
                                className="h-15 py-2 text-lg h-10"
                                value={telefone}
                                onChange={ChangeTelefone}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label className="" htmlFor="pais">País</Label>
                            <Input
                                type="text"
                                id="pais"
                                placeholder="Your Country ..."
                                className="h-15 py-2 text-lg h-10"
                                value={pais}
                                onChange={ChangePais}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label className="" htmlFor="localidade">Localidade</Label>
                            <Input
                                type="text"
                                id="localidade"
                                placeholder="Your Location ..."
                                className="h-15 py-2 text-lg h-10"
                                value={localidade}
                                onChange={ChangeLocalidade}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label className="" htmlFor="role">Role</Label>
                            <Input
                                type="text"
                                id="role"
                                placeholder="Your Role ..."
                                className="h-15 py-2 text-lg h-10"
                                value={role}
                                onChange={ChangeRole}
                            />
                        </div>
                        <Button className="h-15 bg-[#13A4EC] roundede-md text-white w-full py-3 drop-shadow-lg drop-shadow-gray-200" onClick={handleRegistro}>
                            Create Account
                        </Button>
                    </div>
                    <div>
                        <span>Already have an account?</span>
                        <Link href="/login" className="text-[#13A4EC] font-semibold">
                            Sign in
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
