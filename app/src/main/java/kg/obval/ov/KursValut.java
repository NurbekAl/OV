package kg.obval.ov;

/**
 * Created by kloop on 4/25/17.
 */

class KursValut {

    public KursValut() {
        this.dollarProdaja = 0;
        this.dollarPokupka = 0;
        this.euroProdaja = 0;
        this.euroPokupka = 0;
        this.rubleProdaja = 0;
        this.rublePokupka = 0;
        this.tengeProdaja = 0;
        this.tengePokupka = 0;
    }

    private double dollarProdaja;
    private double dollarPokupka;
    private double euroProdaja;
    private double euroPokupka;
    private double rubleProdaja;
    private double rublePokupka;
    private double tengeProdaja;
    private double tengePokupka;

    public double getDollarProdaja() {
        return dollarProdaja;
    }

    public void setDollarProdaja(double dollarProdaja) {
        this.dollarProdaja = dollarProdaja;
    }

    public double getDollarPokupka() {
        return dollarPokupka;
    }

    public void setDollarPokupka(double dollarPokupka) {
        this.dollarPokupka = dollarPokupka;
    }

    public double getEuroProdaja() {
        return euroProdaja;
    }

    public void setEuroProdaja(double euroProdaja) {
        this.euroProdaja = euroProdaja;
    }

    public double getEuroPokupka() {
        return euroPokupka;
    }

    public void setEuroPokupka(double euroPokupka) {
        this.euroPokupka = euroPokupka;
    }

    public double getRubleProdaja() {
        return rubleProdaja;
    }

    public void setRubleProdaja(double rubleProdaja) {
        this.rubleProdaja = rubleProdaja;
    }

    public double getRublePokupka() {
        return rublePokupka;
    }

    public void setRublePokupka(double rublePokupka) {
        this.rublePokupka = rublePokupka;
    }

    public double getTengeProdaja() {
        return tengeProdaja;
    }

    public void setTengeProdaja(double tengeProdaja) {
        this.tengeProdaja = tengeProdaja;
    }

    public double getTengePokupka() {
        return tengePokupka;
    }

    public void setTengePokupka(double tengePokupka) {
        this.tengePokupka = tengePokupka;
    }
}
