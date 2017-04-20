package kg.obval.ov;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.TextView;

public class Tablo extends AppCompatActivity {

    TextView PokupkaView;
    TextView ProdajaView;

    TextView dollarView;
    TextView dollarPokupkaView;
    TextView dollarProdazhaView;

    TextView euroView;
    TextView euroPokupkaView;
    TextView euroProdazhaView;

    TextView rublView;
    TextView rublPokupkaView;
    TextView rublProdazhaView;

    TextView tengeView;
    TextView tengePokupkaView;
    TextView tengeProdazhaView;

    EditText kolsummaEdit;
    Spinner  spinnervalutado;
    TextView naView;
    Spinner  spinnervalutaposle;
    Spinner  kupitprodat;
    TextView resultatView;
    TextView summaView;
    Spinner  proobmen;

    double inputValue;

    Calculator calculator;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_tablo);

        init();
        calculator = new Calculator;

        setTextOnMoneyTextView();


        kolsummaEdit.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {

            }

            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                inputValue = Double.parseDouble(kolsummaEdit.getText().toString());
                summaView.setText(calculator.convert(inputValue, int usingCurrency,
                                  int transferCurrency).toString());
            }

            @Override
            public void afterTextChanged(Editable s) {
            }
        });



    }

    private void init() {

        PokupkaView = (TextView) findViewById(R.id.pokupkaView);
        ProdajaView = (TextView) findViewById(R.id.prodajaView);

        dollarView = (TextView)  findViewById(R.id.dollarView);
        dollarPokupkaView = (TextView) findViewById(R.id.dollarPokupkaView);
        dollarProdazhaView = (TextView) findViewById(R.id.dollarProdazhaView);

        euroView = (TextView) findViewById(R.id.euroView);
        euroPokupkaView = (TextView) findViewById(R.id.euroPokupkaView);
        euroProdazhaView = (TextView) findViewById(R.id.euroProdazhaView);

        rublView = (TextView) findViewById(R.id.rublView);
        rublPokupkaView = (TextView) findViewById(R.id.rublPokupkaView);
        rublProdazhaView = (TextView) findViewById(R.id.rublProdajaView);

        tengeView = (TextView) findViewById(R.id.tengeView);
        tengePokupkaView = (TextView) findViewById(R.id.tengePokupkaView);
        tengeProdazhaView =(TextView) findViewById(R.id.tengeProdazhaView);

        kolsummaEdit = (EditText)  findViewById(R.id.kolsummaedit);
        spinnervalutado = (Spinner) findViewById(R.id.spinnervalutado);
        naView = (TextView) findViewById(R.id.naView);
        spinnervalutaposle = (Spinner) findViewById(R.id.spinnervalutaposle);
        kupitprodat = (Spinner) findViewById(R.id.kupitprodat);
        resultatView = (TextView) findViewById(R.id.resultatView);
        summaView = (TextView) findViewById(R.id.summaView);
        proobmen = (Spinner) findViewById(R.id.proobmen);



    }
}
