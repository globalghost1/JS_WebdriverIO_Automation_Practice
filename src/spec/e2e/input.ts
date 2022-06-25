import {homeUrl} from "../../lib/pages"
import {searchPhrase,homePageTitle} from "../../lib/wordData"
import Hompage from "../../pages/homePage";

describe("Lesson1 - Input", async()=>{
    it("Should open automation practice page", async()=>{
        await Hompage.openHomePage();
    })
    it("Should type value to search input", async()=>{
        const input:WebdriverIO.Element = await $("#search_query_top"); //Pobieranie elementu ze strony ($-pobieranie np:id , $$-pobieranie klasy)
        await input.setValue("searchPhrase"); //wpisanie treści do pola tekstowego
        await browser.pause(4000); //pauza na 4sekundy
        await expect(await input.getValue()).toContain("searchPhrase"); // assercja wpisanej wartości

    })
    it("Should clear search input", async () => { 
        const input:WebdriverIO.Element = await $("#search_query_top"); //pobieranie elementu ze strony
        await input.clearValue(); // Wyczyszczenie wartośći w polu tekstowym
        await expect(await input.getValue()).toContain(""); // assercja czy pole tekstowe zostało wyczyszczone
    })
})

