import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { RequiredTimeEntity } from './RequiredTimeEntity';
import { Matching } from './Matching';

@Entity()
export class Group extends RequiredTimeEntity {
  @PrimaryGeneratedColumn({ name: 'group_id' })
  id: number;

  @Column({ name: 'group_name' })
  groupName: string;

  @Column({ name: 'group_description' })
  groupDescription: string;

  @OneToOne(() => Matching, (matching) => matching.group)
  matching: Matching;
}
