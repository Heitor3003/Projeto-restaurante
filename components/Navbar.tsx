import Link from "next/link";


export default function Navbar(){

    return(

        <header className="w-full bg-orange-300 border-b shadow-sm">
            <nav className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
                <Link href="/" 
                className="flex items-center gap-2 text-2xl font-bold text-white hover:text-3xl transition-transform">
                    Restaurante
                </Link>

                <div className="flex items-center gap-8">

                    <Link href="/" className="text-white
                    hover:text-orange-600 transition">
                        Inicio
                    </Link>

                    <Link href="/cardapio" 
                    className="text-white
                    hover:text-orange-600 transition">
                        Cardápio
                    </Link>

                    <Link href="/sobre" className="text-white
                    hover:text-orange-600 transition">
                        Sobre nós
                    </Link>

                    <Link href="/pedidos"
                    className="text-white
                    hover:text-orange-600 transition"
                    >
                        Fazer pedido
                    </Link>

                </div>

            </nav>
        </header>

    )

}