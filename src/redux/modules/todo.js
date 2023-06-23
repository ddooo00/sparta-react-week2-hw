//action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = " DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";

//action  추가
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

//투두 삭제 action

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

// isDone 변경하는 action
export const toggleStatusTodo = (id, isDone) => {
  return {
    type: TOGGLE_STATUS_TODO,
    payload: { id, isDone },
  };
};

// initial State
const initialState = {
  todos: [
    {
      id: "1",
      title: "리액트",
      body: "리액트를 배워봅시다",
      isDone: false,
    },
    {
      id: "2",
      title: "리덕스",
      body: "리덕스를 배워봅시다",
      isDone: true,
    },
  ],
};

// 리듀서
const todo = (state = initialState, action) => {
  switch (action.type) {
    //추가
    case ADD_TODO: {
      const { title, body } = action.payload;
      const tempNewTodo = {
        id: state.todos.length + 1,
        title: title,
        body: body,
        isDone: false,
      };
      let currentState = [...state.todos];
      currentState.push(tempNewTodo);
      return {
        todos: currentState,
      };
    }

    //삭제
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };

    //isDOne
    case TOGGLE_STATUS_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              isDone: action.payload.isDone,
            };
          } else {
            return todo;
          }
        }),
      };
    default:
      return state;
  }
};

export default todo;
