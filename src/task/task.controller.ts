import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateTaskDto } from "./Dto/create-task-dto";
import { Task, TaskStatus } from "./task.model";
import { TaskServices } from "./task.services";

@Controller('/tasks')
export class TaskController{
  constructor(private readonly taskServices: TaskServices){
    
  }

  @Get()
  getTasks():Task[]{
      return this.taskServices.getAllTasks();
  }

  @Post()
  createTask(@Body()CreateTaskDto:CreateTaskDto){
      console.log(CreateTaskDto);
     return this.taskServices.createTask(CreateTaskDto);
  }
}
