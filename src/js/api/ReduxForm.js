import PropTypes from 'prop-types';
import React from 'react';
import isEmail from 'validator/lib/isEmail';
import FieldComponent from "../FieldComponent";
import CourseSelect from "../CourseSelect";

const Field = FieldComponent;
const Course = CourseSelect;

export default class ReduxForm extends React.Component {
    static displayName = 'redux-form';

    static propTypes = {
        people: PropTypes.array,
        isLoading: PropTypes.bool.isRequired,
        saveStatus: PropTypes.string.isRequired,
        fields: PropTypes.object,
        onSubmit: PropTypes.func.isRequired,
    };

    state = {
        fields: this.props.fields || {
            name: '',
            email: '',
            course: null,
            department: null,
        },
        people: this.props.people || [],
        fieldErrors: {},
        saveStatus: '',
    };

    UNSAFE_componentWillReceiveProps(update) {
        console.log('this.props.fields: ', this.props.fields, update);

        this.setState({ fields: update.fields });
    }

    onFormSubmit = (evt) => {
        const person = this.state.fields;
        console.log('person: ', person);
        evt.preventDefault();
        if (this.validate()) return;
        this.props.onSubmit([...this.state.people, person]);
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
        const errMessages = Object.keys(fieldErrors).filter(
            k => fieldErrors[k]
        );
        if (!person.name) return true;
        if (!person.email) return true;
        if (!person.course) return true;
        if (!person.department) return true;
        if (errMessages.length) return true;

        return false;
    };

    render(){
        if (this.props.isLoading) {
            return <img alt='loading' src='/img/loading.gif' />;
        }
        const dirty = Object.keys(this.state.fields).length;
        let status = this.props.saveStatus;
        if (status === 'SUCCESS' && dirty) status = 'READY';
        return (
            <div>
                <h1>
                    Redux Form
                </h1>
                <form onSubmit={this.onFormSubmit}>
                    <Field
                        name='name'
                        onChange={this.onInputChange}
                        placeholder='Name'
                        value={this.state.fields.name}
                        validate={(val) => (val ? false : 'Name required')}
                    />
                    <br/>
                    <Field
                        name='email'
                        onChange={this.onInputChange}
                        placeholder='Email'
                        value={this.state.fields.email}
                        validate={(val) => (isEmail(val) ? false : 'Invalid email')}
                    />
                    <br/>

                    <Course
                        department={this.state.fields.department}
                        course={this.state.fields.course}
                        onChange={this.onInputChange}
                    />

                    <br />
                    {{
                        SAVING: <input value='Saving...' type='submit' disabled />,
                        SUCCESS: <input value='Saved!' type='submit' disabled />,
                        ERROR: <input value='Saved Failed - Retry?'
                                      type='submit'
                                      disabled={this.validate()}
                        />,
                        READY: <input value='Submit'
                                      type='submit'
                                      disabled={this.validate()}
                        />,
                    }[status]}
                </form>
                <div>
                    <h3>People</h3>
                    { this.props.people ?
                        <ul>
                            {this.props.people.map(({name, email, department, course}, i) =>
                                <li key={i}>{[name, email, department, course].join(' - ')}</li>
                            )}
                        </ul> : <div>Nothing to show</div>
                    }
                </div>
            </div>
        );
    }

}