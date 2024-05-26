import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { RequiredTimeEntity } from './RequiredTimeEntity';

@Entity()
export class Comment extends RequiredTimeEntity {
  @PrimaryGeneratedColumn({ name: 'comment_id' })
  id: number;

  @Column({ name: 'comment', type: 'longtext' })
  comment: string;

  // TODO: 게시글, 유저 연관관계
}
