import React from 'react';
import Navbar from './Navbar';
import Menu from './Menu';
import Form from './Form';
import Tint from './Tint';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Menu setProject={this.setProject.bind(this)}/>
                <Form project={this.state.project}/>
                <Tint />
            </div>
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            project: ''
        }
    }

    componentDidUpdate() {
        console.log(this.state.project);
    }

    setProject(e) {
        console.log(e.target.value);
        this.setState({project: e.target.value})
        document.getElementById("form").reset();
    }
}

export default Main;