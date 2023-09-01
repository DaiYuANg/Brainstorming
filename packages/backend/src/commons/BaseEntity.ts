import { Column, PrimaryGeneratedColumn } from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createAt: string;

  @Column()
  createBy: string;

  @Column()
  updateAt: string;

  @Column()
  updateBy: string;
}
