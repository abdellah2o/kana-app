// data/kana.ts
export interface Kana {
    hiragana: string;
    katakana: string;
    romaji: string;
    row: string;
}

export const kanaData: Kana[] = [
// Ligne a
    { hiragana: 'あ', katakana: 'ア', romaji: 'a', row: 'a' },
    { hiragana: 'い', katakana: 'イ', romaji: 'i', row: 'a' },
    { hiragana: 'う', katakana: 'ウ', romaji: 'u', row: 'a' },
    { hiragana: 'え', katakana: 'エ', romaji: 'e', row: 'a' },
    { hiragana: 'お', katakana: 'オ', romaji: 'o', row: 'a' },

// Ligne ka
    { hiragana: 'か', katakana: 'カ', romaji: 'ka', row: 'ka' },
    { hiragana: 'き', katakana: 'キ', romaji: 'ki', row: 'ka' },
    { hiragana: 'く', katakana: 'ク', romaji: 'ku', row: 'ka' },
    { hiragana: 'け', katakana: 'ケ', romaji: 'ke', row: 'ka' },
    { hiragana: 'こ', katakana: 'コ', romaji: 'ko', row: 'ka' },

// Ligne sa
    { hiragana: 'さ', katakana: 'サ', romaji: 'sa', row: 'sa' },
    { hiragana: 'し', katakana: 'シ', romaji: 'shi', row: 'sa' },
    { hiragana: 'す', katakana: 'ス', romaji: 'su', row: 'sa' },
    { hiragana: 'せ', katakana: 'セ', romaji: 'se', row: 'sa' },
    { hiragana: 'そ', katakana: 'ソ', romaji: 'so', row: 'sa' },

// Ligne ta
    { hiragana: 'た', katakana: 'タ', romaji: 'ta', row: 'ta' },
    { hiragana: 'ち', katakana: 'チ', romaji: 'chi', row: 'ta' },
    { hiragana: 'つ', katakana: 'ツ', romaji: 'tsu', row: 'ta' },
    { hiragana: 'て', katakana: 'テ', romaji: 'te', row: 'ta' },
    { hiragana: 'と', katakana: 'ト', romaji: 'to', row: 'ta' },

// Ligne na
    { hiragana: 'な', katakana: 'ナ', romaji: 'na', row: 'na' },
    { hiragana: 'に', katakana: 'ニ', romaji: 'ni', row: 'na' },
    { hiragana: 'ぬ', katakana: 'ヌ', romaji: 'nu', row: 'na' },
    { hiragana: 'ね', katakana: 'ネ', romaji: 'ne', row: 'na' },
    { hiragana: 'の', katakana: 'ノ', romaji: 'no', row: 'na' },

// Ligne ha
    { hiragana: 'は', katakana: 'ハ', romaji: 'ha', row: 'ha' },
    { hiragana: 'ひ', katakana: 'ヒ', romaji: 'hi', row: 'ha' },
    { hiragana: 'ふ', katakana: 'フ', romaji: 'fu', row: 'ha' },
    { hiragana: 'へ', katakana: 'ヘ', romaji: 'he', row: 'ha' },
    { hiragana: 'ほ', katakana: 'ホ', romaji: 'ho', row: 'ha' },

// Ligne ma
    { hiragana: 'ま', katakana: 'マ', romaji: 'ma', row: 'ma' },
    { hiragana: 'み', katakana: 'ミ', romaji: 'mi', row: 'ma' },
    { hiragana: 'む', katakana: 'ム', romaji: 'mu', row: 'ma' },
    { hiragana: 'め', katakana: 'メ', romaji: 'me', row: 'ma' },
    { hiragana: 'も', katakana: 'モ', romaji: 'mo', row: 'ma' },

// Ligne ya
    { hiragana: 'や', katakana: 'ヤ', romaji: 'ya', row: 'ya' },
    { hiragana: 'ゆ', katakana: 'ユ', romaji: 'yu', row: 'ya' },
    { hiragana: 'よ', katakana: 'ヨ', romaji: 'yo', row: 'ya' },

// Ligne ra
    { hiragana: 'ら', katakana: 'ラ', romaji: 'ra', row: 'ra' },
    { hiragana: 'り', katakana: 'リ', romaji: 'ri', row: 'ra' },
    { hiragana: 'る', katakana: 'ル', romaji: 'ru', row: 'ra' },
    { hiragana: 'れ', katakana: 'レ', romaji: 're', row: 'ra' },
    { hiragana: 'ろ', katakana: 'ロ', romaji: 'ro', row: 'ra' },

// Ligne wa
    { hiragana: 'わ', katakana: 'ワ', romaji: 'wa', row: 'wa' },
    { hiragana: 'を', katakana: 'ヲ', romaji: 'wo', row: 'wa' },

// n
    { hiragana: 'ん', katakana: 'ン', romaji: 'n', row: 'n' },

// Ligne ga (dakuten)
    { hiragana: 'が', katakana: 'ガ', romaji: 'ga', row: 'ga' },
    { hiragana: 'ぎ', katakana: 'ギ', romaji: 'gi', row: 'ga' },
    { hiragana: 'ぐ', katakana: 'グ', romaji: 'gu', row: 'ga' },
    { hiragana: 'げ', katakana: 'ゲ', romaji: 'ge', row: 'ga' },
    { hiragana: 'ご', katakana: 'ゴ', romaji: 'go', row: 'ga' },

// Ligne za (dakuten)
    { hiragana: 'ざ', katakana: 'ザ', romaji: 'za', row: 'za' },
    { hiragana: 'じ', katakana: 'ジ', romaji: 'ji', row: 'za' },
    { hiragana: 'ず', katakana: 'ズ', romaji: 'zu', row: 'za' },
    { hiragana: 'ぜ', katakana: 'ゼ', romaji: 'ze', row: 'za' },
    { hiragana: 'ぞ', katakana: 'ゾ', romaji: 'zo', row: 'za' },

// Ligne da (dakuten)
    { hiragana: 'だ', katakana: 'ダ', romaji: 'da', row: 'da' },
    { hiragana: 'ぢ', katakana: 'ヂ', romaji: 'ji', row: 'da' },
    { hiragana: 'づ', katakana: 'ヅ', romaji: 'zu', row: 'da' },
    { hiragana: 'で', katakana: 'デ', romaji: 'de', row: 'da' },
    { hiragana: 'ど', katakana: 'ド', romaji: 'do', row: 'da' },

// Ligne ba (dakuten)
    { hiragana: 'ば', katakana: 'バ', romaji: 'ba', row: 'ba' },
    { hiragana: 'び', katakana: 'ビ', romaji: 'bi', row: 'ba' },
    { hiragana: 'ぶ', katakana: 'ブ', romaji: 'bu', row: 'ba' },
    { hiragana: 'べ', katakana: 'ベ', romaji: 'be', row: 'ba' },
    { hiragana: 'ぼ', katakana: 'ボ', romaji: 'bo', row: 'ba' },

// Ligne pa (handakuten)
    { hiragana: 'ぱ', katakana: 'パ', romaji: 'pa', row: 'pa' },
    { hiragana: 'ぴ', katakana: 'ピ', romaji: 'pi', row: 'pa' },
    { hiragana: 'ぷ', katakana: 'プ', romaji: 'pu', row: 'pa' },
    { hiragana: 'ぺ', katakana: 'ペ', romaji: 'pe', row: 'pa' },
    { hiragana: 'ぽ', katakana: 'ポ', romaji: 'po', row: 'pa' },
];