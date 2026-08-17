//Components Cardápio

import Image from 'next/image'

export default function CardapioPage(){
    const produtos = [
        {
            id:1,
            nome:"Hambúrguer Artesanal",
            preco: 29.00,
            imagem:"/hamburguer.png"
        },

        {
            id:2,
            nome:"Pizza calabresa",
            preco:40.00,
            imagem:"/pizzaA.png"
        },

        {
            id:3,
            nome:"Refrigerante",
            preco:13.00,
            imagem:"/coca.png"
        }
    ]

    return(

        <main className="p-8 bg-amber-100 min-h-screen">

            <h1 className="mb-6 text-3xl font-bold">Cardápio</h1>

            <div className="grid grid-cols-3 gap-6"> 
                
                {
                    produtos.map((produto)=>(
                        <div key={produto.id}>
                            <Image 
                            src={produto.imagem}
                            alt='produto.nome'
                            width={250}
                            height={400}
                            className='h-30 rounded object-contain'
                            />

                            <h2>
                                
                                {produto.nome}

                            </h2>

                            <p className='mt-2 text-lg text-green-600'>
                                R$ {produto.preco.toFixed(2)}
                            </p>

                            <button className='mt-4 w-full rounded bg-orange-500 py-2 text-white cursor-pointer hover:bg-amber-700'>Fazer pedido</button>
                        </div>
                    ))
                }
                 
            </div>
        </main>
    )
}
