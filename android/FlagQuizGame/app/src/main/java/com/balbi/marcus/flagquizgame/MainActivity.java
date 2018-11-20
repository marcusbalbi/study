package com.balbi.marcus.flagquizgame;

import android.content.res.AssetManager;
import android.os.Bundle;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.animation.Animation;
import android.widget.ImageView;
import android.widget.TableLayout;
import android.widget.TextView;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.Set;

public class MainActivity extends AppCompatActivity {

    static final String TAG = "FlagQuizGame Activity";

    List<String> fileNameList;
    List<String> quizCountriesList;
    Map<String,Boolean> regionsMap;
    String correctAnswer;
    int totalGuesses;
    int correctAnswers;
    int guessRows;
    Random random;
    Handler handler;
    Animation shakeAnimation;

    TextView answerTextView;
    TextView questionNumberTextView;
    ImageView flagImageView;
    TableLayout buttonTableLayout;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        fileNameList =  new ArrayList<String>();
        quizCountriesList = new ArrayList<String>();
        regionsMap = new HashMap<String,Boolean>();
        guessRows = 1;
        random = new Random();
        handler =  new Handler();


        String[] regionsName = getResources().getStringArray(R.array.regionsList);

        for(String region : regionsName) {

            regionsMap.put(region,true);

        }

        questionNumberTextView = (TextView) findViewById(R.id.questionNumberTextView);
        flagImageView  = (ImageView) findViewById(R.id.flagImageView);
        buttonTableLayout = (TableLayout) findViewById(R.id.buttonTableLayout);

        questionNumberTextView.setText(getResources().getString(R.string.question) + " 1 " +
        getResources().getString(R.string.of) + " 10");

        resetQuiz();





    }

    private void resetQuiz() {

        AssetManager assetManager = getResources().getAssets();

        fileNameList.clear();

        try{
            Set<String> regions  = regionsMap.keySet();

            for(String region : regions) {

                if(regionsMap.get(region)) {

                    String[] paths = assetManager.list(region);

                    for(String path : paths) {
                        fileNameList.add(path.replace(".png",""));
                    }

                }

            }
        }catch(IOException e) {
            Log.e(TAG,"ERRO AO LER OS ARQUIVOS DE IMAGEM",e);
        }

        correctAnswers = 0;
        totalGuesses = 0;
        quizCountriesList.clear();

        int flagCounter =1;
        int numberOfFlags =  fileNameList.size();


        while(flagCounter <= 10) {

            int randomIndex = random.nextInt(numberOfFlags);

            String fileName = fileNameList.get(randomIndex);

            if(!quizCountriesList.contains(fileName)) {
                quizCountriesList.add(fileName);
                ++flagCounter;
            }

        }

        loadNextFlag();

    }

    private void loadNextFlag() {



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
}
