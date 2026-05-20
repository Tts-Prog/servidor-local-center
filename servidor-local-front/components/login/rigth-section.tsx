'use client'


import { Label } from "../ui/label";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import {setCookie} from "nookies"




export const RightSection = () => {

    //useState
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setEmail(e.target.value)
        } else {
            setEmail("")
        }
    };

    const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setPassword(e.target.value)
        } else {
            setPassword("")
        }
    };

    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // fetch API
        const response = await fetch("http://localhost:8080/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
        });

        if (response.status === 200) {
            toast.success("dados recebidos");

            const responseData = await response.json();

        // salvar dados na cookie
            setCookie(null, "token",responseData.data.token,{
                maxAge: 60 * 60 * 24 * 7,
                path: "/",
            })

               setCookie(null, "user",JSON.stringify(responseData.data.user),{
                maxAge: 60 * 60 * 24 * 7,
                path: "/",
            })

            console.log("dados recebidos: ", responseData)

            if (typeof window !== "undefined") {
                window.location.href = "/home";
            }

        } else {
            toast.error("Email ou senha incorretos!")
        }
    };


    console.log({ email: email, password: password })



    return (
        <div className="w-1/2 flex flex-col justify-center">
            <Card className="h-full flex flex-col justify-center px-14 gap-16">
                <CardHeader className="text-5xl font-bold">
                    <span>Login</span>
                </CardHeader>

                <CardContent>
                    <div className="flex flex-col gap-5">

                        <div className="flex flex-col gap-2">
                            <Label>Email</Label>
                            <Input type="text"
                                value={email}
                                onChange={changeEmail}
                                placeholder="example@example.com"
                                className="py-2 h-10 text-lg"></Input>
                        </div>


                        <div className="flex flex-col gap-2">
                            <Label>Password</Label>
                            <Input type="password"
                                value={password}
                                onChange={changePassword}
                                placeholder="Your password"
                                className="py-2 h-10 text-lg"></Input>
                        </div>
                        <Button
                            onClick={handleLogin}
                            className="bg-[#13A4EC] rounded-md text-white font-bold py-3 drop-shadow-lg drop-shadow-gray-200">
                            Login
                        </Button>
                    </div>

                    <div>
                        <span>Don't have an account yet? </span>
                        <Link href="/registro" className="text-[#13A4EC] font-semibold">Create Account</Link>

                    </div>

                </CardContent>

            </Card>

        </div>
    )
};