import React, { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'

function TodosList({ todos }) {

    const [getTodo, setTodo] = useState([]);

    useEffect(() => {
        console.log("Changed");
        setTodo(todos);
    }, [todos]);

    console.log(todos);

    return (
        <Fragment>
            <ul>
                {
                    getTodo.map((todo, i) => {
                        return <li key={i}>
                            {todo.todo}
                        </li>
                    })
                }
            </ul>
        </Fragment>
    )
}

const mapStateToProps = state => ({ todos: state.homeReducer.todos });

export default connect(mapStateToProps, null)(TodosList);