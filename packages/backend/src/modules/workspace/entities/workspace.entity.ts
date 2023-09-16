import { Column, Entity, Index } from 'typeorm';
import { BaseEntity } from '../../../system/base/BaseEntity';

@Entity()
export class Workspace extends BaseEntity {
  @Column()
  @Index({ unique: true })
  workspaceName: string;

  @Column()
  @Index()
  workspaceCreator: string;

  @Column()
  @Index()
  teamId: string;
}