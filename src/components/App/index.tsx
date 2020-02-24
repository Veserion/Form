import React from 'react';
import styled from '@emotion/styled'
import Form from '../Form';
import bg from '../../images/bg.jpg'
import { Route, Router, Switch} from 'react-router-dom';
import { History } from 'history';
import Form404 from '../Form404';

const Background = styled.div`
margin: -8px;
width: 100vw;
height: 100vh;
background-image: url(${bg});
background-size: cover;
opacity: 1;
`

interface IProps {
history: History;
}

interface IState {
}


export default class App extends React.Component<IProps, IState>{

    render() {
        return <Background>
            <Router history={this.props.history}>
                <Switch>
                <Route exact path="/" component={Form}/>
                <Route component={Form404}/>
                </Switch>
            </Router>
        </Background>
    }

};
