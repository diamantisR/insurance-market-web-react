import React from 'react';
import { Container } from 'react-bootstrap';

export const Layout = (props) => {
    return (
        <div>
            <Container>
                {props.children}
            </Container>
        </div>
    )
}