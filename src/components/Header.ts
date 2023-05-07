import { createAnchorTag, createDivTag, createImageTag } from "./common/Helper";

export function createHeader() {
    let hdrBar = document.createElement("nav");
    hdrBar.id = "header";
    hdrBar.classList.add("header");

    //flipkart logo div
    let logoAnchorDiv = createAnchorTag("https://www.flipkart.com");
    let logo = createImageTag("../src/images/Logo.png","vector","logo","logo");
    logoAnchorDiv.appendChild(logo);
    hdrBar.appendChild(logoAnchorDiv);

    //search bar
    let searchBarDiv = document.createElement("input");
    searchBarDiv.id = "srhTxt";
    searchBarDiv.type = "text";
    searchBarDiv.placeholder = "Search";
    searchBarDiv.classList.add("srchRect");
    hdrBar.appendChild(searchBarDiv);

    //become a seller option
    let sellerAnchorDiv = createAnchorTag("https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect","text-decoration:none");
    let sellerDiv = createDivTag("seller");
    sellerDiv.innerText = "Become a seller";
    sellerAnchorDiv.appendChild(sellerDiv);
    hdrBar.appendChild(sellerAnchorDiv);

    //view cart
    let cartAnchorDiv = createAnchorTag("https://www.flipkart.com/viewcart?exploreMode=true&preference=FLIPKART","text-decoration:none");
    let cartDiv = createDivTag("cart");
    cartDiv.innerText = "Cart";
    cartAnchorDiv.appendChild(cartDiv);
    hdrBar.appendChild(cartAnchorDiv);

    document.body.appendChild(hdrBar);
}