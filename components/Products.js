import { createAnchorTag, createDivTag, createImageTag } from "./common/Helper.js";

export function createProducts(productData) {
    let parsed_product_json = productData;
    for (let i = 0; i < parsed_product_json.productCard.length; i++) {
        createSingleProduct(parsed_product_json.productCard[i],i);
    }
}

function createSingleProduct(parsed_product_json,idx) {
    let product_parse = parsed_product_json;
    let product_div = createDivTag("listItem");

    //div for image and product info
    let img_prodinfo_div = createDivTag("imageProdInfo");

    //image
    let sub_prod_div = createDivTag("subProd");
    product_div.appendChild(sub_prod_div);

    let img_link = createAnchorTag(`${product_parse.productPageLink.url}`);
    let prod_img = createImageTag(`${product_parse.image.url}`,"iphoneImg",`${product_parse.image.alt}`);
    prod_img.width = `${product_parse.image.width}`;
    prod_img.height = `${product_parse.image.height}`;
    prod_img.setAttribute('href', `${product_parse.url}`)
    img_link.appendChild(prod_img);
    ////// sub_prod_div.appendChild(img_link);
    img_prodinfo_div.appendChild(img_link);
    
    //product info 
    let prod_info = createDivTag("prodInfo");

    //product title
    let prod_title = createAnchorTag(`${product_parse.productPageLink.url}`)
    prod_title.classList.add("itmName");
    prod_title.innerText = `${product_parse.title}`;
    prod_info.appendChild(prod_title);

    //reviews
    let prod_rev = createDivTag("reviews");

    let prod_rating = createDivTag("rating");
    let prod_rat_span = document.createElement("span");
    prod_rat_span.classList.add("ratingNo");
    prod_rat_span.innerText = `${product_parse.ratings.overallRating}`;

    //rating image
    let rat_img = createImageTag("images/Star icon.png","starIcon","starIcon");
    let prod_rat_cnt = document.createElement("span");
    prod_rat_cnt.classList.add("ratingCount");
    var totalRatingsNum = product_parse.ratings.totalRatingsNum.toLocaleString('en-IN');
    var totalReviewsNum = product_parse.ratings.totalReviewsNum.toLocaleString('en-US');
    prod_rat_cnt.innerText = `${totalRatingsNum} Ratings & ${totalReviewsNum} Reviews`;
    prod_rating.appendChild(prod_rat_span);
    prod_rating.appendChild(rat_img);
    prod_rev.appendChild(prod_rating);
    prod_rev.appendChild(prod_rat_cnt);
    prod_info.appendChild(prod_rev);

    //features
    let prod_feat = document.createElement("ul");
    prod_feat.classList.add("features");
    for (let j = 0; j < product_parse.featuresList.length; j++) {
        let prod_feat_li = document.createElement("li");
        prod_feat_li.innerText = `${product_parse.featuresList[j]}`;
        prod_feat.appendChild(prod_feat_li);
    }
    prod_info.appendChild(prod_feat);
    ////// sub_prod_div.appendChild(prod_info);
    img_prodinfo_div.appendChild(prod_info);
    sub_prod_div.appendChild(img_prodinfo_div);

    //pricing info
    let prc_info = createDivTag("pricingInfo");

    let prc_sp = createDivTag("salePrice");
    var salePrice = product_parse.price.finalPrice.toLocaleString('en-US');
    prc_sp.innerText = `₹ ${salePrice}`;
    prc_info.appendChild(prc_sp);

    let mrp = createDivTag("mrp");
    let mrpText = document.createElement("strike");
    var mrp_format = product_parse.price.mrp.toLocaleString('en-US');
    mrpText.innerText = `₹ ${mrp_format}`;
    let discount = document.createElement("span");
    discount.classList.add("discount");
    discount.innerText = `\u00A0 ${product_parse.price.discount.data}% off`;
    mrp.appendChild(mrpText);
    mrp.appendChild(discount);
    prc_info.appendChild(mrp);

    //delivery info
    let prod_del = createDivTag("delInfo");
    if (product_parse.freeDelivery == true)
        prod_del.innerText = "free delivery";
    prc_info.appendChild(prod_del);
    sub_prod_div.appendChild(prc_info);
    ///// product_div.appendChild(prc_info);

    //exchg info
    let prod_ex = createDivTag("excgInfo");
    var exchg_offer = product_parse.exchangeOfferDiscount.data.toLocaleString('en-US');
    prod_ex.innerHTML = `Upto <b>₹${exchg_offer}</b> off on Exchange`;
    prc_info.appendChild(prod_ex);

    //bank offers
    let prod_offers = createDivTag("offers");
    prod_offers.innerText = `${product_parse.bankOffersLink.buttonText}`;
    prc_info.appendChild(prod_offers);

    //add to cart checkbox
    let prod_add = createDivTag("checkbox");
    let chk1 = document.createElement("input");
    chk1.type = "checkbox";
    chk1.name = "checkbox";
    prod_add.appendChild(chk1);

    var label = document.createElement('label')
    label.htmlFor = "id";
    label.appendChild(document.createTextNode('Add to Cart'));

    prod_add.appendChild(chk1);
    prod_add.appendChild(label);
    product_div.appendChild(prod_add);

    // add to compare checkbox
    let prod_add2 = createDivTag("checkbox");

    let chk2 = document.createElement("input");
    chk2.type = "checkbox";
    chk2.name = "checkbox";
    prod_add2.appendChild(chk2);
    chk2.setAttribute("id", "chkprod" + product_parse.title + idx);

    //compare functionality
    chk2.addEventListener("change", function (event) {
        if (this.checked) {
            var compare_div = document.getElementById("compareDiv");
            var image_div = document.getElementById("imageDiv");
            if (compare_div === null) {
                compare_div = createDivTag("compareDiv");
                compare_div.setAttribute("id", "compareDiv");
                document.body.appendChild(compare_div);

                image_div = createDivTag("imageDiv");
                image_div.setAttribute("id", "imageDiv");
                compare_div.appendChild(image_div);
            }
            //add image
            let child_div = createDivTag("childDiv");
            image_div.appendChild(child_div);
            child_div.setAttribute("id", "prod" + product_parse.title + idx);
            document.body.appendChild(compare_div);

            let img_combo_div = createDivTag("imageComboDiv");
            child_div.appendChild(img_combo_div);

            let prod_img = createImageTag(`${product_parse.image.url}`,"btmImg",`${product_parse.image.alt}`)
            // prod_img.width = `${product_parse.image.width}`;
            // prod_img.height = `${product_parse.image.height}`;
            img_combo_div.appendChild(prod_img);

            let cancel_img = createImageTag("","close");
            // cancel_img.src = '&times';
            cancel_img.addEventListener("click", function (event) {
                var del_elem = document.getElementById("prod" + product_parse.title + idx);
                del_elem.remove(del_elem);
                var checked_elem = document.getElementById("chkprod" + product_parse.title + idx);
                checked_elem.checked = false;
                // if(compare_btn)
                if (image_div.childElementCount == 0) {
                    var remove_button_div = document.getElementById("compareDiv");
                    remove_button_div.remove(remove_button_div);
                }
                compare_btn.innerText = 'COMPARE' + image_div.childElementCount;
            });
            img_combo_div.appendChild(cancel_img);

            //add title
            let prod_title = createDivTag("btmName");
            prod_title.innerText = `${product_parse.title}`;
            child_div.appendChild(prod_title);

            //adding remove and compare btn
            var btn_div = document.getElementById("removeBtn");
            var compare_btn = document.getElementById("compareBtn");
            if (compare_btn)
                compare_btn.innerText = 'COMPARE' + image_div.childElementCount;
            if (btn_div === null) {
                let btn_div = document.createElement("div");
                btn_div.classList.add("btnDiv");
                btn_div.setAttribute("id", "buttonDiv");
                compare_div.appendChild(btn_div);

                let remove_btn = document.createElement("button");
                remove_btn.setAttribute("id", "removeBtn");
                remove_btn.classList.add("remButton");
                remove_btn.innerText = 'REMOVE ALL';
                btn_div.appendChild(remove_btn);
                remove_btn.addEventListener("click", function (event) {
                    var del_compare_div = document.getElementById("imageDiv");
                    while (del_compare_div.firstChild) {
                        var chk = document.getElementById("chk" + del_compare_div.firstChild.id);
                        chk.checked = false;
                        del_compare_div.removeChild(del_compare_div.firstChild);
                    }
                    var del_btn_div = document.getElementById("compareDiv");
                    del_btn_div.remove(del_btn_div);
                    del_compare_div.remove(del_compare_div);

                });
                let compare_btn = document.createElement("button");
                compare_btn.setAttribute("id", "compareBtn");
                compare_btn.classList.add("cmpButton")
                var num_of_child = document.getElementById("imageDiv").childElementCount;
                compare_btn.innerText = 'COMPARE' + image_div.childElementCount;
                btn_div.appendChild(compare_btn);
            }
        }
    })

    var label2 = document.createElement('label')
    label2.htmlFor = "id";
    label2.appendChild(document.createTextNode('Add to Compare'));

    prod_add2.appendChild(chk2);
    prod_add2.appendChild(label2);
    product_div.appendChild(prod_add2);

    document.body.appendChild(product_div);

}
