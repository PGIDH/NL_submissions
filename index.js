import { createHeader } from "./components/Header.js";
import { createProducts } from "./components/Products.js";
import { createFooter } from "./components/Footer.js";

let fetchRes = fetch("https://sandbox.nextleap.app/products/fetch");
fetchRes.then(res=>res.json())
        .then(data=> {
            createHeader();
            createProducts(data);
            createFooter(data);
        });
