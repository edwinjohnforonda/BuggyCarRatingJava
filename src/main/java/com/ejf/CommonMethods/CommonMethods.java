package com.ejf.CommonMethods;
import com.ejf.PageObjectModel.DriverInitializer;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class CommonMethods {

    public String getPageUrl(String page)
    {
        String checkUrl ="";

        switch(page) {
            case "home":
                checkUrl = DriverInitializer.getProperty( "home.url");
                break;
            case "register":
                checkUrl = DriverInitializer.getProperty( "register.url");
                break;
            case "make":
                checkUrl = DriverInitializer.getProperty( "make.url");
                break;
            case "model":
                checkUrl = DriverInitializer.getProperty( "make.url");
                break;
            case "rating":
                checkUrl = DriverInitializer.getProperty( "make.url");
                break;
        }

        return checkUrl;
    }

    public boolean isElementVisible(WebDriver driver, By by)
    {
        boolean isVisible = false;

        try{
            isVisible = driver.findElement(by).isDisplayed();

        }catch (Exception e){
            System.out.println(e.getMessage());
        }

        return isVisible;
    }


}
