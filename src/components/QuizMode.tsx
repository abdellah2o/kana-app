import {useState} from "react";
import type {Kana} from "../data/kana.ts";

type QuizModeProps = {
    script: 'hiragana' | 'katakana';
    kanaData: Kana[];
}

function QuizMode({ script, kanaData }: QuizModeProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(() => Math.floor(Math.random() * kanaData.length));
    const [userAnswer, setUserAnswer] = useState<string>('');
    const [score, setScore] = useState<{correct: number, total: number}>({ correct: 0, total: 0 });
    const [feedback, setFeedback] = useState<string>('');

    const currentKana: Kana = kanaData[currentIndex];
    const displayChar: string = script === 'hiragana'
        ? currentKana.hiragana
        : currentKana.katakana;

    const [buttonActivation, setButtonActivation] = useState<boolean>(true)

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();

        const isCorrect: boolean = userAnswer.toLowerCase().trim() === currentKana.romaji.toLowerCase();
        const isEmpty: boolean = userAnswer.length === 0;

        setScore({
            correct: score.correct + (isCorrect ? 1 : 0),
            total: score.total + (isEmpty ? 0 : 1)
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

    return (
        <div>
            <div className="score">
                Score : {score.correct} / {score.total}
            </div>

            <div className="quiz-character">
                <h2>{displayChar}</h2>
            </div>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={userAnswer}
                    onChange={e => setUserAnswer(e.target.value)}
                    placeholder="Romaji..."
                    autoFocus
                />
                <button type="submit" disabled={!buttonActivation}>Valider</button>
            </form>

            {feedback && <div className="feedback">{feedback}</div>}
        </div>
    );
}

export default QuizMode