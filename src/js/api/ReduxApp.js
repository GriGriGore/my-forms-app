import React from 'react';
import thunkMiddleware from 'redux-thunk';
import {connect, Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {reducer} from "./ReduxReducers.js";
import {fetchPeople, savePeople} from "./ReduxActions.js";
import ReduxForm from "./ReduxForm";

const Form = ReduxForm;
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
const ReduxFormConnector = connect(mapStateToProps, mapDispatchToProps)(Form);

export default class ReduxApp extends React.Component{
    static displayName = 'redux-app';
    componentDidMount() {
        store.dispatch(fetchPeople());
    }

    render(){
        return (
            <Provider store={store}>
                <ReduxFormConnector/>
            </Provider>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.isLoading,
        fields: state.person,
        people: state.people,
        saveStatus: state.saveStatus,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSubmit: (people) => {
            dispatch(savePeople(people));
        },
    }
}