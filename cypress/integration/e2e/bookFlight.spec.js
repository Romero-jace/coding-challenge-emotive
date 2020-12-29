const { homePage } = require("../../pageobjects/homepage");

const homepage = new homePage();
describe("Coding Challenge", () => {
  beforeEach(() => {
    homepage.visit();
  });

  it("Will verify that not authenticated user will be redirected to the login page after booking flight", () => {
    cy.intercept("GET", "api/2/flights/auto-suggest?query=Los%20Angeles").as(
      "la"
    );
    cy.intercept(
      "GET",
      "api/2/flights/auto-suggest?query=London%20United%20Kingdom"
    ).as("london");
    cy.contains("Flights")
      .should("have.attr", "href", "/travel/flights?otracker=nmenu_Flights")
      .click();
    homepage.oneWayRadio().click();
    homepage.departField().click().type("Los Angeles");
    cy.wait("@la");
    homepage.losAngelesLAX().click();
    cy.get(":nth-child(3) > .GTbXbG > ._3qBKP_ > ._1w3ZZo")
      .click()
      .type("London United Kingdom");
    cy.wait("@london");
    cy.get(
      ":nth-child(3) > .GTbXbG > ._1fa_Yn > ._24hoQ2 > :nth-child(1)"
    ).click();
    cy.get(":nth-child(3) > .zzPDhz > ._1w3ZZo").click();

    cy.get("._3SCHpg > ._1w3ZZo").click({ force: true });
    cy.get(
      ":nth-child(2) > ._1_YMe_ > ._39P_Au > :nth-child(3) > ._2KpZ6l"
    ).click();
    cy.get(
      ":nth-child(4) > ._1_YMe_ > ._39P_Au > :nth-child(3) > ._2KpZ6l > svg"
    ).click();
    cy.get(".aC49_F").click();
    cy.get("._1QYQF8").click({ force: true });

    cy.get(
      '[data-rank="1"] > .summary-section > .preferred-provider > .preferred-provider-container > .book-cta > .c-btn > .u-ripple'
    ).click();

    cy.contains("LOGIN OR CREATE ACCOUNT").should("exist");
  });
});
