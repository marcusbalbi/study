package com.balbi.marcus.tipCalculator.Model;

import com.balbi.marcus.tipCalculator.Model.Gorgeta;

public class CalculadoraGorgetas {


    public Gorgeta calcularGorgetaDezPorcento(double valor)
    {
        return this.calcularGorgeta(valor,10);
    }

    public Gorgeta calcularGorgetaQuinzePorcento(double valor)
    {
        return this.calcularGorgeta(valor,15);
    }

    public Gorgeta calcularGorgetaVintePorcento(double valor)
    {
        return this.calcularGorgeta(valor,20);
    }

    public Gorgeta calcularGorgeta(double valor, int porcentagem)
    {
        double valorGorgeta = (valor / 100) * porcentagem;

        Gorgeta gorgeta = new Gorgeta();

        gorgeta.setGorgeta(valorGorgeta);
        gorgeta.setGorgetaComTotal(valorGorgeta + valor);

        return gorgeta;
    }

}
