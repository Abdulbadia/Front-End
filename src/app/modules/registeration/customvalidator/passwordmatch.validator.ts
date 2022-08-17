import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordmatch:ValidatorFn=
  (control:AbstractControl):ValidationErrors|null=>{

    let passcontrol=control.get('password');
    let confirmpasscontrol=control.get('confirmpassword');

    if(!passcontrol||!confirmpasscontrol)
    {return null;}
    let valErr={'unmatched password':{'pass':passcontrol?.value,'confirm':confirmpasscontrol?.value}}
    return (passcontrol.value==confirmpasscontrol.value)?null:valErr;
  }
