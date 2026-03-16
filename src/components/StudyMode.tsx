import {type Kana} from "../data/kana.ts";
import CharacterGrid from "./CharacterGrid.tsx";
import type {Dispatch, SetStateAction} from "react";

type StudyModeProps = {
    script: 'hiragana' | 'katakana'
    kanaData: Kana[]
    setScript: Dispatch<SetStateAction<'hiragana' | 'katakana'>>
}

function StudyMode({script, kanaData, setScript}: StudyModeProps) {

    const hiraganaChars = kanaData.map((k) => ({
        character: k.hiragana,
        romaji: k.romaji,
    }));

    const katakanaChars = kanaData.map((k) => ({
        character: k.katakana,
        romaji: k.romaji,
    }));

    return (
        <>
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

            {script == 'hiragana' ? (
                <CharacterGrid title={'Hiragana'} characters={hiraganaChars}/>
            ) : (
                <CharacterGrid title={'Katakana'} characters={katakanaChars}/>
            )}
        </>
    )
}

export default StudyMode