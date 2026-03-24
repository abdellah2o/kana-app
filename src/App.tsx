import "./App.css";
import { kanaData } from "./data/kana.ts";
import {useState} from "react";
import StudyMode from "./components/StudyMode.tsx";
import QuizMode from "./components/QuizMode.tsx";
import FeaturesTab from "./components/FeaturesTab.tsx";
import {Route, Routes} from "react-router-dom";

function App() {
    const [script, setScript] = useState<'hiragana' | 'katakana'>('hiragana');

    return (
        <div className="app">
            <header className="app-header">
                <h1>Apprentissage du Japonais - Kana</h1>
            </header>

            <main>
                <FeaturesTab/>

                <Routes>
                    <Route path="/study" element={<StudyMode script={script} kanaData={kanaData} setScript={setScript}/>}/>
                    <Route path="/quiz" element={<QuizMode kanaData={kanaData}/>}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;