package com.example.marcus.activities;

import android.app.ListActivity;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.ListView;
import android.widget.Toast;

import java.util.ArrayList;

public class ExemploSmileAdapter extends ListActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        ArrayList<Smile> list = new ArrayList<>();

        list.add(new Smile("Feliz", Smile.FELIZ));
        list.add(new Smile("Triste", Smile.TRISTE));
        list.add(new Smile("Louco", Smile.LOUCO));


        setListAdapter(new SmileAdapter(this,list));

    }

    @Override
    protected void onListItemClick(ListView l, View v, int position, long id) {
        super.onListItemClick(l, v, position, id);

        Smile smile = (Smile) this.getListAdapter().getItem(position);

        Toast.makeText(this, "Voce Selecionou o SMile : " + smile.getNome(), Toast.LENGTH_LONG).show();
    }
}
