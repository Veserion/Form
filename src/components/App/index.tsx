import React from 'react';
import styled from '@emotion/styled'
import Form from '../Form';


const Root = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

interface IProps {
}

interface IState {
}


export default class App extends React.Component<IProps, IState>{

    render() {
        return <Root>
            <Form/>
        </Root>
    }

};
