import homePage from "../../pages/homePage"

describe("Verify Home Page Google", async () => {
    it("Should open Google Page and wait for 3000ms", async () =>{
        await browser.url("https://automationpractice.com/");
        await browser.movetoFbIcon();
        await browser.pause(3000);
    })
})