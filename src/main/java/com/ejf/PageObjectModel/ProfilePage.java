package com.ejf.PageObjectModel;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ProfilePage {

    public By lblUsername = By.xpath("//label[@for='username']");
    public By txtUsername = By.xpath("//input[@formcontrolname='username']");
    public By lblFirstName = By.xpath("//label[@for='firstName']");
    public By txtFirstName = By.xpath("//input[@formcontrolname='firstName']");
    public By lblLastName = By.xpath("//label[@for='lastName']");
    public By txtLastName = By.xpath("//input[@formcontrolname='lastName']");
    public By lblGender = By.xpath("//label[@for='gender']");
    public By txtGender = By.xpath("//input[@formcontrolname='gender']");
    public By lblAge = By.xpath("//label[@for='age']");
    public By txtAge = By.xpath("//input[@formcontrolname='age']");
    public By lblAddress = By.xpath("//label[@for='address']");
    public By txtAddress = By.xpath("//input[@formcontrolname='address']");
    public By lblPhone = By.xpath("//label[@for='phone']");
    public By txtPhone = By.xpath("//input[@formcontrolname='phone']");
    public By lblHobby = By.xpath("//label[@for='hobby']");
    public By selHobby = By.xpath("//input[@formcontrolname='hobby']");
    public By lblCurrentPassword = By.xpath("//label[@for='currentPassword']");
    public By txtCurrentPassword = By.xpath("//input[@formcontrolname='currentPassword']");
    public By lblNewPassword = By.xpath("//label[@for='newtPassword']");
    public By txtNewPassword = By.xpath("//input[@formcontrolname='newtPassword']");
    public By lblNewConfirmPassword = By.xpath("//label[@for='newPasswordConfirmation']");
    public By txtNewConfirmPassword = By.xpath("//input[@formcontrolname='newPasswordConfirmation']");
    public By btnSave = By.xpath("/html/body/my-app/div/main/my-profile/div/form/div[2]/div/button");
    public By btnCancelUpdateProfile = By.xpath("/html/body/my-app/div/main/my-profile/div/form/div[2]/div/a");


    public WebDriver clickSave(WebDriver driver)
    {
        //Fluent wait for the element to be clickable
        WebElement dynamicElement = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.elementToBeClickable(btnSave));

        dynamicElement.click();
        return driver;
    }

}
