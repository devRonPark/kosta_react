import { useState } from "react"
import Detail from "./Detail";
import Display from "./Display";

const Container = () => {
    const style = {
        wrap: {
            width: 600,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: '0 auto'
        }
    };
    // 선택된 메뉴 저장
    const [selectedMenu, setSelectedMenu] = useState();

    const menus =  [
        {mno: 1, name: '상품1', price: 3000},
        {mno: 2, name: '상품2', price: 4000},
        {mno: 3, name: '상품3', price: 5000},
    ];

    const changeMenu = (mno) => {
        const menu = menus.find(menu => menu.mno == mno);
        setSelectedMenu(menu);
    };

    return (
        <div style={style.wrap}>
            <Display arr={menus} changeMenu={changeMenu} />
            <Detail menu={selectedMenu} />
        </div>
    )
}

export default Container;