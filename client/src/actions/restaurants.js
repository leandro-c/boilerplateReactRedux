import axios from 'axios'
// types of action
const Types = {
    CREATE_ITEM: "CREATE_ITEM",
    DELETE_ITEM: "DELETE_ITEM",
    GET_RESTAURANTS: "GET_RESTAURANTS",
    RECEIVED_RESTAURANTS: "RECEIVED_RESTAURANTS",
    ERROR_RESTAURANTS: "ERROR_RESTAURANTS",
    SET_ORDER_BY: "SET_ORDER_BY",
    TOGGLE_FILTER: "TOGGLE_FILTER"
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


const getRestaurants = params => dispatch => {
    dispatch({ type: Types.GET_RESTAURANTS, payload: [] });
    let query = params ? '?query='+params : ''; 
    axios.get(`http://localhost:5000/api/shops${query}`)
    .then((response) => {
        console.log('actions',response)
        dispatch({ type: Types.RECEIVED_RESTAURANTS, payload: response })
    }).catch((err) => {
        dispatch({ type: Types.ERROR_RESTAURANTS, payload: err })
    })
};

const setOrderBy = orderBy => {
    return {
        type: Types.SET_ORDER_BY,
        orderBy
    }
}
const toggleFilter = filter =>{
    return{
        type: Types.TOGGLE_FILTER,
        filter
    }
}

export default {
    createItem,
    deleteItem,
    getRestaurants,
    setOrderBy,
    toggleFilter,
    Types
};