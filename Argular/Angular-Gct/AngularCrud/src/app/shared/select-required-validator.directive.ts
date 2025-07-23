import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appSelectValidator]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: SelectRequiredValidatorDirective,
      multi: true,
    },
  ],
})
export class SelectRequiredValidatorDirective implements Validator {
  @Input('appSelectValidator') appSelect: string = 'select'; // Obrigatorio ter o mesmo nome do selector ou usar um alias no @input igual usado aqui

  validate(control: AbstractControl): { [key: string]: any } | null {
    return control.value === this.appSelect ? { defaultSelected: true } : null;
  }
}
