import React from "react";
import styled from "@emotion/styled"
import Input from "../Input"
import css from "@emotion/core"
import img from '/Users/workstation/myProjects/form/src/images/bg.jpg'

const MainRoot = styled.div`
margin: -8px;
width: 100vw;
height: 100vh;
background-image: url(${img});
background-size: cover;
opacity: 1;
`

const Root = styled.div`
position: absolute;
display:flex;
flex-direction: column;
align-items: left;
background: rgba(15,15,15, 0.7);
min-width: 300px;
min-height: 300px;
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
    margin: 5px 0;
}`

const Label = styled.div`
font-size: inherit;
color: white;
font-family: 'Roboto', sans-serif;
`

const Button = styled.div`
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
`

interface IProps {
}
interface IState {
}


export default class Form extends React.Component<IProps, IState> {
    render() {
        return <MainRoot>
            <Root>
                <Title>Пролайкай стену</Title>
                <InputWrapper   >
                    <Label>Username</Label>
                    <Input placeholder={'   Ваш Username'} />
                </InputWrapper>
                <InputWrapper   >
                    <Label>Пароль</Label>
                    <Input placeholder={'   Ваш пароль'} />
                </InputWrapper>
                <InputWrapper   >
                    <Label>Username цели</Label>
                    <Input placeholder={'   Username цели'} />
                </InputWrapper>
                <Button>Пролайкать</Button>
            </Root>
        </MainRoot>
    }
}