package com.example.marcus.intente;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class TelaSimNao extends AppCompatActivity {


    Button btn_sim;
    Button btn_nao;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_tela_sim_nao);

        btn_sim = (Button) findViewById(R.id.sim);
        btn_nao = (Button) findViewById(R.id.nao);

        btn_sim.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent it = new Intent();

                it.putExtra("msg","Botão Sim clicado");

                setResult(1,it);
                finish();
            }
        });

        btn_nao.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent it = new Intent();

                it.putExtra("msg","Botão Não clicado");

                setResult(2,it);
                finish();
            }
        });

    }
}
