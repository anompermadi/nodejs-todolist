import http, { request } from "http";
import { TodolistService } from "./todolist-service.mjs";

const service = new TodolistService();
const server = http.createServer((request, response)=>{
    // response.write("Todolist API");
    // response.end();

    if(request.method === "GET"){
        service.getTodoList(request, response);
    }
});

server.listen(3000);