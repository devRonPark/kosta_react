const Detail = ({menu}) => {
    if (!menu) {
        return <div>선택된 상품이 없습니다.</div>
    }
    return (
        <div style={{border: '3px solid #333', padding: 10, width: 200}}>
            <h3>상품번호 : {menu.mno}</h3>
            <p>상품명 : {menu.name}</p>
            <p>가격 : {menu.price}</p>
        </div>
    )
}

export default Detail;