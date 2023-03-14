package com.ejf.CommonMethods;
import com.ejf.PageObjectModel.DriverInitializer;
import com.ejf.PageObjectModel.HeaderMenuBar;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import static org.assertj.core.api.Assertions.fail;

public class CommonMethods {

    HeaderMenuBar hmb = new HeaderMenuBar();

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


    public By getByWebElement(String webElement)
    {
        By byElement = null;

        switch(webElement.toLowerCase()) {
            case "navbar label":
                byElement = hmb.lblNavBar;
                break;
            case "login textbox":
                byElement = hmb.txtLogin;
                break;
            case "password textbox":
                byElement = hmb.txtPassword;
                break;
            case "login button":
                byElement = hmb.btnLogin;
                break;
            case "register button":
                byElement = hmb.btnRegister;
                break;
            case "welcome label":
                byElement = hmb.lblWelcome;
                break;
            case "profile link":
                byElement = hmb.lnkProfile;
                break;
            case "logout link":
                byElement = hmb.lnkLogout;
                break;
            case "login error message":
                byElement = hmb.lblErrorMessage1;
                break;

            default:
                fail("No element defined");
        }

        return byElement;
    }

}
