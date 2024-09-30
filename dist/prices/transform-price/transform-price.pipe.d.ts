import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class TransformPricePipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): {
        title: any;
        price: number;
    };
}
