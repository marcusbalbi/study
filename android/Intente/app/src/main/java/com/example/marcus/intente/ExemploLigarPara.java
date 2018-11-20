package com.example.marcus.intente;

import android.content.Intent;
import android.net.Uri;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class ExemploLigarPara extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_exemplo_ligar_para);

        final EditText telefone = (EditText) findViewById(R.id.telefone);
        Button ligarPara = (Button) findViewById(R.id.ligarPara);


        ligarPara.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Uri uri = Uri.parse("tel:".concat(telefone.getText().toString()));

                Intent ligar = new Intent(Intent.ACTION_CALL,uri);

                startActivity(ligar);

            }
        });

    }


}
