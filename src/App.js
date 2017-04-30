import React, {Component, PropTypes} from 'react';
import {Link, hashHistory} from 'react-router';
import './App.css';
import {Navbar, Nav} from 'react-bootstrap';

class App extends Component {
    static propTypes = {
        children: PropTypes.node
    };

    componentDidMount() {
        hashHistory.push('/home');
    }

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
                            <Link to={'/home'}>HOME</Link>
                        </li>
                        <li>
                            <Link to={'/resume'}>RESUME</Link>
                        </li>
                        <li>
                            <Link to={'/photos'}>PHOTOS</Link>
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
