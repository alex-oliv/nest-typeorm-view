import { ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  expression: `
    SELECT car.id as id, car.car_name as name, car.weight as weight, brand.brand_name as brand
    FROM objects.cars car
    LEFT JOIN objects.brands brand on car.brand_id = brand.id
  `,
})
export class PersonObject {
  @ViewColumn()
  id: number;

  @ViewColumn()
  name: string;

  @ViewColumn()
  weight: string;

  @ViewColumn()
  brand: string;
}

/*

SELECT car.id as id, car.car_name as name, car.weight as weight, brand.brand_name as brand
FROM objects.cars car
LEFT JOIN objects.brands brand on car.brand_id = brand.id



SELECT ase.id as id, ase.status as status, ase.preparation as preparation, ase.acceptanceTerm as acceptanceTerm, as.description as as_service_description, as.code as as_service_code
FROM assistance.assistance_services_establishment ase
LEFT JOIN assistance.assistance_services as on ase.assistance_service_id = as.id
*/
