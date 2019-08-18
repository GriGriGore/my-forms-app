import React from 'react';

export default class StateInput extends React.Component {
    static displayName = 'basic-input';
    state = {
        name: '',
        names: [],
    };
    onChangeName = (evt) => {
        this.setState({name: evt.target.value});
    };
    onFormSubmit = (evt) => {
        const names = [...this.state.names, this.state.name];

        this.setState({
            names: names,
            name: '',
        });
        evt.preventDefault();
        names.map((name, idx) => console.log(name + ' - ' + idx));
    };

    render() {
        return (
            <div>
                <h1>Stateful Sign up Sheet</h1>
                <form onSubmit={this.onFormSubmit}>
                    <input
                        placeholder='Name'
                        value={this.state.name}
                        onChange={this.onChangeName}
                    />
                    <input type='submit'/>
                </form>
                <div>
                    <h3>Names</h3>
                    <ul>
                        {this.state.names.map((name, i) => <li key={i}>{name}</li>)}
                    </ul>
                </div>
            </div>
        );
    }
}
