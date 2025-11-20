function TodoItem({ id, todoName, todoDate, onDeleteClick }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-4 sm:p-6 border-l-4 border-blue-500 mb-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
        <div className="flex-1 min-w-0">
          <p className="text-lg sm:text-xl font-semibold text-gray-800 break-words">{todoName}</p>
          <p className="text-sm text-gray-500 mt-1">
            📅 Due: {todoDate ? new Date(todoDate).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            }) : 'No date'}
          </p>
        </div>
        <button
          type="button"
          onClick={() => onDeleteClick(id)}
          className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 transform"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
