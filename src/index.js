import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./state/state";


let Rerender = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.GetState()}
                 store={store}
                 dispatch={store.dispatch.bind(store)}
                 FilterItem={store.FilterItem.bind(store)}
                 RemoveItems={store.RemoveItems.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

Rerender(store._state);
store.subscribe(Rerender);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

