import React from 'react';
import isEmail from 'validator/lib/isEmail';

export default class StateInputMulti extends React.Component {
    static displayName = 'multi-input-validation';
    state = {
        fields: {
            name: '',
            email: '',
        },
        fieldErrors: {},
        people: [],
    };
    onInputChange = (evt) => {
        const fields = this.state.fields;
        fields[evt.target.name] = evt.target.value;
        this.setState({fields: fields});
    };
    onFormSubmit = (evt) => {
        const people = [...this.state.people, this.state.fields];
        const person = this.state.fields;
        const fieldErrors = this.validate(person);
        this.setState({fieldErrors});
        evt.preventDefault();

        if(Object.keys(fieldErrors).length){
            return;
        }

        this.setState({
            people: people.concat(person),
            fields: {
                name: '',
                email: '',
            },
        });

        people.map((p, idx) =>
            console.log(`${p.name} (${p.email}) - ${idx}`));
    };

    validate = (person) => {
        const errors = {};
        if (!person.name) {
            errors.name = 'Name required!';
        }
        if (!person.email) {
            errors.email = 'Email required!';
        }
        if (person.email && !isEmail(person.email)) {
            errors.email = 'Invalid email';
        }
        return errors;
    };

    render() {
        return (
            <div>
                <h1>Stateful Sign up Multi Sheet with Validation</h1>
                <form onSubmit={this.onFormSubmit}>
                    <input
                        placeholder='Name'
                        name='name'
                        value={this.state.fields.name}
                        onChange={this.onInputChange}
                    />
                    <span style={{color: 'red'}}>{this.state.fieldErrors.name}</span>

                    <br/>

                    <input
                        placeholder='Email'
                        name='email'
                        value={this.state.fields.email}
                        onChange={this.onInputChange}
                    />
                    <span style={{color: 'red'}}>{this.state.fieldErrors.email}</span>

                    <br/>

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
