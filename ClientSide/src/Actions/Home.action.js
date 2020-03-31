import { GREET, ADD_TODO } from "../Constants/global.constants";

let count = 0;

export const greet = () => (console.log("HAI"), {
    type: GREET
});


export const handleAddTodo = (Todo) => (console.log(Todo), {
    type: ADD_TODO,
    payload: {
        id: count++,
        todo: Todo
    }
});

export const toggleTodo = (id) => (console.log(id), {
    type: ADD_TODO
});

