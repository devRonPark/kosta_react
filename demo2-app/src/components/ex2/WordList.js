const WordList = ({ words, removeWord }) => {
    return (
        <ul style={{ 
            border: '3px solid #333', 
            padding: 10, 
            width: 200,
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            rowGap: 20
        }}>
            {words.map((word, idx) => (
                <li key={idx}>
                    {word}
                    <button style={{fontSize: 12, marginLeft: 30}} onClick={() => removeWord(word)}>삭제</button>
                </li>
            ))}
        </ul>
    )
}

export default WordList;