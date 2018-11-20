package com.example.marcus.activities;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;

public class ExemploCicloVIda extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Log.i("CICLO_DE_VIDA","ON CREATE CHAMADO".concat("EM "+getLocalClassName()));

        Intent i = getIntent();

        if(i != null) {
            Bundle b = i.getExtras();


            if(b != null && b.containsKey("mensagem"))
                Toast.makeText(this,b.getString("mensagem"),Toast.LENGTH_LONG).show();
        }
    }



    @Override
    protected void onStart() {
        super.onStart();
        Log.i("CICLO_DE_VIDA","ONSTART CHAMADO".concat("EM "+getLocalClassName()));
    }

    @Override
    protected void onResume() {
        super.onResume();
        Log.i("CICLO_DE_VIDA","ONRESUME CHAMADO".concat("EM "+getLocalClassName()));
    }

    @Override
    protected void onPause() {
        super.onPause();
        Log.i("CICLO_DE_VIDA","ONPAUSE CHAMADO".concat("EM "+getLocalClassName()));
    }

    @Override
    protected void onStop() {
        super.onStop();
        Log.i("CICLO_DE_VIDA","ONSTOP CHAMADO".concat("EM "+getLocalClassName()));
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        Log.i("CICLO_DE_VIDA","ONDESTROY CHAMADO".concat("EM "+getLocalClassName()));
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        Log.i("CICLO_DE_VIDA","ONRESTART CHAMADO".concat("EM "+getLocalClassName()));
    }
}
