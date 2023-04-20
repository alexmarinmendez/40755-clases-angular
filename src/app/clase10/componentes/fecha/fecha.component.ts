import { Component, OnDestroy, OnInit } from '@angular/core';
import { MisDatosService } from '../../servicios/mis-datos.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-fecha',
  templateUrl: './fecha.component.html',
  styleUrls: ['./fecha.component.css'],
})
export class FechaComponent implements OnInit, OnDestroy {
  public fecha = new Date();
  // public suscripcion: Subscription;
  public fechaObservable: Observable<Date>;
  public usuarios: any[];

  constructor(private servicio: MisDatosService) {}
  ngOnDestroy(): void {
    // this.suscripcion.unsubscribe();
  }
  ngOnInit(): void {
    // this.suscripcion = this.servicio.getFecha().subscribe((valor) => {
    //   console.log('Método NEXT ejecutándose...');
    //   this.fecha = valor;
    // });

    this.fechaObservable = this.servicio.getFecha();
    // this.servicio.getPeliculas().subscribe(console.log);
    this.servicio.usuarios$.subscribe((usuarios) => (this.usuarios = usuarios));
  }
}
