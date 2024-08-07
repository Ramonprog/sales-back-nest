import { CityEntity } from 'src/city/entities/city.entity'
import { UserEntity } from 'src/user/entities/user.entity'
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity({ name: 'address' })
export class AddressEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number

  @Column({ name: 'user_id', nullable: false })
  userId: number

  @Column({ name: 'complement', nullable: true })
  complement: string

  @Column({ name: 'number', nullable: false })
  numberAddress: number

  @Column({ name: 'cep', nullable: false })
  cep: string

  @Column({ name: 'city_id', nullable: false })
  cityId: number

  @Column({ name: 'created_at', nullable: false })
  createdAt: Date

  @Column({ name: 'updated_at', nullable: false })
  updatedAt: Date

  @ManyToOne(() => CityEntity, (city) => city.addresses)
  @JoinColumn({ name: 'city_id', referencedColumnName: 'id' })
  city?: CityEntity
}
