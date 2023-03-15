package com.ejf.PageObjectModel;

import com.ejf.CommonMethods.CommonMethods;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.fail;

public class RegisterPage {

    public By lblUsername = By.xpath("//label[@for='username']");
    public By txtUsername = By.xpath("//input[@formcontrolname='username']");
    public By lblFirstName = By.xpath("//label[@for='firstName']");
    public By txtFirstName = By.xpath("//input[@formcontrolname='firstName']");
    public By lblLastName = By.xpath("//label[@for='lastName']");
    public By txtLastName = By.xpath("//input[@formcontrolname='lastName']");
    public By lblPassword = By.xpath("//label[@for='password']");
    public By txtPassword = By.xpath("//input[@formcontrolname='password']");
    public By lblConfirmPassword = By.xpath("//label[@for='confirmPassword']");
    public By txtConfirmPassword = By.xpath("//input[@formcontrolname='confirmPassword']");
    public By btnRegister = By.xpath("/html/body/my-app/div/main/my-register/div/div/form/button");
    public By btnCancel = By.xpath("/html/body/my-app/div/main/my-register/div/div/form/a");
    public By lblAlertMessage1 = By.xpath("/html/body/my-app/div/main/my-register/div/div/form/div[6]");

    public WebDriver EnterValues(WebDriver driver, By byElement, String value)
    {

        //Fluent wait for the element to be located
        WebElement dynamicElement = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.presenceOfElementLocated(byElement));
        dynamicElement.clear();
        dynamicElement.sendKeys(value);

        return driver;
    }


    public WebDriver clickCompletteRegister(WebDriver driver)
    {
        //Fluent wait for the element to be clickable
        WebElement dynamicElement = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.elementToBeClickable(btnRegister));

        dynamicElement.click();
        return driver;
    }

}
