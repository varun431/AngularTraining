import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'conversion'
})
export class ConversionPipe implements PipeTransform {
    transform(value: number, code: string): number {
        if (isNaN(value)) {
            return value;
        }

        switch (code) {
            case 'USD':
                value /= 70;
                break;
            case 'GBP':
                value /= 78;
                break;
            case 'CAD':
                value /= 52;
                break;
            case 'EUR':
                value /= 87;
                break;
        }

        return value;
    }
}
