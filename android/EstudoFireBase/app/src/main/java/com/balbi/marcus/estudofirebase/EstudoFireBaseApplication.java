package com.balbi.marcus.estudofirebase;

import android.app.Application;

import com.balbi.marcus.estudofirebase.Common.BalbiFireBase;
import com.firebase.client.Firebase;

/**
 * Created by marcus on 29/03/16.
 */
public class EstudoFireBaseApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();

        Firebase.setAndroidContext(getApplicationContext());

        BalbiFireBase.baseURL = "http://fiery-heat-9625.firebaseio.com";

    }
}
