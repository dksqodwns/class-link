import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn({ name: 'profile_id' })
  id: number;

  @Column({ nullable: true })
  message: string; // 상태 메시지
}
