import styled from "styled-components";

const Header = ({ header }) => {
    // 블로그 이름, 설명을 객체로 받는다. {title: '', description: ''}
    return (
        <Wrap>
            <h1 className="title">{header.title}</h1>
            <p>{header.description}</p>
        </Wrap>
    )
}

export default Header;

const Wrap = styled.header`
    width: 100%;
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`