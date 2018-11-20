package com.example.marcus.activities;

import android.app.ListActivity;
import android.database.Cursor;
import android.net.Uri;
import android.provider.ContactsContract;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Toast;

public class ListaContatos extends ListActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Uri uri = ContactsContract.Contacts.CONTENT_URI;

        Cursor c = getContentResolver().query(uri,null,null,null,null);

        ArrayAdapter<String> arrayAdapter = new ArrayAdapter<String>(this,android.R.layout.simple_list_item_1);

        while(c.moveToNext()) {
            arrayAdapter.add(c.getString(c.getColumnIndex(ContactsContract.Contacts.DISPLAY_NAME)));
        }

        this.setListAdapter(arrayAdapter);
        c.close();


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
