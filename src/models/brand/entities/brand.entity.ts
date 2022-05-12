import { Car } from 'src/models/cars/entities/car.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('brands', { schema: 'objects' })
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'brand_name' })
  brandName!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;

  @OneToMany(() => Car, (car) => car.brand, { cascade: ['insert', 'update'] })
  cars!: Car[];
}
