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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const ChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setEmail(e.target.value);
    } else {
      setEmail("");
    }
  }

  const ChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setPassword(e.target.value);
    } else {
      setPassword("");
    }
  }

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    if (response.status === 200) {
      toast.success("Login realizado com sucesso!");

      const responseData = await response.json();
      console.log("Dados recebidos:", responseData);
      localStorage.setItem("token", responseData.data.token);

      //salvar dados do User no localStorage
      setCookie(null, "token", responseData.data.token, {
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: "/"
      });
      setCookie(null, "user", JSON.stringify(responseData.data.user), {
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: "/"
      });

      if (typeof window !== "undefined") {
        window.location.href = "/home";
      }
    } else {
      toast.error("Erro ao realizar login!");
    }
  };


  return (
    <div className="bg-blue-300 w-1/2 flex flex-col justify-center">
      <Card className="h-full flex flex-col justify-center px-14 gap-16">
        <CardHeader>
          <span className="text-5xl font-bold ">Login</span>
        </CardHeader>

        <CardContent>
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
              <Label className="">Password</Label>
              <Input type="password"
                placeholder="Your password ..."
                className="h-15 py-2 text-lg h-10"
                value={password}
                onChange={ChangePassword}
              />
            </div>
            <Button className="h-15 bg-[#13A4EC] roundede-md text-white w-full py-3 drop-shadow-lg drop-shadow-gray-200" onClick={handleLogin}>
              Login
            </Button>
          </div>
          <div>
            <span>Don´t have an account yet?</span>
            <Link href="/registro" className="text-[#13A4EC] font-semibold">
              Create Account
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );

};
