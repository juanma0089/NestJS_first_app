import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task, TaskStatus } from './tasks.entity';
import { v4 } from 'uuid';

@Injectable()
export class TasksService {
  //simula la base de datos
  private tasks: Task[] = [
    {
      id: '1',
      title: 'first task',
      description: 'some task',
      status: TaskStatus.PENDING,
    },
  ];

  // create(createTaskDto: CreateTaskDto) {
  //   return 'This action adds a new task';
  // }
  createTask(title: string, description: string) {
    const task = {
      id: v4(),
      title,
      description,
      status: TaskStatus.PENDING,
    };
    this.tasks.push(task);
    return task;
  }

  findAllTasks() {
    return this.tasks;
  }

  findOne(id: string) {
    return this.tasks.find((task) => task.id === id);
  }

  update(id: string, updateTaskDto: UpdateTaskDto): Task {
    const task = this.findOne(id);
    const newTask = Object.assign(task, updateTaskDto);
    this.tasks = this.tasks.map((task) => (task.id === id ? newTask : task));
    return newTask;
  }

  removeTask(id: string) {
    console.log(`Tarea con id ${id} eliminada`);
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
