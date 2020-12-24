let store = {
    _state: {
        List_Items: [
            {id: '1', NameFruit: "Ananas", rating: "4"},
            {id: '1', NameFruit: "Ananas", rating: "4"},
            {id: '1', NameFruit: "Ananas", rating: "4"},
            {id: '1', NameFruit: "Ananas", rating: "4"}
        ]
    },
    GetState() {
        return this._state;
    },
}

export default store;