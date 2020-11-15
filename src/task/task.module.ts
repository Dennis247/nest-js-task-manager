import { Module } from "@nestjs/common";
import { TaskController } from "./task.controller";
import { TaskServices } from "./task.services";

@Module({
    controllers:[TaskController],
    providers:[TaskServices]
})
export class TaskModule{}