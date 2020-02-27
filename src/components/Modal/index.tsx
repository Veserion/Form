import React from 'react'
import styled from "@emotion/styled"
import close_window from '../../images/close_window.png'

const Root = styled.div`
position: absolute;
margin: 0 -8px;
top: 0px;
display: flex;
flex-direction: row;
justify-content: center;
width: 100vw;
height: 100vh;
background-color: rgba(15,15,15, 0.7);
`


const ModalWindow = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 300px;
height: 250px;
margin-top: 150px;
background: white;
border-radius: 5px;
/* border: 1px solid red; */
text-align: center;
`


const Text = styled.div`
margin-top: 80px;
font-family: 'Roboto', sans-serif;
`

const CloseButton = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
background-color: red;
border: 1px solid black;
border-radius: 5px;
padding: 0px 10px;
max-width: 50px;
height: 20px;
margin-left: auto;
margin-right: 10px;
margin-top: -105px;
`

interface IProps {
    label: string
    isOpen: boolean
}
interface IState {
    isOpen: boolean
}

export default class Modal extends React.Component<IProps, IState> {
    state = {
        isOpen: this.props.isOpen
    }

    handler = () => { () => { 
        this.setState({ isOpen: false });
    } }

    render() {
        const message = this.props.label;
        if (this.state.isOpen) {
            return <Root>
                <ModalWindow>
                    <CloseButton onClick={this.handler}>Close</CloseButton>
                    <Text>{message}</Text>
                </ModalWindow>
            </Root>
        }
        else {
            return null
        }
    }
}