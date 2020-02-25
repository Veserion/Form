import React from 'react'
import styled from "@emotion/styled"

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
width: 300px;
height: 250px;
margin-top: 150px;
background: white;
border-radius: 5px;//в border-radius указывается только размер, для того что ты написал надо использовать "border: 5px solid black"
text-align: center;
`


const Text = styled.div`

`

const CloseButton = styled.button`
background-color: red;
width: 100px;
height: 20px;
right: -20px;
margin-top: 20px;
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

    handler = () => { this.setState({ isOpen: false }) }

    render() {
        const message = this.props.label;
        return this.state.isOpen
            ? <Root>
                <ModalWindow>
                    <CloseButton onClick={this.handler}> Close</CloseButton>
                    <Text>{message}</Text>
                </ModalWindow>
            </Root>
            : null;
    }
}


export const buildModalDialog = (label: string, isOpen = true) => <Modal label={label} isOpen={isOpen}/>;
