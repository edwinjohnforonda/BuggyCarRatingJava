# Buggy Cars Rating
Test Automation Framework for Buggy Cars Rating (https://buggy.justtestit.org/) 

**OS Supported**: Windows

**Prerequisites:**
1. IntelliJ IDEA
2. Java 8
3. Maven
4. Git

**Clone using IntelliJ IDEA**
1. Open _**IntelliJ IDEA**_
2. Select _**File > New > Project from Version Control > Git**_
3. Enter "https://github.com/edwinjohnforonda/xero-production.git" in url
4. Select _directory_ where you want to save the project
5. Click _**Clone**_ button
6. Click _**'Import Changes'**_ (if necessary)
7. Checkout main branch if necessary (_**git**_ _checkout main_)


**Import Libraries**
1. Right click _**pom.xml**_
2. Select _**Maven > Reimport**_  (External Libraries should be populated)

Download _**chromedriver.exe**_ and _**geckodiver.exe**_ if necessary
- Save chromedriver.exe and geckodiver.exe under _**src\main\resources**_

_**NOTE**_: 
Ideally chromedriver.exe and geckodiver.exe are added in .gitignore file , but have been added in this project for convenience of checking this exercise

**Setup Configuration**
1. In the menu select _**Run > Edit Configurations...**_ 
2. Click _**+**_ (Add New Configuration) 
3. Select _**JUnit**_
4. Edit name to _**Launcher**_
5. Select class _**Launcher**_
6. Click _**Apply**_ then _**OK**_

**How to run using IntelliJ IDEA**
1. In the menu select _**Run**_ 
2. Then click _**Run 'Launcher'**_

To view report open _**<ROOT DIRECTORY>/target/cucumber-html-report/index.html**_ in browser
