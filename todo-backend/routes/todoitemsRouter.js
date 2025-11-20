//External Modules
const express =require("express");
const todoItemsRouters = express.Router();
//local Module
const todoItemsControllers = require("../controllers/todoitemsControllers");

todoItemsRouters.post("/", todoItemsControllers.createTodoItem);

todoItemsRouters.get("/",todoItemsControllers.getToDoItems);


todoItemsRouters.delete("/:id",todoItemsControllers.deleteTodoItem);

todoItemsRouters.put("/:id/completed", todoItemsControllers.markCompleted);


module.exports=todoItemsRouters;