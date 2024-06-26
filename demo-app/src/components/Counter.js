import { useState } from "react";


const Counter = () => {
    // const [변수명, set함수명] = useState(0)
    const [count, setCount] = useState(0);
    // count = 0
    // setCount() => state 값을 변경해주는 함수, 실행 => 재 렌더링
    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count+1)}>+</button>
        </div>
    )
}

export default Counter;