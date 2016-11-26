/*eslint no-unused-vars: "off"*/ //don't show warnings for unused
import React, {Component} from 'react';
import Time from 'react-time'
import {Link, hashHistory} from 'react-router';
import {Row, Col} from 'react-materialize';
import {AppBar, Drawer, MenuItem, RaisedButton, FlatButton, Dialog, TextField, List, ListItem, Card, CardActions, CardHeader, CardTitle, CardText, FontIcon} from 'material-ui';
import _ from 'lodash';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Immutable from 'immutable';


class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Navigation/>
        </header>
        <main className="container">
          <Row>
            <Col s={12}>
              {this.props.children}
            </Col>
          </Row>
        </main>
        <footer>

        </footer>
      </div>
    );
  }
}

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => {
    this.setState({open: !this.state.open});
    //Logic here does not seem sound, but it works because of the async call to change state happening after if statement happens
    if (this.state.open) {
      document.querySelector('.navbar-fixed div button div svg').style.marginLeft = 0;
      //transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)'
    } else {
      document.querySelector('.navbar-fixed div button div svg').style.marginLeft = 200;
    }
  }

  handleTouchTap = () => { if(hashHistory.getCurrentLocation().pathname !== '/') hashHistory.push('/');}

  render() {

    return (
      <div>
        <div className="navbar-fixed">
          <MuiThemeProvider muiTheme={getMuiTheme()}>
            <AppBar
              onLeftIconButtonTouchTap={this.handleToggle}
            />
          </MuiThemeProvider>
        </div>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Drawer width={200} open={this.state.open}>
              <div id="drawer-title">INFO 370</div>
              <Link to="/"><MenuItem>Home</MenuItem></Link>
              <Link to="/viz"><MenuItem>Visualizations</MenuItem></Link>
              <Link to="/predict"><MenuItem>Prediction</MenuItem></Link>
            </Drawer>
        </MuiThemeProvider>
      </div>
    );
  }
}

//Default home page
class Home extends Component {
  render() {
    return (
      <Row>
        <Col s={12}>
          Home page, where we talk about the data, and everything
        </Col>
      </Row>
    );
  }
}

export {Home, App};
export default App;
