/* Component: Navbar */

import Link from "next/link"


export default function Navbar(){



    return(
        <header className="w-full bg-orange-200 border-b shadow-sm">
            <nav className="max-w-7x1 mx-auto px-8 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-2xl font-semibold text-orange-400 hover:text-amber-800 hover:text-3xl transition-all duration-400 ease-in-out">
                    Restaurante
                </Link>

                <div className="flex items-center gap-8">

                    <Link href="/" className="text-gray-700 hover:bg-amber-400 transition bg-amber-100 p-2 rounded">
                        Inicio
                    </Link>

                    <Link href="/cardapio" className="text-gray-700 hover:bg-amber-400 transition bg-amber-100 p-2 rounded">
                        Cardápio
                    </Link>

                    <Link href="/sobre" className="text-gray-700 hover:bg-amber-400 transition bg-amber-100 p-2 rounded">
                        Sobre nós
                    </Link>

                    <Link href="/pedidos" className="text-gray-700 hover:bg-amber-400 transition bg-amber-100 p-2 rounded">
                    Fazer pedido
                    </Link>
                </div>

            </nav>
        </header>
    )
}