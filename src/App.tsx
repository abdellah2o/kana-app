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
        <div className="app-root">
            <header className="app-header">
                <h1 className="app-title">Apprentissage du Japonais - Kana</h1>
                <p className="app-subtitle">Entraînement aux hiragana et katakana</p>
            </header>

            <main>
                <FeaturesTab/>

                <section className="app-content-section">
                    <Routes>
                        <Route path="/study" element={<StudyMode script={script} kanaData={kanaData} setScript={setScript}/>}/>
                        <Route path="/quiz" element={<QuizMode kanaData={kanaData}/>}/>
                    </Routes>
                </section>
            </main>
        </div>
    );
}

export default App;