function Proped({items}){
    return(
        <ul>
            {items.map((i) =>(
                <li key={i.id} style={{color: i.completed?"Green":"Red", textDecoration: i.completed? "line-through": "none" }}>
                    {i.item} - {i.quantity}
                </li>
            ))}
        </ul>
    );
}



export default Proped;