import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../base/BaseEntity';

@Entity()
export class Team extends BaseEntity {
  @Column()
  teamName: string;

  @Column()
  teamTag: string;

  @Column()
  teamDescription: string;
}
