import { Module } from '@nestjs/common';
import { PersonObjectsService } from './person-objects.service';
import { PersonObjectsController } from './person-objects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonObject } from './entities/person-object.view.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PersonObject])],
  controllers: [PersonObjectsController],
  providers: [PersonObjectsService],
})
export class PersonObjectsModule {}
