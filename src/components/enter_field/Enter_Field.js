import style from './App.module.css';
import {BrowserRouter, Route} from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function App() {
    return (
        <div className="App">

            <div className={style.box}>
                <TextField id="standard-basic" label="Standard"/>
                <Button variant="contained" color="primary">
                    Add
                </Button>
            </div>
        </div>
    );
}

export default App;
