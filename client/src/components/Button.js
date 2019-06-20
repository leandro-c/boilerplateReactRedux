import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: 142px !important;
    border-radius: 4px;
    line-height: 2.2;
    margin-top: 20px;
    top: auto;
    height: 60px;
    padding: 11px;
    font-size: 1.5em;
    letter-spacing: 1px;
    background-color: #F52F41;
    font-family: Muli;
    font-weight: 700 !important;
    text-shadow: 0 0 18px rgba(125, 54, 0, .2);
`;


class ButtonPedidosYa extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Button>{this.props.text}</Button>
        );
    }
}

export default ButtonPedidosYa;