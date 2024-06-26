import styled from "styled-components";

const Article = ({ title, date, imgUrl, content }) => {
    return (
        <Wrap>
            <h2>{title}</h2>
            <p>{date}</p>
            <img src={imgUrl} />
            <p>{content}</p>
        </Wrap>
    );
}

export default Article;

const Wrap = styled.article`
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    padding: 15px;
    border: 1px solid black;

    & img {
        width: 300px;   
        height: 300px;
    }
`