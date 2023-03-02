import React, { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Todo from "../components/Todo";
import { toast } from "react-toastify";
import { db } from "../firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `bg-slate-100 max-w-[500] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-red-400 text-slate-200`,
  count: `text-center p-2`,
};

function Home() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //create todos
  const createTodo = async (e) => {
    e.preventDefault();
    if (input === "") {
      toast.error("Please enter the valid todo");
      return;
    }
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    });
    setInput("");
  };
  // read todos

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  //update todos

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  //delete todos
  const deleteTodo = async (id) => {
    if(deleteTodo) {
    window.confirm("Do you want to delete the Todo ?")
    }
    await deleteDoc(doc(db, "todos", id));
    toast.success ("Todo deleted sucessfully")
  };
   
 

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>ToDo App</h3>
        <form onSubmit={createTodo} className={style.form}>
          <input
            className={style.input}
            type="text"
            value={input}
            placeholder="Add Todo"
            onChange={(e) => setInput(e.target.value)}
          />
          <button className={style.button}>
            <AiOutlinePlus size={30} />
          </button>
        </form>

        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
        {todos.length < 1 ? null : (
          <p className={style.count}>{`You have ${todos.length} todos`}</p>
        )}
      </div>
    </div>
  );
}

export default Home;
