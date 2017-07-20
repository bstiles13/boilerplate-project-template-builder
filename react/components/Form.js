import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form id='form' action='/preview' method='POST'>
                <nav className="panel">
                    <p className="panel-heading">
                        Front
                    </p>
                    <div className="panel-block">
                        <aside class="menu">
                            <p class="menu-label">
                                HTML
                            </p>
                            <ul className="menu-list">
                                <li><a><input id='html' className='checkbox' type="checkbox" name="html" value="html" disabled={(this.state.toggle) ? 'disabled' : ''}/>
                                <label className='button' htmlFor="html">Plain</label></a></li>
                                <li>
                                    <a>Add-ons (Optional):</a>
                                    <ul>
                                        <li><input id='checkbox_id' className='checkbox' type="checkbox" value="jquery" name="javascript" />
                                        <label className='button' htmlFor="checkbox_id">jQuery</label></li>
                                        <li><input id="bootstrap" className='checkbox' type="radio" value="bootstrap" name="css" />
                                        <label className='button' htmlFor="bootstrap">Bootstrap</label></li>
                                        <li><input id="mdl" className='checkbox' type="radio" value="mdl" name="css" />
                                        <label className='button' htmlFor="mdl">Material Design Lite</label></li>
                                        <li><input id="materialize" className='checkbox' type="radio" value="materialize" name="css" />
                                        <label className='button' htmlFor="materialize">Materialize</label></li>
                                        <li><input id="bulma" className='checkbox' type="radio" value="bulma" name="css" />
                                        <label className='button' htmlFor="bulma">Bulma</label></li>
                                    </ul>
                                </li>
                            </ul>
                        </aside>
                    </div>
                </nav>
                <nav className="panel">
                    <p className="panel-heading">
                        Back
                    </p>
                    <div className="panel-block">
                        <aside class="menu">
                            <p class="menu-label">
                                Server
                            </p>
                            <ul className="menu-list">
                                <li><input id="http" className='checkbox' type="radio" value="http" name="server" />
                                <label className='button' htmlFor="http">HTTP</label></li>
                                <li><input id="express" className='checkbox' type="radio" value="express" name="server" />
                                <label className='button' htmlFor="express">Express</label></li>
                            </ul>
                        </aside>
                    </div>
                </nav>
                <nav className="panel">
                    <p className="panel-heading">
                        Applications
                    </p>
                    <div className="panel-block">
                        <aside class="menu">
                            <ul className="menu-list">
                                <li><input id="react" className='checkbox' type="radio" value="react" name="app" />
                                <label className='button' htmlFor="react">React</label></li>
                            </ul>
                            <ul className="menu-list">
                                <li><input id="vue" className='checkbox' type="radio" value="vue" name="app" />
                                <label className='button' htmlFor="vue">Vue</label></li>
                            </ul>
                            <ul className="menu-list">
                                <li><input id="handlebars" className='checkbox' type="radio" value="handlebars" name="app" />
                                <label className='button' htmlFor="handlebars">Handlebars</label></li>
                            </ul>
                        </aside>
                    </div>
                </nav>
                <input type="submit" value="Submit" />
            </form>
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        }
    }
}

export default Form;