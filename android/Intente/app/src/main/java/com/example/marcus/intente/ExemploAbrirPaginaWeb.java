package com.example.marcus.intente;

import android.content.Intent;
import android.net.Uri;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class ExemploAbrirPaginaWeb extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_exemplo_abrir_pagina_web);

        Button botao = (Button) this.findViewById(R.id.abrirPaginaWeb);
        final EditText pagina = (EditText) this.findViewById(R.id.pagina);

        botao.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Uri uri = Uri.parse(pagina.getText().toString());

                Intent abriPaginaWeb = new Intent(Intent.ACTION_VIEW,uri);

                startActivity(abriPaginaWeb);
            }
        });
    }



}
