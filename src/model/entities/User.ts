import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RequiredTimeEntity } from './RequiredTimeEntity';
import { Profile } from './Profile';
import { Post } from './Post';
import { Comment } from './Comment';
import { Message } from './Message';
import { Group } from './Group';

@Entity()
export class User extends RequiredTimeEntity {
  @PrimaryGeneratedColumn({ name: 'user_id' })
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  photo: string;

  @Column()
  birthday: string;

  @Column({ name: 'refresh_token' })
  refreshToken: string;

  @Column()
  major: string;

  @Column()
  grade: string;

  @Column({ nullable: true })
  bio: string;

  @Column({ nullable: true })
  interests: string;

  @Column({ nullable: true })
  school: number;

  @OneToOne(() => Profile, (profile) => profile.user)
  @JoinColumn({ name: 'profile_id' })
  profile: Profile;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];

  @OneToMany(() => Message, (message) => message.user)
  message: Message[];

  @ManyToMany(() => Group)
  @JoinTable()
  groups: Group[];
}
