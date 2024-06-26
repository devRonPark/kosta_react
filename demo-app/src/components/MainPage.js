import { useState } from "react";
import Toolbar from "./Toolbar";

const MainPage = () => {
    // isLogin 값에 따라 Toolbar => 로그인, 로그아웃
    const [isLogin, setIsLogin] = useState(false);

    const onClickLoginHandle = () => setIsLogin(true);
    const onClickLogoutHandle = () => setIsLogin(false);
    return (
        <div>
            <Toolbar 
                isLogin={isLogin} 
                onClickLoginHandle={onClickLoginHandle}
                onClickLogoutHandle={onClickLogoutHandle} 
            />
        </div>
    );
}

export default MainPage;