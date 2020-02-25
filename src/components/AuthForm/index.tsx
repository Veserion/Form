import React from "react";
import styled from "@emotion/styled"
import Input from "../Input"

const Root = styled.div`
position: absolute;
display:flex;
flex-direction: column;
margin-top: 50px;
align-items: left;
background: rgba(15,15,15, 0.7);
min-width: 300px;
min-height: 250px;
padding: 30px;
left: calc((100vw - 400px)/2);
top: 60px;
& > * {
    margin: 10px 0;
}
border-radius: 5px;
`
const Title = styled.div`
font-size: 23px;
color: white;
font-family: 'Roboto', sans-serif;`

const InputWrapper = styled.div`
font-size: 15px;
& > * {
    margin: 10px 0;
}`

const Label = styled.div`
font-size: inherit;
color: white;
font-family: 'Roboto', sans-serif;
`

const SignIn = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
background-color: white;
border: 1px solid black;
border-radius: 5px;
outline: none;
width: 110px;
height: 35px;
text-align: center;
font-family: 'Roboto', sans-serif;
background-color: white;
color: black;
font-size: 15px;
`

const SignUp = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
margin-left: 10px;
border: 1px solid white;
border-radius: 5px;
outline: none;
width: 110px;
height: 35px;
text-align: center;
font-family: 'Roboto', sans-serif;
background-color: inherit;
color: white;
`
const ButtonWrapper = styled.div`
margin-bottom: 0px;
display: flex;
flex-direction: row;
justify-content: start;
`

interface IProps {
}
interface IState {
}


export default class Form extends React.Component<IProps, IState> {
    render() {
        return <Root>
            <Title>Авторизация</Title>
            <InputWrapper>
                <Label>Username</Label>
                <Input placeholder={'Введите Username'} />
            </InputWrapper>
            <InputWrapper>
                <Label>Пароль</Label>
                <Input placeholder={'Введите пароль'} />
            </InputWrapper>
            <ButtonWrapper>
                <SignIn>Войти</SignIn>
                <SignUp>Регистрация</SignUp>
            </ButtonWrapper>
        </Root>
    }
}