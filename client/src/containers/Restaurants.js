import React, { Component } from 'react';
import ACTIONS from "./../actions/restaurants";
import { connect } from "react-redux";
import { getRestaurantsOrderedBy, getAllPaymentMethods ,toggleFilter} from "../selectors/restaurants";

class Restaurants extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){
        this.props.getRestaurants();
    }
    handleRating =()=>{
        this.props.setOrderBy('rating');
    }
    handlePayment =(e)=>{
        this.props.toggleFilter(e.target.value);
    }
    handleTimeDelivery=()=>{
        this.props.setOrderBy('deliveryTimeId');
    }
    handleSearch= event =>{
        const searchString = event.target.value;
        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout( () => {
            this.props.getRestaurants( searchString );
        },1500);
    }
    render() {
        const {restaurants} = this.props
        return (
            <div>
                <span>PedidosYa</span>
                <input id="" type="text" onChange={this.handleSearch} label=""/>
                <span>rating</span>
                <input id="byRating" type="checkbox" checked={this.props.orderBy==='rating'} onClick={this.handleRating} label="byRating"/>
                
                <span>deliveryTime</span>
                <input id="byTimeDelivey" type="checkbox" checked={this.props.orderBy==='deliveryTimeId'} onClick={this.handleTimeDelivery} label="byTimeDelivey"/>


                <h4>payment</h4>
                {Object.keys(this.props.paymentMethods).map( key =>{
                    const payment = this.props.paymentMethods[key];
                    return (
                        <React.Fragment key={key} >
                            <label htmlFor={payment.id}>{ payment.name }</label>
                            <input id={payment.id} checked={!this.props.removedPayments[payment.id]}value={payment.id} type="checkbox" onClick={(e)=>this.handlePayment(e)} label="byPayment"/>                        
                        </React.Fragment>
                        
                    )
                })}

                {this.props.restaurants.map((resto,key)=>(
                    <li key={key}>
                        name {resto.name}
                        rating {resto.rating}
                        deliveryTime {resto.deliveryTime}
                    </li>
                    ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    restaurants: getRestaurantsOrderedBy(state),
    removedPayments: state.restaurants.removedPayments,
    orderBy: state.restaurants.orderBy,
    paymentMethods: getAllPaymentMethods(state)
});

const mapDispatchToProps = dispatch => ({
    createItem: item => dispatch(ACTIONS.createItem(item)),
    deleteItem: id => dispatch(ACTIONS.deleteItem(id)),
    getRestaurants: (restaurant) => dispatch(ACTIONS.getRestaurants(restaurant)),
    setOrderBy: orderBy => dispatch(ACTIONS.setOrderBy(orderBy)),
    toggleFilter: toggleFilter =>dispatch(ACTIONS.toggleFilter(toggleFilter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Restaurants);