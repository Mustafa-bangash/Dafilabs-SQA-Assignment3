# Portfolio Website E2E Test Suite

A comprehensive end-to-end test automation suite for the portfolio website at [https://myportfolioprojecttask.netlify.app/](https://myportfolioprojecttask.netlify.app/) using Playwright.

## Project Overview

This test suite validates the functionality, responsiveness, and user experience of a single-page portfolio application built with React + Vite. Tests are organized using the **Page Object Model** pattern to ensure maintainability and reusability.

## Test Coverage

### Test Scenarios

#### 1. **Page Loading & Title Verification** (`01.pageLoad.spec.js`)
- Verify homepage loads successfully
- Validate correct page title
- Confirm hero section displays with name and description
- Check navigation elements (logo, theme toggle, menu)
- Verify hero action buttons are visible
- Validate social media links are present
- Ensure all major page sections are present

#### 2. **Navigation Between Sections** (`02.navigation.spec.js`)
- Navigate to About section
- Navigate to Skills section
- Navigate to Experience section
- Navigate to Education section
- Navigate to Projects section
- Navigate to Contact section using Contact Me button
- Navigate to Contact section from footer
- Return to Home when clicking logo
- Scroll through all sections in sequence
- Verify sections highlight when navigating

#### 3. **Contact Form Validation** (`03.contactFormValidation.spec.js`)
- Display contact form with all fields
- Show validation error on empty form submission
- Show validation error for empty name field
- Show validation error for empty email field
- Show validation error for empty message field
- Clear form fields functionality
- Accept and populate valid form inputs

#### 4. **Valid Form Submission** (`04.contactFormValidSubmission.spec.js`)
- Successfully submit valid contact form
- Accept different valid email formats
- Handle long message input
- Accept special characters in name
- Clear form after successful submission
- Display success message with confirmation text

#### 5. **Invalid Email Handling** (`05.contactFormInvalidEmail.spec.js`)
- Reject email without @ symbol
- Reject email without domain
- Reject email with spaces
- Reject email without local part
- Reject email without domain extension
- Show appropriate error messages
- Prevent form submission with invalid email

#### 6. **Responsive Layout Check** (`06.responsiveLayout.spec.js`)
- **Mobile (375x667):** Verify navbar, hamburger menu, hero section, theme toggle, sections, contact form, scrolling, and no horizontal overflow
- **Tablet (768x1024):** Verify content display, projects grid, and form functionality
- **Small Desktop (1024x768):** Verify all elements display correctly and projects are visible

#### 7. **Broken Link Verification** (`07.brokenLinks.spec.js`)
- Verify all external links are accessible
- Check GitHub link validity
- Check LinkedIn link validity
- Check Twitter link validity
- Check Instagram link validity
- Verify all social links in footer
- Verify project links (GitHub and Live Demo)
- Test anchor link functionality
- Verify resume link
- Comprehensive link verification

## Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Setup Steps

```bash
# Navigate to automation directory
cd automation

# Install dependencies
npm install
```

## Running Tests

### Run All Tests
```bash
npx playwright test
```

### Run Specific Test File
```bash
npx playwright test 01.pageLoad.spec.js
```

### Run Tests in Specific Browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project="Mobile Chrome"
```

### Run Tests with UI Mode (Interactive)
```bash
npx playwright test --ui
```

### Run Tests with Debug Mode
```bash
npx playwright test --debug
```

### Run Tests in Headed Mode (See Browser)
```bash
npx playwright test --headed
```

## Viewing Test Results

### View HTML Report
```bash
npx playwright show-report
```

### Report Contents
- Test execution summary
- Individual test results
- Screenshots on failure
- Video recordings on failure
- Detailed error messages and traces

## Project Structure

```
automation/
├── tests/
│   ├── pages/
│   │   ├── HomePage.js          # Navigation and general page interactions
│   │   ├── ContactForm.js        # Contact form interactions
│   │   └── ProjectsSection.js    # Projects section interactions
│   ├── 01.pageLoad.spec.js       # Page loading tests
│   ├── 02.navigation.spec.js     # Navigation tests
│   ├── 03.contactFormValidation.spec.js    # Form validation tests
│   ├── 04.contactFormValidSubmission.spec.js # Valid submission tests
│   ├── 05.contactFormInvalidEmail.spec.js    # Invalid email tests
│   ├── 06.responsiveLayout.spec.js           # Responsive design tests
│   └── 07.brokenLinks.spec.js    # Link verification tests
├── playwright.config.js          # Playwright configuration
├── package.json
└── README.md
```

## Configuration Details

### Playwright Config Settings (`playwright.config.js`)

- **Base URL:** `https://myportfolioprojecttask.netlify.app/`
- **Test Directory:** `./tests`
- **Parallel Execution:** Enabled
- **Screenshot:** Capture on failure only
- **Video Recording:** Retain on failure only
- **Reporter:** HTML
- **Trace:** Collect on first retry

### Browser Projects

- ✅ **Chromium** (Desktop)
- ✅ **Firefox** (Desktop)
- ✅ **Mobile Chrome** (Pixel 5, 393x851)
- ⭕ **WebKit** (Optional - commented out)

## Page Object Model (POM) Pattern

### HomePage
- Navigation controls
- Section headings
- Social media links
- External link verification
- Link collection for broken link checking

### ContactForm
- Form field interactions
- Form validation
- Success/error message handling
- Form submission

### ProjectsSection
- Project card information
- Technology stack retrieval
- Project link verification

## Test Execution Order

Tests are executed in numerical order by design:
1. Page loading and basic structure
2. Navigation functionality
3. Form validation
4. Valid form submission
5. Invalid input handling
6. Responsive design
7. Link integrity

## Debugging & Troubleshooting

### Common Issues

**Tests timing out:**
- Increase timeout in config if needed
- Check network connectivity
- Verify base URL is accessible

**Element not found:**
- Run with `--headed` to visually debug
- Use `--debug` mode to step through tests
- Check page object selectors

**Form submission not working:**
- Verify contact form endpoint is working
- Check browser console for errors
- Review network tab in debug mode

### Debug Commands
```bash
# Run specific test with debug UI
npx playwright test 03.contactFormValidation.spec.js --debug

# Run with headed browser
npx playwright test --headed

# Trace execution
npx playwright test --trace=on
```

## CI/CD Integration

This test suite is configured to run in CI/CD pipelines. When `CI=true` environment variable is set:
- Tests retry up to 2 times on failure
- Single worker execution
- Screenshots and videos retained on failure

## Dependencies

- `@playwright/test@^1.61.1` - Testing framework

## Maintenance & Updates

### Updating Selectors
If portfolio website elements change, update the corresponding selectors in:
- `tests/pages/HomePage.js`
- `tests/pages/ContactForm.js`
- `tests/pages/ProjectsSection.js`

### Adding New Tests
1. Create new `.spec.js` file in `tests/` directory
2. Import required page objects
3. Follow existing test structure and naming conventions
4. Use descriptive test names using `test.describe()` blocks

## Notes

- Tests use Playwright's recommended locators (getByRole, getByLabel, getByText) when possible
- No hardcoded waits; relies on Playwright's auto-waiting
- Tests are independent and can run in any order
- Screenshots and videos auto-capture only on failures to save space
- All tests target the live deployed website

## Support & Documentation

- [Playwright Documentation](https://playwright.dev)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Selectors Guide](https://playwright.dev/docs/locators)

---

**Last Updated:** 2025
**Test Suite Version:** 1.0.0
