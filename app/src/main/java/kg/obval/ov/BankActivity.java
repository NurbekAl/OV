package kg.obval.ov;

import android.content.Intent;
import android.net.Uri;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ListAdapter;
import android.widget.ListView;

public class BankActivity extends AppCompatActivity {

    ListView spisokBank;
    private ListAdapter adapter;
    private String[] spisokBank2;
    Intent webSite;
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
               adapter = new ArrayAdapter<>(this,
                        R.layout.support_simple_spinner_dropdown_item,
                        spisokBank2);

        spisokBank.setAdapter(adapter);
        spisokBank.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                switch (position){
                    case 0:
                        webSite = new Intent(Intent.ACTION_VIEW, Uri.parse("https://ibank.cbk.kg/portal/login;jsessionid=93B4701F2477603B47561DE45A8D827C"));
                        startActivity(webSite);
                        break;
                    case 1:
                        webSite = new Intent(Intent.ACTION_VIEW, Uri.parse("https://my.rsk.kg/ib6/retail/index.html"));
                        startActivity(webSite);
                        break;
                    case 2:
                        webSite = new Intent(Intent.ACTION_VIEW, Uri.parse("https://ibank.kicb.net/"));
                        startActivity(webSite);
                        break;
                    case 3:
                        webSite = new Intent(Intent.ACTION_VIEW, Uri.parse("https://online.demirbank.kg/retail/transactions/INDEX_01.jsp?p_LangCD=RUS"));
                        startActivity(webSite);
                        break;
                    case 4:
                        webSite = new Intent(Intent.ACTION_VIEW, Uri.parse("https://my.rib.kg/login.html"));
                        startActivity(webSite);
                        break;
                }
            }
        });


    }



}
