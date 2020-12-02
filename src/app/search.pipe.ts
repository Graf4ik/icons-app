import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform {
    transform(icons, search: string = '', field: string = 'key') {
        
        if (!search.trim()) {
            return icons
          }

        return icons.filter(icon => {
            return icon[field].toLowerCase().includes(search.toLowerCase())
          })
    }
}