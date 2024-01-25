const CartTable = (props)=> {
    console.log(props.children)
    return <table>
        <tr>
            <th>T-Shiet Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>L</th>
            <th>M</th>
            <th>S</th>
        </tr>
       {props.children.map(item => 
       <tr>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>{item.price}</td>
        <td>{item.lSize}</td>
        <td>{item.mSize}</td>
        <td>{item.sSize}</td>
       </tr>)}
    </table>
}

export default CartTable;