package cognizant;

public class MyAService {

    private ExternalApi api;

    public MyAService(ExternalApi api) {
        this.api = api;
    }

    public String fetchData() {
        return api.getData();
    }

}