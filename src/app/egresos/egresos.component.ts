import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egresos.model';
import { EgresoService } from './egresosService.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

  egresos:Egreso[]=[];
  @Input() ingresoTotal:number;
  constructor(private egresoServ:EgresoService) { }

  ngOnInit(): void {
    this.egresos=this.egresoServ.egresos;
  }

  eliminarEgreso(egreso:Egreso){
    this.egresoServ.eliminar(egreso);
  }
  calcularPorcentaje(egreso:Egreso){
    return egreso.valor / this.ingresoTotal;
  }
}
