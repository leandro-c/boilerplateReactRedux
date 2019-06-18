import React, { Component } from 'react';
import ACTIONS from "../modules/actions";
import { connect } from "react-redux";

class Restaurants extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        console.log('props',this.props)
        console.log('<===========================>')
        console.log('state',this.state)
        return (
            <div>
                <span>PedidosYa</span>
                {JSON.stringify(this.props.restaurants,null,4)}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    restaurants: state.items
});

const mapDispatchToProps = dispatch => ({
    createItem: item => dispatch(ACTIONS.createItem(item)),
    deleteItem: id => dispatch(ACTIONS.deleteItem(id)),
    getRestaurants: ()=>dispatch(ACTIONS.getRestaurants)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Restaurants);