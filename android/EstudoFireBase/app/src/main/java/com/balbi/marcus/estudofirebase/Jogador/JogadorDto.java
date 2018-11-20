package com.balbi.marcus.estudofirebase.Jogador;

import com.balbi.marcus.estudofirebase.Common.DtoObject;

import java.util.ArrayList;

/**
 * Created by marcus on 29/03/16.
 */
public class JogadorDto  extends DtoObject {


    private String nome;

    private int idade;

    private ArrayList<String> cartas;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public ArrayList<String> getCartas() {
        return cartas;
    }

    public void setCartas(ArrayList<String> cartas) {
        this.cartas = cartas;
    }

    @Override
    public String toString() {
        return this.getNome() + " " + this.getIdade();
    }
}
