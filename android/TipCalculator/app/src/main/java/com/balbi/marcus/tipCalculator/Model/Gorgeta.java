package com.balbi.marcus.tipCalculator.Model;

/**
 * Created by marcus on 24/03/16.
 */
public class Gorgeta {

    private double gorgetaComTotal;

    private double gorgeta;


    public double getGorgetaComTotal() {
        return gorgetaComTotal;
    }

    public void setGorgetaComTotal(double gorgetaComTotal) {
        this.gorgetaComTotal = gorgetaComTotal;
    }

    public double getGorgeta() {
        return gorgeta;
    }

    public void setGorgeta(double gotgeta) {
        this.gorgeta = gotgeta;
    }

    public String getGorgetaFormatada()
    {
        return String.format("%.02f",this.gorgeta);
    }

    public String getGorgetaComTotalFormatada() {
        return String.format("%.02f",this.gorgetaComTotal);
    }
}
