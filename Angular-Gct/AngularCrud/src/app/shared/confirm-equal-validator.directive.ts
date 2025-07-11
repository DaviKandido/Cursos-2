import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appConfirmEqualValidator]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ConfirmEqualValidatorDirective,
      multi: true,
    },
  ],
})
export class ConfirmEqualValidatorDirective implements Validator {
  @Input() appConfirmEqualValidator: string = '';

  validate(control: AbstractControl): { [key: string]: any } | null {
    const controlToCompare = control.parent?.get(this.appConfirmEqualValidator);
    if (controlToCompare && controlToCompare.value !== control.value) {
      return { notEqual: true };
    }
    return null;
  }
}
