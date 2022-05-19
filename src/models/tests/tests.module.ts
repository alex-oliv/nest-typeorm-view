import { Module } from '@nestjs/common';
import { TestsService } from './tests.service';
import { TestsController } from './tests.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestView } from './entities/test.view';

@Module({
  imports: [TypeOrmModule.forFeature([TestView])],
  controllers: [TestsController],
  providers: [TestsService],
})
export class TestsModule {}
