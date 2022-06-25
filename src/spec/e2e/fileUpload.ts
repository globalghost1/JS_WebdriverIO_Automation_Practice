import { UploaderUrl } from "../../lib/pages";
const path = require("path");

describe("Lesson6 - UploadFile", async() =>{
    it("Should uploader page, and verify url", async() =>{
        await browser.url(UploaderUrl);
        await expect(browser).toHaveUrl(UploaderUrl);
    })
    it("Should upload file and press upload button", async() =>{
        const input:WebdriverIO.Element = await $("#file-upload"); // pobranie lokalizatora
        const btnUpload:WebdriverIO.Element = await $("file-submit"); // pobranie lokalizatora
        const filePath = path.join(__dirname, "../../images/ziemia.jpg"); // pobranie pliku jpg z innego folderu
        const uploadedFile = await browser.uploadFile(filePath); // wybranie pliku do wgrania
        await input.setValue(uploadedFile); 
        await browser.pause(5000);
        await btnUpload.click(); // wysłanie pliku 
        const h3:WebdriverIO.Element = await $("div#content h3");
        const p:WebdriverIO.Element = await $("#uploaded-files");
        await expect(await h3.getText()).toContain("File Uploaded!");
        await expect(await path.getText()).toContain("ziemia.jpg");
    })
})