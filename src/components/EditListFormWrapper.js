import React from 'react';
import NewListForm from './NewListForm.js';
import { updateList, deleteList } from '../actions/myLists.js';
import { setFormDataForEdit, resetListForm } from '../actions/newListForm.js';
import { connect } from 'react-redux';

class EditListFormWrapper extends React.Component {
    componentDidMount() {
        this.props.list && this.props.setFormDataForEdit(this.props.list)
    }

    componentDidUpdate(prevProps) {
        this.props.list && !prevProps.list && this.props.setFormDataForEdit(this.props.list)
    }

    componentWillMount() {
        this.props.resetListForm()
    }

    handleSubmit = (formData) => {
        const { updateList, list, history } = this.props
        debugger
        updateList({
            ...formData,
            listId: list.id
        }, history)
    }

    render() {
        const { history, deleteList, list } = this.props
        const listId = list ? list.id : null
        return <>
            <NewListForm editMode handleSubmit={this.handleSubmit} />
            <br/>
            <button style={{color: "red"}} onClick={() => deleteList(listId, history)}>Delete this List</button>
            </>
    }
}

export default connect(null, { updateList, setFormDataForEdit, resetListForm, deleteList })(EditListFormWrapper);