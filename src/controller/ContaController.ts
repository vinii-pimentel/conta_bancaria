import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository{

    private _listaContas: Array<Conta> = new Array<Conta>();
    numero: number = 0;

    procurarPorNumero(numero: number): void {
        //throw new Error("Method not implemented.");
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            buscaConta.visualizar();
        } else
            console.log(colors.fg.red, "\nA Conta numero: " + numero
                + " não foi encontrada!", colors.reset);
    }
    listarTodas(): void {
        for (let conta of this._listaContas){
            conta.visualizar();
        }
        //throw new Error("Method not implemented.");
    }
    cadastrar(conta: Conta): void {
        this._listaContas.push(conta);
        console.log(colors.fg.green, "\nA Conta número: " + conta.numero + " foi criada com sucesso!", colors.reset)
        //throw new Error("Method not implemented.");
    }
    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta != null) {
            this._listaContas[this._listaContas.indexOf(buscaConta)] = conta;
            console.log(colors.fg.green, "\nA Conta numero: " + conta.numero + 
                        " foi atualizada com sucesso!", colors.reset);
        } else
            console.log(colors.fg.red, "\nA Conta numero: " + conta.numero + 
                        " não foi encontrada!", colors.reset);
        //throw new Error("Method not implemented.");
    }
    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            this._listaContas.splice(this._listaContas.indexOf(buscaConta), 1);
        	console.log(colors.fg.green,"\nA Conta numero: " + numero + 
                        " foi apagada com sucesso!", colors.reset);
        }else
        console.log(colors.fg.red,"\nA Conta numero: " + numero + 
                    " não foi encontrada!", colors.reset);
        //throw new Error("Method not implemented.");
    }
    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    //MÉTODOS AUXILIARES

    //Gerar Número da Conta
    public gerarNumero(): number{
        return ++ this.numero;
    }

     /*Checa se uma Conta existe*/
    public buscarNoArray(numero: number): Conta | null {

        for (let conta of this._listaContas) {
            if (conta.numero === numero)
                return conta;
        }
        return null;
    }

}