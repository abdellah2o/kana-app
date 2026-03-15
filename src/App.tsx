import "./App.css";
import CharacterGrid from "./components/CharacterGrid";
import { kanaData } from "./data/kana.ts";
import {useState} from "react";
import type {Kana} from "./data/kana.ts";

function App() {
    const hiraganaChars = kanaData.map((k) => ({
        character: k.hiragana,
        romaji: k.romaji,
    }));

    const katakanaChars = kanaData.map((k) => ({
        character: k.katakana,
        romaji: k.romaji,
    }));

    const [script, setScript] = useState<'hiragana' | 'katakana'>('hiragana');

    const [quizMode, setQuizMode] = useState('study');
    const [currentCharacter, setCurrentCharacter] = useState<Kana | null>(null);
    const [userAnswer, setUserAnswer] = useState('');
    const [score, setScore] = useState({ correct: 0, total: 0 });

    function pickRandomKana() {
        const index = Math.floor(Math.random() * kanaData.length)
        setCurrentCharacter(kanaData[index])
    }

    function switchMode(newMode: 'study' | 'quiz') {
        setQuizMode(newMode)
    }

    return (
        <div className="app">
            <header className="app-header">
                <h1>Apprentissage du Japonais - Kana</h1>
            </header>

            <main>
                <nav>
                    <button onClick={() => switchMode('study')} disabled={quizMode == 'study'}>Etudier</button>
                    <button onClick={() => switchMode('quiz')} disabled={quizMode == 'quiz'}>Quiz</button>
                </nav>

                {quizMode == 'quiz' ? (
                    <div>
                        {script === 'hiragana' ? (
                            <h2>{currentCharacter?.hiragana}</h2>
                        ) : (
                            <h2>{currentCharacter?.katakana}</h2>
                        )}
                        <input
                            type={'text'}
                            value={userAnswer}
                            onChange={e => setUserAnswer(e.target.value)}
                        />
                        <p>val : {userAnswer}</p>
                        <button onClick={pickRandomKana}>valider</button>
                    </div>
                ) : (
                    <div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    value="user"
                                    checked={script === 'hiragana'}
                                    onChange={() => setScript('hiragana')}
                                />
                                Hiragana
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    value="admin"
                                    checked={script === 'katakana'}
                                    onChange={() => setScript('katakana')}
                                />
                                Katakana
                            </label>
                        </div>
                        {script === 'hiragana' ? (
                            <CharacterGrid title="Hiragana" characters={hiraganaChars}/>
                        ) : (
                            <CharacterGrid title="Katakana" characters={katakanaChars}/>
                        )}
                    </div>
                )}

            </main>
        </div>
    );
}


export default App;
