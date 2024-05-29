import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn({ name: 'profile_id' })
  id: number;

  @Column({ nullable: true })
  message: string; // 상태 메시지

  @OneToOne(() => User, (user) => user.profile)
  user: User;
}
