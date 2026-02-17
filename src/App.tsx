import "./App.css";
import CharacterGrid from "./components/CharacterGrid";
import { hiragana, katakana } from "./kanaData.ts";

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <h1>Apprentissage du Japonais - Kana</h1>
            </header>

            <main>
                <CharacterGrid title="Hiragana" characters={hiragana} />
                <CharacterGrid title="Katakana" characters={katakana} />
            </main>
        </div>
    );
}

export default App;
