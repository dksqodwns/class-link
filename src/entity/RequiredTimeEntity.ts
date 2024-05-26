import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';

export class RequiredTimeEntity {
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
