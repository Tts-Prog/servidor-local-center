"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useState } from "react";
import{toast} from "sonner";

export const RightSection = () => {
    //useState
    const [nome, setNome] = useState("");
    const [numeroIdentificado, setNumeroIdentificado] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [pais, setPais] = useState("");
    const [localidade, setLocalidade] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const changeNome = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setNome(e.target.value);
        } else {
            setNome("");
        }
    };
    const changeNumeroIdentificado = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setNumeroIdentificado(e.target.value);
        } else {
            setNumeroIdentificado("");
        }
    };
    const changeDataNascimento = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setDataNascimento(e.target.value);
        } else {
            setDataNascimento("");
        }
    };
    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setEmail(e.target.value);
        } else {
            setEmail("");
        }
    };
    const changerTelefone = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setTelefone(e.target.value);
        } else {
            setTelefone("");
        }
    };
    const changePais = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setPais(e.target.value);
        } else {
            setPais("");
        }
    };
    const changerLocalidade = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setLocalidade(e.target.value);
        } else {
            setLocalidade("");
        }
    };
    const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setPassword(e.target.value);
        } else {
            setPassword("");
        }
    };
    const changeRole = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setRole(e.target.value);
        } else {
            setRole("");
        }
    };

    const handleRegisto = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        //fetch API
        const response = await fetch("http://localhost:8080/user/create", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nome: nome,
                numero_identificado: numeroIdentificado,
                data_nascimento: dataNascimento,
                pais: pais,
                localidade: localidade,
                telefone: telefone,
                email: email,
                password: password,
                role: "cliente",
                enabled: true,
            }),
        });
        if (response.status === 200) {
            toast.success("Registration successful!");

            if(typeof window !== "undefined"){
            window.location.href = "/login";
        }
        } else {
            toast.error("Registration failed!");
        }
    };

    return (
        <div className="w-1/2 flex flex-col justify-center ">
            <Card className="h-ful flex-col justify-center px-14 py-15 gap-16">
                <CardHeader>
                    <span className="text-5xl font-bold">Create Your Account</span>
                </CardHeader>

                <CardContent>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <Label>Name</Label>
                            <Input
                                type="text"
                                placeholder="Your name"
                                className="py-2 h-10 text-lg"
                                value={nome}
                                onChange={changeNome}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Numero Identificado</Label>
                            <Input
                                type="text"
                                placeholder="Identificacao"
                                className="py-2 h-10 text-lg"
                                value={numeroIdentificado}
                                onChange={changeNumeroIdentificado}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Data de Nascimento</Label>
                            <Input
                                type="text"
                                placeholder="Data de Nascimento"
                                className="py-2 h-10 text-lg"
                                value={dataNascimento}
                                onChange={changeDataNascimento}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Pais</Label>
                            <Input
                                type="text"
                                placeholder="Pais"
                                className="py-2 h-10 text-lg"
                                value={pais}
                                onChange={changePais}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Localidade</Label>
                            <Input
                                type="text"
                                placeholder="Localidade"
                                className="py-2 h-10 text-lg"
                                value={localidade}
                                onChange={changerLocalidade}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Telefone</Label>
                            <Input
                                type="text"
                                placeholder="Telefone"
                                className="py-2 h-10 text-lg"
                                value={telefone}
                                onChange={changerTelefone}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <Label>Email</Label>
                            <Input
                                type="text"
                                placeholder="example@email.com"
                                className="py-2 h-10 text-lg"
                                value={email}
                                onChange={changeEmail}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Password</Label>

                            <Input
                                type="password"
                                placeholder="Your password"
                                className="py-2 h-10 text-lg"
                                value={password}
                                onChange={changePassword}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Role</Label>
                            <Input
                                type="text"
                                placeholder="Role"
                                className="py-2 h-10 text-lg"
                                value={role}
                                onChange={changeRole}
                            />
                        </div>

                        <Button
                            onClick={handleRegisto}
                            className="bg-[#13A4EC] rounded-md text-white font-bold py-3 drop-shadow-lg drop-shadow-gray-500"
                        >
                            Complete Registation
                        </Button>
                    </div>
                    <div
                        className="text-sm text-gry-500 flex flex justify-center gap-2">
                        {" "}
                        Aiready have an account?

                        <Link href="/login" className="text-[#13A4EC] font-semibold">
                            Sign in
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
