import React from 'react';
import isEmail from 'validator/lib/isEmail';
import FieldComponent from './FieldComponent';

export default class FieldComponentValidation extends React.Component {
    static displayName = 'field multi-input-validation';
    state = {
        fields: {
            name: '',
            email: '',
        },
        fieldErrors: {},
        people: [],
    };
    onInputChange = ({name, value, error}) => {
        const fields = this.state.fields;
        const fieldErrors = this.state.fieldErrors;

        fields[name] = value;
        fieldErrors[name] = error;
        this.setState({fields, fieldErrors});
    };
    onFormSubmit = (evt) => {
        const people = this.state.people;
        const person = this.state.fields;

        evt.preventDefault();

        if (this.validate()) {
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

    validate = () => {
        const person = this.state.fields;
        const fieldErrors = this.state.fieldErrors;
        const errMessages = Object.keys(fieldErrors)
            .filter((k) => fieldErrors[k]);

        if(!person.name) return true;
        if(!person.email) return true;
        if(errMessages.length) return true;

        return false;
    };

    render() {
        return (
            <div>
                <h1>Stateful Sign up Multi Sheet with Field Validation</h1>
                <form onSubmit={this.onFormSubmit}>
                    <FieldComponent
                        placeholder='Name'
                        name='name'
                        value={this.state.fields.name}
                        onChange={this.onInputChange}
                        validate={(val) => (val ? false : 'Name required')}
                    />
                    <span style={{color: 'red'}}>{this.state.fieldErrors.name}</span>

                    <br/>

                    <FieldComponent
                        placeholder='Email'
                        name='email'
                        value={this.state.fields.email}
                        onChange={this.onInputChange}
                        validate={(val) => (isEmail(val) ? false : 'Invalid email')}
                    />
                    <span style={{color: 'red'}}>{this.state.fieldErrors.email}</span>

                    <br/>

                    <input type='submit' disabled={this.validate()}/>
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