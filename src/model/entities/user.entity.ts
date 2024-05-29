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
import { Comment, Group, Message, Post, Profile } from '../index';

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
  phone: string;

  @Column()
  photo: string;

  @Column()
  birthday: string;

  @Column({ name: 'refresh_token', nullable: true })
  refreshToken: string;

  @Column({ nullable: true })
  major: string;

  @Column({ nullable: true })
  grade: string;

  @Column({ nullable: true })
  bio: string;

  @Column({ nullable: true })
  interests: string;

  @Column({ nullable: true })
  school: string;

  @OneToOne(() => Profile, (profile) => profile.user, { nullable: true })
  @JoinColumn({ name: 'profile_id' })
  profile: Profile;

  @OneToMany(() => Post, (post) => post.user, { nullable: true })
  posts: Post[];

  @OneToMany(() => Comment, (comment) => comment.user, { nullable: true })
  comments: Comment[];

  @OneToMany(() => Message, (message) => message.user, { nullable: true })
  message: Message[];

  @ManyToMany(() => Group)
  @JoinTable()
  groups: Group[];
}
