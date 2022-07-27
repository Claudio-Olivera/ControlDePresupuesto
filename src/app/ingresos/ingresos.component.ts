import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingresos.model';
import { IngresoService } from './ingresosService.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css'],
})
export class IngresosComponent implements OnInit {
  
  ingresos:Ingreso[]=[];
  constructor(private ingresoServ:IngresoService) { }

  ngOnInit(): void {
    this.ingresos = this.ingresoServ.Ingresos
  }
  
  eliminarRegistro(ingreso:Ingreso){
    this.ingresoServ.eliminar(ingreso)
  }

}
