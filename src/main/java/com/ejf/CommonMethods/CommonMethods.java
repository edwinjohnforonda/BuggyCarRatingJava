package com.ejf.CommonMethods;
import com.ejf.PageObjectModel.DriverInitializer;
import com.ejf.PageObjectModel.HeaderMenuBar;
import com.ejf.PageObjectModel.RegisterPage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static org.assertj.core.api.Assertions.fail;

public class CommonMethods {

    HeaderMenuBar hmb = new HeaderMenuBar();
    RegisterPage rp = new RegisterPage();

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
                checkUrl = DriverInitializer.getProperty( "model.url");
                break;
            case "rating":
                checkUrl = DriverInitializer.getProperty( "rating.url");
                break;
            case "profile":
                checkUrl = DriverInitializer.getProperty( "profile.url");
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
            case "username label":
                byElement = rp.lblUsername;
                break;
            case "username textbox":
                byElement = rp.txtUsername;
                break;
            case "firstname label":
                byElement = rp.lblFirstName;
                break;
            case "firstname textbox":
                byElement = rp.txtFirstName;
                break;
            case "lastname label":
                byElement = rp.lblLastName;
                break;
            case "lastname textbox":
                byElement = rp.txtLastName;
                break;
            case "password label":
                byElement = rp.lblPassword;
                break;
            case "register password textbox":
                byElement = rp.txtPassword;
                break;
            case "confirm password label":
                byElement = rp.lblConfirmPassword;
                break;
            case "register confirm password textbox":
                byElement = rp.txtConfirmPassword;
                break;
            case "submit registration button":
                byElement = rp.btnRegister;
                break;
            case "cancel registration button":
                byElement = rp.btnCancel;
                break;
            default:
                fail("No element defined");
        }

        return byElement;
    }


    public String getElementTextValue(WebDriver driver, String webElement){
        String value = "";

        By byElement = getByWebElement(webElement);
        value = driver.findElement(byElement).getAttribute("Value");

        return value;
    }

    public WebDriver waitElementToBeVisible (WebDriver driver, String webElement, int sec) {

        By byElement = getByWebElement(webElement);
        //Fluent wait for the element to be located
        WebElement dynamicElement = (new WebDriverWait(driver, sec))
                .until(ExpectedConditions.presenceOfElementLocated(byElement));

        return driver;
    }


}
