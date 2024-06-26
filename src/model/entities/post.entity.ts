import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RequiredTimeEntity } from './RequiredTimeEntity';
import { User } from './user.entity';
import { Comment } from './comment.entiy';

@Entity()
export class Post extends RequiredTimeEntity {
  @PrimaryGeneratedColumn({ name: 'post_id' })
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text' })
  content: string;

  @Column({ type: 'int' })
  category: number;

  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn({ name: 'writer', referencedColumnName: 'id' })
  user: User;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];
}
