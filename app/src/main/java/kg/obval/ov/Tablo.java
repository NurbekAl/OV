package kg.obval.ov;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.widget.ArrayAdapter;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.TextView;

import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

import java.math.BigDecimal;
import java.math.RoundingMode;

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
    private Course course;

    FirebaseDatabase firebaseDatabase;
    DatabaseReference databaseReference;


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
                String inputTextValue = kolsummaEdit.getText().toString();
                if (!inputTextValue.equals("")) {
                    inputValue = Double.parseDouble(inputTextValue);
                    result = calculator.convert(inputValue, 1, 5, 2, course);
                    double roundResult = new BigDecimal(result).setScale(2, RoundingMode.HALF_UP).doubleValue();
                    summaView.setText(String.valueOf(roundResult));
                }

            }

            @Override
            public void afterTextChanged(Editable s) {
            }
        });


        String[] data = {"KGS","USD", "EUR", "RUB", "KZT"};
        ArrayAdapter<String> adapter = new ArrayAdapter<String>(this, android.R.layout.simple_spinner_item, data);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinnervalutado.setAdapter(adapter);

        String[] data1 = {"KGS","USD", "EUR", "RUB", "KZT"};
        ArrayAdapter<String> adapter1 = new ArrayAdapter<String>(this, android.R.layout.simple_spinner_item, data1);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinnervalutaposle.setAdapter(adapter1);

        String[] data2 = {"купить", "продать"};
        ArrayAdapter<String> adapter2 = new ArrayAdapter<String>(this, android.R.layout.simple_spinner_item, data2);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        kupitprodat.setAdapter(adapter2);
    }

    private void setCourse() {

        databaseReference.addValueEventListener(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot dataSnapshot) {
                course = dataSnapshot.getValue(Course.class);

                dollarPokupkaView.setText(String.valueOf(course.getUSDpok()));
                dollarProdazhaView.setText(String.valueOf(course.getUSDprod()));
                euroPokupkaView.setText(String.valueOf(course.getEURpok()));
                euroProdazhaView.setText(String.valueOf(course.getEURprod()));
                rublPokupkaView.setText(String.valueOf(course.getRUBpok()));
                rublProdazhaView.setText(String.valueOf(course.getRUBprod()));
                tengePokupkaView.setText(String.valueOf(course.getKZTpok()));
                tengeProdazhaView.setText(String.valueOf(course.getKZTprod()));
            }

            @Override
            public void onCancelled(DatabaseError databaseError) {

            }
        });


    }

    private void setTextOnMoneyTextView() {
        //dollarPokupkaView.setText(String.valueOf(dollarpokupka));
        //dollarProdazhaView.setText(String.valueOf(dollarprodaja));
        //euroPokupkaView.setText(String.valueOf(europokupka));
        //euroProdazhaView.setText(String.valueOf(europrodaja));
        //rublPokupkaView.setText(String.valueOf(rublpokupka));
        //rublProdazhaView.setText(String.valueOf(rubleprodaja));
        //tengePokupkaView.setText(String.valueOf(tengepokupka));
        //tengeProdazhaView.setText(String.valueOf(tengeprodaja));
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

        firebaseDatabase = FirebaseDatabase.getInstance();
        databaseReference = firebaseDatabase.getReference("course");

    }
}
