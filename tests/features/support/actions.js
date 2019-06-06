// Dependencies
const pages = require('./pages');
const selectors = require('./selectors');
const scope = require('./scope');

// Puppeteer variables
let headless = false;
let slowMo = 50;
let viewport = {
    width: 1440,
    height: 900
};

const visitHome = async () => {
    if (!scope.browser) {
        scope.browser = await scope.driver.launch({
            headless: headless,
            slowMo: slowMo
        });
    }
    scope.context.currentPage = await scope.browser.newPage();
    scope.context.currentPage.setViewport(viewport);

    const homeUrl = scope.host;
    const visit = await scope.context.currentPage.goto(homeUrl, {
        waitUntil: 'networkidle2'
      });
};

const loginRedirect = async () => {
    if (scope.context.currentPage === pages.login) {
        const fieldPresent = await currentPage.waitforSelector(
            selectors.fields.userName
        );
        await fieldPresent;

        return;
    }

};

const login = async () => {
    const { currentPage } = scope.context;
    
    await currentPage.type(selectors.fields.userName, process.env.USER_NAME);
    await currentPage.type(selectors.fields.userPass, process.env.USER_PASS);
    await currentPage.click(selectors.buttons.login);

    return await delay(1000);
};

const visitMyKits = async () => {
    const homeUrl = scope.host + pages.home;
    if (scope.context.currentPage === homeUrl){
        return;
    }
};

const delay = duration => new Promise(resolve => setTimeout(resolve, duration));

module.exports = {
    visitHome,
    loginRedirect,
    login,
    visitMyKits,
    delay
};

