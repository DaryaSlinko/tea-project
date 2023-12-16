import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from "@angular/forms";

export function customValidateForAll(pattern:string): ValidatorFn {
  return(control: AbstractControl): ValidationErrors | null => {
    const result = new RegExp(pattern).test(control.value);
    return  result? null: {pattern : {value: control.value}}
  }
}

@Directive({
  selector: '[CustomValidator]',
  providers:[
    {provide: NG_VALIDATORS, useExisting: CustomValidator, multi: true}
  ]
})
export class CustomValidator implements Validator{

  @Input('CustomValidator') pattern = '';
  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const result = new RegExp(this.pattern).test(control.value);
    return result ? null : {pattern: {value: control.value}}
  }

}
