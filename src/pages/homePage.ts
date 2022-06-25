import GlobalPage from "./GlobalPage";

class HomePage extends GlobalPage {
    get fbIcon(){
        return $("#divblock_top_menu a");
    }

    async moveToFbIcon() {                                      // pobranie lokalizatora 
        const icon:WebdriverIO.Element = await this.fbIcon;
        await icon.waitForDisplayed();
        await icon.moveTo();
        await browser.pause(3000);
    }
}
export default new HomePage();

