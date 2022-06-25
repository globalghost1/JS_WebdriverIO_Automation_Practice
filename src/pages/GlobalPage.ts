import { homeUrl } from "../lib/pages";

class GlobalPage {
    async openHomePage() {
        await browser.url("homeUrl")
        await expect(browser).toHaveUrl(homeUrl + "index.php")
    }

    async midPause() {
        await browser.pause(5000)
    }
    async lowPause() {
        await browser.pause(10000)
    }
}

export default GlobalPage;