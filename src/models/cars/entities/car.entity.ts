import { Brand } from 'src/models/brand/entities/brand.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('cars', { schema: 'objects' })
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'car_name' })
  carName!: string;

  @Column()
  weight!: string;

  @Column()
  color!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @ManyToOne(() => Brand, (brand) => brand.id, { nullable: true })
  @JoinColumn({ name: 'brand_id' })
  brand!: Brand;
}
