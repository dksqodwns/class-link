import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { RequiredTimeEntity } from './RequiredTimeEntity';

@Entity()
export class Message extends RequiredTimeEntity {
  @PrimaryGeneratedColumn({ name: 'message_id' })
  id: number;

  @Column({ type: 'longtext' })
  message: string;

  // TODO: 유저랑 연관관계 설정 일대 다
  // TODO: 매칭 그룹이랑 연관관계 설정 일대 다
}
