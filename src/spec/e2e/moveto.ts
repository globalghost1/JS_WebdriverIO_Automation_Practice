import { homeUrl } from "../../lib/pages";
import Hompage from "../../pages/homePage";

describe("Lesson7 - Moveto, MoveIntoView"), async() => {
    it ("Should open automation practice page and verify url", async() => {
        await Hompage.openHomePage();
    })
    it ("Should scroll into view facebook icon", async()=>{
        const fbIcon:WebdriverIO.Element = await $("li.facebook"); //pobranie ikony facebooka
        await fbIcon.scrollIntoView(); // scrollowanie do elementu
    })
    it ("Should hover on women tab", async()=>{
        const tab:WebdriverIO.Element = await $("div#block_top_menu a");
        await tab.scrollIntoView();
        await tab.moveTo();
        await browser.pause(4000);
    })
}