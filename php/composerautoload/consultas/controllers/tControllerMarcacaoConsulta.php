<?php



/**
 * Description of tControllerMarcacaoConsulta
 *
 * @author Marcus
 */
class ControllerMarcacaoConsulta {
    
    
    
    public function index()
    {
        $model = new Consulta();
        
        
        return $model->marcar();
    }
    
}
