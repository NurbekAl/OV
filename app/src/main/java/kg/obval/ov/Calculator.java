package kg.obval.ov;

/**
 * Created by kloop on 4/21/17.
 */

class Calculator {
    public Calculator() {
    }

    public double convert(double inputValue, int usingCurrency,
                          int transferCurrency, int pokupkaOrProdaja,
                          KursValut kv) {

        double result = 0;

        if(usingCurrency == 1){ //1 == сом
            switch (transferCurrency){
                case 1:

                    break;
                case 2: //2 == dollar
                    if(pokupkaOrProdaja == 1){
                        result = inputValue/kv.getDollarProdaja();
                    }else result = inputValue/kv.getDollarPokupka();
                    break;
                case 3: //3 == euro
                    if(pokupkaOrProdaja == 1){
                        result = inputValue/kv.getEuroProdaja();
                    }else result = inputValue/kv.getEuroPokupka();
                    break;
                case 4: //4 == ruble
                    if(pokupkaOrProdaja == 1){
                        result = inputValue/kv.getRubleProdaja();
                    }else result = inputValue/kv.getRublePokupka();
                    break;
                case 5: //5 == tenge
                    if(pokupkaOrProdaja == 1){
                        result = inputValue/kv.getTengeProdaja();
                    }else result = inputValue/kv.getTengePokupka();
                    break;
            }
        }

        return result;
    }
}
