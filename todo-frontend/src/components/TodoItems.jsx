import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick, onToggleComplete }) => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 pb-8">
      <div className="space-y-3">
        {todoItems.length > 0 ? (
          <>
            <p className="text-gray-600 text-sm font-medium mb-4">
             {todoItems.filter(item => !item.isCompleted).length} 
            {todoItems.filter(item => !item.isCompleted).length === 1 ? "Task" : "Tasks"} pending
            </p>
            {todoItems.map((item) => (
              <TodoItem
                key={item.id}
                id={item.id}
                todoDate={item.dueDate}
                todoName={item.name}
                onDeleteClick={onDeleteClick}
                isCompleted={item.isCompleted}
                onToggleComplete={onToggleComplete}
              ></TodoItem>
            ))}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No tasks yet. Add one to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoItems;
