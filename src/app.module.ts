import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { UsersModule } from './models/users/users.module';
import { CarsModule } from './models/cars/cars.module';
import { BrandModule } from './models/brand/brand.module';
import { TestsModule } from './models/tests/tests.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        }),
    }),
    UsersModule,
    CarsModule,
    BrandModule,
    TestsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
