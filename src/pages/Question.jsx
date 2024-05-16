import { useState } from "react"
import { perguntas } from "../perguntas"
import { useEffect } from "react";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";


export const Question = () => {
    const [question, setQuestion] = useState({});
    const [dialog, setDialog] = useState(false);

    const navigate = useNavigate()

    useEffect(() => {
        const index = Math.floor(Math.random() * perguntas.length);
        setQuestion(perguntas[index])
    }, []);

    const handleResponse = (userResponse) => {
        if (userResponse === question.resposta) {
            Swal.fire({
                title: 'Acertou!',
                text: 'Jogue o dado!',
                icon: 'success',
                confirmButtonText: 'Confirmar'
            }).then((resullt) => {
                navigate('/')
            })
        } else {
            Swal.fire({
                title: 'Errou!',
                text: 'Tente novamente na proxima vez',
                icon: 'error',
                confirmButtonText: 'Confirmar',
            }).then((resullt) => {
                navigate('/')
            })
        }
    }

    return (
        <div className="flex flex-col min-h-screen bg-green-500 md:max-w-screen-md m-auto">
            <div className="p-5 my-5">
                <h1 className="text-2xl text-white font-sans font-bold text-center">Responda a pergunta a seguir</h1>

                {question.length === 0 && (
                    <div className="animate-spin h-5 w-5 mr-3"></div>
                )}
                {question && (
                    <div className="my-10 bg-slate-50 rounded-md shadow-md py-10 px-5">
                        <p className="text-zinc-700 text-center mb-5">Pergunta</p>

                        <h2 className="text-2xl font-bold text-center mb-10">{question.titulo}</h2>

                        <div className="flex flex-col gap-2">
                            {question.alternativa && question.alternativa.map((response, index) => (
                                <button
                                    className="w-full p-4 text-left shadow-md bg-slate-300 rounded-md font-normal"
                                    onClick={() => handleResponse(response)}
                                    key={index}
                                >
                                    {response}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>



        </div>
    )
}