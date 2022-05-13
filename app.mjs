import http, { request } from "http";
import { TodolistService } from "./todolist-service.mjs";

const service = new TodolistService();
const server = http.createServer((request, response)=>{
    // response.write("Todolist API");
    // response.end();

    if(request.method === "GET"){
        service.getTodoList(request, response);
    } else if(request.method === "POST"){
        service.createTodo(request, response);
    } else if (request.method === "PUT") {
        service.updateTodo(request, response);
    } else if (request.method === "DELETE"){
        service.deleteTodo(request, response);
    }
});

server.listen(3000);