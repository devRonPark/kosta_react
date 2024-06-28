import { useState } from "react";
import WordInput from "./WordInput";
import WordList from "./WordList";

// 문자열에 한글이 포함되어 있는지 검사
// return 값 : true | false
const hasKorean = (string) => {
    const koreanRegex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/

    return koreanRegex.test(string);
}

const listContainsNewWord = (words, target) => {
    console.log(words, target);
    for (let i = 0; i < words.length; i++) {
        console.log(words[i] == target);
        if (words[i] == target) {
            return true;
        }
    }
    return false;
}

const WordContainer = () => {
    const style = {
        wrap: {
            width: 600,
            display: 'flex',
            flexDirection: 'column',
            rowGap: 30,
            margin: '0 auto',
            padding: 20
        }
    };

    // 단어들을 가지는 배열 관리
    const [words, setWords] = useState([
        'Apple',
        'Book',
        'Cat',
        'Dog',
        'Elephant',
        'Fish',
        'Guitar',
        'House',
        'Ice cream',
        'Jacket'
    ])

    // 입력한 단어 추가
    const addWord = (word) => {
        // 제약 조건 
        // 한글 입력 금지
        if (hasKorean(word)) {
            alert('알파벳 입력만 가능합니다.');
            return;
        }
        // 이미 존재하는 word 입력 금지
        if (listContainsNewWord(words, word) == true) {
            alert('이미 존재하는 단어입니다.');
            return;
        }
        // const wordArr = words.slice();
        // wordArr.push(word);
        // setWords(wordArr);
        // 위의 코드와 동일한 동작 수행
        setWords(preWords => [...preWords, word]);
    }
    // 삭제 버튼이 클릭된 대상 단어 제거
    const removeWord = wordToRemove => {
        // 새로운 배열을 만들고 제거 대상 단어만 제외된다.
        const filteredWords = words.filter(word => word != wordToRemove)
        setWords(filteredWords)
    }

    return (
        <div style={style.wrap}>
            <div>
                <WordInput addWord={addWord} hasKorean={hasKorean} />
            </div>
            <div>
                <WordList words={words} removeWord={removeWord} />
            </div>
        </div>
    )
}

export default WordContainer;