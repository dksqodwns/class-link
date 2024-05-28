import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { RequiredTimeEntity } from './RequiredTimeEntity';
import { User } from './User';
import { Post } from './Post';

@Entity()
export class Comment extends RequiredTimeEntity {
  @PrimaryGeneratedColumn({ name: 'comment_id' })
  id: number;

  @Column({ name: 'comment', type: 'text' })
  comment: string;

  @ManyToOne(() => User, (user) => user.comments)
  user: User;

  @ManyToOne(() => Post, (post) => post.comments)
  post: Post;
}
