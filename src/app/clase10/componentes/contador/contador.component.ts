import { Component, OnInit } from '@angular/core';
import { MisDatosService } from '../../servicios/mis-datos.service';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css'],
})
export class ContadorComponent implements OnInit {
  public contador = 0;

  constructor(private misDatos: MisDatosService) {}
  ngOnInit(): void {
    this.misDatos.getFecha().subscribe(() => this.contador++);
  }

  cambiarLista() {
    this.misDatos.addUsuario([
      {
        nombre: 'Alex',
        email: 'alexmarinmendez@gmail.com',
      },
    ]);
  }
}
