// const div = document.createElement("div");
// div.innerHTML = "Hello Prachee!";
// document.body.appendChild(div);

import { createHeader } from "./components/Header";
import { createProducts } from "./components/Products";
import { createFooter } from "./components/Footer";
import "../src/style.css";

let fetchRes = fetch("https://sandbox.nextleap.app/products/fetch");
fetchRes.then(res=>res.json())
        .then(data=> {
            createHeader();
            createProducts(data);
            createFooter(data);
        });

