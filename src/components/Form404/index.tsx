import React from 'react'
import styled from '@emotion/styled'
import { withRouter, RouteComponentProps } from "react-router-dom";
const Root = styled.div`
background-size: cover;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
font-family: 'Roboto', sans-serif;
`

const Window404 = styled.div`
display: flex;
flex-direction: column;
background-color: rgba(15,15,15, 0.7);
width: 40vw;
height: 40vh;
margin-top: 22vh;
border-radius: 5px;
`

const Text = styled.div`
margin-top: 60px;
font-size: 25px;
color: white;
text-align: center;
font-family: 'Roboto', sans-serif;
`

const Button = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background-color: white;
width: 200px;
height: 50px;
border: 1px solid black;
border-radius: 5px;
font-size: 15px;
margin-left: calc((40vw - 200px)/2);
margin-top: 60px;
outline: none;
font-family: 'Roboto', sans-serif;
text-align: center;
`

interface IProps extends RouteComponentProps {

}

interface IState {
}

// function handleClick() {
//     // let history = useHistory();
//     History.push("/");
// }

class Form404 extends React.Component<IProps, IState> {

    handleGoHome = () => this.props.history.push('/')

    render() {
        return (
            <Root>
                <Window404>
                    <Text>Error 404. <br /> Страница не найдена.</Text>
                    <Button onClick={this.handleGoHome}>Вернуться на главную страницу</Button>
                </Window404>
            </Root>
        )
    }
}

export default withRouter(Form404);