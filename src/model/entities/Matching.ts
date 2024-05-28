import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RequiredTimeEntity } from './RequiredTimeEntity';
import { Group } from './Group';
import { MatchingGroup } from './MatchingGroup';

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

  @OneToOne(() => Group, (group) => group.matching)
  @JoinColumn({ name: 'group_id' })
  group: Group;

  @OneToOne(() => MatchingGroup, (matchingGroup) => matchingGroup.matching)
  @JoinColumn({ name: 'matching_group_id' })
  matchingGroup: MatchingGroup;
}
