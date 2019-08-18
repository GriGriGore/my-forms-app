import React from 'react';

export default class BasicButton extends React.Component {
    static displayName = '01-basic-button';
    /*onGreatClick = (evt) => {
        console.log('The user clicked button 1: great', evt);
    };
    onAmazingClick = (evt) => {
        console.log('The user clicked button 2: amazing', evt);
    };*/
    onButtonClick = (evt) => {
        const btn = evt.target;
        console.log(`The user clicked ${btn.name}: ${btn.value}`, evt);
    };
    render(){
        return(
            <div>
                <h1>What do you think of React?</h1>
                <button
                    name='button-1'
                    value='great'
                    /*onClick={this.onGreatClick}*/
                    onClick={this.onButtonClick}
                >
                    Great
                </button>
                <button
                    name='button-2'
                    value='amazing'
                    /*onClick={this.onAmazingClick}*/
                    onClick={this.onButtonClick}
                >
                    Amazing
                </button>
            </div>
        );
    }
}
