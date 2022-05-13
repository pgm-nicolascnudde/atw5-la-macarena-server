import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private ordersRepository: Repository<Order>,
  ) {}

  async create(createOrderInput: CreateOrderInput): Promise<Order> {
    const order = this.ordersRepository.create(createOrderInput);
    return await this.ordersRepository.save(order);
  }

  async findAll(): Promise<Order[]> {
    return await this.ordersRepository.find();
  }

  async findOne(id: number): Promise<Order> {
    return await this.ordersRepository.findOne({ where: { id } });
  }

  async update(id: number, updateOrderInput: UpdateOrderInput): Promise<Order> {
    const order = await this.ordersRepository.preload({
      id: id,
      ...updateOrderInput,
    });

    if (!order) {
      throw new NotFoundException(`Order with #${id} not found`);
    }

    return this.ordersRepository.save(order);
  }

  async remove(id: number): Promise<Order> {
    const order = await this.findOne(id);
    await this.ordersRepository.remove(order);

    return {
      id: id,
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      amount: 0,
      status: '',
    };
  }
}
