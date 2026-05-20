"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "../ui/card"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import Link from "next/link"
import { toast } from "sonner"



export const RightSection = () => {
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [dataNascimento, setDataNascimento] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [pais, setPais] = useState("")
    const [localodade, setLocalodade] = useState("")
    const [password, setPassword] = useState("")
    
    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value){
            setName(e.target.value);
        } else {
            setName("")
        }
    }

    const changeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value){
            setNumber(e.target.value);
        } else {
            setNumber("")
        }
    }

    const changeDataNascimento = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value){
            setDataNascimento(e.target.value);
        } else {
            setDataNascimento("")
        }
    }

    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value){
            setEmail(e.target.value);
        } else {
            setEmail("")
        }
    }

    const changeTelefone = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value){
            setTelefone(e.target.value);
        } else {
            setTelefone("")
        }
    }

    const changePais = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value){
            setPais(e.target.value);
        } else {
            setPais("")
        }
    }

    const changeLocalodade = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value){
            setLocalodade(e.target.value);
        } else {
            setLocalodade("")
        }
    }

    const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value){
            setPassword(e.target.value);
        } else {
            setPassword("")
        }
    }
    const handleRegistro= async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        // fetch api
        const response = await fetch("http://localhost:8080/users/create", 
        {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                id: null,
                nome: name,
                numero: number,
                data_nascimento: dataNascimento,
                email: email,
                telefone: telefone,
                pais: pais,
                localidade: localodade,
                password: password,
                role: "cliente",
                enabled: true
            })
        })
        if (response.status === 200) {
            toast.success("Usuario cadastrado com sucesso")
            if (typeof window !== "undefined") {
                window.location.href = "/login"
            }
        } else {
            toast.error("Não foi possivel cadastrar o usuario, tente novamente")
        }
    }
    return(
        <div className="w-1/2 flex flex-col justify-center">
            <Card className="h-full flex flex-col justify-center px-14 gap-16">
                <CardHeader>
                    <span className="text-5xl font-bold">Registro</span>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <Label>Nome Completo</Label>
                            <Input 
                                type="text" 
                                placeholder="Your full name" 
                                className="py-2 text-lg h-10" 
                                value={name} 
                                onChange={changeName}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Numero do Documento</Label>
                            <Input 
                                type="text" 
                                placeholder="Your document number" 
                                className="py-2 text-lg h-10" 
                                value={number} 
                                onChange={changeNumber}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Data de Nascimento</Label>
                            <Input 
                                type="text" 
                                placeholder="dd-mm-yyyy" 
                                className="py-2 text-lg h-10" 
                                value={dataNascimento} 
                                onChange={changeDataNascimento}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Email</Label>
                            <Input 
                                type="text" 
                                placeholder="exanple@gmail.com" 
                                className="py-2 text-lg h-10" 
                                value={email} 
                                onChange={changeEmail}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Telefone</Label>
                            <Input 
                                type="text" 
                                placeholder="Your Phone Number" 
                                className="py-2 text-lg h-10" 
                                value={telefone} 
                                onChange={changeTelefone}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>País</Label>
                            <Input 
                                type="text" 
                                placeholder="Your Country" 
                                className="py-2 text-lg h-10" 
                                value={pais} 
                                onChange={changePais}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Localidade</Label>
                            <Input 
                                type="text" 
                                placeholder="Your location" 
                                className="py-2 text-lg h-10" 
                                value={localodade} 
                                onChange={changeLocalodade}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Password</Label>
                            <Input 
                                type="password" 
                                placeholder="Your Password" 
                                className="py-2 text-lg h-10" 
                                value={password} 
                                onChange={changePassword}
                            />
                        </div>
                        <button 
                            onClick={handleRegistro}
                            className="bg-[#13a4ec] text-white rounded-md font-bold py-3 drop-shadow-lg drop-shadow-gray-200">Registrar</button>
                    </div>
                    <div>
                        <span>Already have an account?</span>
                        <Link href="/login" className="text-[#13a4ec] font-semibold">Login</Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}