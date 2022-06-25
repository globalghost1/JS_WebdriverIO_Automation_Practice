import {productUrl} from "../lib/pages";

class ProductPage {

    get select() { 
        return $("#group_1") // pobieranie selectora 
    }

    async openProductPage() {
        await browser.url(productUrl);
        await expect(browser).toHaveUrl(productUrl);
    }
    async selectProductSize(size: number) {
        const select:WebdriverIO.Element = await this.select; // implementacja selektora
        //await select.selectByAttribute("title", "L") // Zaznaczenie rozmiaru po atrybucie = 2
        //await select.selectByVisibleText("title", "L";) //Zaznaczenie po tekscie
        await select.selectByIndex(size); // Zaznaczanie po indexie
        await expect(await select.getValue()).toContain("1")
    }
}

export default new ProductPage();