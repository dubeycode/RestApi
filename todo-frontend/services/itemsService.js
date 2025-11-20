// services/itemsService.js

export async function addItemToServer(task, dueDate) {
  const response = await fetch("http://localhost:3000/api/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: task,
      dueDate: dueDate,
    }),
  });
  
  const item = await response.json();
  return mapserverItemToLocalItem(item);

}

const mapserverItemToLocalItem =(serverItem)=>{
  return{
    id: serverItem._id,
    name: serverItem.task,
    dueDate: serverItem.date,
    completed:serverItem.completed,
    createAt:serverItem.createdAt,
    updatedAt:serverItem.updatedAt,
  }
}

 



