import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egresos/egresos.model';
import { EgresoService } from '../egresos/egresosService.service';
import { Ingreso } from '../ingresos/ingresos.model';
import { IngresoService } from '../ingresos/ingresosService.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  tipo:string="ing"
  inputDesc:string;
  inputValue:number;

  constructor(private ingresoServ:IngresoService, private egresoServ:EgresoService) { }

  ngOnInit(): void {
  }
  
  tipoDeOperacion(evento:any){
    this.tipo= evento.target.value;
  }
  agregarDato(){
  if (this.tipo === "ing"){
    this.ingresoServ.Ingresos.push(new Ingreso(this.inputDesc, this.inputValue))
  }else{
    this.egresoServ.egresos.push(new Egreso(this.inputDesc, this.inputValue))
  }

  }
}