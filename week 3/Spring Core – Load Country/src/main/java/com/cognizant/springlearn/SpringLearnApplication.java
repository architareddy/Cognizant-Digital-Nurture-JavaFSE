package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SpringLearnApplication {
    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
        displayCountry();
    }

    public static void displayCountry() {
        // load the spring configuration XML
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        
        // fetch the country bean definition
        Country country = context.getBean("country", Country.class);
        
        // log the extracted details via toString()
        LOGGER.debug("Country : {}", country.toString());
        
        // close the context cleanly to release resources
        ((ClassPathXmlApplicationContext) context).close();
    }
}