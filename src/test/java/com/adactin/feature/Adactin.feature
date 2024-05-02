Feature: Hotel Booking In Adactin Application

Scenario: User Login In Web Application
Given user Launch The Adactin Application
When user Enter The Username In Username Field
And user Enter The Password In Password Field
Then user Click The Login Button And Its Navigate to Search Hotel Page

Scenario: User Search The Hotel In Web Application
When user Select Location In Test Data
When user Select Hotel In Test Data
When user Select RoomType In Test Data
When user Select NumberOfRooms In Test Data
When user Select The CheckInDate In Test Data
When user Select The CheckOutDate In Test Data
When user Select The AdultsPerRooms In Test Data
And user Select The ChildrenPerRoom In Test Data
Then user Click The Search Button And Its Navigate To Selet Hotel Page

Scenario: User Select The Hotel In Web Application
When user Select The Hotel For The All Details Checking To Select Hotel
Then user Click The Continue Button And Its Navigate To Book A Hotel page

Scenario: User Book A Hotel In Web Application
When user Enter The FirstName In FirstName Field
When user Enter The LastName In LastName Field
When user Enter The BillingAddress In BillingAddress Field
When user Enter The CreditCardNo In CreditCardNo Field
When user Enter The CreditCardType In CreditCardType Field
When user Enter The ExpiryDate To SelectMonth In SelectMonth Field   
When user Enter The ExpiryDate To SelectYear In SelectYear Field
And user Entet The CVVNumber In CVVNumber Field
Then user Click The BookNow Button And Its Navigate To Booking Confiromation Page

Scenario: User Booking Confirmation In Web Application
Then user Click To Logout Button And Its To Navigate To Hotel Login Page    
 

