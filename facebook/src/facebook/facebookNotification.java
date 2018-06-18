

package facebook;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
public class facebookNotification {
    
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        
        driver.get("https://www.facebook.com/");
        
        WebElement email = driver.findElement(By.id("email"));
        WebElement password = driver.findElement(By.id("pass"));
        WebElement login = driver.findElement(By.id("loginbutton"));
        
        
        email.sendKeys("09...");
        password.sendKeys("your password");
        login.submit();
        
        //get number of notifications
        WebElement numberOfNotifictions = driver.findElement(By.id("notificationsCountValue"));
        String not = numberOfNotifictions.getText();
        System.out.println(not + " notifications.");
        
        
        
        
        
        
 
    }
    
}

