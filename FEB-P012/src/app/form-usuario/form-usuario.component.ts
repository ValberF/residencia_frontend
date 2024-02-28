import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormDataService } from '../services/form-data.service';
import { NoWhitespaceValidator } from '../validators/noWhiteSpace.validator';
import { PasswordValidator } from '../validators/password.validator';
import { FullNameValidator } from '../validators/full-name.validator';
import { PhoneValidator } from '../validators/phone.validator';
import { MinAgeValidator } from '../validators/min-age.validator';
import { CepValidator } from '../validators/cep-validator';
import { FormService } from '../services/form.service';
import { IFormData } from '../models/formData';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.scss']
})
export class FormUsuarioComponent implements OnInit {
  form!: FormGroup;
  formData: IFormData = {
    user: '',
    password: '',
    email: '',
    name: '',
    phone: '',
    gender: '',
    occupation: '',
    address: '',
    birthday: '',
  }
  minAge: number = 18;
  status!: string

  constructor(private formDataService: FormDataService, private formService: FormService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'user': new FormControl(null, [Validators.required, NoWhitespaceValidator()]),
      'password': new FormControl(null, [Validators.required, PasswordValidator()]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'name': new FormControl(null, [Validators.required, FullNameValidator()]),
      'phone': new FormControl(null, [Validators.required, PhoneValidator()]),
      'address': new FormControl(null, [Validators.required, CepValidator()]),
      'birthday': new FormControl(null, [Validators.required, MinAgeValidator(this.minAge)]),
      'gender': new FormControl(null),
      'occupation': new FormControl(null),
    });

    this.formDataService.setForm(this.form);

    this.formService.getValueChanges(this.form).subscribe((formData: IFormData) => {
      this.formData = formData;
    });

    this.formService.getStatusChanges(this.form).subscribe(status => {
      this.status = status
    });
  }

  onSubmit() {
    console.log(this.formDataService.getFormData())
    alert("Este é o JSON do formulário: " + JSON.stringify(this.form.value));
  }
}
