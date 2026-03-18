import {useState} from "react";
import type {Kana} from "../data/kana.ts";
import useLocalStorage from "./useLocalStorage.ts";

type QuizModeProps = {
    script: 'hiragana' | 'katakana';
    kanaData: Kana[];
}

function useQuiz({script, kanaData}: QuizModeProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(() => Math.floor(Math.random() * kanaData.length));
    const [userAnswer, setUserAnswer] = useState<string>('');
    const [score, setScore] = useState<{correct: number, total: number}>({ correct: 0, total: 0 });
    const [feedback, setFeedback] = useState<string>('');
    const [buttonActivation, setButtonActivation] = useState<boolean>(true);

    const storage = useLocalStorage('score', 0);

    const currentKana: Kana = kanaData[currentIndex];
    const displayChar: string = script === 'hiragana'
        ? currentKana.hiragana
        : currentKana.katakana;

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();

        const isCorrect: boolean = userAnswer.toLowerCase().trim() === currentKana.romaji.toLowerCase();
        const isEmpty: boolean = userAnswer.length === 0;

        setScore(prev => {
            const newScore = {
            correct: prev.correct + (isCorrect ? 1 : 0),
            total: prev.total + (isEmpty ? 0 : 1)
            }

            if (newScore.correct > storage.value) {
                storage.setValue(newScore.correct)
            }

            return newScore
        });

        setFeedback(isEmpty ? 'Veuillez entrer un caractère' : isCorrect ? 'Correct !' : `Incorrect. C'était ${currentKana.romaji}`);
        setUserAnswer('');
        setButtonActivation(false)

        // Passer au suivant après un délai
        setTimeout(() => {
            if (!isEmpty){
                setCurrentIndex((Math.floor(Math.random() * kanaData.length)) % kanaData.length);
            }
            setFeedback('');
            setButtonActivation(true)
        }, 1500);
    };
    
    return {currentIndex: currentIndex, userAnswer: userAnswer, score: score, feedback: feedback, storage: storage, buttonActivation: buttonActivation, displayChar: displayChar, handleSubmit: handleSubmit, setUserAnswer: setUserAnswer}
}

export default useQuiz