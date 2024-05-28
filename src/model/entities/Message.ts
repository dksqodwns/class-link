import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { RequiredTimeEntity } from './RequiredTimeEntity';
import { User } from './User';

@Entity()
export class Message extends RequiredTimeEntity {
  @PrimaryGeneratedColumn({ name: 'message_id' })
  id: number;

  @Column({ type: 'text' })
  message: string;

  @ManyToOne(() => User, (user) => user.message)
  user: User;
}
