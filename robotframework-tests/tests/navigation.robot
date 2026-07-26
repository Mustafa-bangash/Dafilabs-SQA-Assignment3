*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${URL}        https://myportfolioprojecttask.netlify.app/
${BROWSER}    chrome

*** Test Cases ***
Navigate To Contact Section
    Open Browser    ${URL}    ${BROWSER}
    Wait Until Element Is Visible    xpath://button[contains(., 'Contact Me')]    10s
    Click Element    xpath://button[contains(., 'Contact Me')]
    Wait Until Element Is Visible    css:form[aria-label='Contact form']    10s
    Element Should Be Visible    css:form[aria-label='Contact form']
    [Teardown]    Close Browser
    