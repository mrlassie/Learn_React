import React, { useState, useEffect } from 'react';
const TodoApp = () => {
  const [activity, setActivity] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [isStarted, setIsStarted] = useState(false);
  const [isAllCompleted, setIsAllCompleted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showResetButton, setShowResetButton] = useState(false);

  const handleAddActivity = () => {
    if (activity.trim() !== '') {
      setTodoList([...todoList, { name: activity, isCompleted: false }]);
      setActivity('');
    }
  };

  const handleStartActivity = () => {
    setIsStarted(true);
  };

  const handleCompleteActivity = () => {
    const updatedTodoList = [...todoList];
    updatedTodoList[activeIndex].isCompleted = true;
    setTodoList(updatedTodoList);

    if (activeIndex === todoList.length - 1) {
      setIsAllCompleted(true);
      setShowResetButton(true);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handleReset = () => {
    setActivity('');
    setTodoList([]);
    setIsStarted(false);
    setIsAllCompleted(false);
    setActiveIndex(0);
    setShowResetButton(false);
  };

  return (
    <div className="todo-container">
      <h1>Todo App</h1>
      {!isStarted && (
        <div className="activity-input">
          <input
            type="text"
            placeholder="Enter activity"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          />
          <button onClick={handleAddActivity} disabled={isStarted}>
            Add
          </button>
        </div>
      )}
      {isStarted && !isAllCompleted && (
        <div className="todo-list">
          <p className="todo-title">Todo List</p>
          {todoList.map((todo, index) => (
            <div
              key={index}
              className={`todo-item ${index === activeIndex ? 'active' : ''}`}
            >
              <p>{todo.name}</p>
              {index === activeIndex && (
                <button onClick={handleCompleteActivity}>Complete</button>
              )}
            </div>
          ))}
        </div>
      )}
      {isAllCompleted && (
        <p className="completion-notification">All activities completed!</p>
      )}
      {isStarted && showResetButton && (
        <button onClick={handleReset} className="reset-button">
          Reset
        </button>
      )}
      {!isStarted && (
        <button onClick={handleStartActivity} className="start-button">
          Start Activity
        </button>
      )}
    </div>
  );
};

export default TodoApp;
