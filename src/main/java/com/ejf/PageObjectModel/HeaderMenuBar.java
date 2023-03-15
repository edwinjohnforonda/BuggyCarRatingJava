package com.ejf.PageObjectModel;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class HeaderMenuBar {

    public By lblNavBar = By.xpath("/html/body/my-app/header/nav/div/a");
    public By txtLogin = By.name("login");
    public By txtPassword = By.name("password");
    public By btnLogin = By.xpath("/html/body/my-app/header/nav/div/my-login/div/form/button");
    public By btnRegister = By.xpath("/html/body/my-app/header/nav/div/my-login/div/form/a");
    public By lblWelcome = By.xpath("/html/body/my-app/header/nav/div/my-login/div/ul/li[1]/span");
    public By lnkProfile = By.xpath("//a[@href='/profile']");
    public By lnkLogout = By.xpath("/html/body/my-app/header/nav/div/my-login/div/ul/li[3]/a");
    public By lblErrorMessage1 = By.xpath("/html/body/my-app/header/nav/div/my-login/div/form/div/span");

    public WebDriver EnterLogin(WebDriver driver, String value)
    {
        //Fluent wait for the element to be located
        WebElement dynamicElement = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.presenceOfElementLocated(txtLogin));
        dynamicElement.clear();
        dynamicElement.sendKeys(value);

        return driver;
    }

    public WebDriver EnterPassword(WebDriver driver, String value)
    {
        //Fluent wait for the element to be located
        WebElement dynamicElement = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.presenceOfElementLocated(txtPassword));
        dynamicElement.clear();
        dynamicElement.sendKeys(value);

        return driver;
    }

    public WebDriver clickLogin(WebDriver driver)
    {
        //Fluent wait for the element to be clickable
        WebElement dynamicElement = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.elementToBeClickable(btnLogin));

        dynamicElement.click();
        return driver;
    }

    public WebDriver clickRegister(WebDriver driver)
    {
        //Fluent wait for the element to be clickable
        WebElement dynamicElement = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.elementToBeClickable(btnRegister));

        dynamicElement.click();
        return driver;
    }



    public WebDriver clickProfile(WebDriver driver)
    {
        //Fluent wait for the element to be clickable
        WebElement dynamicElement = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.elementToBeClickable(lnkProfile));

        dynamicElement.click();
        return driver;
    }
}
