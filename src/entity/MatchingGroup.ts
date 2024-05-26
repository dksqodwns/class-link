import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * 매칭을 수락하면 만들어지는 엔티티
 */
@Entity()
export class MatchingGroup {
  @PrimaryGeneratedColumn({ name: 'matching_group_id' })
  id: number;

  @Column({ name: 'approved_group_id' })
  approvedGroupId: number;

  // TODO: 매칭과 연관관계 설정 1대 1
}
