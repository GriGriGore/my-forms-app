import React from 'react';

export default class StateInputMulti extends React.Component {
    static displayName = 'multi-input';
    state = {
        fields: {
            name: '',
            email: '',
        },
        people: [],
    };
    onInputChange = (evt) => {
        const fields = this.state.fields;
        fields[evt.target.name] = evt.target.value;
        this.setState({fields: fields});
    };
    onFormSubmit = (evt) => {
        const people = [...this.state.people, this.state.fields];

        this.setState({
            people,
            fields: {
                name: '',
                email: '',
            },
        });
        evt.preventDefault();
        people.map((p, idx) =>
            console.log(`${p.name} (${p.email}) - ${idx}`));
    };

    render() {
        return (
            <div>
                <h1>Stateful Sign up Multi Sheet</h1>
                <form onSubmit={this.onFormSubmit}>
                    <input
                        placeholder='Name'
                        name='name'
                        value={this.state.fields.name}
                        onChange={this.onInputChange}
                    />
                    <input
                        placeholder='Email'
                        name='email'
                        value={this.state.fields.email}
                        onChange={this.onInputChange}
                    />
                    <input type='submit'/>
                </form>
                <div>
                    <h3>People</h3>
                    <ul>
                        {this.state.people.map(({name, email}, idx) =>
                            <li key={idx}>{name} ({email})</li>)}
                    </ul>
                </div>
            </div>
        );
    }
}
