import { range } from 'rxjs/observable/range';
import { Attribute, Directive, forwardRef, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms'

@Directive({
  selector: '[rangeValue][formControlName],[rangeValue][formControl],[rangeValue][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => RangeValueDirective), multi: true }
  ]
})

export class RangeValueDirective implements Validator {

  @Input() values: {
    min: 0,
    max: 5
  }
  
  constructor( @Attribute('rangeValue') public rangeValue: object) { }

  validate(c:AbstractControl): { [key: string]: any } {
    
    /*
    let v = c.value;

    let e = c.root.get(this.rangeValue);

    if(e && v !== e.value) return {
      rangeValue: false
    }
    */

    console.log(this.values);
    
    let v = c.value;

    console.log(parseInt(v));
    //console.log(parseInt(v) < this.values.min);
    //console.log(parseInt(v) > this.values.max);

    if(parseInt(v) < this.values.min) {
      return { 
        rangeValue: false
      }
    }

    if(parseInt(v) > this.values.max) {
      return { 
        rangeValue: false
      }
    }    

    return null;
  }
}
