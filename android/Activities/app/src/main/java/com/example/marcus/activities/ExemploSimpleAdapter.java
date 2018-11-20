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

public class ExemploSimpleAdapter extends ListActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        ArrayList<HashMap<String,String>> list = new ArrayList<>();

        for(int i=0;i<10;i++) {
            HashMap<String,String> item = new HashMap<>();

            item.put("nome","Nome " + i);
            item.put("fone","fone " + i);
            list.add(item);

        }

        String[] from = new String[]{ "nome", "fone" };

        int[] to = new int[]{android.R.id.text1, android.R.id.text2 };

        int layout_nativo = android.R.layout.two_line_list_item;

        SimpleAdapter s = new SimpleAdapter(this,list,layout_nativo,from,to);

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
