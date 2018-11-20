package com.balbi.marcus.buscastwitter;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.SharedPreferences;
import android.net.Uri;
import android.view.LayoutInflater;
import android.view.View;
import android.view.inputmethod.InputMethodManager;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TableLayout;
import android.widget.TableRow;
import android.widget.Toast;

import java.util.Arrays;


public class MainActivity extends AppCompatActivity {

    private SharedPreferences buscasSalvas;
    private TableLayout queryTableLayout;
    private EditText queryEditText;
    private EditText tagEditText;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        this.iniciarComponentes();
    }

    private void iniciarComponentes()
    {
        this.buscasSalvas = this.getSharedPreferences("buscas",MODE_PRIVATE);

        this.queryTableLayout = (TableLayout) findViewById(R.id.queryTableLayout);

        this.queryEditText = (EditText) findViewById(R.id.queryEditText);

        this.tagEditText = (EditText) findViewById(R.id.tagEditText);


        atualizarBuscasSalvas(null);

    }

    public void aoBotaoSalvarBuscaClicado(View v)
    {
        if(this.queryEditText.getText().toString().isEmpty() ||
           this.tagEditText.getText().toString().isEmpty()) {

            AlertDialog.Builder builder = new AlertDialog.Builder(this);

            builder.setTitle(R.string.tituloFaltando);

            builder.setMessage(R.string.mensagemFaltando);

            builder.setPositiveButton(R.string.btnOk, null);

            AlertDialog errorDialog = builder.create();

            errorDialog.show();

            return;

        }
            criarTag(this.queryEditText.getText().toString(),
                    this.tagEditText.getText().toString());

            this.tagEditText.setText("");
            this.queryEditText.setText("");

            ((InputMethodManager) getSystemService(Context.INPUT_METHOD_SERVICE))
                    .hideSoftInputFromWindow(tagEditText.getWindowToken(), 0);

    }

    public void aoBotaoLimparBuscasClicado(View view)
    {
       this.limparTags();
    }

    private void atualizarBuscasSalvas(String novaTag)
    {

        String[] tags = buscasSalvas.getAll().keySet().toArray(new String[0]);

        Arrays.sort(tags, String.CASE_INSENSITIVE_ORDER);

        if(novaTag != null) {

            construirInterface(novaTag, Arrays.binarySearch(tags, novaTag));
        }
        else {

            for(int index = 0;index < tags.length;++index){
                construirInterface(tags[index],index);
            }


        }
    }

    private void criarTag(String query,String tag)
    {
        String queryOriginal = buscasSalvas.getString(tag,null);

        SharedPreferences.Editor editorPreferencias = buscasSalvas.edit();
        editorPreferencias.putString(tag, query);
        editorPreferencias.apply();

        if(queryOriginal == null) {

            atualizarBuscasSalvas(tag);

        }


    }

    private void construirInterface(String tag, int index)
    {
        LayoutInflater inflator = (LayoutInflater) getSystemService(Context.LAYOUT_INFLATER_SERVICE);

        View novaTagView = inflator.inflate(R.layout.new_tag_view,null);

        Button novaButtonTag = (Button) novaTagView.findViewById(R.id.novaButtonTag);

        novaButtonTag.setText(tag);

        novaButtonTag.setOnClickListener(queryButtonListener);

        Button novoBotaoEditar = (Button) novaTagView.findViewById(R.id.novoBotaoEditar);

        novoBotaoEditar.setOnClickListener(editarBotaoListener);

        this.queryTableLayout.addView(novaTagView, index);

    }

    public void limparTags()
    {
        AlertDialog.Builder builder = new AlertDialog.Builder(MainActivity.this);

        builder.setTitle(R.string.mensagemConfirmacaoExclusao);

        builder.setPositiveButton(R.string.btnApagar, new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {

                MainActivity.this.queryTableLayout.removeAllViews();

                MainActivity.this.buscasSalvas.edit().clear().commit();

                MainActivity.this.buscasSalvas.edit().apply();
            }
        });

        builder.setCancelable(true);

        builder.setNegativeButton(R.string.btnCancelar, null);


        AlertDialog alerta = builder.create();

        alerta.show();



        }
    public View.OnClickListener queryButtonListener = new View.OnClickListener() {
        @Override
        public void onClick(View v) {

            String buttonText = ((Button)v).getText().toString();

            String query = buscasSalvas.getString(buttonText, null);

            String urlString = MainActivity.this.getString(R.string.urlBusca) + query;
            
            Intent getURL = new Intent(Intent.ACTION_VIEW,Uri.parse(urlString));


            
            MainActivity.this.startActivity(getURL);

        }
    };

    public View.OnClickListener editarBotaoListener = new View.OnClickListener() {
        @Override
        public void onClick(View v) {

            TableRow linha = (TableRow)v.getParent();

            String tag = ((Button)linha.findViewById(R.id.novaButtonTag)).getText().toString();


            MainActivity.this.queryEditText.setText(MainActivity.this.buscasSalvas.getString(tag,null));

            MainActivity.this.tagEditText.setText(tag);
        }
    };

}
