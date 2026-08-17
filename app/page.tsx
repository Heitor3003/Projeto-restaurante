"use client"

import Image from 'next/image'


export default function Home() {

  async function cadastrar(e:any){
    e.preventDefault()
    alert("Produto cadastrado com sucesso!")
    
  }

  return (
      

    <main className="min-h-screen bg-amber-100 flex items-center justify-center p-6">
    
      <div className="border-2 border-black w-full max-w-lg bg-amber-200 rounded-x1 shadow-md p-7 grid grid-cols gap-4 rounded-2xl">
      
      
      <Image 
      src="/pngwing.com.png"
      alt=""
      width={250}
      height={250}
      className='mx-auto'
      />


        <h1 className="text-2xl font-bold mb-6">Restaurante - Alimentos</h1>

        <input type="text" placeholder="Digite a descrição do prato... " className="border border-black rounded p-1.5"/>

        <input type="number" placeholder="Digite o preço..." className="border border-black rounded p-1.5"/>

        <input type="text" placeholder="Digite a categoria..." className="border border-black rounded p-1.5"/>

        <input type="text" placeholder="O lanche está disponível?" className="border border-black rounded p-1.5"/>

        <button onClick={cadastrar} className="bg-orange-300 p-2 hover:cursor-pointer hover:bg-yellow-600 rounded border">Cadastrar prato</button>
      </div>
    </main>
  );
}
