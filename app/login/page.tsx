"use client"


import { useRouter } from "next/navigation"
import { useState } from "react"
import Swal from "sweetalert2"


export default function Login(){


    const router = useRouter()

    const [usuario,setUsuario] = useState("")
    const [senha, setSenha] = useState("")


    function entrar(){
        if(usuario === "admin" && senha === "123456"){
            localStorage.setItem("admin_logado","true")

            router.push("/admin")
            return
        }
        
        Swal.fire({
            title:"Login invalido",
            text:"Usuario ou senha incorretos",
            icon:"error",
            confirmButtonText:"Tentar novamente"
        })
    }

    return(
        <main className="flex min-h-screen items-center justify-center bg-amber-100">
            <div className="w-full max-w-md rounded-2xl bg-amber-200 p-8 shadow-lg">
                <h1 className="mb-8 text-center font-bold text-black ">Área Administrativa</h1>
            
            
            <p className="mb-8 text-center text-black ">Faça login para acessar o painel</p>
            
            <div>
                <label className="text-black">Usuario</label>
                <input type="text"
                value={usuario}
                onChange={(e)=>setUsuario(e.target.value)}
                placeholder="Digite seu usuario"
                className="w-full rounded-lg border p-3 
                outline-none focus:ring-2 focus:ring-amber-500 text-gray-500"
                />
            </div>

            <div>
                <label className="text-black">Senha</label>
                <input type="password"
                value={senha}
                onChange={(e)=>setSenha(e.target.value)}
                placeholder="Digite sua senha"
                className="w-full rounded-lg border p-3 
                outline-none focus:ring-2 focus:ring-amber-500 text-gray-500"
                />
            </div>

            <button
            onClick={entrar}
            className="w-full rounded-lg bg-orange-600 
            py-3 mt-6 font-semibold text-white hover:bg-orange-800 cursor-pointer"
            >
                Entrar
            </button>

            </div>
        </main>
    )
}