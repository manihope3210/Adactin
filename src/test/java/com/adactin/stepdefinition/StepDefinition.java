package com.adactin.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import com.adactin.runner.Test_Runner;
import com.adactin.runner.Test_Runner;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {

	public static WebDriver driver = Test_Runner.driver;

	@Given("^user Launch The Adactin Application$")
	public void user_Launch_The_Adactin_Application() throws Throwable {
		driver.get("https://adactinhotelapp.com/");

	}

	@When("^user Enter The Username In Username Field$")
	public void user_Enter_The_Username_In_Username_Field() throws Throwable {
		WebElement username = driver.findElement(By.xpath("//input[@name='username']"));
		username.sendKeys("Jivita04");

	}

	@When("^user Enter The Password In Password Field$")
	public void user_Enter_The_Password_In_Password_Field() throws Throwable {
		WebElement password = driver.findElement(By.xpath("//input[@name='password']"));
		password.sendKeys("123456");
	}

	@Then("^user Click The Login Button And Its Navigate to Search Hotel Page$")
	public void user_Click_The_Login_Button_And_Its_Navigate_to_Search_Hotel_Page() throws Throwable {
		WebElement login = driver.findElement(By.xpath("//input[@name='login']"));
		login.click();
	}

	@When("^user Select Location In Test Data$")
	public void user_Select_Location_In_Test_Data() throws Throwable {
		WebElement SearchLocation = driver.findElement(By.xpath("//select[@name='location']"));
		Select s = new Select(SearchLocation);
		Thread.sleep(2000);
		s.selectByVisibleText("London");

	}

	@When("^user Select Hotel In Test Data$")
	public void user_Select_Hotel_In_Test_Data() throws Throwable {
		WebElement SearchHotal = driver.findElement(By.xpath("//select[@name='hotels']"));
		Select s1 = new Select(SearchHotal);
		Thread.sleep(2000);
		s1.selectByIndex(2);
	}

	@When("^user Select RoomType In Test Data$")
	public void user_Select_RoomType_In_Test_Data() throws Throwable {
		WebElement RoomSelect = driver.findElement(By.xpath("//select[@name='room_type']"));
		Select s2 = new Select(RoomSelect);
		Thread.sleep(2000);
		s2.selectByValue("Super Deluxe");

	}

	@When("^user Select NumberOfRooms In Test Data$")
	public void user_Select_NumberOfRooms_In_Test_Data() throws Throwable {
		WebElement NoofRooms = driver.findElement(By.xpath("//select[@name='room_nos']"));
		Select s3 = new Select(NoofRooms);
		Thread.sleep(2000);
		s3.selectByValue("2");

	}

		@When("^user Select The CheckInDate In Test Data$")
		public void user_Select_The_CheckInDate_In_Test_Data() throws Throwable {
			WebElement checkin = driver.findElement(By.xpath("//input[@name='datepick_in']"));
			checkin.sendKeys("16/04/2024");
	
		}
	
		@When("^user Select The CheckOutDate In Test Data$")
		public void user_Select_The_CheckOutDate_In_Test_Data() throws Throwable {
			WebElement checkout = driver.findElement(By.xpath("//input[@name='datepick_out']"));
			checkout.sendKeys("17/04/2024");
	}

	@When("^user Select The AdultsPerRooms In Test Data$")
	public void user_Select_The_AdultsPerRooms_In_Test_Data() throws Throwable {
		WebElement AdultsperRoom = driver.findElement(By.xpath("//select[@name='adult_room']"));
		Select s4 = new Select(AdultsperRoom);
		Thread.sleep(2000);
		s4.selectByIndex(3);
	}

	@When("^user Select The ChildrenPerRoom In Test Data$")
	public void user_Select_The_ChildrenPerRoom_In_Test_Data() throws Throwable {
		WebElement ChildrenperRoom = driver.findElement(By.xpath("//select[@name='child_room']"));
		Select s5 = new Select(ChildrenperRoom);
		Thread.sleep(2000);
		s5.selectByIndex(3);
	}

	@Then("^user Click The Search Button And Its Navigate To Selet Hotel Page$")
	public void user_Click_The_Search_Button_And_Its_Navigate_To_Selet_Hotel_Page() throws Throwable {
		WebElement next = driver.findElement(By.xpath("//input[@type='submit']"));
		next.click();
	}

	@When("^user Select The Hotel For The All Details Checking To Select Hotel$")
	public void user_Select_The_Hotel_For_The_All_Details_Checking_To_Select_Hotel() throws Throwable {
		WebElement next1 = driver.findElement(By.xpath("//input[@type='radio']"));
		next1.click();

	}


	
	@Then("^user Click The Continue Button And Its Navigate To Book A Hotel page$")
	public void user_Click_The_Continue_Button_And_Its_Navigate_To_Book_A_Hotel_page() throws Throwable {
		WebElement next2 = driver.findElement(By.xpath("//input[@type='submit']"));
		next2.click();
	}

	@When("^user Enter The FirstName In FirstName Field$")
	public void user_Enter_The_FirstName_In_FirstName_Field() throws Throwable {
		WebElement firstname = driver.findElement(By.xpath("//input[@name='first_name']"));
		Thread.sleep(2000);
		firstname.sendKeys("Manii");
		

	}

	@When("^user Enter The LastName In LastName Field$")
	public void user_Enter_The_LastName_In_LastName_Field() throws Throwable {
		WebElement lastname = driver.findElement(By.xpath("//input[@name='last_name']"));
		lastname.sendKeys("Srii");

	}

	@When("^user Enter The BillingAddress In BillingAddress Field$")
	public void user_Enter_The_BillingAddress_In_BillingAddress_Field() throws Throwable {
		WebElement address = driver.findElement(By.xpath("//textarea[@name='address']"));
		address.sendKeys("4th Seaward Road, Valmiki Nagar,Thiruvanmiyur,Chennai,Tamil Nadu");

	}

	@When("^user Enter The CreditCardNo In CreditCardNo Field$")
	public void user_Enter_The_CreditCardNo_In_CreditCardNo_Field() throws Throwable {
		WebElement creditcard = driver.findElement(By.xpath("//input[@name='cc_num']"));
		creditcard.sendKeys("5566784567897856");

	}

	@When("^user Enter The CreditCardType In CreditCardType Field$")
	public void user_Enter_The_CreditCardType_In_CreditCardType_Field() throws Throwable {
		WebElement CardType = driver.findElement(By.xpath("//select[@id  ='cc_type']"));
		Select s6 = new Select(CardType);
		Thread.sleep(2000);
		s6.selectByValue("VISA");

	}

	@When("^user Enter The ExpiryDate To SelectMonth In SelectMonth Field$")
	public void user_Enter_The_ExpiryDate_To_SelectMonth_In_SelectMonth_Field() throws Throwable {
		WebElement selectmonth = driver.findElement(By.xpath("//select[@id='cc_exp_month']"));
		Select s7 = new Select(selectmonth);
		Thread.sleep(2000);
		s7.selectByVisibleText("July");
	}

	@When("^user Enter The ExpiryDate To SelectYear In SelectYear Field$")
	public void user_Enter_The_ExpiryDate_To_SelectYear_In_SelectYear_Field() throws Throwable {
		WebElement SelectYr = driver.findElement(By.xpath("//select[@name='cc_exp_year']"));
		Select s8 = new Select(SelectYr);
		Thread.sleep(2000);
		s8.selectByValue("2024");
	}

	@When("^user Entet The CVVNumber In CVVNumber Field$")
	public void user_Entet_The_CVVNumber_In_CVVNumber_Field() throws Throwable {
		WebElement ccv = driver.findElement(By.xpath("//input[@name='cc_cvv']"));
		ccv.sendKeys("4477");

	}

	@Then("^user Click The BookNow Button And Its Navigate To Booking Confiromation Page$")
	public void user_Click_The_BookNow_Button_And_Its_Navigate_To_Booking_Confiromation_Page() throws Throwable {
		WebElement next3 = driver.findElement(By.xpath("//input[@type='button']"));
		next3.click();

	}

	@Then("^user Click To Logout Button And Its To Navigate To Hotel Login Page$")
	public void user_Click_To_Logout_Button_And_Its_To_Navigate_To_Hotel_Login_Page() throws Throwable {
		WebElement logout = driver.findElement(By.xpath("//input[@type='button']"));
		logout.click();
	}


}
