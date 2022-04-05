export class ContaCorrente{
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
            return; // early return - condição antecipada para o metodo parar caso for menor que 0
        }

        this.saldo += valor;      
    }
}