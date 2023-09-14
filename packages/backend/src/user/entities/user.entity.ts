import { Column, Entity, Index } from 'typeorm';
import { BaseEntity } from '../../base/BaseEntity';

@Entity()
export class User extends BaseEntity {
  @Column()
  @Index({ unique: true })
  email: string;

  @Column()
  avatar: string;

  @Column()
  password: string;
}
