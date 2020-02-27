import React from 'react'


interface IProps {
    onCloseVar : boolean
}

export class OnCloseStore {
    onCloseVar = false;
    get changeOnCloseVar() {
        return !this.onCloseVar;

    }
}

