package com.balbi.marcus.tipcalculator;

import android.os.PersistableBundle;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.widget.EditText;
import android.widget.SeekBar;
import android.widget.TextView;
import com.balbi.marcus.tipCalculator.Model.CalculadoraGorgetas;
import com.balbi.marcus.tipCalculator.Model.Gorgeta;

public class MainActivity extends AppCompatActivity {

    protected EditText contaEditText;
    protected SeekBar gorgetaSeekBar;
    protected TextView porcentagemPersonalizadaTextView;

    protected EditText gorgetaDezEditText;
    protected EditText gorgetaQuinzeEditText;
    protected EditText gorgetaVinteEditText;

    protected EditText totalGorgetaDezEditText;
    protected EditText totalGorgetaQuinzeEditText;
    protected EditText totalGorgetaVinteEditText;

    protected EditText gorgetaPersnalizadaEditText;
    protected EditText totalgorgetaPersnalizadaEditText;

    protected double contaAtual;
    protected int porcentagemPersonalizadaAtual;

    private static final String CONTA_ATUAL = "CONTA_ATUAL";
    private static final String PORCENTAGEM_PERSONALIZADA_ATUAL = "PORCENTAGEM_PERSONALIZADA_ATUAL";


    private CalculadoraGorgetas calculadora;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

         this.calculadora = new CalculadoraGorgetas();

        if(savedInstanceState == null)  {
            contaAtual = 0.0;
            porcentagemPersonalizadaAtual = 18;
        }
        else {

            this.contaAtual = savedInstanceState.getDouble(CONTA_ATUAL);

            this.porcentagemPersonalizadaAtual = savedInstanceState.getInt(PORCENTAGEM_PERSONALIZADA_ATUAL);

        }


        this.iniciarComponentes();
    }

    protected void iniciarComponentes()
    {
        this.contaEditText = (EditText) findViewById(R.id.contaEditText);
        this.gorgetaSeekBar = (SeekBar) findViewById(R.id.gorgetaSeekBar);
        this.porcentagemPersonalizadaTextView = (TextView) findViewById(R.id.porcentagemPersonalizadaTextView);

        this.gorgetaDezEditText = (EditText)  findViewById(R.id.gorgetadezEditText);
        this.gorgetaQuinzeEditText = (EditText)  findViewById(R.id.gorgetaquinzeEditText);
        this.gorgetaVinteEditText = (EditText)  findViewById(R.id.gorgetavinteEditText);

        this.totalGorgetaDezEditText = (EditText)  findViewById(R.id.totalGorgetaDezEditText);
        this.totalGorgetaQuinzeEditText = (EditText)  findViewById(R.id.totalGorgetaQuinzeEditText);
        this.totalGorgetaVinteEditText = (EditText)  findViewById(R.id.totalGorgetaVinteEditText);

        this.gorgetaPersnalizadaEditText = (EditText) findViewById(R.id.gorgetaPersnalizadaEditText);
        this.totalgorgetaPersnalizadaEditText = (EditText) findViewById(R.id.totalgorgetaPersnalizadaEditText);

        this.adicionarListeners();

    }

    protected void adicionarListeners()
    {

        this.contaEditText.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {

            }

            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {

                MainActivity.this.atualizarGorgetas();

            }

            @Override
            public void afterTextChanged(Editable s) {

            }
        });

        this.gorgetaSeekBar.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            @Override
            public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {
                MainActivity.this.porcentagemPersonalizadaAtual = progress;
                MainActivity.this.porcentagemPersonalizadaTextView.setText(String.valueOf(progress) + "%");

                MainActivity.this.atualizarGorgetaPersonalizada();
            }

            @Override
            public void onStartTrackingTouch(SeekBar seekBar) {

            }

            @Override
            public void onStopTrackingTouch(SeekBar seekBar) {

            }
        });

    }

    @Override
    public void onSaveInstanceState(Bundle outState, PersistableBundle outPersistentState) {
        super.onSaveInstanceState(outState, outPersistentState);

        outState.putInt(PORCENTAGEM_PERSONALIZADA_ATUAL, this.porcentagemPersonalizadaAtual);

        outState.putDouble(CONTA_ATUAL, this.contaAtual);

    }

    private void atualizarGorgetas()
    {
        this.atualizarValorAtual();

        Gorgeta dezPorcento = this.calculadora.calcularGorgetaDezPorcento(this.contaAtual);
        Gorgeta quinzePorcento = this.calculadora.calcularGorgetaQuinzePorcento(this.contaAtual);
        Gorgeta vintePorcento = this.calculadora.calcularGorgetaVintePorcento(this.contaAtual);

        this.gorgetaDezEditText.setText(dezPorcento.getGorgetaFormatada());
        this.gorgetaQuinzeEditText.setText(quinzePorcento.getGorgetaFormatada());
        this.gorgetaVinteEditText.setText(vintePorcento.getGorgetaFormatada());

        this.totalGorgetaDezEditText.setText(dezPorcento.getGorgetaComTotalFormatada());
        this.totalGorgetaQuinzeEditText.setText(quinzePorcento.getGorgetaComTotalFormatada());
        this.totalGorgetaVinteEditText.setText(vintePorcento.getGorgetaComTotalFormatada());

        this.atualizarGorgetaPersonalizada();

    }

    private void atualizarValorAtual()
    {
        try
        {
            this.contaAtual = Double.parseDouble(this.contaEditText.getText().toString());
        }
        catch(NumberFormatException e)
        {
            this.contaAtual = 0;
        }

    }

    private void atualizarGorgetaPersonalizada()
    {
        Gorgeta personalizada = this.calculadora.calcularGorgeta(this.contaAtual,this.porcentagemPersonalizadaAtual);

        this.gorgetaPersnalizadaEditText.setText(personalizada.getGorgetaFormatada());

        this.totalgorgetaPersnalizadaEditText.setText(personalizada.getGorgetaComTotalFormatada());
    }
}
