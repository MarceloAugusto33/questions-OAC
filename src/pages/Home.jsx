import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <div className="bg-green-500 h-screen flex items-center justify-center font-sans font-bold md:max-w-screen-md m-auto p-5">

            <div className='flex flex-col animate-[showDown_1s_ease-in-out] shadow-md p-10 rounded-md bg-white'>
                <h2 className="text-2xl text-black text-center my-5">Seja bem vindo</h2>
                <img src="https://img1.picmix.com/output/stamp/normal/1/6/5/0/1930561_979af.gif" alt="LOGO QUESTIONS" className='max-w-64 m-auto my-5' />

                <h1 className="text-4xl text-black text-center my-5 animate-bounce">
                    Circuit<span className='text-green-500'>Quest</span>
                </h1>

                <span className='mb-5 text-black text-center'>
                    Organização e Arquiteturas de computadores
                </span>

                <Link className="w-full" to='/question'>
                    <button className='w-full bg-green-700 text-white rounded-md h-16 hover:brightness-50 transition-all duration-300 ease-in-out hover:scale-105 shadow-md'>
                        Jogar
                    </button>
                </Link>

            </div>

        </div>
    )
}