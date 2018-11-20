<?php


namespace Balbi\Reporting\Vendas;


use Balbi\Repositories\VendasRepository;

/**
 * Description of RelatorioVendas
 *
 * @author Marcus
 */
class RelatorioVendas {
    
    /**
     *
     * @VendasRepository
     */
    protected $repositorio;
    
    /**
     * Injetando Repositorio pelo Construtor
     * **/
    public function __construct(VendasRepository $repositorio) {
        
        $this->repositorio = $repositorio;
    }
    
    
    public function between($dataInicio,$dataFim)
    {
        $vendas = $this->repositorio->BuscaPorVendasBetween($dataInicio, $dataFim);
        
        
        return $this->formatar($vendas);
        
        
    }
    
    /**
     * Este Método Dentro desta Classe quebra o Principio da Responsabilidade Unica(Single Responsability Principle) visto que
     * uma classe deve ter um único Motivo para mudar, ou seja, este método deveria estar em uma classe de Repositorio ou na camada DAO
     * A classe de Relatorio não é Responsavel por buscar as informações do Banco de Dados, oque poderia ser feito é Injetar a Classe
     * que faz a busca do banco de dados dentro desta classe.
     * **/
   /* public function BuscaPorVendasBetween($dataInicio,$dataFim)
    {
        return DB::table("vendas")->whereBetween('created_at',[$dataInicio,$dataFim])->sum('total') / 100;
    }*/
    
    /*
     * 
     *  Esta Método Não deveria estar aqui pelo mesmo motivo descrito acima, fora isto, eu estou assumindo dentro desta classe que o formato de retorno
     * será sempre Html e se pode ser perigoso pois em dado momento eu posso formatar os dados em json, quebrando o Principio   
     * **/
    /*public function formatar($vendas)
    {
        return "<h1>Vendas : $vendas</h1>";
    }*/
    
    /**
     * 
     * Este método recebe a injeção de Dependencia e chama o metodo Implementado
     */
    public function formatar(OutputFormatter\VendasOutputFormatter $formatter,$vendas)
    {
        return $formatter->output($vendas);
    }
    
    
}
