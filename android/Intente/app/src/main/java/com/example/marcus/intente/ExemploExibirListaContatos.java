package com.example.marcus.intente;

import android.content.ContentProvider;
import android.content.Intent;
import android.database.Cursor;
import android.net.Uri;
import android.preference.PreferenceManager;
import android.preference.PreferenceManager.OnActivityResultListener;
import android.provider.ContactsContract;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class ExemploExibirListaContatos extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_exemplo_exibir_lista_contatos);

        Button b = (Button) findViewById(R.id.abrirSelecaoContato);

        b.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Uri uri = Uri.parse("content://com.android.contacts/contacts/");

                Intent i = new Intent(Intent.ACTION_PICK,uri);

                startActivityForResult(i,10);

            }
        });

    }

   @Override
   protected void onActivityResult(int requestCode, int resultCode, Intent data) {
       super.onActivityResult(requestCode, resultCode, data);

       Uri uri = data.getData();

       Cursor c = getContentResolver().query(uri,null,null,null,null);

       c.moveToNext();

       EditText contatoSelecionado = (EditText) this.findViewById(R.id.contatoSelecionado);

       int nomeColuna  = c.getColumnIndexOrThrow(ContactsContract.Contacts.DISPLAY_NAME);
       contatoSelecionado.setText(c.getString(nomeColuna));


   }
}
