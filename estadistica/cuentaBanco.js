class CuentaBanco{
constructor(nombre,banco,saldo){
this.nombre = nombre;
this.banco = banco;
this.saldo = saldo; 
}
agregarSaldo(saldo){
if(saldo>0)
this.saldo += saldo;
}

}
let  cuentaMemo =  new CuentaBanco("Memo","Davivienda",4000000);
 console.log(cuentaMemo);
cuentaMemo.agregarSaldo(5000000);
console.log("Despues de consignar la cuenta tiene", cuentaMemo.saldo);
