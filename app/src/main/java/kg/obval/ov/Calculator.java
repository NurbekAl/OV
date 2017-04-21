package kg.obval.ov;

/**
 * Created by kloop on 4/21/17.
 */

class Calculator {
    public Calculator() {
    }

    public double convert(double inputValue, int usingCurrency, int transferCurrency, int pokupkaOrProdaja) {

        double result = 0;

        if(usingCurrency == 1){ //1 == сом
            switch (transferCurrency){
                case 1:

                    break;
                case 2: //2 == dollar
                    if(pokupkaOrProdaja == 1){
                        result = inputValue/68.5;
                    }else result = inputValue/68.0;
                    break;
                case 3: //3 == euro
                    if(pokupkaOrProdaja == 1){
                        result = inputValue/80.50;
                    }else result = inputValue/80.0;
                    break;
                case 4: //4 == ruble
                    if(pokupkaOrProdaja == 1){
                        result = inputValue/1.33;
                    }else result = inputValue/1.22;
                    break;
                case 5: //5 == tenge
                    if(pokupkaOrProdaja == 1){
                        result = inputValue/0.33;
                    }else result = inputValue/0.22;
                    break;
            }
        }

        return result;
    }
}
