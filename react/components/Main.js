import React from 'react';
import Navbar from './Navbar';
import Form from './Form';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Form></Form>
            </div>
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            placeholder: 'placeholder'
        }
    }
}

export default Main;