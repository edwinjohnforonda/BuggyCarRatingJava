package StepDefinitions;

import com.ejf.CommonMethods.CommonMethods;
import com.ejf.PageObjectModel.HeaderMenuBar;
import com.ejf.PageObjectModel.ProfilePage;
import com.ejf.PageObjectModel.RegisterPage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.sql.Timestamp;
import java.util.Date;
import org.openqa.selenium.JavascriptExecutor;

import static org.assertj.core.api.Assertions.assertThat;

public class ProfilePageSteps {


    HeaderMenuBarSteps hbms = new HeaderMenuBarSteps();
    CommonMethods cm = new CommonMethods();
    HeaderMenuBar hmb = new HeaderMenuBar();
    RegisterPage rp = new RegisterPage();
    ProfilePage pp = new ProfilePage();

    @When("^verify that value \"([^\"]*)\" is \"([^\"]*)\"$")
    public void verifyTheValueOfElement(String webElement, String value) throws Throwable {

        hbms.driver = cm.waitElementToBeVisible (hbms.driver, webElement, 10);
        String actualValue =  hbms.driver.findElement(cm.getByWebElement(webElement)).getAttribute("value");
        //String actualValue = cm.getElementTextValue( hbms.driver, webElement);
        assertThat(actualValue).isEqualTo(value);
    }

    @When("^I click on save button$")
    public void iClickOnLoginButton() throws Throwable {
        pp.clickSave(hbms.driver);
    }
}
