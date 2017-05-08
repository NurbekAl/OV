package kg.obval.ov;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.View;
import android.widget.AdapterView;
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
        spinnerHelper();
        setCourse();
        setTextOnMoneyTextView();

        kolsummaEdit.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {

            }

            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                setResult();
            }

            @Override
            public void afterTextChanged(Editable s) {
            }
        });

        AdapterView.OnItemSelectedListener onItemSelectedListener = new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
                setResult();
            }

            @Override
            public void onNothingSelected(AdapterView<?> parent) {

            }
        };

        kupitprodat.setOnItemSelectedListener(onItemSelectedListener);
        spinnervalutaposle.setOnItemSelectedListener(onItemSelectedListener);
        spinnervalutado.setOnItemSelectedListener(onItemSelectedListener);
    }

    void setResult(){
        String inputTextValue = kolsummaEdit.getText().toString();
        if (!inputTextValue.equals("")) {
            inputValue = Double.parseDouble(inputTextValue);
            String valDo = String.valueOf(spinnervalutado.getSelectedItem());
            String valPosle = String.valueOf(spinnervalutaposle.getSelectedItem());
            String pokupkaOrprodazha = String.valueOf(kupitprodat.getSelectedItem());
            result = calculator.convert(inputValue, transValToInt(valDo), transValToInt(valPosle), transPokOrProdToInt(pokupkaOrprodazha), course);
            double roundResult = new BigDecimal(result).setScale(2, RoundingMode.HALF_UP).doubleValue();
            resultatView.setText(String.valueOf(calculator.getFormula()));
            summaView.setText("= " + String.valueOf(roundResult));
        }
    }

    private int transPokOrProdToInt(String pokupkaOrprodazha) {
        int result;
        switch (pokupkaOrprodazha) {
            case "Купить":
                result = 1;
                break;
            case "Продать":
                result = 2;
                break;
            default:
                result = 0;
                break;
        }
        return result;
    }

    private int transValToInt(String valDo) {
        int result;
        switch (valDo){
            case "KGS":
                result =1;
                break;
            case "USD":
                result =2;
                break;
            case "EUR":
                result =3;
                break;
            case "RUB":
                result =4;
                break;
            case  "KZT":
                result =5;
                break;
            default:
                result = 0;
                break;

        }
        return result;
    }

    private void spinnerHelper(){
        String[] data = {"KGS","USD", "EUR", "RUB", "KZT"};
        ArrayAdapter<String> adapter = new ArrayAdapter<String>(this, android.R.layout.simple_spinner_item, data);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinnervalutado.setAdapter(adapter);

        String[] data1 = {"KGS","USD", "EUR", "RUB", "KZT"};
        ArrayAdapter<String> adapter1 = new ArrayAdapter<String>(this, android.R.layout.simple_spinner_item, data1);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinnervalutaposle.setAdapter(adapter1);

        String[] data2 = {"Купить", "Продать"};
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
        resultatView = (TextView) findViewById(R.id.resultatView);

        resultatView.setTextSize(12);

        firebaseDatabase = FirebaseDatabase.getInstance();
        databaseReference = firebaseDatabase.getReference("course");

    }
}
