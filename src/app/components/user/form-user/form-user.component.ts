import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {

  public usr: any={
    name:null,
    surname:null,
    cargo:null,
    salario:null,
    deducciones: null,
    devengados: null,
    topagar: null,
  } 


  public users: any[] = [
    {
      name: '',
      surname: '',
      cargo: '',
      salario: 0,
      deducciones: 0,
      devengados: 0,
      topagar: 0
    },

 ];
 
  constructor() { }

  ngOnInit(): void {
  }

  saveUser(){
    this.users.push(
      {
        name: this.usr.name,
        surname: this.usr.surname,
        cargo: this.usr.cargo,
        salario: this.usr.salario,
        deducciones: this.usr.deducciones,
        devengados: this.usr.devengados,
        topagar: (this.usr.salario + this.usr.devengados - this.usr.deducciones)
      }
    )
  }

}
