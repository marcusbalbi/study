package com.example.marcus.activities;

/**
 * Created by marcus on 30/05/16.
 */
public class Smile {
    public static final int FELIZ = 0;
    public static final int TRISTE = 1;
    public static final int LOUCO = 2;

    private String nome;

    private int tipo;


    public Smile(String nome, int tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }


    public int getTipo() {
        return tipo;
    }

    public void setTipo(int tipo) {
        this.tipo = tipo;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getImagem() {

        switch (this.tipo)
        {
            case FELIZ : {
                return R.drawable.feliz;

            }

            case TRISTE : {
                return R.drawable.triste;

            }

            case LOUCO : {
                return R.drawable.louco;
            }
        }

        return R.drawable.naoencontrado;

    }
}
