package kg.obval.ov;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ListAdapter;
import android.widget.ListView;

public class BankActivity extends AppCompatActivity {

    ListView spisokBank;
    Button nazad;
    private ListAdapter adapter;
    private String[] spisokBank2;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_bank);

        ListView spisokBank;
        spisokBank2 = new String[5];
        spisokBank2[0] = "1. Кыргызстан Банк";
        spisokBank2[1] = "2. РСК Банк";
        spisokBank2[2] = "3. КИКБ (KICB)";
        spisokBank2[3] = "4. ДемирБанк";
        spisokBank2[4] = "5. Росинбанк";


        spisokBank = (ListView) findViewById(R.id.spisokbank);
        nazad = (Button) findViewById(R.id.nazad);
        adapter = new ArrayAdapter<>(this,
                        R.layout.support_simple_spinner_dropdown_item,
                        spisokBank2);

        spisokBank.setAdapter(adapter);

    }



}
