import { useState } from "react";

const SignUpForm = () => {
    const [userName, setUserName] = useState("");
    const [gender, setGender] = useState("M");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("이름 : " + userName + "성별 : " + gender);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>이름</label>
            <input 
                type="text" 
                value={userName} 
                onChange={(event) => setUserName(event.target.value)} 
            />
            <br />
            <label>성별</label>
            <select
                value={gender}
                onChange={event => setGender(event.target.value)}
            >
                <option value="M">남성</option>
                <option value="F">여성</option>
            </select>
            <br />
            <button type="submit">제출</button>
        </form>
    )
}

export default SignUpForm;