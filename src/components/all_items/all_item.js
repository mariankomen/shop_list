import Item from "../item/item";

function All_Items(props) {


    let MessageItems = props.List_Items.map(mes => <Item NameFruit={mes.NameFruit} id={mes.id} rating={mes.rating} />)



    return (
        <div>
            {MessageItems}
        </div>
    );
}

export default All_Items;
