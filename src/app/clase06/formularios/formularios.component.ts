import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css'],
})
export class FormulariosComponent implements OnInit {
  public formularioPrincipal: FormGroup;
  public formularioSecundario: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formularioPrincipal = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      edad: [],
      genero: [],
    });
    this.formularioSecundario = new FormGroup({
      nombre: new FormControl(),
      edad: new FormControl(),
      genero: new FormControl(),
    });
  }

  submit(): void {
    console.log(this.formularioPrincipal.value);
    console.log(this.formularioPrincipal.valid);
  }
}
