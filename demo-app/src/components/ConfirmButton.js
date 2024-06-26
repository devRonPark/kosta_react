import { useState } from "react";

const ConfirmButton = () => {
    const [isConfirmed, setIsConfirmed] = useState(false)

    const handleConfirm = () => {
        setIsConfirmed(preIsConfirmed => !preIsConfirmed)
    }

    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인 완료" : "확인하기"}
        </button>
    );
}

export default ConfirmButton;