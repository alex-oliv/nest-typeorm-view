import { ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  name: 'cars_view',
  schema: 'objects',
  expression: `SELECT * FROM objects.cars`,
})
export class CarsView {
  @ViewColumn({ name: 'id' })
  car_id: number;

  @ViewColumn()
  car_name: string;

  @ViewColumn({ name: 'weight' })
  car_weight: string;

  @ViewColumn({ name: 'color' })
  car_color: string;

  @ViewColumn({ name: 'brand_id' })
  car_brand: number;
}
