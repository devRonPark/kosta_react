import styled from "styled-components"
import Footer from "./Footer"
import Header from "./Header"
import Navbar from "./Navbar"

const Layout = ({ header, menus, children }) => {
    return (
        <Wrap>
            <Header header={header} />
            <Navbar menus={menus} />
            {children}
            <Footer />
        </Wrap>
    )
}

export default Layout;

const Wrap = styled.div`
    width: 798px;
    max-width: 798px;
    margin: 0 auto;
`