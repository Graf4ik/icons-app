interface KeyValuePair {
    key: string;
    value: any;
  }

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'keyValuePairs'
})

export class KeyValuePairsPipe  implements PipeTransform {
    transform(value): KeyValuePair[]{
        let result: KeyValuePair[] = []; 
        if(!!value && value instanceof Object){
           result = Object.entries(value).map(icon => ({ key: icon[0], value: icon[1] }))
        }
        return result;
      }
   }