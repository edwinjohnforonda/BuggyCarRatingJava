package StepDefinitions;

import com.ejf.CommonMethods.CommonMethods;
import com.ejf.PageObjectModel.DriverInitializer;
import com.ejf.PageObjectModel.HomePage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;

import java.sql.Timestamp;
import java.util.Date;

import static org.assertj.core.api.Assertions.assertThat;

public class HomePageSteps {

    WebDriver driver = null;
    CommonMethods cm = new CommonMethods();
    HomePage homePage = new HomePage();
//    BankAccountsPage bankAccountsPage = new BankAccountsPage();

    String index = "1";

    @Given("^I open browser$")
    public void iOpenBrowser() throws Throwable {
        driver = DriverInitializer.getDriver();
    }

    @When("^I navigate to \"([^\"]*)\" page$")
    public void iNavigateToPage(String page) throws Throwable {
        driver.get( cm.getPageUrl(page));
    }

    @When("^I enter username as \"([^\"]*)\" and password as \"([^\"]*)\"$")
    public void iEnterUsernameAsAndPasswordAs(String login, String password) throws Throwable {
        homePage.EnterLogin(driver, login);
        homePage.EnterPassword(driver, password);
    }

    @When("^I click on login button$")
    public void iClickOnLoginButton() throws Throwable {
        homePage.clickLogin(driver);
    }

    //Method combining step of going to login page then logging in successfully
    @When("^I login as \"([^\"]*)\" and password as \"([^\"]*)\"$")
    public void iLoginAs(String email, String password) throws Throwable {
        iNavigateToPage("login");
        iEnterUsernameAsAndPasswordAs(email, password);
        iClickOnLoginButton();
    }

//    @When("^I select Demo organization")
//    public void iSelectDemoOrganization() throws Throwable {
//        bankAccountsPage.selectDemoOrg(driver);
//    }
//
//    @When("^I click Add Bank Account button")
//    public void iClickAddBankAccountButton() throws Throwable {
//        bankAccountsPage.clickAddBankAccount(driver);
//    }
//
//    @When("^I select \"([^\"]*)\"")
//    public void iSelectBank(String bank) throws Throwable {
//        bankAccountsPage.selectBank(driver, bank);
//    }
//
//    @When("I enter Bank Account Details")
//    public void iEnterBankAccountDetails() throws Throwable {
//        generateIndex();
//        bankAccountsPage.enterBankAccountDetails(driver,index);
//    }

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

//    @Then("^I see message that account has been added$")
//    public void iSeeMessageThatAccountHasBeenAdded() throws Throwable {
//        boolean isMessageVisible = false;
//
//        WebElement msg1 = (new WebDriverWait(driver, 10))
//                .until(ExpectedConditions.presenceOfElementLocated(bankAccountsPage.msg1));
//        isMessageVisible = cm.isElementVisible(driver, bankAccountsPage.msg1);
//
//        if(isMessageVisible)
//        {
//            assertThat(msg1.getText().trim()).isEqualTo("AccntName"+index+ " has been added.");
//
//        }else
//        {
//            fail("Account is not added or success message is not visible");
//        }
//    }
//
//    @Then("^I see bank account details displayed$")
//    public void iSeeBankAccountDetailsDisplayed() throws Throwable {
//        String xpathstr ="//a[contains(text(), 'REPLACE')]";
//        xpathstr = xpathstr.replace("REPLACE", "AccntName"+index);
//        By lblAccntName = By.xpath(xpathstr);
//        xpathstr = xpathstr.replace("REPLACE", index);
//        By lblAccntNo = By.xpath(xpathstr);
//
//        assertThat(cm.isElementVisible(driver, lblAccntName)).
//                withFailMessage("Account Name AccntName"+ index + " is not displayed").isEqualTo(true);
//        assertThat(cm.isElementVisible(driver, lblAccntNo)).
//                withFailMessage("Account Number "+ index + " is not displayed").isEqualTo(true);
//    }


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
