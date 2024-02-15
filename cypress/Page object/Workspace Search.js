const PrefectureArea = 'Prefecture/Area';
const PrefectureCheckbox = 'body > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > div:nth-child(2) > label:nth-child(1)'
const Trainline = "Search by train line"
const Searchbutton = "button[class='h-[56px] w-full !rounded md:!w-[133px] font-main text-2xs rounded-sm relative whitespace-nowrap disabled:cursor-default focus-visible:outline-primaryblue-70 bg-primary hover:bg-primaryblue-40 active:bg-primaryblue-30 disabled:bg-gray-90 text-white disabled:text-gray-40 border border-primary hover:border-primaryblue-40 disabled:border-gray-90'] p[class='leading-sm mx-3xs whitespace-nowrap text-2xs']";

class WorkspacePage 
{
    visit() 
    {
      cy.fixture('WorkspacePage.json').then(data => {
        cy.visit(data.Baseurl);
    });
    }
  
    selectPrefectureArea() 
    {
      cy.contains(PrefectureArea).click();
      cy.get(PrefectureCheckbox).click();
      
    }
  
    selectTrainLine() {
      cy.contains(Trainline).click();
      cy.contains('Tokyo Metro').click();
    }
  
    clickSearchButton() 
    {
      cy.get(Searchbutton).click();
    }
  
    verifyTextDisplayed() 
    {
      cy.wait(4000);
      cy.fixture('WorkspacePage.json').then(data => {
        cy.contains(data.Text1).should('be.visible');
    });
    }
  }
  
  export default WorkspacePage;