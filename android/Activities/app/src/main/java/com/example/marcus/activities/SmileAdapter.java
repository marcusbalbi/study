package com.example.marcus.activities;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.ListAdapter;
import android.widget.TextView;

import java.lang.reflect.Array;
import java.util.ArrayList;

/**
 * Created by marcus on 30/05/16.
 */
public class SmileAdapter extends BaseAdapter {

    private final Context context;
    ArrayList<Smile> lista;

    public SmileAdapter(Context context, ArrayList<Smile> lista) {
        this.lista = lista;
        this.context = context;
    }

    @Override
    public int getCount() {
        return lista.size();
    }

    @Override
    public Object getItem(int position) {
        return this.lista.get(position);
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {

        Smile smile  =(Smile) this.lista.get(position);

        LayoutInflater inflater = (LayoutInflater) this.context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);

        View v = inflater.inflate(R.layout.smile_detalhe,null);

        TextView nomeSmile = (TextView) v.findViewById(R.id.nome);
        ImageView imgSmile = (ImageView) v.findViewById(R.id.img);

        nomeSmile.setText(smile.getNome());

        imgSmile.setImageResource(smile.getImagem());

        return v;


    }
}
