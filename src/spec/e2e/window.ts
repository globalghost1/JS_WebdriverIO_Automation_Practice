import homePage from "../../pages/homePage";
import { homeUrl,womenUrl } from "./../../lib/pages";

describe("Lesson 4 - Window", async() => {
    it("Should open home page", async () =>{
        await homePage.openHomePage();
    })
    
    it("Should open women page in new window", async() =>{
        await browser.newWindow(womenUrl); // otwarcie strony w nowej karcie
    })
    it("Should verify title pages", async()=>{
        const openWindwows = await browser.getWindowHandles(); // Pobieranie tablicy otwartych okien
        await browser.switchToWindow(openWindwows[0]);
        const windowTitle1 = await browser.getTitle // Pobieranie i zapisanie tytułu z pierwszej karty.
        //await expect(await windowTitle1).toContain("My store"); // Assercja czy "My Store znajduje się w widowtitle1"
        await expect(browser).toHaveTitle("My Store");

        await browser.switchWindow(openWindwows[1]); // przełączanie się między oknami
        await expect(browser).toHaveTitle("Women - My Store") // assercja sprawdzająca poprawność tytułu strony
    })

})

