import React from 'react';
import styled from '@emotion/styled';
import Input from '../Input';
import axios from 'axios';
import { buildModalDialog } from '../Modal';
import notificationService from '../../services/notificationService';


const Root = styled.div`
position: absolute;
display:flex;
flex-direction: column;
align-items: flex-start;//тут нет свойства left
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
`;
const Title = styled.div`
font-size: 23px;
color: white;
font-family: 'Roboto', sans-serif;`;

const InputWrapper = styled.div`
font-size: 15px;
& > * {
    margin: 5px 0;
}`;

const Label = styled.div`
font-size: inherit;
color: white;
font-family: 'Roboto', sans-serif;
`;

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
`;

interface IProps {
}

interface IState {
    password: string
    username: string
    target: string
    isLoading: boolean
}


export default class Form extends React.Component<IProps, IState> {

    state = {
        password: '',
        username: '',
        target: '',
        isLoading: false
    };


    handleLikeWall = async () => {
        const {username, password, target} = this.state;
        const isValid = validateForm(username, password, target);
        if (!isValid) {
            notificationService.notify(buildModalDialog('Invalid Form'));
            this.setState({isLoading: false});
            return;
        }

        this.setState({isLoading: true});
        const resData = {username, password, target, count: 2};
        const res = await axios.post('http://localhost:8080/api/like', resData);
        this.setState({isLoading: false});
        console.log(res);

    };

    handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
        this.setState({password: e.target.value});

    handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) =>
        this.setState({username: e.target.value});

    handleChangeTarget = (e: React.ChangeEvent<HTMLInputElement>) =>
        this.setState({target: e.target.value});

    render() {
        const {username, password, target, isLoading} = this.state;
        // const message = 'Invalid Form'
        if (isLoading) return <Loading/>;
        return <Root>
            <Title>Пролайкай стену</Title>
            <InputWrapper>
                <Label>Username</Label>
                <Input value={username} onChange={this.handleChangeUsername} placeholder={'Ваш Username'}/>
            </InputWrapper>
            <InputWrapper>
                <Label>Пароль</Label>
                <Input value={password} onChange={this.handleChangePassword} placeholder={'Ваш пароль'}
                       type="password"/>
            </InputWrapper>
            <InputWrapper>
                <Label>Username цели</Label>
                <Input value={target} onChange={this.handleChangeTarget} placeholder={'Username цели'}/>
            </InputWrapper>
            <Button onClick={this.handleLikeWall}>Пролайкать</Button>
        </Root>;
    }
}

const validateForm = (...args: string[]) =>
    args.length > 0 && args.every((arg: string) => arg !== '' && !arg.includes(' '));


const Loading = () => <div>Loading...</div>;
