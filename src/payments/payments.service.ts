import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreatePaymentInput } from './dto/create-payment.input';
import { UpdatePaymentInput } from './dto/update-payment.input';
import { Payment } from './entities/payment.entity';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment) private paymentsRepository: Repository<Payment>,
  ) {}

  async create(createPaymentInput: CreatePaymentInput): Promise<Payment> {
    const payment = this.paymentsRepository.create(createPaymentInput);
    return await this.paymentsRepository.save(payment);
  }

  async findAll(): Promise<Payment[]> {
    return await this.paymentsRepository.find();
  }

  async findOne(id: number): Promise<Payment> {
    return await this.paymentsRepository.findOne({ where: { id } });
  }

  async update(id: number, updatePaymentInput: UpdatePaymentInput): Promise<Payment> {
    const payment = await this.paymentsRepository.preload({
      id: id,
      ...updatePaymentInput,
    });

    if (!payment) {
      throw new NotFoundException(`Payment with #${id} not found`);
    }

    return this.paymentsRepository.save(payment);
  }

  async remove(id: number): Promise<Payment> {
    const payment = await this.findOne(id);
    await this.paymentsRepository.remove(payment);

    return {
      id: id,
      method: '',
    };
  }
}
