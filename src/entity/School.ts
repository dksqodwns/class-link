import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class School {
  @PrimaryGeneratedColumn({ name: 'school_id' })
  id: number;

  @Column({ name: 'school_name' })
  name: string;
}
