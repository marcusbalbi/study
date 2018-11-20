<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of tConsulta
 *
 * @author Marcus
 */
class Consulta {
    
    
    public function marcar()
    {
        $dao = new DaoConsultas();
        
        return $dao->marcar();
    }
    
}
