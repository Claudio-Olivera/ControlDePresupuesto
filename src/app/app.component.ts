import { Component } from '@angular/core';
import { Egreso } from './egresos/egresos.model';
import { EgresoService } from './egresos/egresosService.service';
import { Ingreso } from './ingresos/ingresos.model';
import { IngresoService } from './ingresos/ingresosService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

ingresos:Ingreso[]=[];
egresos:Egreso[]=[];

constructor(private ingresoServ:IngresoService, private egresoServ:EgresoService){
  this.ingresos = this.ingresoServ.Ingresos;
  this.egresos = this.egresoServ.egresos;
}

  getIngresoTotal(){
    let ingresoTotal:number=0;
    this.ingresos.forEach(ingreso =>{
      ingresoTotal += ingreso.valor
    })
    return ingresoTotal
  }

  getEgresoTotal(){
    let egresoTotal:number=0;
    this.egresos.forEach(egreso =>{
      egresoTotal += egreso.valor
    })
    return egresoTotal
  }

  getPorcentajeTotal(){
    return this.getEgresoTotal()/this.getIngresoTotal();
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal()-this.getEgresoTotal();
  }
}
