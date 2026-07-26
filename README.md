<div align="center">

# 🧪 Week 3 – QA Automation Projects

**SQA Internship @ Dafi Labs**

Five automation tools, one live site, tested five different ways — built to compare frameworks, syntax, and philosophy across the modern QA tooling landscape.

[![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat&logo=playwright&logoColor=white)](#-playwright-tests)
[![Cypress](https://img.shields.io/badge/Cypress-17202C?style=flat&logo=cypress&logoColor=white)](#-cypress-tests)
[![Selenium](https://img.shields.io/badge/Selenium-43B02A?style=flat&logo=selenium&logoColor=white)](#-selenium-tests)
[![Robot Framework](https://img.shields.io/badge/Robot%20Framework-000000?style=flat&logo=robotframework&logoColor=white)](#-robot-framework-tests)
[![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=postman&logoColor=white)](#-postman-collection)
[![Appium](https://img.shields.io/badge/Appium-662D91?style=flat&logo=appium&logoColor=white)](#-appium-mobile-automation)

**Site under test:** [myportfolioprojecttask.netlify.app](https://myportfolioprojecttask.netlify.app/)

</div>

---

## 📋 Task Reports

Full write-ups for each task — setup steps, test results, debugging notes, and framework comparisons.

| # | Task | Tools | Report |
|:-:|---|---|:-:|
| 1 | Web automation | Playwright | [📄 Open](https://docs.google.com/document/d/1IeMHtK8-rQ7hlB5zfrrEJPOB4ce7IydaJTCE6r1G7vE/edit?usp=sharing) |
| 2 | Web automation + comparison | Cypress | [📄 Open](https://docs.google.com/document/d/1uIK6ksflb8nklsYICZaH77TD55IGiUVF-C2MRP_Ps00/edit?usp=sharing) |
| 3 | Web automation + comparison | Selenium & Robot Framework | [📄 Open](https://docs.google.com/document/d/1JwGvVcbBcm1Z5Kr6UiOgD4ZScqYtZTuvoSezqZoOGb0/edit?usp=sharing) |
| 4 | API testing | Postman | [📄 Open](https://docs.google.com/document/d/1Bn1Z_99NS1MfhwXbr5Gf606MZam9BxIW6NMgx3f94C0/edit?usp=sharing) |
| 5 | Mobile automation | Appium | [📄 Open](https://docs.google.com/document/d/1djqixUPPDUar5sDbA5ZtaUzNoSlOpL6j1MCpl0TaPbE/edit?usp=sharing) |

---

## 🗂️ Repository Structure

```
week3-qa-automation/
├── playwright-tests/         🎭 Task 1 — Page Object Model, cross-browser, HTML reports
├── cypress-tests/            🌲 Task 2 — 3 scenarios reused from Playwright
├── selenium-tests/           🐍 Task 3 — Python + pytest
├── robotframework-tests/     🤖 Task 3 — keyword-driven, reuses Selenium scenario
├── postman-collection/       📮 Task 4 — 8-request API collection
├── appium-tests/             📱 Task 5 — mobile automation on Android emulator
└── README.md
```

---

## 🎭 Playwright Tests

`playwright-tests/`

End-to-end suite using the Page Object Model — homepage load/title, navigation, contact form validation & submission, responsive layout, and broken-link checks. Runs across **Chromium, Firefox, and Mobile Chrome**, with screenshots + video on failure and a built-in HTML report.

```bash
cd playwright-tests
npm install
npx playwright test
npx playwright show-report
```

---

## 🌲 Cypress Tests

`cypress-tests/`

Three scenarios mirrored from the Playwright suite (homepage/title, contact form validation, valid form submission) — same test logic, rebuilt in Cypress for a direct side-by-side comparison. Uses `beforeEach` hooks and a mix of positive/negative assertions, with video recorded automatically on every run.

```bash
cd cypress-tests
npm install
npx cypress run          # headless
npx cypress open         # interactive, with time-travel debugger
```

---

## 🐍 Selenium Tests

`selenium-tests/`

Python + Selenium 4 + pytest — navigation and contact form scenarios (valid submission + empty-form validation). Uses explicit waits (`WebDriverWait` + `expected_conditions`) throughout, with shared pytest fixtures for browser setup/teardown.

```bash
cd selenium-tests
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
pytest -v
```

---

## 🤖 Robot Framework Tests

`robotframework-tests/`

The navigation scenario rebuilt in Robot Framework's keyword-driven syntax via SeleniumLibrary — built specifically to compare **code-based vs. keyword-based** test authoring against the equivalent Selenium/Python version above.

```bash
cd robotframework-tests
python3 -m venv venv
source venv/bin/activate
pip install robotframework robotframework-seleniumlibrary
robot tests/navigation.robot
```

Auto-generates `report.html` and `log.html` after every run.

---

## 📮 Postman Collection

`postman-collection/`

An 8-request collection against the **JSONPlaceholder** public API — GET, POST, PUT, PATCH, and DELETE, with both positive and negative test cases. Automated tests cover status codes, response body values, response time, required fields, and invalid input handling. URLs use an environment variable (`base_url`) rather than being hardcoded.

**To run:**
1. Import `Dafi-labs.postman_collection.json` into Postman
2. Open the collection → **Run collection**

---

## 📱 Appium Mobile Automation

`appium-tests/`

A basic mobile automation flow using Appium with the **UiAutomator2** driver, against an Android emulator (Pixel 6, API 34): opens the Settings app → taps the search icon → types "Wi-Fi" → verifies a matching result appears.

**Prerequisites:** Android Studio, a booted AVD, Java (JDK 17).

```bash
# Terminal 1 — start the Appium server
appium

# Terminal 2 — run the test
cd appium-tests
python3 -m venv venv
source venv/bin/activate
pip install Appium-Python-Client
python test_settings_search.py
```

Expected output:
```
TEST PASSED: Wi-Fi search result found and displayed.
```

---

<div align="center">

### 👤 Author

**Muhammad Mustafa Khan**
SQA Intern — Dafi Labs

[![GitHub](https://img.shields.io/badge/GitHub-Mustafa--bangash-181717?style=flat&logo=github)](https://github.com/Mustafa-bangash)

</div>
