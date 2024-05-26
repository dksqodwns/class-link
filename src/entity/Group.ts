import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { RequiredTimeEntity } from './RequiredTimeEntity';

@Entity()
export class Group extends RequiredTimeEntity {
  @PrimaryGeneratedColumn({ name: 'group_id' })
  id: number;

  @Column({ name: 'group_name' })
  groupName: string;

  @Column({ name: 'group_description' })
  groupDescription: string;

  // TODO: 유저 그룹 다대다 관계 설정
}
