import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Matching } from './Matching';

/**
 * 매칭을 수락하면 만들어지는 엔티티
 */
@Entity()
export class MatchingGroup {
  @PrimaryGeneratedColumn({ name: 'matching_group_id' })
  id: number;

  @Column({ name: 'approved_group_id' })
  approvedGroupId: number;

  @OneToOne(() => Matching, (matching) => matching.matchingGroup)
  matching: Matching;
}
