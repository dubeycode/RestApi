// services/itemsService.js
// actually this control our all backend communicate with the backed server


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



export async function getItemsFromServer() {
  const response =await fetch("http://localhost:3000/api/todo");
  const items =await response.json();
  return items.map(mapserverItemToLocalItem);
}


export const markItemCompletedOnServer =async (id)=>{
  const response =await fetch(`http://localhost:3000/api/todo/${id}/completed`,{
    method:"PUT", 
  });
  const item =await response.json();
  return mapserverItemToLocalItem(item)
}


export const deleteItemFromServer = async(id)=>{
 const response = await fetch(`http://localhost:3000/api/todo/${id}`,{
    method:"DELETE",
  });
  if(!response.ok){
    throw new Error("Faild to deleted item on server")
  }
  return id;
}


function mapserverItemToLocalItem(item) {
  return {
    id: item._id,
    name: item.task,
    dueDate: item.date,
    isCompleted: item.completed,
  };
}

 



