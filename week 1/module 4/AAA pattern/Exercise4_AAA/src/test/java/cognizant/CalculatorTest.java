package cognizant;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        System.out.println("Setting up test...");
        calculator = new Calculator();
    }

    @After
    public void tearDown() {
        System.out.println("Cleaning up after test...");
        calculator = null;
    }

    @Test
    public void testAddition() {

        // to arrange
        int num1 = 10;
        int num2 = 20;

        // to act
        int result = calculator.add(num1, num2);

        // to assert
        assertEquals(30, result);
    }
}
