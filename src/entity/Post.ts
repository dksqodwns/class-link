import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { RequiredTimeEntity } from './RequiredTimeEntity';

@Entity()
export class Post extends RequiredTimeEntity {
  @PrimaryGeneratedColumn({ name: 'post_id' })
  id: number;

  @Column()
  title: string;

  @Column({ type: 'longtext' })
  content: string;

  @Column({ type: 'tinyint' })
  category: number;

  // TODO: 유저랑 연관관계 설정
  // TODO: 댓글 연관관계 설정
}
