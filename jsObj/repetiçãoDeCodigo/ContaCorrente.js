import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    _cliente;
    agencia;
    _saldo =0;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;

        }
    }

    get cliente(){
        return this._cliente;
    }


    get saldo(){
        return this._saldo
    }


    constructor(cliente, agencia){
        this.agencia = agencia;
        this.cliente = cliente;
    }
    


    sacar(valor){
        if(this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
 
    }

    depositar(valor){
        if(valor <= 0){
            return; 
        }

        this._saldo += valor;      
    }

    transferir(valor, conta){ 
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        // valor = 20; - do tipo primitivo e sendo um valor, se eu passar um valor aqui dentro da função, ela passa como 
        // uma copia, o valor aqui dentro n reflete no escopo la do index.js (continua sendo 200)

        // conta.cidade = "Sao paulo"; - contudo o parametro "Conta", ela é um objeto do tipo de referencia, qualquer valor 
        //aqui dentro reflete la fora 
    }
}