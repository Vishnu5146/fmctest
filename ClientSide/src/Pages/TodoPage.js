import React, { useState, useEffect } from "react";

import TodoInput from "../Components/Todo/TodoInput";
import TodosList from "../Components/Todo/TodosList";

function TodoPage() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <TodoInput />
      <TodosList />
    </div>
  );
}

export default TodoPage;
