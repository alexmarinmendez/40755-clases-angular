import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mi-vista',
  templateUrl: './mi-vista.component.html',
  styleUrls: ['./mi-vista.component.css'],
})
export class MiVistaComponent implements OnInit {
  constructor(private activedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    // this.activedRoute.params.subscribe(console.log);
    this.activedRoute.queryParams.subscribe(console.log);
  }
}
