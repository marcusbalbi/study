package com.balbi.marcus.exemlosqlite;

import java.util.List;

/**
 * Created by marcus on 06/04/16.
 */
public class Pessoa {

    private String nome;

    private List<String> animais;

    public List<String> getAnimais() {
        return animais;
    }

    public void setAnimais(List<String> animais) {
        this.animais = animais;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
