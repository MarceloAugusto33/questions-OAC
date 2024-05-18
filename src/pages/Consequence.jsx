import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const failSound = new Audio('../sounds/fail.mp3');

export const ConsequencePage = () => {
    const [consequence, setConsequence] = useState("");
    const [timer, setTimer] = useState(10);
    const [isTimeUp, setIsTimeUp] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        // Função para buscar uma consequência aleatória
        const fetchRandomConsequence = () => {
            const consequences = [
                "Voltar para o início do tabuleiro.",
                "Trocar de lugar com o jogador à frente.",
                "Ficar sem jogar na próxima rodada.",
                "Volte 1 casa para trás, caso tenha jogador, você voltará desde o inicio",
                "Volte 2 casas para trás, caso tenha jogador, você voltará desde o inicio",
                "Volte 3 casas para trás, caso tenha jogador, você voltará desde o inicio",
                "Volte 4 casas para trás, caso tenha jogador, você voltará desde o inicio",
                "Volte 5 casas para trás, caso tenha jogador, você voltará desde o inicio",
            ];
            const randomIndex = Math.floor(Math.random() * consequences.length);
            const randomConsequence = consequences[randomIndex];
            setConsequence(randomConsequence);

            failSound.play()
        };

        // Chamada da função ao renderizar a página
        fetchRandomConsequence();

    }, []);

    useEffect(() => {
        if (!isTimeUp && timer > 0) {
            const countdown = setTimeout(() => {
                setTimer(timer - 1);
            }, 1000);

            return () => clearTimeout(countdown);
        } else if (timer === 0) {
            setIsTimeUp(true);
            navigate('/');
        }
    }, [timer, isTimeUp]);

    const progressBarStyle = {
        width: `${(timer / 10) * 100}%`,
    };

    return (
        <div className="bg-slate-900 min-h-screen flex flex-col justify-center items-center font-['Poppins']">
            <div className="p-5 my-5 md:max-w-screen-md w-full">
                <h1 className="text-2xl text-white font-bold text-center">Consequência</h1>

                {!consequence ? (
                    <div className="animate-spin h-5 w-5 mr-3 m-auto mt-10"></div>
                ) : (
                    <div className="my-10 bg-slate-800 rounded-md shadow-md py-10 px-5">
                        <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden mb-5">
                            <div className={`absolute top-0 left-0 h-full transition-width duration-1000 ease-linear ${timer <= 10 ? "bg-red-600" : "bg-violet-600"}`} style={progressBarStyle}></div>
                        </div>

                        <h2 className="text-2xl font-bold text-center text-white my-10">{consequence}</h2>
                    </div>
                )}
            </div>
        </div>
    );
};
