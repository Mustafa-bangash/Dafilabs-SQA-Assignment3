"""
Navigation tests for the portfolio site.
Tests verify that clicking navigation links scrolls to and displays the target sections.
"""
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC


class TestNavigation:
    """Navigation-related test cases."""

    def test_navigate_to_contact_section(self, driver, base_url, wait):
        """
        Test that clicking the Contact Me button navigates to the contact section.
        Verifies that the contact form becomes visible.
        """
        # Load the homepage
        driver.get(base_url)

        # Wait for the Contact Me button to be clickable and click it.
        # NOTE: using contains(., ...) instead of contains(text(), ...) because
        # text() only matches direct text nodes, not text inside nested elements
        # (e.g. <button><span>Contact Me</span></button>).
        contact_button = wait.until(
            EC.element_to_be_clickable((By.XPATH, "//button[contains(., 'Contact Me')]"))
        )
        contact_button.click()

        # Verify the contact form is now visible
        contact_form = wait.until(
            EC.visibility_of_element_located((By.CSS_SELECTOR, "form[aria-label='Contact form']"))
        )
        assert contact_form.is_displayed(), "Contact form should be visible after clicking Contact Me"

        # Verify contact section is present in the DOM
        contact_section = driver.find_element(By.CSS_SELECTOR, "section#contact")
        assert contact_section is not None, "Contact section should exist"

    def test_page_title_on_homepage(self, driver, base_url):
        """
        Test that the site loads with the correct page title.
        """
        driver.get(base_url)
        expected_title = "Muhammad Mustafa Khan | Software Engineer & MERN Developer"
        assert driver.title == expected_title, f"Page title should be '{expected_title}'"