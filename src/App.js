import style from './App.module.css';
import {BrowserRouter, Route} from "react-router-dom";
import Enter_Field from "./components/enter_field/Enter_Field";
import All_Items from "./components/all_items/all_item";

function App(props) {
    return (
        <div className={style.App}>
            <div className={style.App_content}>
                <Enter_Field dispatch={props.dispatch}
                             List_Items={props.state.List_Items}
                />
                <All_Items List_Items={props.state.List_Items}
                           dispatch={props.dispatch}/>

            </div>
        </div>
    );
}

export default App;
