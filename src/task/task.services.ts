import { Injectable } from "@nestjs/common";
import { Task, TaskStatus } from "./task.model";
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from "./Dto/create-task-dto";
import { title } from "process";


@Injectable()
export class TaskServices{
    private tasks :Task[] = [];
 
    getAllTasks(): Task[]{
   return this.tasks;
 }
 createTask(createTaskDto:CreateTaskDto){

    const id: string = uuid();
    const  {title,description} = createTaskDto;
     const task :Task = {
        id,
         title,
         description,
         status : TaskStatus.OPEN
     }
     this.tasks.push(task);
     return task;
 }
}

