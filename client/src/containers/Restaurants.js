//React
import React, { Component } from 'react';
//Redux
import ACTIONS from "./../actions/restaurants";
import { connect } from "react-redux";
import { getRestaurantsOrderedBy, getAllPaymentMethods, toggleFilter } from "../selectors/restaurants";
//Components

import { TextField } from './../components/TextField/';
import { H1 } from './../components/H1/';
import { H3 } from './../components/H3/';
import { Paragraph } from './../components/Paragraph/';
import { Title } from './../components/Title/';
//styled-component
import styled from 'styled-components';

const Header = styled.header`
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  font-size: calc(10px + 2vmin);
  color: white;
`;
const Image = styled.img`
    height: 100px;
    width: 100px;
    margin-left:10px;
`;
class Restaurants extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.getRestaurants();
    }
    handleRating = () => {
        this.props.setOrderBy('rating');
    }
    handlePayment = (e) => {
        console.log('111')
        this.props.toggleFilter(e.target.value);
    }
    handleTimeDelivery = () => {
        this.props.setOrderBy('deliveryTimeId');
    }
    handleSearch = event => {
        const searchString = event.target.value;
        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(() => {
            this.props.getRestaurants(searchString);
        }, 1500);
    }
    render() {
        const { restaurants } = this.props
        return (
            <React.Fragment>
                <Header className="App-header">
                    <Image src="https://live.pystatic.com/webassets/common/logo-es-3f7be267ae60c49c55f747799efa5753.svg" />
                </Header>

                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', maxWidth: 1200, margin: '0 auto' }}>

                    <H1 id='h1' value='Delivery de comida online' />
                    <TextField
                        id='search'
                        name="search"
                        type="text"
                        placeholder="Ingrese el restaurant que desea buscar..."
                        onChange={this.handleSearch}
                    />

                    <div>
                        <Title id='filter' value='Filter By' />
                        <Paragraph id='rating' value='rating' />
                        <TextField
                            id="byRating"
                            type="checkbox"
                            checked={this.props.orderBy === 'rating'}
                            onClick={this.handleRating}
                            label="byRating"
                        />

                        <Paragraph id='deliveryTime' value='delivery Time' />
                        <TextField
                            id="byTimeDelivey"
                            type="checkbox"
                            checked={this.props.orderBy === 'deliveryTimeId'}
                            onClick={this.handleTimeDelivery}
                            label="byTimeDelivey"
                        />
                    </div>
                    <div>
                        <H3 id='h3' value='Seleccione un metodo de pago' />
                        {Object.keys(this.props.paymentMethods).map(key => {
                            const payment = this.props.paymentMethods[key];
                            return (
                                <React.Fragment key={key} >
                                    <label htmlFor={payment.id}>{payment.name}</label>
                                    <input id={payment.id} checked={!this.props.removedPayments[payment.id]} value={payment.id} type="checkbox" onChange={(e) => this.handlePayment(e)} label="byPayment" />
                                </React.Fragment>

                            )
                        })}
                    </div>
                    {restaurants.map((resto, key) => (
                        <li key={key}>
                            <ul>
                                <Paragraph id='name' value='Nombre Restaurant :' />
                                <Paragraph id='nameVal' value={resto.name} />
                            </ul>
                            <ul>
                                <Paragraph id='raiting' value='Puntuacion del Restaurant :' />
                                <Paragraph id='raitingVal' value={resto.rating} />
                            </ul>
                            <ul>
                                <Paragraph id='deliveryTime' value='Tiempo estimado de entrega :' />
                                <Paragraph id='deliveryTimeVal' value={resto.deliveryTime} />
                            </ul>
                        </li>
                    ))}
                </div>
            </React.Fragment>
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
    toggleFilter: toggleFilter => dispatch(ACTIONS.toggleFilter(toggleFilter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Restaurants);