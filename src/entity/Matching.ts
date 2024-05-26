import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { RequiredTimeEntity } from './RequiredTimeEntity';

/**
 * 그룹이 매칭 리스트에 매칭을 신청함
 */
@Entity()
export class Matching extends RequiredTimeEntity {
  @PrimaryGeneratedColumn({ name: 'matching_id' })
  id: number;

  @Column({ name: 'matching_date' })
  matchingDate: string;

  @Column({ name: 'matching_location' })
  matchingLocation: string;

  // TODO: 그룹과 연관관계 설정 (신청 한 그룹) -> 1대 1
}
