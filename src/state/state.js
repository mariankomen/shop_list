let store = {
    _state: {
        List_Items: [
            {id: '1', NameFruit: "Ananas", rating: "4"},
            {id: '2', NameFruit: "Yabloko", rating: "2"},
            {id: '3', NameFruit: "Kiwi", rating: "1"},
            {id: '4', NameFruit: "Vinograd", rating: "3"},
        ],
        Textvalue: '',
        Filtered_Items: []
    },
    GetState() {
        return this._state;
    },
    subscribe(observer) {
        this.Rerender = observer;
    }, FilterItem(){
        this._state.List_Items.sort((a, b) => a.rating > b.rating ? 1 : -1);
        this.Rerender(this._state);
    }, RemoveItems(){
        console.log("it's remove");
        // this.Rerender(this._state);
    },
    Rerender() {
        console.log('state changed');
    },
    dispatch (action) {
        if (action.type === "ADD-POST") {
            let newPost = {
                id: '6',
                NameFruit: action.FruitNm,
                rating:  4,
            };
            this._state.List_Items.push(newPost);
            this.Rerender(this._state);
        } else if (action.type === 'UPDATE_TEXT') {
            this._state.List_Items.Textvalue = action.textValue;
            this.Rerender(this._state);
        } else if(action.type === 'FILTER'){
            // this._state.List_Items.Filtered_Items = this._state.List_Items.sortItems()
        }
    },

}
export const AddPostActionCreator = (text) => {
    return {type: 'ADD-POST', FruitNm: text}
}

export const UpdateTextActionCreator = (text) => {
    return {type: 'UPDATE-TEXT', textValue: text}
}
export default store;