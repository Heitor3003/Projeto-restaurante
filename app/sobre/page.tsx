import Image from 'next/image'

export default function PageSobre(){



    return(
        <main className="bg-amber-100 min-h-screen flex">

            <Image 
            src="/pizzaLateral.jpg"
            alt='pizzaLateral'
            width={400}
            height={100}
            className='w-full h-full object-left'
            />
            <div className="mx-auto max-w-5x1 bg-amber-200 max-w-lg w-full rounded grid place-items-center gap-1 p-6">
                 <Image 
                        src="/pngwing.com.png"
                        alt='Logotipo'
                        width={400}
                        height={400}
                        className='rounded-lg object-cover'
                    />

                <div className="flex items-center justify-center">
                   
                    <h1 className="text-3xl text-orange-500 font-bold mb-8">Sobre nós</h1>

                </div>
                
                <div className="">
                    <h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </h2>
                </div>
            </div>

            <Image 
            src="/hamburgerLateral.jpg"
            alt='hamburgerLateral'
            width={400}
            height={100}
            className='min-h-screen w-full'
            />

            

        </main>
    )
}