"""
Pytest configuration and fixtures for Selenium test suite.
This module sets up and tears down the Selenium WebDriver for test execution.
"""
import pytest
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait


SITE_URL = "https://myportfolioprojecttask.netlify.app"


@pytest.fixture(scope="function")
def driver():
    """
    Fixture that creates a Chrome WebDriver instance for each test.
    Yields the driver for test execution and quits it after the test completes.
    """
    options = Options()
    options.add_argument("--disable-blink-features=AutomationControlled")
    options.add_argument("--disable-extensions")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    
    driver = webdriver.Chrome(options=options)
    driver.implicitly_wait(10)
    
    yield driver
    
    driver.quit()


@pytest.fixture(scope="function")
def base_url():
    """
    Fixture that provides the site URL for testing.
    """
    return SITE_URL


@pytest.fixture(scope="function")
def wait(driver):
    """
    Fixture that provides an explicit WebDriverWait instance (10 seconds).
    Use this for all waits instead of time.sleep().
    """
    return WebDriverWait(driver, 10)
