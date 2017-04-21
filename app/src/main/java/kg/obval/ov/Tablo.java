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

    double dollarpokupka;
    double dollarprodaja;
    double europokupka;
    double europrodaja;
    double rublpokupka;
    double rubleprodaja;
    double tengepokupka;
    double tengeprodaja;

    double result;
    int usingCurrency;
    int transferCurrency;
    Calculator calculator;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_tablo);

        init();
        calculator = new Calculator();

        setCourse();
        setTextOnMoneyTextView();


        kolsummaEdit.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {

            }

            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                inputValue = Double.parseDouble(kolsummaEdit.getText().toString());
                result = calculator.convert(inputValue, 1, 5, 2);
                summaView.setText(String.valueOf(result));

            }

            @Override
            public void afterTextChanged(Editable s) {
            }
        });



    }

    private void setCourse() {
        dollarpokupka = 68.0;
        dollarprodaja = 68.5;
        europokupka = 80.0;
        europrodaja = 80.50;
        rublpokupka = 1.22;
        rubleprodaja = 1.33;
        tengepokupka = 0.22;
        tengeprodaja = 0.33;


    }

    private void setTextOnMoneyTextView() {
        dollarPokupkaView.setText(String.valueOf(dollarpokupka));
        dollarProdazhaView.setText(String.valueOf(dollarprodaja));
        euroPokupkaView.setText(String.valueOf(europokupka));
        euroProdazhaView.setText(String.valueOf(europrodaja));
        rublPokupkaView.setText(String.valueOf(rublpokupka));
        rublProdazhaView.setText(String.valueOf(rubleprodaja));
        tengePokupkaView.setText(String.valueOf(tengepokupka));
        tengeProdazhaView.setText(String.valueOf(tengeprodaja));
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
