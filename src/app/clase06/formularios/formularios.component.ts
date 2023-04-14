import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

class Hero {
  name: string;
  alterEgo: string;
  constructor(name: string, alterEgo: string) {
    this.name = name;
    this.alterEgo = alterEgo;
  }
}

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css'],
})
export class FormulariosComponent implements OnInit {
  public formularioPrincipal: FormGroup;
  public formularioSecundario: FormGroup;

  public heroe = new Hero('Batman', 'Bruce Wayne');

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

  submit2(): void {
    console.log(this.heroe);
  }
}
