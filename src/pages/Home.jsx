import { Link } from "react-router-dom"

export const HomePage = () => {
    return (
        <div className="bg-slate-900 min-h-screen flex flex-col justify-center items-center font-['Poppins'] p-6 md:p-16">
            <div className="flex flex-col justify-around h-full gap-5 w-full max-w-lg">
                <div className="px-10">
                    <img
                        src="https://img1.picmix.com/output/stamp/normal/1/6/5/0/1930561_979af.gif"
                        alt="LOGO CIRCUIT QUEST"
                        className="block m-auto w-full max-w-xs"
                    />
                    <h1 className="text-white font-bold text-center my-5 text-2xl">
                        Circuit<span className="text-violet-600">Quest</span>
                    </h1>
                </div>

                <div>
                    <h2 className="text-center text-white font-bold text-xl md:text-2xl">Vamos jogar!</h2>
                    <p className="text-center text-slate-100 font-normal my-2">Para iniciar as perguntas, aperte para jogar</p>
                </div>

                <div className="flex flex-col gap-5">
                    <Link to='/question'>
                        <button className="bg-violet-600 p-4 rounded-md text-white w-full hover:bg-violet-700 transition duration-300">
                            Jogar
                        </button>
                    </Link>

                    <Link to='/consequence'>
                        <button className="bg-red-600 p-4 rounded-md text-white w-full hover:bg-red-700 transition duration-300">
                            Consequência
                        </button>
                    </Link>

                </div>
            </div>
        </div>

    )
}