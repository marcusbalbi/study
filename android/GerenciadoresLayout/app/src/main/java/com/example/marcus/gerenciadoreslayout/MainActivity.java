package com.example.marcus.gerenciadoreslayout;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Gravity;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    LinearLayout linearLayout;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //setContentView(R.layout.exemplo_table_layout_formulario);
        //setContentView(this.LinearLayoutPelaApi());

        setContentView(R.layout.exemplo_scrollview);

        this.linearLayout = (LinearLayout)findViewById(R.id.layout1);

        for(int i=0;i<100;i++) {

            TextView  t = new TextView(this);

            t.setLayoutParams(new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT));

            t.setText("TEXTVIEW NUMERO : ".concat(String.valueOf(i)));

            linearLayout.addView(t);

        }


    }

    private LinearLayout LinearLayoutPelaApi() {

        LinearLayout layout = new LinearLayout(this);

        layout.setOrientation(LinearLayout.VERTICAL);

        layout.setLayoutParams(new LinearLayout
                .LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT));

        layout.setPadding(10,10,10,10);

        TextView nome = new TextView(this);
        nome.setText("Nome: ");
        nome.setLayoutParams(new LinearLayout.LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT,
                ViewGroup.LayoutParams.WRAP_CONTENT));
        layout.addView(nome);

        EditText tNome = new EditText(this);
        tNome.setLayoutParams(new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.WRAP_CONTENT));
        layout.addView(tNome);


        TextView senha = new TextView(this);
        senha.setText("Senha: ");
        nome.setLayoutParams(new LinearLayout.LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT,
                ViewGroup.LayoutParams.WRAP_CONTENT));
        layout.addView(senha);

        EditText tSenha = new EditText(this);
        tNome.setLayoutParams(new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.WRAP_CONTENT));

        layout.addView(tSenha);


        Button ok = new Button(this);
        ok.setLayoutParams(new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.WRAP_CONTENT));

        ok.setGravity(Gravity.RIGHT);

        ok.setText("OK");

        layout.addView(ok);

        return layout;







    }


}
