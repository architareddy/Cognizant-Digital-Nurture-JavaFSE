package cognizant;
import java.util.Arrays;
import java.util.Comparator;

public class SearchDemo {
    public static Product linearSearch(Product[] products, int targetId) {
        for (Product product : products) {
            if (product.getProductId() == targetId) {
                return product;
            }
        }
        return null;
    }
    public static Product binarySearch(Product[] products, int targetId) {
        int low = 0;
        int high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;

            if (products[mid].getProductId() == targetId) {
                return products[mid];
            } else if (products[mid].getProductId() < targetId) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return null;
    }

    public static void main(String[] args) {

        Product[] products = {
            new Product(103, "Mouse", "Electronics"),
            new Product(101, "Laptop", "Electronics"),
            new Product(105, "Book", "Education"),
            new Product(102, "Phone", "Electronics"),
            new Product(104, "Keyboard", "Electronics")
        };

        int targetId = 102;

        Product linearResult = linearSearch(products, targetId);

        System.out.println("Linear Search Result:");
        if (linearResult != null) {
            System.out.println(linearResult);
        } else {
            System.out.println("Product not found");
        }

        Arrays.sort(products, Comparator.comparingInt(Product::getProductId));

        Product binaryResult = binarySearch(products, targetId);

        System.out.println("\nBinary Search Result:");
        if (binaryResult != null) {
            System.out.println(binaryResult);
        } else {
            System.out.println("Product not found");
        }
    }
}