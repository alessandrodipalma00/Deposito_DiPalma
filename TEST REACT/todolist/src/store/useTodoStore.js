import { create } from "zustand";
import axios from "axios";

export const useTodoStore = create((set,get) =>({
    todos :[],
    loading: false,
    error:null,
    selectedTodo: null,

    fetchTodos: async () =>{
        if(get().todos.length > 0) return;
        set({
            loading: true,
            error: null
        });

        try {
            const response = await axios.get("https://dummyjson.com/todos");
            set({todos: response.data.todos.slice(0,10), loading: false});
        } catch (err) {
            set({error: err.message, loading: false});
        }

    },

    fetchTodoById: async (id) => {
        set({loading : true, error: null, selectedTodo: null});
        try {
            const todoLocale = get().todos.find((t) => t.id === parseInt(id));

            if (todoLocale) {
                set({selectedTodo: todoLocale, loading: false});

            } else {
                const response = await axios.get(`https://dummyjson.com/todos/${id}`);
                set({selectedTodo : response.data, loading: false});
            }
        } catch (err) {
            set({error: err.message, loading: false});
        }
    },

    addTodo : async(nuovoTodo) => {
        set({error: null});
        try{
            const response = await axios.post(`https://dummyjson.com/todos/add`, {
                todo : nuovoTodo.todo,
                completed : false,
                userId : nuovoTodo.userId || 1,
            });

            const todoCreato ={
                ...response.data,
                id: Date.now(),
            };

            set((state) =>({
                todos:[todoCreato,...state.todos],
            }));
        } catch(err){
            set({error: err.message});
        }
    },

    toggleTodoCompletion : async (id) => {
        set({error: null});
        try{
            const todoCorrente = get(). todos.find((t) => t.id === id);
            if (!todoCorrente) return;

            const response = await axios.put(`https://dummyjson.com/todos/${id}`,{
                completed : !todoCorrente.completed,
            });

            set((state) =>({
                todos : state.todos.map((t)=>
                t.id === id ? {...t, completed: response.data.completed} : t),

                selectedTodo: state.selectedTodo?.id === id
                ? {... state.selectedTodo, completed: response.data.completed}
                : state.selectedTodo
            }));
        } catch (err) {
            set({error: err.message});
        }
    },

    deleteTodo : async (id) => {
        set({ error: null});
        try{
            await axios.delete(`https://dummyjson.com/todos/${id}`);

            set((state) =>({
                todos:state.todos.filter((t) => t.id !== id),
            }));
        } catch (err){
            set({error: err.message});
        }
    },

}));