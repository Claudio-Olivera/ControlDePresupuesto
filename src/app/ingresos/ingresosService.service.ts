import { Ingreso } from "./ingresos.model";

export class IngresoService {
    Ingresos:Ingreso[]=[new Ingreso("Salario", 4000),new Ingreso("Venta Coche", 500)];



    eliminar(ingreso:Ingreso){
        const indice:number=this.Ingresos.indexOf(ingreso);
        this.Ingresos.splice(indice,1);
    }
} 

