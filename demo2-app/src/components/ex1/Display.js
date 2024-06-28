const Display = ({arr, changeMenu}) => {
    console.log(arr)
    return (
        <ul style={{ 
            border: '3px solid #333', 
            padding: 10, 
            width: 200,
            listStyle: 'none'
        }}>
            {arr.map((menu, idx) => {
                return (
                    <li key={menu.mno} onClick={() => changeMenu(menu.mno)}>{menu.name}</li>
                )
            })}
        </ul>
    )
}

export default Display;