package kg.obval.ov;

/**
 * Created by kloop on 4/21/17.
 */

class Calculator {
    public Calculator() {
    }

    public double convert(double inputValue, int usingCurrency,
                          int transferCurrency, int pokupkaOrProdaja,
                          Course kv) {

        double result = 0;

        if(usingCurrency == 1){ //1 == сом
            switch (transferCurrency){
                case 1:

                    break;
                case 2: //2 == dollar
                    if(pokupkaOrProdaja == 1){
                        result = inputValue/kv.getUSDprod();
                    }else result = inputValue/kv.getUSDpok();
                    break;
                case 3: //3 == euro
                    if(pokupkaOrProdaja == 1){
                        result = inputValue/kv.getEURprod();
                    }else result = inputValue/kv.getEURpok();
                    break;
                case 4: //4 == ruble
                    if(pokupkaOrProdaja == 1){
                        result = inputValue/kv.getRUBprod();
                    }else result = inputValue/kv.getRUBpok();
                    break;
                case 5: //5 == tenge
                    if(pokupkaOrProdaja == 1){
                        result = inputValue/kv.getKZTprod();
                    }else result = inputValue/kv.getKZTpok();
                    break;
            }
        }

        return result;
    }
}
