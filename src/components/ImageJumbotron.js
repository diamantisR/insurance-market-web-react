import React from 'react';
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from 'styled-components';
import fantasyImage from '../assets/adventure-fantasy.jpg';

const Styles = styled.div`
    .jumbo {
        background: url(${fantasyImage});
        background-size: 100% 100%;
        background-repeat: no-repeat;
        color: #fff;
        height: 250px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: transparent;
        opacity: 0.9;
        position: absolute;
        font-family: Helvetica, sans-serif;
        top: 20px;
        left: 20px;
        bottom: 0;
        right: 0;
        z-index: -1;
    }

    h3, h4 {
        text-shadow: 1px 1px grey;
        font-size: 35px;
    }

`;

export const ImageJumbotron = () => {
    return (
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay">
                <h3>Create your monsters</h3>
                <h4>Start the adventure</h4>
                </div>
                
            </Jumbo>
        </Styles>
    );
}