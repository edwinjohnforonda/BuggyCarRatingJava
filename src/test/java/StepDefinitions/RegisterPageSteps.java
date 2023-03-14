package StepDefinitions;

import com.ejf.CommonMethods.CommonMethods;
import com.ejf.PageObjectModel.DriverInitializer;
import com.ejf.PageObjectModel.HeaderMenuBar;
import com.ejf.PageObjectModel.RegisterPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.sql.Timestamp;
import java.util.Date;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.fail;

public class RegisterPageSteps  {


    HeaderMenuBarSteps hbms = new HeaderMenuBarSteps();
    CommonMethods cm = new CommonMethods();
    HeaderMenuBar hmb = new HeaderMenuBar();
    RegisterPage rp = new RegisterPage();

    @When("^in \"([^\"]*)\" I enter \"([^\"]*)\"$")
    public void inElementIEnterValue(String webElement, String value) throws Throwable {

        By byElement = cm.getByWebElement(webElement);
        rp.EnterValues(hbms.driver, byElement,value.replace("<ADD SUFFIX>",generateSuffix()));
    }

    @Then("^I click on Complete Register button$")
    public void iClickOnRegisterButton() throws Throwable {
        rp.clickCompletteRegister(hbms.driver);
    }

    @Then("^verify succesful registration$")
    public void successfulRegistration() throws Throwable {

        //Fluent wait for the element to be located
        WebElement dynamicElement = (new WebDriverWait(hbms.driver, 10))
                .until(ExpectedConditions.presenceOfElementLocated(rp.lblAlertMessage1));

        assertThat(dynamicElement.getText()).isEqualTo("Registration is successful");
    }

    @Then("^verify that error message \"([^\"]*)\"$")
    public void verifyRegistrationErrorMessage(String value) throws Throwable {

        //Fluent wait for the element to be located
        WebElement dynamicElement = (new WebDriverWait(hbms.driver, 10))
                .until(ExpectedConditions.presenceOfElementLocated(rp.lblAlertMessage1));

        assertThat(dynamicElement.getText()).isEqualTo(value);
    }

    public String generateSuffix()
    {
        Date date= new Date();
        long time = date.getTime();
        Timestamp ts = new Timestamp(time);

        return  ts.toString().replace(":","").replace("-","").replace(" ","").replace(".","");
    }
}
