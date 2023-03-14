package com.ejf.PageObjectModel;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class HomePage {

    By txtLogin = By.name("login");
    By txtPassword = By.name("password");
    By btnLogin = By.xpath("/html/body/my-app/header/nav/div/my-login/div/form/button");

    public WebDriver EnterLogin(WebDriver driver, String value)
    {
        //Explicit wait for the element to be located
        WebElement dynamicElement = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.presenceOfElementLocated(txtLogin));
        dynamicElement.clear();
        dynamicElement.sendKeys(value);

        return driver;
    }

    public WebDriver EnterPassword(WebDriver driver, String value)
    {
        //Explicit wait for the element to be located
        WebElement dynamicElement = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.presenceOfElementLocated(txtPassword));
        dynamicElement.clear();
        dynamicElement.sendKeys(value);

        return driver;
    }

    public WebDriver clickLogin(WebDriver driver)
    {
        //Explicit wait for the element to be clickable
        WebElement dynamicElement = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.elementToBeClickable(btnLogin));

        dynamicElement.click();
        return driver;
    }

}
