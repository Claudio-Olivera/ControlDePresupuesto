import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabezal',
  templateUrl: './cabezal.component.html',
  styleUrls: ['./cabezal.component.css']
})
export class CabezalComponent implements OnInit {
   @Input() presupuestoTotal:number;
   @Input() ingresoTotal:number;
   @Input() egresoTotal:number;
   @Input() porcentajeTotal:number;

  constructor() { }

  ngOnInit(): void {
  }


}
