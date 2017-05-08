package kg.obval.ov;

/**
 * Created by kloop on 4/21/17.
 */

class Calculator {

    public Calculator() {
    }
    double result = 0;
    String formula;

    public double convert(double inputValue, int usingCurrency,
                          int transferCurrency, int pokupkaOrProdaja,
                          Course kv) {


        if (usingCurrency == 1) { //1 == сом
            switch (transferCurrency) {
                case 1:
                    result = inputValue;
                    setOneMemberFormula(inputValue);
                    break;
                case 2: //2 == dollar
                    if (pokupkaOrProdaja == 1) {
                        result = inputValue / kv.getUSDprod();
                        setTwoMembersFormula(inputValue, kv.getUSDprod());
                    } else {
                        result = inputValue / kv.getUSDpok();
                        setTwoMembersFormula(inputValue, kv.getUSDpok());
                    }
                    break;
                case 3: //3 == euro
                    if (pokupkaOrProdaja == 1) {
                        result = inputValue / kv.getEURprod();
                        setTwoMembersFormula(inputValue, kv.getEURprod());
                    } else {
                        result = inputValue / kv.getEURpok();
                        setTwoMembersFormula(inputValue, kv.getEURpok());
                    }
                    break;
                case 4: //4 == ruble
                    if (pokupkaOrProdaja == 1) {
                        result = inputValue / kv.getRUBprod();
                        setTwoMembersFormula(inputValue, kv.getRUBprod());
                    } else {
                        result = inputValue / kv.getRUBpok();
                        setTwoMembersFormula(inputValue, kv.getRUBpok());
                    }
                    break;
                case 5: //5 == tenge
                    if (pokupkaOrProdaja == 1) {
                        result = inputValue / kv.getKZTprod();
                        setTwoMembersFormula(inputValue, kv.getKZTprod());
                    } else {
                        result = inputValue / kv.getKZTpok();
                        setTwoMembersFormula(inputValue, kv.getKZTpok());
                    }
                    break;
            }
        } else if (usingCurrency == 2) { //2 == доллар
            switch (transferCurrency) {
                case 1:
                    if (pokupkaOrProdaja == 1) {
                        result = inputValue * kv.getUSDprod();
                        setTwoMembersFormula(inputValue, kv.getUSDprod());
                    } else {
                        result = inputValue * kv.getUSDpok();
                        setTwoMembersFormula(inputValue, kv.getUSDpok());
                    }
                    break;
                case 2:
                    if (pokupkaOrProdaja == 1) {
                        result = inputValue;
                    } else result = inputValue;
                    break;
                case 3: //3 == euro
                    if (pokupkaOrProdaja == 1) {
                        result = inputValue * kv.getUSDpok() / kv.getEURprod();
                        setThreeMembersFormula(inputValue, kv.getUSDpok(), kv.getEURprod());
                    } else {
                        result = inputValue * kv.getEURpok() / kv.getUSDprod();
                        setThreeMembersFormula(inputValue, kv.getEURpok(), kv.getUSDprod());
                    }
                    break;
                case 4: //4 == ruble
                    if (pokupkaOrProdaja == 1) {
                        result = inputValue * kv.getUSDpok() / kv.getRUBprod();
                        setThreeMembersFormula(inputValue, kv.getUSDpok(), kv.getRUBprod());
                    } else {
                        result = inputValue * kv.getRUBpok() / kv.getUSDprod();
                        setThreeMembersFormula(inputValue, kv.getRUBpok(), kv.getUSDprod());
                    }
                    break;
                case 5: //5 == tenge
                    if (pokupkaOrProdaja == 1) {
                        result = inputValue * kv.getUSDpok() / kv.getKZTprod();
                        setThreeMembersFormula(inputValue, kv.getUSDpok(), kv.getKZTprod());
                    } else {
                        result = inputValue * kv.getKZTpok() / kv.getUSDprod();
                        setThreeMembersFormula(inputValue, kv.getKZTpok(), kv.getUSDprod());
                    }
                    break;
            }
        } else if (usingCurrency == 3) { //3 == эвро
            switch (transferCurrency) {
                case 1:
                    if (pokupkaOrProdaja == 1) {
                        result = inputValue * kv.getEURprod();
                        setTwoMembersFormula(inputValue, kv.getEURprod());
                    } else {
                        result = inputValue * kv.getEURpok();
                        setTwoMembersFormula(inputValue, kv.getEURpok());
                    }
                    break;
                case 2: //2 == dollar
                    if (pokupkaOrProdaja == 1) {
                        result = inputValue * kv.getEURpok() / kv.getUSDprod();
                        setThreeMembersFormula(inputValue, kv.getEURpok(), kv.getUSDprod());
                    } else {
                        result = inputValue * kv.getUSDpok() / kv.getEURprod();
                        setThreeMembersFormula(inputValue, kv.getUSDpok(), kv.getEURprod());
                    }
                    break;
                case 3: //3 == euro
                    if (pokupkaOrProdaja == 1) {
                        result = inputValue;
                    } else result = inputValue;
                    break;
                case 4: //4 == ruble
                    if (pokupkaOrProdaja == 1) {
                        result = inputValue * kv.getEURpok() / kv.getRUBprod();
                        setThreeMembersFormula(inputValue, kv.getEURpok(), kv.getRUBprod());
                    } else {
                        result = inputValue * kv.getRUBpok() / kv.getEURprod();
                        setThreeMembersFormula(inputValue, kv.getRUBpok(), kv.getEURprod());
                    }
                    break;
                case 5: //5 == tenge
                    if (pokupkaOrProdaja == 1) {
                        result = inputValue * kv.getEURpok() / kv.getKZTprod();
                        setThreeMembersFormula(inputValue, kv.getEURpok(), kv.getKZTprod());
                    } else {
                        result = inputValue * kv.getKZTpok() / kv.getEURprod();
                        setThreeMembersFormula(inputValue, kv.getKZTpok(), kv.getEURprod());
                    }
                    break;
            }
        } else if (usingCurrency == 4) { //4 == рубль
            switch (transferCurrency) {
                case 1:
                    if (pokupkaOrProdaja == 1) {
                        result = inputValue * kv.getRUBprod();
                        setTwoMembersFormula(inputValue, kv.getRUBprod());
                    } else {
                        result = inputValue * kv.getRUBpok();
                        setTwoMembersFormula(inputValue, kv.getRUBpok());
                    }
                    break;
                case 2: //2 == dollar
                    if (pokupkaOrProdaja == 1) {
                        result = inputValue * kv.getRUBpok() / kv.getUSDprod();
                        setThreeMembersFormula(inputValue, kv.getRUBpok(), kv.getUSDprod());
                    } else {
                        result = inputValue * kv.getUSDpok() / kv.getRUBprod();
                        setThreeMembersFormula(inputValue, kv.getUSDpok(), kv.getRUBprod());
                    }
                    break;
                case 3: //3 == euro
                    if (pokupkaOrProdaja == 1) {
                        result = inputValue * kv.getRUBpok() / kv.getEURprod();
                        setThreeMembersFormula(inputValue, kv.getRUBpok(), kv.getEURprod());
                    } else {
                        result = inputValue * kv.getEURpok() / kv.getRUBprod();
                        setThreeMembersFormula(inputValue, kv.getEURpok(), kv.getRUBprod());
                    }
                    break;
                case 4: //4 == ruble
                    if (pokupkaOrProdaja == 1) {
                        result = inputValue;
                    } else result = inputValue;
                    break;
                case 5: //5 == tenge
                    if (pokupkaOrProdaja == 1) {
                        result = inputValue * kv.getRUBpok() / kv.getKZTprod();
                        setThreeMembersFormula(inputValue, kv.getRUBpok(), kv.getKZTprod());
                    } else {
                        result = inputValue * kv.getKZTpok() / kv.getRUBprod();
                        setThreeMembersFormula(inputValue, kv.getKZTpok(), kv.getRUBprod());
                    }
                    break;
            }
        } else if (usingCurrency == 5) { //5 == тенге
            switch (transferCurrency) {
                case 1:
                    if (pokupkaOrProdaja == 1) {
                        result = inputValue * kv.getKZTprod();
                        setTwoMembersFormula(inputValue, kv.getKZTprod());
                    } else {
                        result = inputValue * kv.getKZTpok();
                        setTwoMembersFormula(inputValue, kv.getKZTpok());
                    }
                    break;
                case 2: //2 == dollar
                    if (pokupkaOrProdaja == 1) {
                        result = inputValue * kv.getKZTpok() / kv.getUSDprod();
                        setThreeMembersFormula(inputValue, kv.getKZTpok(), kv.getUSDprod());
                    } else {
                        result = inputValue * kv.getUSDpok() / kv.getKZTprod();
                        setThreeMembersFormula(inputValue, kv.getUSDpok(), kv.getKZTprod());
                    }
                    break;
                case 3: //3 == euro
                    if (pokupkaOrProdaja == 1) {
                        result = inputValue * kv.getKZTpok() / kv.getEURprod();
                        setThreeMembersFormula(inputValue, kv.getKZTpok(), kv.getEURprod());
                    } else {
                        result = inputValue * kv.getEURpok() / kv.getKZTprod();
                        setThreeMembersFormula(inputValue, kv.getEURpok(), kv.getKZTprod());
                    }
                    break;
                case 4: //4 == ruble
                    if (pokupkaOrProdaja == 1) {
                        result = inputValue * kv.getKZTpok() / kv.getRUBprod();
                        setThreeMembersFormula(inputValue, kv.getKZTpok(), kv.getRUBprod());
                    } else {
                        result = inputValue * kv.getRUBpok() / kv.getKZTprod();
                        setThreeMembersFormula(inputValue, kv.getRUBpok(), kv.getKZTprod());
                    }
                    break;
                case 5: //5 == tenge
                    if (pokupkaOrProdaja == 1) {
                        result = inputValue;
                    } else result = inputValue;
                    break;
            }
        }
        return result;

    }

    public String getFormula() {
        return formula;
    }

    public void setOneMemberFormula(double firstMemberFormula) {
        formula = String.valueOf(firstMemberFormula);
    }

    private void setTwoMembersFormula(double firstMember, double secondMember) {
        formula = String.valueOf(firstMember) + " / " + String.valueOf(secondMember);
    }

    private void setThreeMembersFormula(double firstMember, double secondMember, double thirdMember) {
        formula = String.valueOf(firstMember) + " * " + String.valueOf(secondMember) + " / " + String.valueOf(thirdMember);
    }

}
