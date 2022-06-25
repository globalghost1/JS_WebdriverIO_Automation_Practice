import { isAwaitExpression } from "typescript";
import { alertHomePage } from "../../lib/pages";

describe("Lesson5 - Alerts", async()=> {
    it("Should open alert home page and verify url", async()=>{
        await browser.url(alertHomePage);
        await expect(browser).toHaveUrl(alertHomePage);
    })
    it("Should click on the button and get text on the alert", async() =>{
        const button:WebdriverIO.Element = await $(".btn-danger");
        await button.click(); // Kliknięcie przycisku i wyświetlanie się alertu
        browser.pause(4000);
        const alertText:string = await browser.getAlertText(); // pobieranie tekstu z alertu
        await expect(await browser.isAlertOpen()).toBeTruthy();// otwarcie alertu
        await browser.acceptAlert(); //akceptacja alertu
        await expect(await browser.isAlertOpen()).toBeFalsy();
        await browser.pause(4000);
    })
    it("Should verify confirm alert", async ()=> {
        const tabConfigAlert:WebdriverIO.Element = await $("//a[contains(text(),'Alert with OK & Cancel ')]"); // dodanie elementu za pomocą XPatha
        await tabConfigAlert.click();
        const button:WebdriverIO.Element = await $("button.btn-primary");
        await button.click();
        await browser.dismissAlert(); // Kliknięcie w przycisk anulacji.
        const p:WebdriverIO.Element = await $("demo"); // wyciągnięcie komunikatu
        const ValidationMessage:string = await p.getText(); // pobieranie wartości ze znacznika
        await expect(await ValidationMessage).toContain("You Pressed Cancel"); // assercja komunikatu
    })
    it("Should verify prompt alert", async() => {
        const tabPromptAlert:WebdriverIO.Element = await $("//a[contains(text(),'Alert with Textbox')]")
        await tabPromptAlert.click()
        const button:WebdriverIO.Element = await $(".btn-info");
        await button.click();
        await browser.sendAlertText("Bartosz"); //wpisanie treści do pola tekstowego
        await browser.acceptAlert(); //akceptacja do pola tekstowego
        const p:WebdriverIO.Element = await $("#demo1");
        await expect(await p.getText()).toContain("Hello Bartosz How are you today"); //assercja / sprawdzenie 
    })
    
}) 