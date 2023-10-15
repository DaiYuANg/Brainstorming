import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';
import { IsDate } from 'class-validator';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  @IsDate()
  @CreateDateColumn()
  createAt: Date;

  @Column()
  @UpdateDateColumn()
  createBy: string;

  @Column()
  @IsDate()
  updateAt: Date;

  @Column()
  updateBy: string;

  @DeleteDateColumn()
  deletedAt: Date;

  @VersionColumn()
  version: number;
}
