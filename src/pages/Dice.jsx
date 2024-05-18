import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/index.css'

export const DicePage = () => {
    const [title, setTitle] = useState("Gire o dado!");
    const [timerLeft, setTimerLeft] = useState(10);
    const [showButton, setShowButton] = useState(true);
    const [diceNumber, setDiceNumber] = useState(null);
    const [isRolling, setIsRolling] = useState(false);

    const navigate = useNavigate();

    const diceSound = new Audio('../sounds/dice.mp3');

    const rollDice = (random) => {
        setIsRolling(true);
        setTimeout(() => {
            diceSound.play();
            setDiceNumber(random);
            setIsRolling(false);
        }, 1500);
    };


    const handleDice = () => {
        const index = Math.floor(Math.random() * 6) + 1;
        const diceNSound = new Audio(`../sounds/diceN${index}.mp3`);


        rollDice(index)
        setTitle("Girando...");
        setShowButton(false);
        const timer = setInterval(() => {
            setTimerLeft(prev => prev - 1)
        }, 1000);

        setTimeout(() => {
            diceNSound.play();

            setTitle(`Caiu o numero ${index}, ande ${index} ${index > 1 ? "casas" : "casa"}`)

            setTimeout(() => {
                clearInterval(timer)
                navigate('/')
            }, 9000)
        }, 2000)
    }

    return (
        <div className="bg-slate-900 h-screen flex items-center justify-center font-['Poppins']  p-5">
            <div className="flex flex-col gap-10 p-10">
                <h1 className="text-white text-4xl text-center">
                    {title}
                </h1>

                <div className="m-auto">
                    <div className={`dice ${isRolling ? 'rolling' : ''}`} style={getDiceStyle(diceNumber)}>
                        <div className="face front"></div>
                        <div className="face back"></div>
                        <div className="face top"></div>
                        <div className="face bottom"></div>
                        <div className="face right"></div>
                        <div className="face left"></div>
                    </div>
                </div>

                <div className="text-slate-100 text-center text-2xl">
                    {showButton ? "" : `saindo em ${timerLeft}...`}
                </div>

                {showButton && (
                    <button
                        onClick={() => handleDice()}
                        className="bg-violet-600 p-5 rounded-md text-white shadow-md hover:brightness-75 duration-200">
                        Girar
                    </button>
                )}
            </div>
        </div>

    )
};

const getDiceStyle = (number) => {
    switch (number) {
        case 1:
            return { transform: 'rotateX(0deg) rotateY(0deg)' };
        case 2:
            return { transform: 'rotateX(-90deg) rotateY(0deg)' };
        case 3:
            return { transform: 'rotateX(0deg) rotateY(90deg)' };
        case 4:
            return { transform: 'rotateX(0deg) rotateY(-90deg)' };
        case 5:
            return { transform: 'rotateX(90deg) rotateY(0deg)' };
        case 6:
            return { transform: 'rotateX(180deg) rotateY(0deg)' };
        default:
            return {};
    }
};