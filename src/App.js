import React, {Component, PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import './App.css';
import {Navbar, Nav} from 'react-bootstrap';

class App extends Component {
    static propTypes = {
        children: PropTypes.node
    };

    render() {
        return (
            <div className="App">
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            Volodymyr Ilemskyi
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <li>
                            <IndexLink activeClassName='active' to={'/'}>HOME</IndexLink>
                        </li>
                        <li>
                            <Link activeClassName='active' to={'/resume'}>RESUME</Link>
                        </li>
                        <li>
                            <Link activeClassName='active' to={'/photos'}>PHOTOS</Link>
                        </li>
                    </Nav>
                </Navbar>
                <main className="App-intro">
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default App;
