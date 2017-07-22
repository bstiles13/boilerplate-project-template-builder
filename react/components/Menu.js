import React from 'react';

class Menu extends React.Component {
    render() {
        return (
            <div id='menu'>
                <h3 style={style.font}>Get Started</h3>
                <input onClick={this.props.setProject} id='front' className='checkbox' type='radio' name='menu' value='front'/>
                <label className='button menu-item' htmlFor='front'>Front</label>
                <input onClick={this.props.setProject} id='back' className='checkbox' type='radio' name='menu' value='back'/>
                <label className='button menu-item' htmlFor='back'>Back</label>
                <input onClick={this.props.setProject} id='full' className='checkbox' type='radio' name='menu' value='full'/>
                <label className='button menu-item' htmlFor='full'>Apps</label>
            </div>
        )
    }

    constructor(props) {
        super(props);
    }
}

var style = {
    font: {
        color: 'ivory',
        fontSize: '20px',
        fontWeight: 'bold'
    }
}

export default Menu;