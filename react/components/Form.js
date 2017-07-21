import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form id='form' action='/download' method='POST'>
                <nav className="panel" style={this.props.project != 'front' ? style.back : style.front}>
                    <p className="panel-heading">
                        Front
                    </p>
                    <div className="panel-block">
                        <aside className="menu">
                            <p className="menu-label">
                                HTML
                            </p>
                            <ul className="menu-list">
                                <li><a><input id='html' className='checkbox' type="checkbox" name="html" value="html" disabled={this.props.project != "front" ? 'disabled' : ''} />
                                <label className='button' htmlFor="html">Plain</label></a></li>
                                <li>
                                    <a>Add-ons (Optional):</a>
                                    <ul>
                                        <li><input id='checkbox_id' className='checkbox' type="checkbox" value="jquery" name="javascript" disabled={this.props.project != "front" ? 'disabled' : ''} />
                                        <label className='button' htmlFor="checkbox_id">jQuery</label></li>
                                        <li><input id="bootstrap" className='checkbox' type="radio" value="bootstrap" name="css" disabled={this.props.project != "front" ? 'disabled' : ''} />
                                        <label className='button' htmlFor="bootstrap">Bootstrap</label></li>
                                        <li><input id="mdl" className='checkbox' type="radio" value="mdl" name="css" disabled={this.props.project != "front" ? 'disabled' : ''} />
                                        <label className='button' htmlFor="mdl">Material Design Lite</label></li>
                                        <li><input id="materialize" className='checkbox' type="radio" value="materialize" name="css" disabled={this.props.project != "front" ? 'disabled' : ''} />
                                        <label className='button' htmlFor="materialize">Materialize</label></li>
                                        <li><input id="bulma" className='checkbox' type="radio" value="bulma" name="css" disabled={this.props.project != "front" ? 'disabled' : ''} />
                                        <label className='button' htmlFor="bulma">Bulma</label></li>
                                    </ul>
                                </li>
                            </ul>
                        </aside>
                    </div>
                </nav>
                <nav className="panel" style={this.props.project != 'back' ? style.back : style.front}>
                    <p className="panel-heading">
                        Back
                    </p>
                    <div className="panel-block">
                        <aside className="menu">
                            <p className="menu-label">
                                Server
                            </p>
                            <ul className="menu-list">
                                <li><input id="http" className='checkbox' type="radio" value="http" name="back" disabled={this.props.project != "back" ? 'disabled' : ''} />
                                <label className='button' htmlFor="http">HTTP</label></li>
                                <li><input id="express" className='checkbox' type="radio" value="express" name="back" disabled={this.props.project != "back" ? 'disabled' : ''} />
                                <label className='button' htmlFor="express">Express</label></li>
                            </ul>
                            <p className="menu-label">
                                Database
                            </p>
                            <ul className="menu-list">
                                <li><input id="mysql" className='checkbox' type="radio" value="mysql" name="back" disabled={this.props.project != "back" ? 'disabled' : ''} />
                                <label className='button' htmlFor="mysql">MySQL</label></li>
                                <li><input id="sequelize" className='checkbox' type="radio" value="sequelize" name="back" disabled={this.props.project != "back" ? 'disabled' : ''} />
                                <label className='button' htmlFor="sequelize">Sequelize</label></li>
                                <li><input id="mongodb" className='checkbox' type="radio" value="mongodb" name="back" disabled={this.props.project != "back" ? 'disabled' : ''} />
                                <label className='button' htmlFor="mongodb">MongoDB</label></li>
                                <li><input id="mongoose" className='checkbox' type="radio" value="mongoose" name="back" disabled={this.props.project != "back" ? 'disabled' : ''} />
                                <label className='button' htmlFor="mongoose">Mongoose</label></li>
                            </ul>
                        </aside>
                    </div>
                </nav>
                <nav className="panel" style={this.props.project != 'full' ? style.back : style.front}>
                    <p className="panel-heading">
                        Applications
                    </p>
                    <div className="panel-block">
                        <aside className="menu">
                            <ul className="menu-list">
                                <li><input id="react" className='checkbox' type="radio" value="react" name="app" disabled={this.props.project != "full" ? 'disabled' : ''} />
                                <label className='button' htmlFor="react">React</label></li>
                            </ul>
                            <ul className="menu-list">
                                <li><input id="vue" className='checkbox' type="radio" value="vue" name="app" disabled={this.props.project != "full" ? 'disabled' : ''} />
                                <label className='button' htmlFor="vue">Vue</label></li>
                            </ul>
                            <ul className="menu-list">
                                <li><input id="handlebars" className='checkbox' type="radio" value="handlebars" name="app" disabled={this.props.project != "full" ? 'disabled' : ''} />
                                <label className='button' htmlFor="handlebars">Handlebars</label></li>
                            </ul>
                        </aside>
                    </div>
                </nav>
                <input id='submit' className='button is-primary is-large' type="submit" value="Submit" />
            </form>
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            placeholder: 'placeholder'
        }
    }
}

var style = {
    front: {
        zIndex: 0
    },
    back: {
        zIndex: -2
    }
}

export default Form;