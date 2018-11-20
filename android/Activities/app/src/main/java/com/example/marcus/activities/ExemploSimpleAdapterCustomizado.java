package com.example.marcus.activities;

import android.app.ListActivity;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.ListView;
import android.widget.SimpleAdapter;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.HashMap;

public class ExemploSimpleAdapterCustomizado extends ListActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_exemplo_simple_adapter_customizado);
        ArrayList<HashMap<String,String>> list = new ArrayList<>();

        for(int i=0;i<10;i++) {
            HashMap<String,String> item = new HashMap<>();

            item.put("nome","Nome " + i);
            item.put("fone","fone " + i);
            list.add(item);

        }

        String[] from = new String[]{ "nome", "fone" };

        int[] to = new int[]{R.id.nome, R.id.fone };

        int layout_customizado = R.layout.layout_contatos_fone;

        SimpleAdapter s = new SimpleAdapter(this,list,layout_customizado,from,to);

        setListAdapter(s);

    }


    @Override
    protected void onListItemClick(ListView l, View v, int position, long id) {
        super.onListItemClick(l, v, position, id);

        Toast.makeText(this,
                "CONTATO SELECIONADO :"+this.getListAdapter()
                        .getItem(position)
                        .toString(),
                Toast.LENGTH_LONG).show();
    }
}
