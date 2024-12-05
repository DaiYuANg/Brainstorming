import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('string')
  name: string;

  @Column('string')
  description: string;

  @Column('string')
  filename: string;

  @Column('number')
  views: number;

  @Column('boolean')
  isPublished: boolean;
}
