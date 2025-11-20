import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { addItemToServer, deleteItemFromServer, getItemsFromServer, markItemCompletedOnServer } from "../services/itemsService";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(()=>{
  getItemsFromServer().then(initialItems=>{
    setTodoItems(initialItems);
  });
  },[]);


  const handleNewItem = async (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);

    const item = await addItemToServer(itemName,itemDueDate);
    const newTodoItems = [
      ...todoItems,
      item,
    ];
    setTodoItems(newTodoItems); 
  };

  const handleDeleteItem = async(id) => {
    const deletedId = await deleteItemFromServer(id);
    const newTodoItems = todoItems.filter((item) => item.id !==deletedId );
    setTodoItems(newTodoItems);
  };

  const handleToggleComplete = async (id) => {
    const updatedTodoItems = todoItems.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodoItems(updatedTodoItems);
    await markItemCompletedOnServer(id);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 ? (
        <WelcomeMessage />
      ) : (
        <TodoItems
          todoItems={todoItems}
          onDeleteClick={handleDeleteItem}
          onToggleComplete={handleToggleComplete}
        />
      )}
    </div>
  );
}

export default App;
