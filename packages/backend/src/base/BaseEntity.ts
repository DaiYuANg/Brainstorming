import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsDate } from 'class-validator';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsDate()
  createAt: Date;

  @Column()
  createBy: string;

  @Column()
  @IsDate()
  updateAt: Date;

  @Column()
  updateBy: string;
}
