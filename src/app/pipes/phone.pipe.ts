import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhoneBrPipe implements PipeTransform {

  transform(value: string) {
    var ddd = value.slice(0, 2)
    var result = ''
    if(value.length > 10) {
        var firstNum = value.slice(2,3)
        var leftNumber = value.slice(3, 7)
        var rightNumber = value.slice(7, value.length)
        result =  `(${ddd}) ${firstNum} ${leftNumber}-${rightNumber}`
    } else {
        var leftNumber = value.slice(2, 6)
        var rightNumber = value.slice(6, value.length)
        result = `(${ddd}) ${leftNumber}-${rightNumber}`
        
    }
    return result
  }

}
