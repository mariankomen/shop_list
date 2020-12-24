import style from './App.module.css';
import {BrowserRouter, Route} from "react-router-dom";
import Enter_Field from "./components/enter_field/Enter_Field";
import All_Items from "./components/all_items/all_item";
import Item from "./components/item/item";

function App(props) {
    return (
        <div className={style.App}>
            <div className={style.App_content}>
                <Enter_Field dispatch={props.dispatch}
                             FilterItem={props.FilterItem}
                             List_Items={props.state.List_Items}
                             RemoveItems={props.state.RemoveItems}
                />
                <All_Items List_Items={props.state.List_Items}
                           dispatch={props.dispatch}
                           RemoveItems={props.state.RemoveItems}/>

            </div>
        </div>
    );
}

export default App;
