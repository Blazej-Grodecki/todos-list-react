import "./style.css";

const Tasks = ({ tasks, hideDone, removeTasks, toggleTaskDone }) => (
  <ul className="tasks">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`tasks__item${
          task.done && hideDone ? " tasks__done--hidden" : ""
        }`}
      >
        <button 
          className="tasks__button tasks__button--toggleDone"
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✓" : ""}
        </button>
        <span className={`tasks${task.done ? " tasks__done" : ""}`}>
          {task.content}
        </span>
        <button 
          className="tasks__button tasks__button--remove"
          onClick={() => removeTasks(task.id)}
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;