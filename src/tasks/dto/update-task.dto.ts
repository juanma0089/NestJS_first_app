import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { TaskStatus } from '../tasks.entity';
import { IsIn, IsOptional, IsString } from 'class-validator';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @IsString()
  @IsOptional()
  title?: string;
  @IsString()
  @IsOptional()
  description?: string;
  @IsString()
  @IsOptional()
  @IsIn([TaskStatus.IN_PROGRESS, TaskStatus.PENDING, TaskStatus.DONE])
  status?: TaskStatus;
}
