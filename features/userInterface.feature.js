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

  it('contains 3 icons', async () => {
    await browser.page.waitFor(1500)
    expect(await browser.page.$$('.choice')).to.have.lengthOf(3)
  });
  it('contains rock icon', async () => {
    expect(await browser.page.$$('.fa-hand-rock')).to.have.lengthOf(1)
  });
  it('contains paper icon', async () => {
    expect(await browser.page.$$('.fa-hand-paper')).to.have.lengthOf(1)
  });
  it('contains scissors icon', async () => {
    expect(await browser.page.$$('.fa-hand-scissors')).to.have.lengthOf(1)
  });
});