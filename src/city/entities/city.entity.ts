import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'city' })
export class CityEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number

  @Column({ name: 'state_id', nullable: false })
  stateId: string

  @Column({ name: 'name', nullable: false })
  name: string

  @Column({ name: 'created_at', nullable: false })
  createdAt: Date

  @Column({ name: 'updated_at', nullable: false })
  updatedAt: Date
}
