import { range } from 'rxjs/observable/range';
import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms'

@Directive({
  selector: '[rangeValue][formControlName],[rangeValue][formControl],[rangeValue][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => RangeValueDirective), multi: true }
  ]
})
export class RangeValueDirective implements Validator {
  constructor( @Attribute('rangeValue') public rangeValue: object) { }

  validate(c:AbstractControl): { [key: string]: any } {
    
    /*
    let v = c.value;

    let e = c.root.get(this.rangeValue);

    if(e && v !== e.value) return {
      rangeValue: false
    }
    */

    console.log(this.rangeValue);

    return null;
  }
}
