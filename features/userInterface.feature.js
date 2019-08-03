require('../spec.helper');

context('Your Description of the test scenario', () => {
  // Initialize a browser and visit the server's root path
  before(async () => {
    await browser.init()
    await browser.visitPage('http://localhost:8080/')

  });

  // Reload before each test 
  beforeEach(async () => {
    await browser.page.reload();
  });

  // Make sure the browser closes after the test is finished
  after(() => {
    browser.close();
  });

  describe('UI', () => {
    it('contains 3 icons', async () => {
      await browser.page.waitFor(1500)
      expect(await browser.page.$$('.choice')).to.have.lengthOf(3)
    });
  
    it('contains a rock icon', async () => {
      expect(await browser.page.$$('.fa-hand-rock')).to.have.lengthOf(1)
    });
  
    it('contains a paper icon', async () => {
      expect(await browser.page.$$('.fa-hand-paper')).to.have.lengthOf(1)
    });
  
    it('contains a scissors icon', async () => {
      expect(await browser.page.$$('.fa-hand-scissors')).to.have.lengthOf(1)
    });
  });

  
  it('displays computer choice upon making a move', async () => {
    await browser.clickOnButton("i[id='scissors']")
    // await browser.page.waitFor(1500)
    let content = await browser.getContent("div[id='result'] p")
    let possibleFeedback = /Computer (?: chose rock|chose scissors|chose paper)/
    console.log(content)
    expect(possibleFeedback.test(content)).to.equal(true) 
  });
  xit('shows result upon clicking on an icon', async () => {
    await browser.clickOnButton("i[id='scissors']")
    let content = await browser.getContent("div[id='result']")
    let possibleResults = /(?: You WIN!|Computer WINS!|It is a TIE!)/
    expect(possibleResults.test(content)).to.equal(true)

  });
});