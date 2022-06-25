import ProductPage from "../../pages/productPage";

describe("Lekcja3 - Select", async() => {
    it("Should open product page and verify url", async () =>{
        await ProductPage.openProductPage();
    })
    it("Should select product size", async ()=>{
        await ProductPage.selectProductSize(0);
    })
})
 