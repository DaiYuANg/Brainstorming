import { Column, Entity, Index } from 'typeorm';
import { BaseEntity } from '../../base/BaseEntity';

@Entity()
export class Minio extends BaseEntity {
  @Column()
  @Index({ unique: true })
  object: string;
}
