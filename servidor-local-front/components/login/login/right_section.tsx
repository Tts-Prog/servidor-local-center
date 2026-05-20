"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import React, { useState } from "react"
import { toast } from "sonner"
import { setCookie } from "nookies"

export const RightSection = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>{
        if(e.target.value){
            setEmail(e.target.value)
        }
        else{
            setEmail(" ")
        }
    };

    const changePassword = (e: React.ChangeEvent<HTMLInputElement>) =>{
        if(e.target.value){
            setPassword(e.target.value)
        }
        else{
            setPassword(" ")
        }
    };


    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const response = await fetch(
            'http://localhost:8080/users/login',
            {
            method: "POST",
            headers: {
                "content-type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
            }
        )

        if (response.status === 200){
            toast.success("criado com sucesso")

            const responseData = await response.json();

            setCookie(null, "token", responseData.data.user,{
                maxAge: 60 * 24 * 7,
                path: "/"
            })

            setCookie(null, "user", JSON.stringify(responseData.data),{
                maxAge: 60 * 24 * 7,
                path: "/"
            })


            if (typeof window !== "undefined"){
                window.location.href = "/home"
            }else{
                toast.error("não foi possível criar o utilizador")
            }
        }
    }


    return(
            <div className="w-1/2 flex flex-col justify-center">
                <Card className="h-full flex flex-col justify-center px-14 gap-16">
                    <CardHeader>
                        <span className="text-5xl font-bold" >Login</span>
                    </CardHeader>

                    <CardContent> 
                        <div className="flex flex-col gap-5">
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
                            
                            <Button onClick={handleLogin} className="bg-[#13A4EC] rounded-md text-white font-bold py-3 drop-shadow-lg drop-shadow-gray-200">
                                Login
                            </Button>
                        </div>

                        <div>
                            <span>Don't have an account yet? </span>
                            <Link href="/registro" className="text-[#13a4ec] font-semibold">
                                Create Account
                            </Link>
                        </div>
                    </CardContent>
                </Card>
        </div>

    )
}