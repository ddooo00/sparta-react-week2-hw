//action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = " DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";

//action creator 추가
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

//투두 지우는 action

export const deleteTodo = (playload) => {
  return {
    type: DELETE_TODO,
    playload,
  };
};

// isDone 변경하는 action
export const toggleStatusTodo = (payload) => {
  return {
    type: TOGGLE_STATUS_TODO,
    payload,
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
      isDone: false,
    },
  ],
};

// 리듀서
const todo = (state = initialState, action) => {
  switch (action.type) {
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

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case TOGGLE_STATUS_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
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
