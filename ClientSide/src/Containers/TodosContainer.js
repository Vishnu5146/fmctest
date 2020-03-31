import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import { TODO_FILTERS } from '../Constants/global.constants'



const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case TODO_FILTERS.ALL_TODOS:
            return todos
        case TODO_FILTERS.COMPLETED_TODOS:
            return todos.filter(t => t.completed)
        case TODO_FILTERS.ACTIVE_TODOS:
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = state => ({
    todos: getVisibleTodos(state, state.homeReducer.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)