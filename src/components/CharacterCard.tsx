type CharacterCardProps = {
    character: string;
    romaji: string;
};

function CharacterCard({ character, romaji }: CharacterCardProps) {
    return (
        <div className="character-card">
            <span className="jp-char">{character}</span>
            <span className="jp-romaji">{romaji}</span>
        </div>
    );
}

export default CharacterCard;
