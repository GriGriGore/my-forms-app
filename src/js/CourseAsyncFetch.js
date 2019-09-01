import React from 'react';
import isEmail from 'validator/lib/isEmail';
import FieldComponent from "./FieldComponent";
import CourseSelect from "./CourseSelect";

const Field = FieldComponent;

export default class CourseAsyncFetch extends React.Component {
    static displayName = 'course-sync-fetch';
    state = {
        fields: {
            name: '',
            email: '',
            course: null,
            department: null,
        },
        fieldErrors: {},
        people: [],
    };

    onFormSubmit = (evt) => {
        const people = this.state.people;
        const person = this.state.fields;

        evt.preventDefault();

        if (this.validate()) return;

        this.setState({
            people: people.concat(person),
            fields: {
                name: '',
                email: '',
                course: null,
                department: null,
            },
        });
    };

    onInputChange = ({name, value, error}) => {
        const fields = this.state.fields;
        const fieldErrors = this.state.fieldErrors;

        fields[name] = value;
        fieldErrors[name] = error;

        this.setState({fields, fieldErrors});
    };

    validate = () => {
        const person = this.state.fields;
        const fieldErrors = this.state.fieldErrors;
        const errMessage = Object.keys(fieldErrors).filter(
            (key) => fieldErrors[key]
        );
        if (!person.name) return true;
        if (!person.email) return true;
        if (!person.course) return true;
        if (!person.department) return true;
        if (errMessage.length) return true;
    };

    render() {
        return (
            <div>
                <h1>Course Sync Fetch</h1>
                <form onSubmit={this.onFormSubmit}>
                    <Field
                        placeholder='Name'
                        name='name'
                        value={this.state.fields.name}
                        onChange={this.onInputChange}
                        validate={(val) => (val ? false : 'Name required')}
                    />
                    <br/>
                    <Field
                        placeholder='Email'
                        name='email'
                        value={this.state.fields.email}
                        onChange={this.onInputChange}
                        validate={(val) => (isEmail(val) ? false : 'Invalid email')}
                    >
                    </Field>
                    <br/>
                    <CourseSelect
                        department={this.state.fields.department}
                        course={this.state.fields.course}
                        onChange={this.onInputChange}
                    />
                    <input type='submit' disabled={this.validate()}/>
                </form>
                <div>
                    <h3>People</h3>
                    <ul>
                        {this.state.people.map(({name, email, department, course}, i) =>
                            <li key={i}>{[name, email, department, course].join(' - ')}</li>)
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
