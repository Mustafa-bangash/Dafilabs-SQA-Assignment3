"""
Basic Appium mobile automation flow:
1. Opens the Android Settings app
2. Taps the search icon
3. Enters text into the search field
4. Verifies the expected search results appear
"""
from appium import webdriver
from appium.options.android import UiAutomator2Options
from appium.webdriver.common.appiumby import AppiumBy
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time


def get_driver():
    options = UiAutomator2Options()
    options.platform_name = "Android"
    options.device_name = "emulator-5554"
    options.automation_name = "UiAutomator2"
    options.app_package = "com.android.settings"
    options.app_activity = ".Settings"
    options.no_reset = True

    return webdriver.Remote("http://127.0.0.1:4723", options=options)


def test_settings_wifi_search():
    driver = get_driver()
    wait = WebDriverWait(driver, 15)

    try:
        # Step 1: Settings app is already open (via app_package/app_activity above)
        time.sleep(2)  # brief pause to let the app fully render

        # Step 2: Tap the search icon
        search_icon = wait.until(
            EC.presence_of_element_located(
                (AppiumBy.XPATH, "//*[contains(@content-desc, 'Search') or contains(@text, 'Search')]")
            )
        )
        search_icon.click()

        # Step 3: Enter text into the search field
        search_field = wait.until(
            EC.presence_of_element_located((AppiumBy.CLASS_NAME, "android.widget.EditText"))
        )
        search_field.send_keys("Wi-Fi")

        # Step 4: Verify expected result appears
        result = wait.until(
            EC.presence_of_element_located(
                (AppiumBy.XPATH, "//*[contains(@text, 'Wi-Fi') or contains(@text, 'WiFi')]")
            )
        )
        assert result.is_displayed(), "Expected Wi-Fi search result to appear"
        print("TEST PASSED: Wi-Fi search result found and displayed.")

    finally:
        driver.quit()


if __name__ == "__main__":
    test_settings_wifi_search()