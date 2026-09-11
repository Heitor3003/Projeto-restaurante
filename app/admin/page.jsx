
"use client"

import Navbar from "@/components/Navbar"
import { useState } from "react"

export default function AdminPage() {

    const [descricao, setDescricao] = useState("")
    const [categoria, setCategoria] = useState("")
    const [preco, setPreco] = useState("")
    const [imagem, setImagem] = useState("")

    async function cadastrarLanche() {

        e.preventDefault()

        try {

            const response = await fetch("http://localhost:3001/produtos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    descricao,
                    categoria,
                    preco,
                    imagem
                })
            })

            if (response.ok) {
                alert("Produto cadastrado com sucesso!")

                setDescricao("")
                setCategoria("")
                setPreco("")
                setImagem("")
            }

        } catch (error) {

            console.log(error)
            alert("Erro ao cadastrar")

        }
    }

    return (

        <main className="min-h-screen bg-amber-100">

            <Navbar />

          
            <div className="p-8">

                <div className="mx-auto max-w-xl rounded-lg bg-amber-200 p-8 shadow">

                    <h1 className="mb-6 text-3xl font-bold text-black">
                        Cadastrar Lanche
                    </h1>

                    <form
                        onSubmit={cadastrarLanche}
                        className="space-y-5"
                    >

                        <div>
                            <label className="mb-1 block text-black">
                                Descrição
                            </label>

                            <input
                                type="text"
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                                placeholder="Ex: X-Bacon de salada com carne"
                                className="w-full rounded border p-3 text-gray-900"
                            />
                        </div>

                        <div>
                            <label className="mb-1 block text-black">
                                Categoria
                            </label>

                            <input
                                type="text"
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)}
                                placeholder="Categoria..."
                                className="w-full rounded border p-3 text-gray-900"
                            />
                        </div>

                        <div>
                            <label className="mb-1 block text-black">
                                Preço
                            </label>

                            <input
                                type="number"
                                step="0.01"
                                value={preco}
                                onChange={(e) => setPreco(e.target.value)}
                                placeholder="Ex: 10.00"
                                className="w-full rounded border p-3 text-gray-900"
                            />
                        </div>

                        <div>
                            <label className="mb-1 block text-black">
                                Imagem
                            </label>

                            <input
                                type="text"
                                value={imagem}
                                onChange={(e) => setImagem(e.target.value)}
                                placeholder="Insira o link da imagem"
                                className="w-full rounded border p-3 text-gray-900"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full cursor-pointer rounded bg-orange-600 py-3 font-semibold text-white hover:bg-orange-800"
                        >
                            Cadastrar Lanche
                        </button>

                    </form>

                </div>

            </div>

        </main>
    )
}

