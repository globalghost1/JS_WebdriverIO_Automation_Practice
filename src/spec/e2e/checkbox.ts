import { womenUrl } from "../../lib/pages"
import { HomePage } from "../../pages/homePage"; 

describe("Lesson2-Checkbox", async()=>{
    it("Should open automation practice page", async() =>{
        await HomePage.openHomePage();
        
    })
    
    it("Should click on women page and verify url", async() =>{
        const womenPage:WebdriverIO.Element = await $("a[title='Women']"); // Pobieranie elementu z zakładki (bez klasy oraz id)
        await womenPage.click();
        await expect(browser).toHaveUrl(womenUrl);
    })

    it("Should check Tops checkbox", async() => {
        const checkbox:WebdriverIO.Element = await $("#layered_category_4"); // Pobieranie selektora checkbox
        await checkbox.click();
        await expect(await checkbox.isSelected()); // Sprawdzenie czy checkbox jest zaznaczony czy nie nie zaznaczony.
    })

    it("Should check multiple checkboxes", async()=> {
            const checkboxes:WebdriverIO.ElementArray = await $$("#ul_layered_id_attribute_group_1 li input"); // Pobranie wielu checkboxów ze strony
            await checkboxes.map(async item => { // Weź checkboxy i kolejno je zaznacz
                await item.click(); // 
            })
        await browser.pause(5000);
    })
})
