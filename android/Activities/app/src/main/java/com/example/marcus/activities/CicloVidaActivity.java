package com.example.marcus.activities;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class CicloVidaActivity extends ExemploCicloVIda {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Button b = new Button(this);
        b.setText("TROCAR TELA");

        setContentView(b);

        b.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Intent i = new Intent(CicloVidaActivity.this,ExemploCicloVIda.class);

                //PASSANDO PARAMETROS PARA OUTRA TELA
                Bundle bundle = new Bundle();
                bundle.putString("mensagem","OLA");
                i.putExtras(bundle);

                //FORMA COM ATALHO
                //i.putExtra("TESTE","OLA");
                startActivity(i);

            }
        });

    }

}
