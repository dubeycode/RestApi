const TodoItem = require("../models/Todoitem")

exports.createTodoItem = async (req,res,next)=>{
  
  const{ name,dueDate }=req.body;
  const todoItem =new TodoItem({
      task: name,
      date: dueDate,
  });
    await todoItem.save();
    res.status(201).json(todoItem);
}

// exports.createTodoItem = async (req, res, next) => {
//   console.log("==== REQUEST BODY RECEIVED ====");
//   console.log(req.body);

//   const { name, dueDate } = req.body;

//   const todoItem = new TodoItem({
//     task: name,
//     date: dueDate,
//   });

//   try {
//     const saved = await todoItem.save();
//     console.log("==== SAVED TO DB ====");
//     console.log(saved);
//     res.status(201).json(saved);
//   } catch (err) {
//     console.log("==== DB ERROR ====");
//     console.log(err);
//     res.status(500).json({ error: err.message });
//   }
// };

exports. getToDoItems =async(req,res,next)=>{
  const todoItems =await TodoItem.find();
  res.json(todoItems);
}

exports. deleteTodoItem = async(req,res,next)=>{
  const {id} = req.params;
  await TodoItem.findByIdAndDelete(id);
  res.status(204).json({_id:id});
}

exports.markCompleted =async(req,res,next)=>{
  const{id}=req.params;
  const todoItem =await TodoItem.findById(id);
  if (!todoItem) {
    return res.status(404).json({ message: "Not found" });
  }
  todoItem.completed =!todoItem.completed;
  await todoItem.save();
  res.json(todoItem);
}

