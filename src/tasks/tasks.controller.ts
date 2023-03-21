import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  // @Post()
  // create(@Body() createTaskDto: CreateTaskDto) {
  //   return this.tasksService.create(createTaskDto);
  // }

  @Post()
  createTask(@Body() newTask: CreateTaskDto) {
    console.log(newTask);
    return this.tasksService.createTask(newTask.title, newTask.description);
  }

  @Get()
  findAllTasks() {
    return this.tasksService.findAllTasks();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  removeTask(@Param('id') id: string) {
    return this.tasksService.removeTask(id);
  }
}
