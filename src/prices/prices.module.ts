import { Module } from '@nestjs/common';
import { PricesService } from './prices.service';
import { PricesController } from './prices.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Price, PriceSchema } from 'src/database/schemas/price.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Price.name, schema: PriceSchema }]), 
  ],
  controllers: [PricesController],
  providers: [PricesService],
})
export class PricesModule {}
