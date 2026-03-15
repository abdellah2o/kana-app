import {useState} from "react";
import type {Kana} from "../data/kana.ts";

interface QuizModeProps {
    script: 'hiragana' | 'katakana';
    kanaData: Kana[];
}

function QuizMode({ script, kanaData }: QuizModeProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [score, setScore] = useState({ correct: 0, total: 0 });
    const [feedback, setFeedback] = useState('');

    const currentKana = kanaData[currentIndex];
    const displayChar = script === 'hiragana'
        ? currentKana.hiragana
        : currentKana.katakana;

    const [buttonActivation, setButtonActivation] = useState(true)

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();

        const isCorrect = userAnswer.toLowerCase().trim() === currentKana.romaji.toLowerCase();
        const isEmpty = userAnswer.length === 0

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
                setCurrentIndex((currentIndex + 1) % kanaData.length);
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