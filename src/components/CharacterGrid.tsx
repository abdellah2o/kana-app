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
        <section className="character-grid">
            <h2>{title}</h2>
            <div className="character-grid__list">
                {characters.map((item, index) => (
                    <CharacterCard
                        key={index}
                        character={item.character}
                        romaji={item.romaji}
                    />
                ))}
            </div>
        </section>
    );
}

export default CharacterGrid;