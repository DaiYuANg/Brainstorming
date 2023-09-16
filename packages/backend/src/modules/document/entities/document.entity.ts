import { Column, Entity, Index } from 'typeorm';
import { BaseEntity } from '../../../system/base/BaseEntity';

@Entity()
export class Document extends BaseEntity {
  @Column()
  @Index()
  workspaceId: number;

  @Column()
  @Index()
  documentTitle: string;
}
