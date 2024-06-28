import { useState } from "react"

const WordInput = ({ addWord, hasKorean }) => {
    const [iptVal, setIptVal] = useState("")

    const handleChange = event => {
        if (hasKorean(iptVal)) {
            alert('알파벳 입력만 가능합니다.');
            setIptVal("");
        }
        else {
            setIptVal(event.target.value)
        }
    }

    const handleSubmit = event => {
        event.preventDefault();

        const result = addWord(iptVal);
        // 인풋 초기화
        setIptVal("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={iptVal} onChange={handleChange} />
            <button type="submit">단어 추가</button>
        </form>
    )
}

export default WordInput;