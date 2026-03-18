import type {Kana} from "../data/kana.ts";
import useQuiz from "../hooks/useQuiz.ts";
import {useEffect, useRef} from "react";

type QuizModeProps = {
    kanaData: Kana[];
}

function QuizMode({ kanaData }: QuizModeProps) {
    const quiz = useQuiz({script: 'hiragana', kanaData: kanaData});

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [quiz.currentIndex]);

    return (
        <div>
            <div className="score">
                Score : {quiz.score.correct} / {quiz.score.total}
            </div>
            <div className="meilleurScore">
                Meilleur score : {quiz.storage.value}
            </div>

            <div className="quiz-character">
                <h2>{quiz.displayChar}</h2>
            </div>

            <form onSubmit={quiz.handleSubmit}>
                <input
                    ref={inputRef}
                    type="text"
                    value={quiz.userAnswer}
                    onChange={e => quiz.setUserAnswer(e.target.value)}
                    placeholder="Romaji..."
                    autoFocus
                />
                <button type="submit" disabled={!quiz.buttonActivation}>Valider</button>
            </form>

            {quiz.feedback && <div className="feedback">{quiz.feedback}</div>}
        </div>
    );
}

export default QuizMode