import { GREET, ADD_TODO, TODO_FILTERS } from "../Constants/global.constants";

const initialState = {
    todos: [{ id: 1, todo: "One" }, { id: 2, todo: "two" }],
    visibilityFilter: TODO_FILTERS.ALL_TODOS
}

export default function (state = initialState, action) {

    switch (action.type) {
        case GREET:
            return {
                ...state
            };

        case ADD_TODO:
            state.todos.push(action.payload);
            return state;

        default:
            return state;
    }
}
