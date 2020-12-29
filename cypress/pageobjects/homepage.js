export class homePage {
  visit() {
    return cy.visit("https://www.flipkart.com/");
  }

  oneWayRadio() {
    return cy.get("._3L7Pww > ._1XFPmK");
  }

  departField() {
    return cy.get(":nth-child(1) > .GTbXbG > ._3qBKP_ > ._1w3ZZo");
  }

  losAngelesLAX() {
    return cy.get(
      ":nth-child(1) > .GTbXbG > ._1fa_Yn > ._24hoQ2 > :nth-child(1)"
    );
  }

  forgotPasswordLink() {
    return cy.get("[data-testid=login-forgot-password]");
  }

  signUpLink() {
    return cy.get("[data-testid=login-signup-button]");
  }

  errorMessage() {
    return cy.get("[data-testid=login-error-message]");
  }
}
