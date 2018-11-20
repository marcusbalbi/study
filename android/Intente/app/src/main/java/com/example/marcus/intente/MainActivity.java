package com.example.marcus.intente;

import android.app.ListActivity;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.ListView;

public class MainActivity extends ListActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        String[] itensMenu = new String[]{"Exemplo Abrir Pagina Web",
                "Ligar Para","Exibir contato 1",
                "Exibir Lista de COntatos" ,
                "Exemplo SIm Nao",
                "Sair"};

        ArrayAdapter<String> arrayAdapter = new ArrayAdapter<String>(this, android.R.layout.simple_list_item_1, itensMenu);

        this.setListAdapter(arrayAdapter);


    }

    @Override
    protected void onListItemClick(ListView l, View v, int position, long id) {
        super.onListItemClick(l, v, position, id);

        switch (position) {

            case 0: {
                startActivity(new Intent(this,ExemploAbrirPaginaWeb.class));
                break;
            }

            case 1: {
                startActivity(new Intent(this,ExemploLigarPara.class));
                break;
            }

            case 2: {
                startActivity(new Intent(this, ExemploAbrirContato.class));
            }

            case 3: {
                startActivity(new Intent(this, ExemploExibirListaContatos.class));
            }

            case 4: {
                startActivity(new Intent(this, ExemploSimNao.class));
            }
        }
    }
}