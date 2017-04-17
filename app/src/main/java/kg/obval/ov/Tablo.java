package kg.obval.ov;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.TextView;

public class Tablo extends AppCompatActivity {

    EditText amountPresentEdit;
    Spinner spinnerEst;
    EditText amountNadoEdit;
    Spinner spinnerNado;
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



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_tablo);

        amountPresentEdit = (EditText) findViewById(R.id.amountEstEditText);
        spinnerEst = (Spinner) findViewById(R.id.spinnerEst);
        amountNadoEdit = (EditText) findViewById(R.id.amountNadoEdit);
        spinnerNado = (Spinner) findViewById(R.id.spinnerNado);
        dollarView = (TextView)  findViewById(R.id.dollarView);
        dollarPokupkaView = (TextView) findViewById(R.id.dollarPokupkaView);
        dollarProdazhaView = (TextView) findViewById(R.id.dollarProdazhaView);
        euroView = (TextView) findViewById(R.id.euroView);
        euroPokupkaView = (TextView) findViewById(R.id.euroPokupkaView);
        euroProdazhaView = (TextView) findViewById(R.id.euroProdazhaView);
        rublView = (TextView) findViewById(R.id.rublView);
        rublPokupkaView = (TextView) findViewById(R.id.rublPokupkaView);
        rublProdazhaView = (TextView) findViewById(R.id.rublPokupkaView);
        tengeView = (TextView) findViewById(R.id.tengeView);
        tengePokupkaView = (TextView) findViewById(R.id.tengePokupkaView);
        tengeProdazhaView =(TextView) findViewById(R.id.tengeProdazhaView);





    }
}
