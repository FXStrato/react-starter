/*eslint no-unused-vars: "off"*/ //don't show warnings for unused
import React, {Component} from 'react';
import Time from 'react-time'
import {Link, hashHistory} from 'react-router';
import {Row, Col} from 'react-materialize';
import {RaisedButton, FlatButton, Dialog, TextField, List, ListItem, Card, CardActions, CardHeader, CardTitle, CardText, FontIcon, Avatar} from 'material-ui';
import _ from 'lodash'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class Viz extends Component {
  render() {
    return (
    <Row>
      <Col s={12}>
        Page for rendering D3 visualizations
      </Col>
    </Row>
    );
  }
}

export default Viz;
