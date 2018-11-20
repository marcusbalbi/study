package com.balbi.marcus.estudofirebase.Common;

import com.firebase.client.Firebase;

/**
 * Created by marcus on 29/03/16.
 */
abstract public class BalbiFireBase extends Firebase {

    public static String baseURL;

    public BalbiFireBase(String path) {

        super(baseURL +"/"+ path);

    }


    public void cadastrar(DtoObject obj)
    {
        Firebase q = this.push();

        obj.setChave(q.getKey());

        q.setValue(obj);

    }


    public void editar(DtoObject obj)
    {
            this.child(obj.getChave()).setValue(obj);
    }

    public void excluir(DtoObject obj)
    {
        this.child(obj.getChave()).removeValue();
    }


}
