export default function Todo ({todo, deleteTodo}) {

    let onClickDeleteTodo = () => {
        deleteTodo(todo.id);
    }

    return (
        <div>
            {todo.id}.
            title : {todo.title}
            <br/>
            description : {todo.description}
            <button onClick={onClickDeleteTodo}>delete</button>
        </div>
    );
}