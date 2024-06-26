import styled from "styled-components";

const Navbar = ({menus}) => {
    // 메뉴 데이터 : 배열 [{name: '', url: ''}, ...]
    const menuList = menus.map((menu, idx) => (
        <li key={idx}>
            <a href={menu.url}>{menu.name}</a>
        </li>
    ));
    return (
        <Wrap>
            <ul>
                {menuList}
            </ul>
        </Wrap>
    )
}

export default Navbar;

const Wrap = styled.nav`
    border-top: 1px solid   hsl(0, 0%, 73%);
    border-bottom: 1px solid   hsl(0, 0%, 73%);
    padding: 15px 0;
    overflow: hidden;

    & ul {
        display: flex;
        align-items: center;
        column-gap: 15px;

        & li {
            justify-content: center;

            &:hover a {
                color: #FFC0CB;
            }
        }
    }
    
`