import style from './Enter_Field.module.css'
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {AddPostActionCreator, UpdateTextActionCreator} from "../../state/state";

function Enter_Field(props) {
    let NewPostElement = React.createRef();

    let PostClickAdd = () => {
        let text = NewPostElement.current.value;
        let action = AddPostActionCreator(text);
        let x = UpdateTextActionCreator('');
        props.dispatch(action);
        props.dispatch(x);

    }
    let OnChangeFunc = () => {
        let text = NewPostElement.current.value;
        let action = UpdateTextActionCreator(text)
        props.dispatch(action);
    }


    return (
        <div className="App">
            <div className={style.box}>
                <TextField id="standard-basic" label="Add your fruit" onChange={OnChangeFunc} ref={NewPostElement}/>
                <Button variant="contained" color="primary" onClick={PostClickAdd}>
                    Add
                </Button>
            </div>
        </div>
    );
}

export default Enter_Field;
