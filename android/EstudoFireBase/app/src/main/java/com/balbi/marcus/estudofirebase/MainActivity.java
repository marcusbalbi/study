package com.balbi.marcus.estudofirebase;

import android.app.AlertDialog;
import android.content.DialogInterface;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.TextView;

import com.balbi.marcus.estudofirebase.Jogador.JogadorDto;
import com.balbi.marcus.estudofirebase.Jogador.JogadorFireBase;
import com.firebase.ui.FirebaseListAdapter;

import java.util.HashMap;

public class MainActivity extends AppCompatActivity {

    private JogadorFireBase jogadorFireBase = new JogadorFireBase();
    private final HashMap<String,JogadorDto> lista = new HashMap<>();

    private EditText nomeEditText;

    private EditText idadeEditText;

    private Button cadastrarButton;

    private ListView listView;

    private int posEdicao = -1;

    FirebaseListAdapter<JogadorDto> adapterLista;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

    }

    @Override
    protected void onStart() {
        super.onStart();

        this.capturarComponentes();

        this.configurarListagem();

        this.adicionarListeners();
    }

    private void adicionarListeners()
    {

        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {

                JogadorDto dto = adapterLista.getItem(position);

                cadastrarButton.setText("EDITAR");
                posEdicao = position;
                nomeEditText.setText(dto.getNome());
                idadeEditText.setText(String.valueOf(dto.getIdade()));



            }
        });

        listView.setOnItemLongClickListener(new AdapterView.OnItemLongClickListener() {
            @Override
            public boolean onItemLongClick(AdapterView<?> parent, View view, final int position, long id) {

                AlertDialog.Builder b = new AlertDialog.Builder(MainActivity.this);

                b.setMessage("Tem certeza que deseja remover este jogador?");

                b.setPositiveButton("SIM", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {

                        JogadorDto dto = MainActivity.this.adapterLista.getItem(position);

                        jogadorFireBase.excluir(dto);

                        dialog.dismiss();
                    }


                });

                b.setNegativeButton("Não", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        dialog.dismiss();
                    }
                });

                AlertDialog alert = b.create();

                alert.show();

                return true;
            }
        });
    }

    private void configurarListagem()
    {

        this.adapterLista =  new FirebaseListAdapter<JogadorDto>(this,JogadorDto.class, android.R.layout.two_line_list_item,jogadorFireBase) {
        @Override
        protected void populateView(View view, JogadorDto s, int i) {

            TextView nomeTextView = (TextView) view.findViewById(android.R.id.text1);
            TextView idadeTextView = (TextView) view.findViewById(android.R.id.text2);

            nomeTextView.setText(s.getNome());
            idadeTextView.setText(String.valueOf(s.getIdade()));
        }
    };
        listView.setAdapter(adapterLista);

    }

    private void capturarComponentes()
    {
        this.nomeEditText = (EditText) findViewById(R.id.nome);
        this.idadeEditText = (EditText) findViewById(R.id.idade);
        this.listView = (ListView) findViewById(R.id.listView);
        this.cadastrarButton = (Button) findViewById(R.id.cadastrar);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    public void cadastrarJogador(View v)
    {
        JogadorDto dto;
        if(posEdicao == -1) {
            dto = new JogadorDto();

        }
        else {
            dto = adapterLista.getItem(posEdicao);
        }


        dto.setNome(this.nomeEditText.getText().toString());

        int idade =  Integer.parseInt(this.idadeEditText.getText().toString());
        dto.setIdade(idade);


        if(posEdicao == -1) {
            jogadorFireBase.cadastrar(dto);
        }
        else {
           jogadorFireBase.editar(dto);
        }




        this.nomeEditText.setText("");
        this.idadeEditText.setText("");
        this.cadastrarButton.setText("CADASTRAR");

    }
}
