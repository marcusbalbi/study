package com.example.marcus.views;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.CheckBox;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.Spinner;
import android.widget.Toast;
import android.widget.ToggleButton;

public class MainActivity extends AppCompatActivity {

    private static final String[] Frutas = {
            "Maça",
            "Pera",
            "Abacaxi",
            "Melão",
            "Melancia",
            "Abacate",
            "Tomate",
            "Papaia",
            "Laranja",
            "Limão"
    };
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.spinner_progressbar);

       //iniciarFrutas();

        //iniciarRadio();

        iniciarSpinner();



    }

    private void iniciarSpinner() {

        Spinner s = (Spinner)this.findViewById(R.id.spinner);

        final ArrayAdapter<String> array =
                new ArrayAdapter(this,android.R.layout.simple_dropdown_item_1line,Frutas);

        s.setAdapter(array);

        s.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {

                Toast.makeText(MainActivity.this, array.getItem(position).toString(), Toast.LENGTH_SHORT).show();
            }

            @Override
            public void onNothingSelected(AdapterView<?> parent) {

            }
        });


    }

    private void iniciarRadio() {

        RadioGroup grupo = (RadioGroup) this.findViewById(R.id.grupo_radio);

        grupo.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(RadioGroup group, int checkedId) {
                RadioButton b = (RadioButton) MainActivity.this.findViewById(checkedId);

                Toast.makeText(MainActivity.this,(String)b.getTag(),Toast.LENGTH_LONG).show();
            }
        });

    }

    private void iniciarFrutas()
    {
        //EXEMPLO AUTO COMPLETE
       /* AutoCompleteTextView autoCompleteTextView = (AutoCompleteTextView) findViewById(R.id.autocomplete);

        ArrayAdapter<String> array =
                new ArrayAdapter(this,android.R.layout.simple_dropdown_item_1line,Frutas);

        autoCompleteTextView.setAdapter(array);*/
    }


    public void checkboxSelecionado(View v)
    {
        CheckBox c = (CheckBox)v;
        if(c.isChecked()) {
            Toast.makeText(MainActivity.this, "SELECIONADO", Toast.LENGTH_SHORT).show();
        } else {
            Toast.makeText(MainActivity.this, "NAO SELECIONADO", Toast.LENGTH_SHORT).show();
        }


    }

    public void toggleSelecionado(View v)
    {
        ToggleButton c = (ToggleButton)v;
        if(c.isChecked()) {
            Toast.makeText(MainActivity.this, "SELECIONADO", Toast.LENGTH_SHORT).show();
        } else {
            Toast.makeText(MainActivity.this, "NAO SELECIONADO", Toast.LENGTH_SHORT).show();
        }


    }
}
