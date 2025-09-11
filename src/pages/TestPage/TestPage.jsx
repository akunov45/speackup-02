import React, { useState, useEffect } from "react";
import gold from "../../assets/img/gold.png"
import gray from "../../assets/img/gray.png"

// Вопросы
const questions = [
    { id: 1, text: "...........dinner when the phone rang.", options: ["cooked", "had cooked", "have cooked", "was cooking"], correct: "was cooking" },
    { id: 2, text: "She ........... English since she was a child.", options: ["learns", "has learned", "learned", "was learning"], correct: "has learned" },
    { id: 3, text: "By the time we arrived, they ........... the meeting.", options: ["started", "have started", "had started", "start"], correct: "had started" },
    { id: 4, text: "If I ........... more time, I would learn Spanish.", options: ["had", "have", "has", "having"], correct: "had" },
    { id: 5, text: "He usually ........... to work by bus.", options: ["go", "goes", "going", "gone"], correct: "goes" },
    { id: 6, text: "We ........... to Paris last summer.", options: ["went", "have gone", "go", "were going"], correct: "went" },
    { id: 7, text: "I think it ........... tomorrow.", options: ["rains", "rained", "will rain", "is raining"], correct: "will rain" },
    { id: 8, text: "She ........... TV when I came in.", options: ["watched", "was watching", "watches", "watching"], correct: "was watching" },
    { id: 9, text: "They ........... already finished their homework.", options: ["has", "have", "had", "having"], correct: "have" },
    { id: 10, text: "This book is ........... than that one.", options: ["good", "better", "best", "the best"], correct: "better" },
];

// Получить уровень по проценту
const getLevel = (percent) => {
    if (percent < 25) return "A1";
    if (percent < 50) return "B1";
    if (percent < 75) return "B2";
    return "C1";
};

const letters = ["A", "B", "C", "D"];

const TestPage = () => {
    const [current, setCurrent] = useState(() => parseInt(localStorage.getItem("current") || "0"));
    const [selected, setSelected] = useState(null);
    const [score, setScore] = useState(() => parseInt(localStorage.getItem("score") || "0"));
    const [feedback, setFeedback] = useState(null);

    useEffect(() => {
        localStorage.setItem("current", current);
        localStorage.setItem("score", score);
    }, [current, score]);

    const handleNext = () => {
        if (selected === questions[current].correct) {
            setScore((prev) => prev + 1);
            setFeedback("Well done!");
            setTimeout(() => {
                setFeedback(null);
                setSelected(null);
                setCurrent((prev) => prev + 1);
            }, 1000); // Пауза для отображения "Well done!"
        } else {
            setSelected(null);
            setCurrent((prev) => prev + 1);
        }
    };

    const handleRestart = () => {
        setCurrent(0);
        setScore(0);
        setSelected(null);
        setFeedback(null);
        localStorage.removeItem("current");
        localStorage.removeItem("score");
    };

    const percent = Math.round((score / questions.length) * 100);
    const level = getLevel(percent);

    return (
        <div className="  mx-auto ">
            {/* Верхний синий заголовок */}
            <div className="bg-blue-600 text-white text-center py-4 text-xl font-bold ">
                LEVEL TEST
            </div>

            {/* Прогресс-бар */}
            <div className="bg-gray-200 h-2 rounded-full mt-6 mb-10">
                <div
                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((current + 1) / questions.length) * 100}%` }}
                ></div>
            </div>

            {current < questions.length ? (
                <>
                    <h2 className="text-2xl font-bold mb-6 text-center">English Level Test</h2>

                    <div className="bg-white p-6 rounded-xl">
                        <p className="text-xl font-medium mb-6 text-center">
                            {questions[current].id}_ {questions[current].text}
                        </p>

                        <div className="grid grid-cols-2 gap-4 max-w-[500px] mx-auto">
                            {questions[current].options.map((option, index) => (
                                <button
                                    key={option}
                                    className={`flex items-center gap-3 py-3 px-4 border rounded-xl text-left transition w-full
                                        ${selected === option
                                            ? "bg-blue-500 text-white border-blue-500"
                                            : "bg-white hover:bg-blue-50 border-blue-400"
                                        }`}
                                    onClick={() => setSelected(option)}
                                >
                                    <span className="font-bold">{letters[index]}.</span>
                                    {option}
                                </button>
                            ))}
                        </div>
            
                    </div>

                    {/* Кнопки управления */}
                    <div className="flex justify-center gap-6 mt-10 mb-50">
                        <button
                            onClick={() => setCurrent((prev) => (prev > 0 ? prev - 1 : 0))}
                            disabled={current === 0}
                            className="px-6 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
                            >
                            Previous Question
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={!selected}
                            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                            >
                            Next Question
                        </button>
                    </div>
                    
                            {/* Сообщение "Well done!" */}
                            {feedback && (
                                <div className="text-green-600 ml-[40px] text-[32px]">
                                    {feedback}
                                </div>
                            )}
                </>
            ) : (
                <div className="text-center mt-10">
                    <div className="text-5xl font-bold text-yellow-500 mb-4">{level}</div>
                    <p className="mb-6 text-lg">This is your approximate level for English grammar.</p>
                    <h2 className="text-2xl font-bold mb-4">Result: Your Score : {percent}%</h2>

                    {/* Кубок — укажи пути к изображениям */}
                    {/* Замените src на свои пути к изображениям кубков */}
                    {percent >= 50 ? (
                        <img src={gold} alt="Gold Cup" className="mx-auto w-32" />
                    ) : (
                        <img src={gray} alt="Gray Cup" className="mx-auto w-32" />
                    )}

                    <button
                        onClick={handleRestart}
                        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mb-[30px]"
                    >
                         Start Again
                    </button>
                </div>
            )}
        </div>
    );
};

export default TestPage;
