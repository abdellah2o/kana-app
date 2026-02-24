import "./App.css";
import CharacterGrid from "./components/CharacterGrid";
import { kanaData } from "./data/kana.ts";

function App() {
    const hiraganaChars = kanaData.map((k) => ({
        character: k.hiragana,
        romaji: k.romaji,
    }));

    const katakanaChars = kanaData.map((k) => ({
        character: k.katakana,
        romaji: k.romaji,
    }));

    return (
        <div className="app">
            <header className="app-header">
                <h1>Apprentissage du Japonais - Kana</h1>
            </header>

            <main>
                <CharacterGrid title="Hiragana" characters={hiraganaChars} />
                <CharacterGrid title="Katakana" characters={katakanaChars} />
            </main>
        </div>
    );
}

export default App;
