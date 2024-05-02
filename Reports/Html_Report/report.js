$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User Login In Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-web-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user Launch The Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter The Username In Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter The Password In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Click The Login Button And Its Navigate to Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Launch_The_Adactin_Application()"
});
formatter.result({
  "duration": 2925154200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_Username_In_Username_Field()"
});
formatter.result({
  "duration": 101060300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_Password_In_Password_Field()"
});
formatter.result({
  "duration": 67022100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Login_Button_And_Its_Navigate_to_Search_Hotel_Page()"
});
formatter.result({
  "duration": 579038100,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User Search The Hotel In Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-search-the-hotel-in-web-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "user Select Location In Test Data",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user Select Hotel In Test Data",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user Select RoomType In Test Data",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user Select NumberOfRooms In Test Data",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user Select The CheckInDate In Test Data",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user Select The CheckOutDate In Test Data",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user Select The AdultsPerRooms In Test Data",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user Select The ChildrenPerRoom In Test Data",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user Click The Search Button And Its Navigate To Selet Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Select_Location_In_Test_Data()"
});
formatter.result({
  "duration": 2138338200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_Hotel_In_Test_Data()"
});
formatter.result({
  "duration": 2205015700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_RoomType_In_Test_Data()"
});
formatter.result({
  "duration": 2115046000,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d124.0.6367.93)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-0ETE6SLD\u0027, ip: \u0027192.168.1.25\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.21\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 124.0.6367.93, chrome: {chromedriverVersion: 124.0.6367.91 (51df0e5e17a8..., userDataDir: C:\\Users\\MANIKA~1\\AppData\\L...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:58042}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: b406094adb254f54cf0bfa95b06e6b13\n*** Element info: {Using\u003dxpath, value\u003d.//option[@value \u003d \"Super Deluxe\"]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.findElements(RemoteWebElement.java:204)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.findElementsByXPath(RemoteWebElement.java:265)\r\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.findElements(RemoteWebElement.java:177)\r\n\tat org.openqa.selenium.support.ui.Select.findOptionsByValue(Select.java:280)\r\n\tat org.openqa.selenium.support.ui.Select.selectByValue(Select.java:186)\r\n\tat com.adactin.stepdefinition.StepDefinition.user_Select_RoomType_In_Test_Data(StepDefinition.java:65)\r\n\tat ✽.When user Select RoomType In Test Data(Adactin.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.user_Select_NumberOfRooms_In_Test_Data()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_CheckInDate_In_Test_Data()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_CheckOutDate_In_Test_Data()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_AdultsPerRooms_In_Test_Data()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_ChildrenPerRoom_In_Test_Data()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Search_Button_And_Its_Navigate_To_Selet_Hotel_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 20,
  "name": "User Select The Hotel In Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-select-the-hotel-in-web-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "user Select The Hotel For The All Details Checking To Select Hotel",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user Click The Continue Button And Its Navigate To Book A Hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Hotel_For_The_All_Details_Checking_To_Select_Hotel()"
});
formatter.result({
  "duration": 14083800,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d124.0.6367.93)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-0ETE6SLD\u0027, ip: \u0027192.168.1.25\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.21\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 124.0.6367.93, chrome: {chromedriverVersion: 124.0.6367.91 (51df0e5e17a8..., userDataDir: C:\\Users\\MANIKA~1\\AppData\\L...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:58042}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: b406094adb254f54cf0bfa95b06e6b13\n*** Element info: {Using\u003dxpath, value\u003d//input[@type\u003d\u0027radio\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.adactin.stepdefinition.StepDefinition.user_Select_The_Hotel_For_The_All_Details_Checking_To_Select_Hotel(StepDefinition.java:115)\r\n\tat ✽.When user Select The Hotel For The All Details Checking To Select Hotel(Adactin.feature:21)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Continue_Button_And_Its_Navigate_To_Book_A_Hotel_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 24,
  "name": "User Book A Hotel In Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-book-a-hotel-in-web-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "user Enter The FirstName In FirstName Field",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user Enter The LastName In LastName Field",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user Enter The BillingAddress In BillingAddress Field",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user Enter The CreditCardNo In CreditCardNo Field",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "user Enter The CreditCardType In CreditCardType Field",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user Enter The ExpiryDate To SelectMonth In SelectMonth Field",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user Enter The ExpiryDate To SelectYear In SelectYear Field",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user Entet The CVVNumber In CVVNumber Field",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user Click The BookNow Button And Its Navigate To Booking Confiromation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_FirstName_In_FirstName_Field()"
});
formatter.result({
  "duration": 15754800,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d124.0.6367.93)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-0ETE6SLD\u0027, ip: \u0027192.168.1.25\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.21\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 124.0.6367.93, chrome: {chromedriverVersion: 124.0.6367.91 (51df0e5e17a8..., userDataDir: C:\\Users\\MANIKA~1\\AppData\\L...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:58042}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: b406094adb254f54cf0bfa95b06e6b13\n*** Element info: {Using\u003dxpath, value\u003d//input[@name\u003d\u0027first_name\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.adactin.stepdefinition.StepDefinition.user_Enter_The_FirstName_In_FirstName_Field(StepDefinition.java:130)\r\n\tat ✽.When user Enter The FirstName In FirstName Field(Adactin.feature:25)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_LastName_In_LastName_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_BillingAddress_In_BillingAddress_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_CreditCardNo_In_CreditCardNo_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_CreditCardType_In_CreditCardType_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_ExpiryDate_To_SelectMonth_In_SelectMonth_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_ExpiryDate_To_SelectYear_In_SelectYear_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Entet_The_CVVNumber_In_CVVNumber_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_BookNow_Button_And_Its_Navigate_To_Booking_Confiromation_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 35,
  "name": "User Booking Confirmation In Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-booking-confirmation-in-web-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "user Click To Logout Button And Its To Navigate To Hotel Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Click_To_Logout_Button_And_Its_To_Navigate_To_Hotel_Login_Page()"
});
formatter.result({
  "duration": 19783000,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d124.0.6367.93)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-0ETE6SLD\u0027, ip: \u0027192.168.1.25\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.21\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 124.0.6367.93, chrome: {chromedriverVersion: 124.0.6367.91 (51df0e5e17a8..., userDataDir: C:\\Users\\MANIKA~1\\AppData\\L...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:58042}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: b406094adb254f54cf0bfa95b06e6b13\n*** Element info: {Using\u003dxpath, value\u003d//input[@type\u003d\u0027button\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.adactin.stepdefinition.StepDefinition.user_Click_To_Logout_Button_And_Its_To_Navigate_To_Hotel_Login_Page(StepDefinition.java:199)\r\n\tat ✽.Then user Click To Logout Button And Its To Navigate To Hotel Login Page(Adactin.feature:36)\r\n",
  "status": "failed"
});
});