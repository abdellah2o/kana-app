import "./App.css";
import { kanaData } from "./data/kana.ts";
import {useState} from "react";
import StudyMode from "./components/StudyMode.tsx";
import QuizMode from "./components/QuizMode.tsx";

function App() {

    const [script, setScript] = useState<'hiragana' | 'katakana'>('hiragana');

    const [mode, setMode] = useState('study');

    function switchMode(newMode: 'study' | 'quiz') {
        setMode(newMode)
    }

    return (
        <div className="app">
            <header className="app-header">
                <h1>Apprentissage du Japonais - Kana</h1>
            </header>

            <main>
                <nav>
                    <button onClick={() => switchMode('study')} disabled={mode == 'study'}>Réviser</button>
                    <button onClick={() => switchMode('quiz')} disabled={mode == 'quiz'}>Quiz</button>
                </nav>

                {mode == 'quiz' ? (
                    <QuizMode script={script} kanaData={kanaData}/>
                ) : (
                    <StudyMode script={script} kanaData={kanaData} setScript={setScript}/>
                )}

            </main>
        </div>
    );
}


export default App;
