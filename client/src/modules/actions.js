import axios from 'axios'
// types of action
const Types = {
    CREATE_ITEM: "CREATE_ITEM",
    DELETE_ITEM: "DELETE_ITEM",
    GET_RESTAURANTS: "GET_RESTAURANTS"
};
// actions
const createItem = task => ({
    type: Types.CREATE_ITEM,
    payload: task
});

const deleteItem = id => ({
    type: Types.DELETE_ITEM,
    payload: id
});


const getRestaurants = (start) => {
    console.log('111')
    return function (dispatch) {
        dispatch({ type: Types.GET_RESTAURANTS, payload: [] })
        axios.get("http://localhost:5000/api/shops"
        ).then((response) => {
            console.log('actions',response)
            dispatch({ type: Types.GET_RESTAURANTS, payload: response })
        }).catch((err) => {
            dispatch({ type: Types.GET_RESTAURANTS, payload: err })
        })
    }
}

export default {
    createItem,
    deleteItem,
    getRestaurants,
    Types
};