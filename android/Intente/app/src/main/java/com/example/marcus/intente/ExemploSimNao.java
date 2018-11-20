package com.example.marcus.intente;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Toast;

public class ExemploSimNao extends AppCompatActivity {

    public static final int EXEMPLO_SIM_NAO = 1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_exemplo_sim_nao);
    }


    public void aoExemploSimNaoClicado(View v) {


        Intent it = new Intent(this,TelaSimNao.class);


        startActivityForResult(it,EXEMPLO_SIM_NAO);


    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        if(resultCode == 1) {
            Toast.makeText(this,data.getExtras().getString("msg"),Toast.LENGTH_LONG).show();
        }

        if(resultCode == 2) {
            Toast.makeText(this,data.getExtras().getString("msg"),Toast.LENGTH_LONG).show();
        }

        if(resultCode == 0) {
            Toast.makeText(this,data.getExtras().getString("msg"),Toast.LENGTH_LONG).show();
        }

    }
}
