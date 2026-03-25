import CharacterCard from "./CharacterCard";

type CharacterItem = {
    character: string;
    romaji: string;
};

type CharacterGridProps = {
    title: string;
    characters: CharacterItem[];
};

function CharacterGrid({ title, characters }: CharacterGridProps) {
    return (
        <section className="character-grid-wrapper">
            <div className="character-grid">
                <h2>{title}</h2>
                <div className="character-gridlist">
                    {characters.map((item, index) => (
                        <CharacterCard
                            key={index}
                            character={item.character}
                            romaji={item.romaji}
                        />
                    ))}
                </div>
            </div>

        </section>
    );
}

export default CharacterGrid;