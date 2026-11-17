export default function Hero() {
    return(
        <div className="flex w-full bg-blue-900 text-white py-20 rounded-2xl">

                <div>
                    <img className="h-100" src="/hero.svg"/>
                </div>
            <div className="flex flex-col gap-10 pt-11 ">
                <p className="flex border border-blue-800 rounded-2xl text-orange-500 font-black w-fit bg-blue-950 ">Patinhas felizes, tutores tranquilos.</p>
                <div>
                    <h1 className=" font-black text-5xl">Cuidado completo em um só </h1>
                    <h1 className=" font-black text-5xl">um só lugar.</h1>
                </div>
                <div className="text-[16px] text-gray-500">
                    <p>Clientes, pets e serviços organizados para o </p>
                    <p>atendimento do dia a dia</p>
                    </div>
                </div>
        </div>
    )
}
