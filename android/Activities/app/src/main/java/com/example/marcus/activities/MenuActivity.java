package com.example.marcus.activities;

import android.app.ListActivity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Toast;

public class MenuActivity extends ListActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        String[] itensMenu = new String[]{"Exemplo Ciclo Vida", "Lista de Contatos",
                "SimpleAdapter","SimpleAdapter Layout Customizado", "Adapter Customizado" ,"Sair"};

        ArrayAdapter<String> arrayAdapter = new ArrayAdapter<String>(this, android.R.layout.simple_list_item_1, itensMenu);

        this.setListAdapter(arrayAdapter);


    }

    @Override
    protected void onListItemClick(ListView l, View v, int position, long id) {
        super.onListItemClick(l, v, position, id);

        switch (position) {

            case 0: {
                startActivity(new Intent(this,ExemploCicloVIda.class));
                break;
            }

            case 1: {
                startActivity(new Intent(this,ListaContatos.class));
                break;
            }

            case 2: {
                startActivity(new Intent(this,ExemploSimpleAdapter.class));
                break;

            }

            case 3: {
                startActivity(new Intent(this,ExemploSimpleAdapterCustomizado.class));
                break;

            }

            case 4: {
                startActivity(new Intent(this,ExemploSmileAdapter.class));
                break;

            }

            case 5: {
                finish();
                break;
            }
        }
    }
}