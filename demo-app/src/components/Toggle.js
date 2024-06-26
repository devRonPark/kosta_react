import { useState } from "react";

const Toggle = () => {
    const [on, setOn] = useState(false);
    return (
        <button onClick={() => setOn(!on)}>
            {on ? "끄기" : "켜기"}
        </button>
    );
}

export default Toggle;