package cognizant;
public class FinancialForecast {

    public static double forecast(double presentValue, double growthRate, int years) {

        if (years == 0) {
            return presentValue;
        }

        return forecast(presentValue, growthRate, years - 1) * (1 + growthRate);
    }

    public static void main(String[] args) {

        double presentValue = 10000;
        double growthRate = 0.10;
        int years = 5;

        double futureValue = forecast(presentValue, growthRate, years);

        System.out.println("Present Value: " + presentValue);
        System.out.println("Growth Rate: " + (growthRate * 100) + "%");
        System.out.println("Years: " + years);
        System.out.printf("Future Value after %d years: %.2f%n", years, futureValue);
    }
}