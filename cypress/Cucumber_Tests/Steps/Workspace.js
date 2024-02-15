import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import WorkspacePage from '/home/abhijith/CypressAutomation2/cypress/Page object/Workspace Search.js';

const workspacePage = new WorkspacePage();

beforeEach(() => 
{
  cy.clearCache();
});

Given('Navigate to the website', () =>
{
  workspacePage.visit();
});

Then('Select Tokyo from the prefecture area dropdown', () => {
  workspacePage.selectPrefectureArea();
});

And('Select Tokyo Metro from the train line dropdown', () => {
  workspacePage.selectTrainLine();
});

And('Click on the Search button', () => {
  workspacePage.clickSearchButton();
});

Then('Verify the user redirected to Wework locations page', () => {
  
    workspacePage.verifyTextDisplayed();

});



