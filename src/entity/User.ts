import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { RequiredTimeEntity } from './RequiredTimeEntity';

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
  // TODO: 학교 연관관계 설정 1:1
  // TODO: 프로필 연관관계 설정 1:1
  // TODO: 게시글 연관관계 설정 N:M
  // TODO: 댓글 연관관계 설정
  // TODO: 유저 그룹 다대다 관계 설정
  // TODO: 메시지랑 연관관계 설정 일대 다
}
