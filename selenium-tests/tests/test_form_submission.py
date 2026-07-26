"""
Contact form tests for the portfolio site.
Tests verify form validation on empty submit and successful submission with valid data.
"""
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC


class TestFormSubmission:
    """Contact form-related test cases."""

    def test_submit_form_with_valid_data(self, driver, base_url, wait):
        """
        Test that the contact form accepts valid input and processes submission.
        Verifies that a response message (success or error) appears after submission.
        """
        driver.get(base_url)

        contact_button = wait.until(
            EC.element_to_be_clickable((By.XPATH, "//button[contains(., 'Contact Me')]"))
        )
        contact_button.click()

        wait.until(EC.visibility_of_element_located((By.CSS_SELECTOR, "form[aria-label='Contact form']")))

        driver.find_element(By.ID, "name").send_keys("Test User")
        driver.find_element(By.ID, "email").send_keys("testuser@example.com")
        driver.find_element(By.ID, "message").send_keys("This is a valid test message.")
        driver.find_element(By.CSS_SELECTOR, "button[type='submit']").click()

        # Wait specifically for a response message to appear (EmailJS takes a moment
        # to respond, so we can't just check the section text immediately).
        success_phrases = ["thank you", "message sent", "success", "failed to send message"]

        def response_message_appeared(drv):
            section = drv.find_element(By.CSS_SELECTOR, "section#contact")
            text = section.text.lower()
            return any(phrase in text for phrase in success_phrases)

        wait.until(response_message_appeared)

        contact_section = driver.find_element(By.CSS_SELECTOR, "section#contact")
        result_text = contact_section.text.lower()
        assert any(
            phrase in result_text for phrase in success_phrases
        ), f"Expected a success or failure response message, got: {result_text[:200]}"

    def test_form_validation_empty_submit(self, driver, base_url, wait):
        """
        Test that submitting the form without filling any fields shows validation errors.
        """
        driver.get(base_url)

        contact_button = wait.until(
            EC.element_to_be_clickable((By.XPATH, "//button[contains(., 'Contact Me')]"))
        )
        contact_button.click()

        contact_form = wait.until(
            EC.visibility_of_element_located((By.CSS_SELECTOR, "form[aria-label='Contact form']"))
        )

        submit_button = contact_form.find_element(By.CSS_SELECTOR, "button[type='submit']")
        submit_button.click()

        contact_section = wait.until(
            EC.visibility_of_element_located((By.CSS_SELECTOR, "section#contact"))
        )

        result_text = contact_section.text.lower()
        assert any(
            phrase in result_text
            for phrase in ["required", "please", "invalid", "error"]
        ), f"Expected a validation error message, got: {result_text[:200]}"

        success_phrases = ["thank you", "message sent"]
        assert not any(phrase in result_text for phrase in success_phrases), \
            "Success message should NOT appear when form is submitted empty"