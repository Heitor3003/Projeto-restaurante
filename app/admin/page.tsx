//Página ADM, configurar acesso por usuário e senha

"use client"

import Image from "next/image"
import { useState } from "react"


export default function AdminPage(){

    const[nome, setNome] = useState("")
    const[descricao,setDescricao] = useState("")
    const[preco,setPreco] = useState("")
    const[imagem,setImagem] = useState("")


    function selecionarImagem(e: React.ChangeEvent<HTMLInputElement>){
        const arquivo = e.target.files?.[0]

        if(arquivo){
            setImagem(URL.createObjectURL(arquivo))
        }
    }


    async function cadastrarLanche() {
        alert("Cadastro de lanche")
    }

    return(
        <main className="min-h-screen bg-amber-100 P-8">
            <div className="mx-auto max-w-xl rounded-lg bg-amber-200 p-8 shadow grid place-items-center mt-5">
                <h1 className="mb-6 text-3xl font-bold">Cadastrar Lanche</h1>
                <form onSubmit={cadastrarLanche} className="space-y-5">
                    <div>
                        <label>Nome</label>
                        <input type="text"
                        value={nome}
                        onChange={(e)=> setNome(e.target.value)}
                        placeholder="Ex: X-Bacon"
                        className="w-full rounded border p-3 hover:bg-amber-300 transition-colors duration-200 ease-in-out"
                        />
                    </div>

                    <div>
                        <label>Descricao</label>
                        <input type="text"
                        value={descricao}
                        onChange={(e)=> setDescricao(e.target.value)}
                        placeholder="Ex: X-Bacon de salada com carne"
                        className="w-full rounded border p-3 hover:bg-amber-300 transition-colors duration-200 ease-in-out"
                        />
                    </div>

                    <div>
                        <label>Preço</label>
                        <input type="number"
                        value={preco}
                        onChange={(e)=> setPreco(e.target.value)}
                        placeholder="Ex: 10.00"
                        className="w-full rounded border p-3 hover:bg-amber-300 transition-colors duration-200 ease-in-out"
                        />
                    </div>

                    <div>
                        <label>Imagem</label>
                        <input 
                        type="file"
                        accept="image/*"
                        onChange={selecionarImagem}
                        placeholder="Ex: 10.00"
                        className="w-full rounded border p-3 hover:cursor-pointer hover:bg-amber-300"
                        />
                    </div>

                    {/*previa da imagem */}

                    {imagem && (
                        <div>
                            <p className="mb-2 font-medium">Previa</p>

                            <Image 
                            src={imagem}
                            alt="Previa do lanche"
                            width={400}
                            height={250}
                            className="h-48 w-full rounded object-contain"
                            />
                        </div>
                    )}

                    <button
                    type="submit"
                    className="w-full rounded bg-orange-300 py-3 font-semibold hover:bg-yellow-600 hover:cursor-pointer">
                        Cadastrar Lanche
                    </button>
                </form>
            
            
            </div>
        </main>
    )
}