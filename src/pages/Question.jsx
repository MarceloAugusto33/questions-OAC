import Swal from 'sweetalert2';
import confetti from "canvas-confetti";
import { perguntas } from "../utils/perguntas";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

// Import Sounds
const correctSound = new Audio("../sounds/correct.mp3");
const incorrectSound = new Audio("../sounds/incorrect.mp3");
const stopwatch = new Audio('../sounds/cronometro12.mp3');


const letters = ["A)", "B)", "C)", "D)"];

export const QuestionPage = () => {
    const [timer, setTimer] = useState(20);
    const [isTimeUp, setIsTimeUp] = useState(false);
    const [question, setQuestion] = useState({});
    const navigate = useNavigate();

    // Carregar uma pergunta aleatória ao montar o componente
    useEffect(() => {
        const loadQuestion = async () => {
            const index = Math.floor(Math.random() * perguntas.length);
            setQuestion(perguntas[index]);
            stopwatch?.pause();
        };

        loadQuestion();
    }, []);

    // Lógica do temporizador
    useEffect(() => {
        if (!isTimeUp && timer > 0) {
            const countdown = setTimeout(() => {
                setTimer(timer - 1);
            }, 1000);

            if (timer === 10) {
                stopwatch?.play();
            }

            return () => clearTimeout(countdown);
        } else if (timer === 0) {
            setIsTimeUp(true);
            setTimeout(() => {
                Swal.fire({
                    title: 'Perdeu a vez',
                    text: 'Tente mais rápido na próxima vez',
                    icon: 'warning',
                    confirmButtonText: 'Confirmar',
                }).then(() => {
                    navigate('/');
                });
            }, 2000);
        }
    }, [timer, isTimeUp]);


    const progressBarStyle = {
        width: `${(timer / 20) * 100}%`,
    };

    const handleResponse = (userResponse) => {
        stopwatch.pause()
        setIsTimeUp(true)
        if (userResponse === question.resposta) {
            correctSound.play();
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
            });

            Swal.fire({
                title: 'Acertou!',
                icon: 'success',
                confirmButtonText: 'Girar dado',
            }).then(() => {
                navigate('/dice');
            });
        } else {
            incorrectSound.play();
            Swal.fire({
                title: 'Errou!',
                text: 'Tente novamente na próxima vez',
                icon: 'error',
                confirmButtonText: 'Confirmar',
            }).then(() => {
                navigate('/');
            });
        }
    };

    return (
        <div className="bg-slate-900 min-h-screen flex flex-col justify-center items-center font-['Poppins']">
            <div className="p-5 my-5 md:max-w-screen-md w-full">
                <h1 className="text-2xl text-white font-bold text-center">Pergunta</h1>

                {!question.titulo ? (
                    <div className="animate-spin h-5 w-5 mr-3 m-auto mt-10"></div>
                ) : (
                    <div className="my-10 bg-slate-800 rounded-md shadow-md py-10 px-5">
                        <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden mb-5">
                            <div className={`absolute top-0 left-0 h-full transition-width duration-1000 ease-linear ${timer <= 10 ? "bg-red-600" : "bg-violet-600"}`} style={progressBarStyle}></div>
                        </div>

                        <h2 className="text-2xl font-bold text-center text-white mb-10">{question.titulo}</h2>

                        <div className="flex flex-col gap-5">
                            {question.alternativa && question.alternativa.map((response, index) => (
                                <button
                                    key={index}
                                    className="w-full p-4 text-left shadow-md bg-slate-700 rounded-md text-white font-normal hover:scale-105 hover:bg-green-600 duration-200"
                                    onClick={() => handleResponse(response)}
                                    disabled={isTimeUp}
                                >
                                    {letters[index]} {response}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
