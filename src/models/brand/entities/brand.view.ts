import { ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  name: 'brands_view',
  schema: 'objects',
  expression: `SELECT * FROM objects.brands`,
})
export class BrandsView {
  @ViewColumn({ name: 'id' })
  brand_id: number;

  @ViewColumn()
  brand_name: string;
}
