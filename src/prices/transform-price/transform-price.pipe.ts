import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { title } from 'process';

@Injectable()
export class TransformPricePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
     if (!value.title || !value.price) {
       throw new BadRequestException("Missing title or price");
     }
    return {
      title: value.title,
      price: parseFloat(value.price),
    };
  }
}
