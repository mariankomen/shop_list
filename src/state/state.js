let store = {
    _state: {
        List_Items: [
            {id: '1', NameFruit: "Ananas", rating: "4"},
            {id: '1', NameFruit: "Ananas", rating: "4"},
            {id: '1', NameFruit: "Ananas", rating: "4"},
            {id: '1', NameFruit: "Ananas", rating: "4"}
        ],
        Textvalue: ''
    },
    GetState() {
        return this._state;
    },
    subscribe(observer) {
        this.Rerender = observer;
    },
    Rerender() {
        console.log('state changed');
    },
    dispatch (action) {
        if (action.type === "ADD-POST") {
            let newPost = {
                id: '6',
                NameFruit: action.postMessage,
                rating: 0
            };
            this._state.List_Items.push(newPost);
            this.Rerender(this._state);
        } else if (action.type === 'UPDATE_TEXT') {
            this._state.List_Items.Textvalue = action.textValue;
            this.Rerender(this._state);
        }
    }
}
export const AddPostActionCreator = (text) => {
    return {type: 'ADD-POST', postMessage: text}
}

export const UpdateTextActionCreator = (text) => {
    return {type: 'UPDATE-TEXT', textValue: text}
}
export default store;