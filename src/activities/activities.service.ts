import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateActivityInput } from './dto/create-activity.input';
import { UpdateActivityInput } from './dto/update-activity.input';
import { Activity } from './entities/activity.entity';

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectRepository(Activity) private activitiesService: Repository<Activity>,
  ) {}

  async create(createActivityInput: CreateActivityInput): Promise<Activity> {
    const activity = this.activitiesService.create(createActivityInput);
    return await this.activitiesService.save(activity);
  }

  async findAll(): Promise<Activity[]> {
    return await this.activitiesService.find();
  }

  async findOne(id: number): Promise<Activity> {
    return await this.activitiesService.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateActivityInput: UpdateActivityInput,
  ): Promise<Activity> {
    const activity = await this.activitiesService.preload({
      id: id,
      ...updateActivityInput,
    });

    if (!activity) {
      throw new NotFoundException(`Activity with #${id} not found`);
    }

    return this.activitiesService.save(activity);
  }

  async remove(id: number): Promise<Activity> {
    const activity = await this.findOne(id);
    await this.activitiesService.remove(activity);

    return {
      id: id,
      title: '',
      description: '',
      image: '',
      price: 0,
      date: 0,
      slots: 0,
    };
  }
}
