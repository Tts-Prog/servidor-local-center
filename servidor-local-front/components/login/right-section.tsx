"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { useState } from "react"
import { toast } from "sonner"
import { setCookie } from "nookies"

interface ResponseType {
    status: string;
    message: string;
    data: {
        token: string;
        user: {
            id: string;
            nome: string;
            email: string;
        };
    };
}


export const RightSection = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setEmail(e.target.value);
        } else {
            setEmail("")
        }
    }

    const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setPassword(e.target.value);
        } else {
            setPassword("")
        }
    }
    const handLerLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        // fetch api
        const response: any = await fetch("http://localhost:8080/users/login",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
        if (response.status === 200) {
            toast.success("Usuario logado com sucesso")
            const ResponseData: ResponseType = await response.json()

            //salvar dados no cookies
            setCookie(null, "token", ResponseData.data.token, {
                maxAge: 60 * 60 * 24 * 7,
                path: "/"
            });
            setCookie(null, "user", JSON.stringify(ResponseData.data.user), {
                maxAge: 60 * 60 * 24 * 7,
                path: "/"
            });

            if (typeof window !== "undefined") {
                window.location.href = "/home"
            }
        } else {
            toast.error("Email ou senha incorretos")
        }
    }


    return (
        <div className="w-1/2 flex flex-col justify-center">
            <Card className="h-full flex flex-col justify-center px-14 gap-16">
                <CardHeader>
                    <span className="text-5xl font-bold">Login</span>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-5">
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
                            onClick={handLerLogin}
                            className="bg-[#13a4ec] text-white rounded-md font-bold py-3 drop-shadow-lg drop-shadow-gray-200">Login</button>
                    </div>
                    <div>
                        <span>Don't have an account yet?</span>
                        <Link href="/registro" className="text-[#13a4ec] font-semibold">Create Account</Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
