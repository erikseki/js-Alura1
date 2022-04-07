export class ContaCorrente{
    cliente;
    agencia;
    saldo =0;

    sacar(valor){
        if(this.saldo >= valor) {
            this.saldo -= valor;
            return valor;
        }
 
    }

    depositar(valor){
        if(valor <= 0){
            return; 
        }

        this.saldo += valor;      
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