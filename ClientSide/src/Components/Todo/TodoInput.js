import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { greet, handleAddTodo } from "../../Actions/Home.action";

function TodoInput(props) {
  const [getdata, setdata] = useState({});

  const handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(name, value);
    setdata(prevState => ({ ...prevState, [name]: value }));
  };

  const addTodo = () => {
    props.handleAddTodo(getdata);
    setdata("");
    console.log(props);
  };

  return (
    <div>
      <input
        placeholder="Enter name"
        name="name"
        onChange={e => handleChange(e)}
      />
      <input
        placeholder="Enter courtType"
        name="courtType"
        onChange={e => handleChange(e)}
      />
      <input
        placeholder="Enter courtCount"
        name="countCount"
        onChange={e => handleChange(e)}
      />
      <input
        placeholder="Enter operatingTimes"
        name="operatingTimes"
        onChange={e => handleChange(e)}
      />
      <button onClick={addTodo}>Click here</button>
    </div>
  );
}

const mapStateToProps = state => ({ todos: state.homeReducer.todos });

export default connect(mapStateToProps, { greet, handleAddTodo })(TodoInput);
