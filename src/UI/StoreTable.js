const StoreTable = (props)=> {
    return <table>
        <tr>
            <th>T-Shiet Name</th>
            <th>Description</th>
            <th>Price</th>
        </tr>
       {props.children.map(item => <tr>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>{item.price}</td>
        
     <button id={item.id} name="lSize" onClick={props.onRemove}>L {item.lSize}</button>
     <button id={item.id} name="mSize" onClick={props.onRemove}>M {item.mSize}</button>
     <button id={item.id} name="sSize" onClick={props.onRemove}>S {item.sSize}</button>
       </tr>)}
    </table>
}

export default StoreTable;