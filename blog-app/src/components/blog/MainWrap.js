import styled from "styled-components";
import Article from "./Article";
import Aside from "./Aside";

const MainWrap = ({ posts, recentPosts }) => {
    const postList = posts.map((post, idx) => (
        <Article key={idx} title={post.title} date={post.date} imgUrl={post.imgUrl} content={post.content} />
    ));
    return (
        <Wrap>
            <section>
                {postList}
            </section>
            <Aside recentPosts={recentPosts} />
        </Wrap>
    )
}

export default MainWrap;

const Wrap = styled.div`
    position: relative;
    display: flex;
    column-gap: 15px;
    padding: 15px 0;

    & section {
        width: 598px;
        display: flex;
        flex-direction: column;
        row-gap: 20px;
    }

`