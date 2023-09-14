import { Column, Entity, Index } from 'typeorm';
import { BaseEntity } from '../../base/BaseEntity';

@Entity()
export class Workspace extends BaseEntity {
  @Column()
  @Index({ unique: true })
  workspaceName: string;

  @Column()
  @Index()
  workspaceCreator: string;
}
