package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Country {
    private static final Logger LOGGER = LoggerFactory.getLogger(Country.class);
    
    private String code;
    private String name;

    // 1. Empty parameter constructor with debug log
    public Country() {
        LOGGER.debug("Inside Country Constructor.");
    }

    // 2. Getters and Setters with debug logs
    public String getCode() {
        LOGGER.debug("Inside getCode() method.");
        return code;
    }

    public void setCode(String code) {
        LOGGER.debug("Inside setCode() method with value: {}", code);
        this.code = code;
    }

    public String getName() {
        LOGGER.debug("Inside getName() method.");
        return name;
    }

    public void setName(String name) {
        LOGGER.debug("Inside setName() method with value: {}", name);
        this.name = name;
    }

    // 3. toString() method
    @Override
    public String toString() {
        return "Country [code=" + code + ", name=" + name + "]";
    }
}