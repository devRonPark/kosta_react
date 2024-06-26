import Layout from "./Layout";
import MainWrap from "./MainWrap";

const blogData = {
    header: {
        title: 'DevRonPark',
        description: 'DevRonPark\'s Blog'
    },
    navbar: {
        menus: [
            { name: 'HTML5', url: '#'},
            { name: 'CSS', url: '#'},
            { name: 'JAVASCRIPT', url: '#'},
        ]
    },
    aside: {
        recentPosts: [
            { name: 'Let\'s Do HTML5', url: '#'},
            { name: 'Let\'s Do CSS', url: '#'},
            { name: 'Let\'s Do JAVASCRIPT', url: '#'},
        ]
    },
    posts: [
        {
            title: "Let's Do HTML5",
            date: "2021-07-01",
            imgUrl: "html5.png",
            content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Corporis illum corrupti voluptatem illo numquam voluptas.
                    Eum molestiae rem sit, asperiores aspernatur ipsa harum?
                    Doloribus ducimus velit veniam consequatur, accusamus placeat!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas ipsam beatae mollitia nihil asperiores, eos aut fugiat quae sequi.
                    Amet consequuntur nostrum eum a laudantium veritatis blanditiis nesciunt
                    necessitatibus aperiam.`
        },
        {
            title: "Let's Do CSS3",
            date: "2021-07-03",
            imgUrl: "css3.png",
            content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Corporis illum corrupti voluptatem illo numquam voluptas.
                    Eum molestiae rem sit, asperiores aspernatur ipsa harum?
                    Doloribus ducimus velit veniam consequatur, accusamus placeat!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas ipsam beatae mollitia nihil asperiores, eos aut fugiat quae sequi.
                    Amet consequuntur nostrum eum a laudantium veritatis blanditiis nesciunt
                    necessitatibus aperiam.`
        },
        {
            title: "Let's Do JavaScript",
            date: "2021-07-05",
            imgUrl: "javascript.png",
            content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Corporis illum corrupti voluptatem illo numquam voluptas.
                    Eum molestiae rem sit, asperiores aspernatur ipsa harum?
                    Doloribus ducimus velit veniam consequatur, accusamus placeat!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas ipsam beatae mollitia nihil asperiores, eos aut fugiat quae sequi.
                    Amet consequuntur nostrum eum a laudantium veritatis blanditiis nesciunt
                    necessitatibus aperiam.`
        },
    ],
    copyright: 'copyright by ron'
}

const BlogMain = () => {
    return (
        <Layout header={blogData.header} menus={blogData.navbar.menus}>
            <MainWrap posts={blogData.posts} recentPosts={blogData.aside.recentPosts} />
        </Layout>
    )
}

export default BlogMain;