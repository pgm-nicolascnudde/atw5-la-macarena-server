import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category) private categoriesRepository: Repository<Category>,
  ) {}

  async create(createCategoryInput: CreateCategoryInput): Promise<Category> {
    const category = this.categoriesRepository.create(createCategoryInput);
    return await this.categoriesRepository.save(category);
  }

  async findAll(): Promise<Category[]> {
    return await this.categoriesRepository.find();
  }

  async findOne(id: number): Promise<Category> {
    return await this.categoriesRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateCategoryInput: UpdateCategoryInput,
  ): Promise<Category> {
    const category = await this.categoriesRepository.preload({
      id: id,
      ...updateCategoryInput,
    });

    if (!category) {
      throw new NotFoundException(`Category with #${id} not found`);
    }

    return this.categoriesRepository.save(category);
  }

  async remove(id: number): Promise<Category> {
    const category = await this.findOne(id);
    await this.categoriesRepository.remove(category);

    return {
      id: id,
      title: '',
      description: '',
      image: '',
      activities: null,
    };
  }
}
