import { useState } from "react";

// 방문객 수 text, 조식여부 checkbox, 요청사항 textarea
const Reservation = () => {
    const [guestCnt, setGuestCnt] = useState(1);
    const [hasBreakfast, setHasBreakfast] = useState(false);
    const [reqMsg, setReqMsg] = useState("요청사항을 입력하세요!");

    const handleSubmit = event => {
        event.preventDefault();

        alert(`방문객 수: ${guestCnt}\n조식 여부: ${hasBreakfast}\n요청사항: ${reqMsg}`);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>방문객 수</label>
            <input type="text" value={guestCnt} onChange={(event) => setGuestCnt(event.target.value)} />
            <br />
            <label>조식 여부</label>
            <input type="checkbox" checked={hasBreakfast} onChange={() => setHasBreakfast(!hasBreakfast)} />
            <br />
            <label>요청사항</label>
            <br />
            <textarea value={reqMsg} onChange={event => setReqMsg(event.target.value)}></textarea>
            <br />
            <button type="submit">제출</button>
        </form>
    )
}

export default Reservation;