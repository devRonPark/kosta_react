const UserGreeting = () => {
    return (
        <h1>회원님. 다시 방문해주셔서 감사합니다.</h1>
    )
}

const GuestGreeting = () => {
    return (
        <h1>안녕하세요! 회원가입을 하시면 더 높은 서비스를 받을 수 있습니다.</h1>
    );
}

const Greeting = ({ isLogin }) => {
    // if (isLogin) {
    //     return <UserGreeting />
    // }
    // else {
    //     return <GuestGreeting />
    // }
    return (
        <>
            {isLogin ? <UserGreeting /> : <GuestGreeting />}
        </>
    )
}

export default Greeting;