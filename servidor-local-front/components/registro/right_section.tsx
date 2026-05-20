"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import React, { useState } from "react"
import { Toaster } from "../ui/sonner"
import { toast } from "sonner"

export const RightSection = () => {

    const [nome, setNome] = useState("");
    const [numero_identificacao, setNumero_identificacao] = useState("");
    const [data_nascimento, setData_nascimento] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [telefone, setTelefone] = useState("");
    const [pais, setPais] = useState("");
    const [localidade, setLocalidade] = useState("");
    

    const changeNome = (e: React.ChangeEvent<HTMLInputElement>) =>{
        if(e.target.value){
            setNome(e.target.value);
        }
        else{
            setNome(" ");
        }
    };
    const changeNumero_identificacao = (e: React.ChangeEvent<HTMLInputElement>) =>{
        if(e.target.value){
            setNumero_identificacao(e.target.value);
        }
        else{
            setNumero_identificacao(" ");
        }
    };

    const changeData_nascimento = (e: React.ChangeEvent<HTMLInputElement>) =>{
        if(e.target.value){
            setData_nascimento(e.target.value)
        }
        else{
            setData_nascimento(" ");
        }
    };
    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>{
        if(e.target.value){
            setEmail(e.target.value)
        }
        else{
            setEmail(" ");
        }
    };
    const changePassword = (e: React.ChangeEvent<HTMLInputElement>) =>{
        if(e.target.value){
            setPassword(e.target.value)
        }
        else{
            setPassword(" ");
        }
    };
    const changeRole = (e: React.ChangeEvent<HTMLInputElement>) =>{
        if(e.target.value){
            setRole(e.target.value)
        }
        else{
            setRole(" ")
        }
    };

    const changeTelefone = (e: React.ChangeEvent<HTMLInputElement>) =>{
        if(e.target.value){
            setTelefone(e.target.value)
        }
        else{
            setTelefone(" ")
        }
    };

    const changePais = (e: React.ChangeEvent<HTMLInputElement>) =>{
        if(e.target.value){
            setPais(e.target.value)
        }
        else{
            setPais(" ")
        }
    };
    const changeLocalidade = (e: React.ChangeEvent<HTMLInputElement>) =>{
        if(e.target.value){
            setLocalidade(e.target.value)
        }
        else{
            setLocalidade(" ")
        }
    };




    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const response = await fetch(
            'http://localhost:8080/users/create',
            {
            method: "POST",
            headers: {
                "content-type": "application/json",
                },
                body: JSON.stringify({
                    nome:                   nome,
                    numero_identificacao:   numero_identificacao,
                    data_nascimento:        data_nascimento,
                    email:                  email,
                    password:               password,
                    telefone:               telefone,
                    pais:                   pais,
                    localidade:             localidade,
                    enabled:                true               
                }),
            }
        );

        if (response.status === 200){
            toast.success("criado com sucesso")

            if (typeof window !== "undefined"){
                window.location.href = "/login"
            }else{
                toast.error("não foi possível criar o utilizador")
            }
        }
    };


    return(
            <div className="w-full h-full flex justify-center item-center">
                <Card className="h-full flex flex-col justify-center w-[60%]">
                    <CardHeader>
                        <span className="text-5xl font-bold">Registro</span>
                    </CardHeader>

                    <CardContent> 
                        <div className="flex flex-col gap-5">

                            <div className="flex flex-col gap-2">
                                <Label>Nome</Label>
                                <Input type="text" 
                                placeholder="Nome completo" 
                                className="py-2 text-lg h-10"
                                value={nome}
                                onChange={changeNome}/>
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label>Número de Identificação</Label>
                                <Input type="text" 
                                placeholder="Numero de idenficação" 
                                className="py-2 text-lg h-10"
                                value={numero_identificacao}
                                onChange={changeNumero_identificacao}/>
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label>Data de nascimento </Label>
                                <Input type="text" 
                                placeholder="dd/mm/yyyy" 
                                className="py-2 text-lg h-10"
                                value={data_nascimento}
                                onChange={changeData_nascimento}/>
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label>Email</Label>
                                <Input type="text" 
                                placeholder="Email@email.com" 
                                className="py-2 text-lg h-10"
                                value={email}
                                onChange={changeEmail}/>
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label>Password</Label>
                                <Input type="password" 
                                placeholder="Your password" 
                                className="py-2 text-lg h-10"
                                value={password}
                                onChange={changePassword}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label>Role</Label>
                                <Input type="text" 
                                placeholder="Role" 
                                className="py-2 text-lg h-10"
                                value={role}
                                onChange={changeRole}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label>Telefone</Label>
                                <Input type="text" 
                                placeholder="Telefone" 
                                className="py-2 text-lg h-10"
                                value={telefone}
                                onChange={changeTelefone}/>
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label>País</Label>
                                <Input type="text" 
                                placeholder="Cabo Verde" 
                                className="py-2 text-lg h-10"
                                value={pais}
                                onChange={changePais}/>
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label>Localidade</Label>
                                <Input type="text" 
                                placeholder="Praia" 
                                className="py-2 text-lg h-10"
                                value={localidade}
                                onChange={changeLocalidade}/>
                            </div>
                            
                            <Button onClick={handleLogin} className="bg-[#13A4EC] rounded-md text-white font-bold py-3 drop-shadow-lg drop-shadow-gray-200">
                                Login
                            </Button>
                        </div>

                        <div>
                            <span>Already have an account? </span>
                            <Link href="/login" className="text-[#13a4ec] font-semibold">
                                login
                            </Link>
                        </div>
                    </CardContent>
                </Card>
        </div>

    )
}