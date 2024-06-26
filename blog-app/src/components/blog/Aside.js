import styled from "styled-components";

const Aside = ({recentPosts}) => {
    // 최근 글의 제목 링크
    // [{name: '', url: ''}, {name: '', url: ''}, {name: '', url: ''}, ...]
    const recentPostList = recentPosts.map((recentPost, idx) => (
        <li key={idx}>
            <a href={recentPost.url}>{recentPost.name}</a>
        </li>
    ))
    return (
        <Wrap>
            <h4>최근 게시글</h4>
            <ul>
                {recentPostList}
            </ul>
        </Wrap>
    )
}

export default Aside;

const Wrap = styled.aside`
    width: 198px;
    & ul{
        margin: 7px;
        padding-bottom: 7px;

        & li {
            list-style-type: none;
            padding: 7px;
            font-size: 15px;

            &:hover a {
                color: #FFC0CB;
            }
        }

        & li + li {
            margin-top: 7px;
        }
    }
`