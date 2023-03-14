package StepDefinitions;

import com.ejf.CommonMethods.CommonMethods;
import com.ejf.PageObjectModel.DriverInitializer;
import com.ejf.PageObjectModel.HeaderMenuBar;
import com.ejf.PageObjectModel.HomePage;
import cucumber.api.PendingException;
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

public class HeaderMenuBarSteps {

    WebDriver driver = null;
    CommonMethods cm = new CommonMethods();
    HeaderMenuBar hmb = new HeaderMenuBar();

    String index = "1";

    @Given("^I open browser$")
    public void iOpenBrowser() throws Throwable {
        driver = DriverInitializer.getDriver();
        driver.manage().window().maximize();
    }

    @When("^I navigate to \"([^\"]*)\" page$")
    public void iNavigateToPage(String page) throws Throwable {
        driver.get( cm.getPageUrl(page));
    }

    @When("^I enter username as \"([^\"]*)\" and password as \"([^\"]*)\"$")
    public void iEnterUsernameAsAndPasswordAs(String login, String password) throws Throwable {
        hmb.EnterLogin(driver, login);
        hmb.EnterPassword(driver, password);
    }

    @When("^I click on login button$")
    public void iClickOnLoginButton() throws Throwable {
        hmb.clickLogin(driver);
    }

    //Method combining step of going to login page then logging in successfully
    @When("^I login as \"([^\"]*)\" and password as \"([^\"]*)\"$")
    public void iLoginAs(String email, String password) throws Throwable {
        iNavigateToPage("login");
        iEnterUsernameAsAndPasswordAs(email, password);
        iClickOnLoginButton();
    }

    @Then("^\"([^\"]*)\" should be \"([^\"]*)\"$")
    public void webElementShouldBe(String webElement,String elementProperty) throws Throwable {

        By byElement = cm.getByWebElement(webElement);

        //Fluent wait for the element to be located
        WebElement dynamicElement = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.presenceOfElementLocated(byElement));

        switch(elementProperty.toLowerCase()) {
            case "visible":
                assertThat(dynamicElement.isDisplayed()).isEqualTo(true);
                break;
            case "not visible":
                assertThat(dynamicElement.isDisplayed()).isEqualTo(false);
                break;
            case "enabled":
                assertThat(dynamicElement.isEnabled()).isEqualTo(true);
                break;
            case "disabled":
                assertThat(dynamicElement.isEnabled()).isEqualTo(false);
                break;
            case "blank":
                assertThat(dynamicElement.getText()).isEqualTo("");
                break;
            case "not blank":
                assertThat(dynamicElement.getText().isEmpty()).isEqualTo(false);
                break;
            default:
                fail("No Property defined");
                // code block
        }

    }

    @And("^\"([^\"]*)\" has \"([^\"]*)\" value equal to \"([^\"]*)\"$")
    public void webElementHasPropertyValueEqualTo(String webElement,String elementProperty,String propertyValue) throws Throwable {

        By byElement = cm.getByWebElement(webElement);

        //Fluent wait for the element to be located
        WebElement dynamicElement = (new WebDriverWait(driver, 10))
                .until(ExpectedConditions.presenceOfElementLocated(byElement));

        if (elementProperty.isEmpty()) {
            fail("No Element Property defined");
        }else if (propertyValue.isEmpty()) {
            fail("No Property Value defined");
        }
        String actualPropertyValue = dynamicElement.getAttribute(elementProperty);


        switch(elementProperty.toLowerCase()) {
            case "text":
                actualPropertyValue = dynamicElement.getText();
                break;
            default:
                actualPropertyValue = dynamicElement.getAttribute(elementProperty);
                // code block
        }

        assertThat(actualPropertyValue).isEqualTo(propertyValue);
    }


    //Wait step for testing purposes
    @When("^I apply wait \"([^\"]*)\" of milliseconds$")
    public void applyWait(int waitTime) throws Throwable {
        Thread.sleep(waitTime);
    }

    @Then("^I should be in \"([^\"]*)\" page$")
    public void pageShouldBe(String page) throws Throwable {

        try {
            assertThat(driver.getCurrentUrl()).isEqualTo(cm.getPageUrl(page));
        } catch ( Exception e) {
            System.out.println("Error :" + e.getMessage());
            driver.quit();
        }
    }

    @Then("^I close browser$")
    public void quitDriver() throws Throwable {
        driver.quit();
    }

    private void generateIndex()
    {
        Date date= new Date();
        long time = date.getTime();
        Timestamp ts = new Timestamp(time);

        index =  ts.toString().replace(":","").replace("-","").replace(" ","").replace(".","");
    }



}
