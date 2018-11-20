package com.example.marcus.intente;

import android.content.Intent;
import android.net.Uri;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class ExemploAbrirContato extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_exemplo_abrir_contato);

        Button b = (Button) this.findViewById(R.id.abrirContato);

        b.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Uri uri = Uri.parse("content://com.android.contacts/contacts/1");

                Intent abrirContato = new Intent(Intent.ACTION_VIEW,uri);

                startActivity(abrirContato);
            }
        });
    }
}
