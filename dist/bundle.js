/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Header */\r\n.header {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 56px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    align-content: center;\r\n    background: #3F72E9;\r\n}\r\n\r\n/* flipkart logo */\r\n.vector {\r\n    width: 88.8px;\r\n    height: auto;\r\n}\r\n\r\n/* search bar */\r\n.srchRect {\r\n    width: 507px;\r\n    height: 40px;\r\n    margin-left: 16px;\r\n    margin-right: 16px;\r\n    text-indent: 8px;\r\n    border: none;\r\n    color: rgba(0, 0, 0, 0.5);\r\n    background: #FFFFFF;\r\n}\r\n\r\n/* become a seller option  */\r\n.seller {\r\n    margin-right: 24px;\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    font-size: 16px;\r\n    line-height: 20px;\r\n    color: #FFFFFF;\r\n}\r\n\r\n/* view cart on header  */\r\n.cart {\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    font-size: 16px;\r\n    line-height: 20px;\r\n    color: #FFFFFF;\r\n}\r\n\r\n.body {\r\n    position: relative;\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    background: #FFFFFF;\r\n    margin: 0px;\r\n}\r\n\r\n/* List Item */\r\n.listItem {\r\n    box-sizing: border-box;\r\n    position: relative;\r\n    border-bottom: 1px solid #F0F0F1;\r\n    padding: 24px 0 30px 24px;\r\n}\r\n\r\n/* div for image and product info used for alignment*/\r\n.imageProdInfo {\r\n    display: flex;\r\n    flex-direction: row;\r\n    position: relative;\r\n    /* margin-left: 32px;\r\n    margin-top: 24px; */\r\n}\r\n\r\n/* sub div for list item to maintain display  */\r\n.subProd {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n}\r\n\r\n/* iphone image  */\r\n.iphoneImg {\r\n    position: relative;\r\n    margin-left: 32px;\r\n    margin-right: 24px;\r\n}\r\n\r\n/* Product Info */\r\n.prodInfo {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    padding-left: 25px;\r\n    /* gap: 8px; */\r\n    /* margin-top: 24px; */\r\n}\r\n\r\n/* Item Name */\r\n.itmName {\r\n    height: 23px;\r\n    font-weight: 700;\r\n    font-size: 20px;\r\n    line-height: 23px;\r\n    text-decoration: none;\r\n    color: #000000;\r\n    flex: none;\r\n    order: 0;\r\n    flex-grow: 0;\r\n}\r\n\r\n.itmName:hover {\r\n    color: #2874f0;\r\n}\r\n\r\n/* Rating Pill */\r\n.rating {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    padding: 2px 2px 2px 4px;\r\n    background: #508C47;\r\n    border-radius: 4px;\r\n    flex: none;\r\n    order: 0;\r\n    flex-grow: 0;\r\n}\r\n\r\n/* rating number  */\r\n.ratingNo {\r\n    font-weight: 700;\r\n    font-size: 12px;\r\n    line-height: 100%;\r\n    color: #FFFFFF;\r\n    flex: none;\r\n    order: 0;\r\n    flex-grow: 0;\r\n}\r\n\r\n/* Star icon */\r\n.starIcon {\r\n    width: 14px;\r\n    height: 14px;\r\n    margin-bottom: 2px;\r\n}\r\n\r\n/* Reviews & Ratings */\r\n.reviews {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    padding: 0px;\r\n    gap: 4px;\r\n    height: 18px;\r\n    margin-top: 17px;\r\n}\r\n\r\n/* Rating count */\r\n.ratingCount {\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n    line-height: 16px;\r\n    color: #000000;\r\n    flex: none;\r\n    order: 1;\r\n    flex-grow: 0;\r\n}\r\n\r\n/* product features  */\r\n.features {\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n    line-height: 16px;\r\n    color: #000000;\r\n    padding-inline-start: 16px;\r\n    flex: none;\r\n    order: 2;\r\n    flex-grow: 0;\r\n}\r\n\r\n/* Pricing Info */\r\n.pricingInfo {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-right: 200px;\r\n    /* margin-top: 46px;  */\r\n}\r\n\r\n/* original price  */\r\n.mrp {\r\n    line-height: 14px;\r\n    color: grey;\r\n}\r\n\r\n/* Sale Price */\r\n.salePrice {\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    line-height: 28px;\r\n    color: #000000;\r\n    flex: none;\r\n    order: 0;\r\n    flex-grow: 0;\r\n}\r\n\r\n/* Delivery Info */\r\n.delInfo {\r\n    font-weight: 400;\r\n    font-size: 12px;\r\n    line-height: 14px;\r\n    color: #000000;\r\n    flex: none;\r\n    order: 2;\r\n    flex-grow: 0;\r\n}\r\n\r\n/* Exchange Info */\r\n.excgInfo {\r\n    font-weight: 400;\r\n    font-size: 12px;\r\n    line-height: 14px;\r\n    color: #000000;\r\n    flex: none;\r\n    order: 3;\r\n    flex-grow: 0;\r\n}\r\n\r\n/* Offers Info */\r\n.offers {\r\n    font-weight: 600;\r\n    font-size: 12px;\r\n    line-height: 14px;\r\n    color: #508C47;\r\n    flex: none;\r\n    order: 4;\r\n    flex-grow: 0;\r\n}\r\n\r\n/* Discount */\r\n.discount {\r\n    font-size: 12px;\r\n    line-height: 14px;\r\n    color: #508C47;\r\n    flex: none;\r\n    order: 1;\r\n    flex-grow: 0;\r\n}\r\n\r\n/* add to cart and compare checkboxes */\r\n.checkbox {\r\n    margin-top: 5px;\r\n    margin-left: 32px;\r\n    margin-right: 8px;\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 12px;\r\n    width: max-content;\r\n}\r\n\r\n/* Main footer div  */\r\n.mainFtr {\r\n    background: #1A2335;\r\n}\r\n\r\n/* Footer */\r\n.footer {\r\n    font-family: Roboto, Arial, sans-serif;\r\n    font-style: normal;\r\n    margin-left: 65px;\r\n    margin-right: 35px;\r\n    padding-top: 40px;\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: row;\r\n    background: #1A2335;\r\n}\r\n\r\n/* footer headers  */\r\n.ftrTitle {\r\n    letter-spacing: 0;\r\n    line-height: 1.4;\r\n    color: #878787;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n    margin-bottom: 9px;\r\n    flex: none;\r\n    order: 0;\r\n    flex-grow: 0;\r\n}\r\n\r\n/* footer sections  */\r\n.sec1 {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: left;\r\n    position: relative;\r\n    width: 100%;\r\n}\r\n\r\n/* last two footer sections  */\r\n.sec2 {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: left;\r\n    position: relative;\r\n    width: 100%;\r\n    line-height: 1.4;\r\n    font-size: 12px;\r\n    letter-spacing: 0;\r\n    color: #fff;\r\n    padding: 0 25px;\r\n    height: 100%;\r\n}\r\n\r\n/* sec1 item layout */\r\n.layout {\r\n    font-weight: 500;\r\n    font-size: 12px;\r\n    line-height: 2;\r\n    color: #FFFFFF;\r\n    flex: none;\r\n    order: 0;\r\n    flex-grow: 0;\r\n}\r\n\r\n/* sec2 item layout  */\r\n.layoutAddr {\r\n    text-align: left;\r\n    letter-spacing: 0;\r\n    color: #fff;\r\n    font-size: 12px;\r\n}\r\n\r\n.setColor {\r\n    color: #3D72E8 !important;\r\n}\r\n\r\n/* bottom footer columns  */\r\n.footerBtm {\r\n    position: relative;\r\n    height: max-content;\r\n    left: 0px;\r\n    display: flex;\r\n    background: #1A2335;\r\n    border-top: 1px solid #454d5e;\r\n    padding: 25px;\r\n    margin-top: 40px;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n\r\n}\r\n\r\n/* bottom footer items */\r\n.ftr_itm {\r\n    color: #878787;\r\n    height: 14px;\r\n    font-weight: 500;\r\n    font-size: 12px;\r\n    line-height: 14px;\r\n    flex: none;\r\n    order: 0;\r\n    flex-grow: 0;\r\n}\r\n\r\n/* bottom footer item layout */\r\n.layoutBtm {\r\n    height: max-content;\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n    line-height: 14px;\r\n    color: #FFFFFF;\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: 8px;\r\n}\r\n\r\n/* Compare div  */\r\n.compareDiv {\r\n    right: 8px;\r\n    bottom: 8px;\r\n    position: fixed;\r\n    color: #3F72E9;\r\n    padding-bottom: 20px;\r\n    margin: 5px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-radius: 2px;\r\n    background-color: #fff;\r\n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .2);\r\n    border: 1px solid #f0f0f0;\r\n}\r\n\r\n.imageDiv {\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding-bottom: 35px;\r\n}\r\n\r\n.imageComboDiv {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.cancel_img {\r\n    font-size: 222px;\r\n    color: #d00;\r\n    font-weight: bold;\r\n    font-family: helvetica, arial;\r\n    line-height: 1;\r\n}\r\n\r\n.cancelImgDiv {\r\n    margin-top: 8px;\r\n}\r\n\r\n.close {\r\n    cursor: pointer;\r\n    margin-top: 8px;\r\n    margin-left: 107px;\r\n    width: 30px;\r\n    height: 20px;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    color: #878787;\r\n    background-color: #fff;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    padding: 0;\r\n}\r\n\r\n.close:hover {\r\n    opacity: 1;\r\n    color: #000000;\r\n}\r\n\r\n.close:before,\r\n.close:after {\r\n    position: relative;\r\n    left: 15px;\r\n    content: ' ';\r\n    height: 33px;\r\n    width: 2px;\r\n    background-color: #333;\r\n}\r\n\r\n.close:before {\r\n    transform: rotate(45deg);\r\n}\r\n\r\n.close:after {\r\n    transform: rotate(-45deg);\r\n}\r\n\r\n.childDiv {\r\n    display: flex;\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0 24px;\r\n    flex-direction: column;\r\n}\r\n\r\n.btnDiv {\r\n    display: flex;\r\n    flex-direction: row;\r\n    font-family: Roboto,Arial,sans-serif;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    right: auto;\r\n    position: relative;\r\n    justify-content: right;\r\n}\r\n\r\n.cmpButton {\r\n    background-color: #2874f0;\r\n    transition: background-color .2s ease-in;\r\n    border-radius: 2px;\r\n    color: #f0f0f0;\r\n    border: none;\r\n    float: right;\r\n    position: absolute;\r\n    display: block;\r\n    margin-top: 12px;\r\n    bottom: 8px;\r\n    right: 8px;\r\n    cursor: pointer;\r\n    height: 40px;\r\n    width: 144px;\r\n    text-decoration: none;\r\n}\r\n\r\n/* .compareDiv > div {\r\n    display: none;\r\n    padding: 0;\r\n    margin: 0;\r\n} */\r\n\r\n/* #compareDiv > div:target {\r\n    display: block;\r\n}\r\n\r\n#compareDiv > div[compareBtn]:target {\r\n    content: attr(id);\r\n} */\r\n\r\n.cmpButton:hover .compareDiv {\r\n    display: block;\r\n}\r\n\r\n.cmpText {\r\n    color: #f0f0f0;\r\n    padding-left: 24px;\r\n    line-height: 2.5;\r\n}\r\n\r\n.numOfProducts {\r\n    margin-left: 12px;\r\n    background-color: rgba(0, 0, 0, .2);\r\n    padding: 2px;\r\n    display: inline-block;\r\n    width: 20px;\r\n    text-align: center;\r\n}\r\n\r\n.remButton {\r\n    float: right;\r\n    color: #212121;\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n    line-height: 1;\r\n    margin-right: 160px ;\r\n}\r\n\r\n.btmName {\r\n    font-size: 12px;\r\n    margin-top: 15px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    text-align: center;\r\n    color: #212121;\r\n    width: 100px;\r\n}\r\n\r\n.btmImg {\r\n    height: 125px;\r\n    opacity: 1;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Header */\r\n.header {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 56px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    align-content: center;\r\n    background: #3F72E9;\r\n}\r\n\r\n/* flipkart logo */\r\n.vector {\r\n    width: 88.8px;\r\n    height: auto;\r\n}\r\n\r\n/* search bar */\r\n.srchRect {\r\n    width: 507px;\r\n    height: 40px;\r\n    margin-left: 16px;\r\n    margin-right: 16px;\r\n    text-indent: 8px;\r\n    border: none;\r\n    color: rgba(0, 0, 0, 0.5);\r\n    background: #FFFFFF;\r\n}\r\n\r\n/* become a seller option  */\r\n.seller {\r\n    margin-right: 24px;\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    font-size: 16px;\r\n    line-height: 20px;\r\n    color: #FFFFFF;\r\n}\r\n\r\n/* view cart on header  */\r\n.cart {\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    font-size: 16px;\r\n    line-height: 20px;\r\n    color: #FFFFFF;\r\n}\r\n\r\n.body {\r\n    position: relative;\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    background: #FFFFFF;\r\n    margin: 0px;\r\n}\r\n\r\n/* List Item */\r\n.listItem {\r\n    box-sizing: border-box;\r\n    position: relative;\r\n    border-bottom: 1px solid #F0F0F1;\r\n    padding: 24px 0 30px 24px;\r\n}\r\n\r\n/* div for image and product info used for alignment*/\r\n.imageProdInfo {\r\n    display: flex;\r\n    flex-direction: row;\r\n    position: relative;\r\n    /* margin-left: 32px;\r\n    margin-top: 24px; */\r\n}\r\n\r\n/* sub div for list item to maintain display  */\r\n.subProd {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n}\r\n\r\n/* iphone image  */\r\n.iphoneImg {\r\n    position: relative;\r\n    margin-left: 32px;\r\n    margin-right: 24px;\r\n}\r\n\r\n/* Product Info */\r\n.prodInfo {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    padding-left: 25px;\r\n    /* gap: 8px; */\r\n    /* margin-top: 24px; */\r\n}\r\n\r\n/* Item Name */\r\n.itmName {\r\n    height: 23px;\r\n    font-weight: 700;\r\n    font-size: 20px;\r\n    line-height: 23px;\r\n    text-decoration: none;\r\n    color: #000000;\r\n    flex: none;\r\n    order: 0;\r\n    flex-grow: 0;\r\n}\r\n\r\n.itmName:hover {\r\n    color: #2874f0;\r\n}\r\n\r\n/* Rating Pill */\r\n.rating {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    padding: 2px 2px 2px 4px;\r\n    background: #508C47;\r\n    border-radius: 4px;\r\n    flex: none;\r\n    order: 0;\r\n    flex-grow: 0;\r\n}\r\n\r\n/* rating number  */\r\n.ratingNo {\r\n    font-weight: 700;\r\n    font-size: 12px;\r\n    line-height: 100%;\r\n    color: #FFFFFF;\r\n    flex: none;\r\n    order: 0;\r\n    flex-grow: 0;\r\n}\r\n\r\n/* Star icon */\r\n.starIcon {\r\n    width: 14px;\r\n    height: 14px;\r\n    margin-bottom: 2px;\r\n}\r\n\r\n/* Reviews & Ratings */\r\n.reviews {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    padding: 0px;\r\n    gap: 4px;\r\n    height: 18px;\r\n    margin-top: 17px;\r\n}\r\n\r\n/* Rating count */\r\n.ratingCount {\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n    line-height: 16px;\r\n    color: #000000;\r\n    flex: none;\r\n    order: 1;\r\n    flex-grow: 0;\r\n}\r\n\r\n/* product features  */\r\n.features {\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n    line-height: 16px;\r\n    color: #000000;\r\n    padding-inline-start: 16px;\r\n    flex: none;\r\n    order: 2;\r\n    flex-grow: 0;\r\n}\r\n\r\n/* Pricing Info */\r\n.pricingInfo {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-right: 200px;\r\n    /* margin-top: 46px;  */\r\n}\r\n\r\n/* original price  */\r\n.mrp {\r\n    line-height: 14px;\r\n    color: grey;\r\n}\r\n\r\n/* Sale Price */\r\n.salePrice {\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    line-height: 28px;\r\n    color: #000000;\r\n    flex: none;\r\n    order: 0;\r\n    flex-grow: 0;\r\n}\r\n\r\n/* Delivery Info */\r\n.delInfo {\r\n    font-weight: 400;\r\n    font-size: 12px;\r\n    line-height: 14px;\r\n    color: #000000;\r\n    flex: none;\r\n    order: 2;\r\n    flex-grow: 0;\r\n}\r\n\r\n/* Exchange Info */\r\n.excgInfo {\r\n    font-weight: 400;\r\n    font-size: 12px;\r\n    line-height: 14px;\r\n    color: #000000;\r\n    flex: none;\r\n    order: 3;\r\n    flex-grow: 0;\r\n}\r\n\r\n/* Offers Info */\r\n.offers {\r\n    font-weight: 600;\r\n    font-size: 12px;\r\n    line-height: 14px;\r\n    color: #508C47;\r\n    flex: none;\r\n    order: 4;\r\n    flex-grow: 0;\r\n}\r\n\r\n/* Discount */\r\n.discount {\r\n    font-size: 12px;\r\n    line-height: 14px;\r\n    color: #508C47;\r\n    flex: none;\r\n    order: 1;\r\n    flex-grow: 0;\r\n}\r\n\r\n/* add to cart and compare checkboxes */\r\n.checkbox {\r\n    margin-top: 5px;\r\n    margin-left: 32px;\r\n    margin-right: 8px;\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 12px;\r\n    width: max-content;\r\n}\r\n\r\n/* Main footer div  */\r\n.mainFtr {\r\n    background: #1A2335;\r\n}\r\n\r\n/* Footer */\r\n.footer {\r\n    font-family: Roboto, Arial, sans-serif;\r\n    font-style: normal;\r\n    margin-left: 65px;\r\n    margin-right: 35px;\r\n    padding-top: 40px;\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: row;\r\n    background: #1A2335;\r\n}\r\n\r\n/* footer headers  */\r\n.ftrTitle {\r\n    letter-spacing: 0;\r\n    line-height: 1.4;\r\n    color: #878787;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n    margin-bottom: 9px;\r\n    flex: none;\r\n    order: 0;\r\n    flex-grow: 0;\r\n}\r\n\r\n/* footer sections  */\r\n.sec1 {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: left;\r\n    position: relative;\r\n    width: 100%;\r\n}\r\n\r\n/* last two footer sections  */\r\n.sec2 {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: left;\r\n    position: relative;\r\n    width: 100%;\r\n    line-height: 1.4;\r\n    font-size: 12px;\r\n    letter-spacing: 0;\r\n    color: #fff;\r\n    padding: 0 25px;\r\n    height: 100%;\r\n}\r\n\r\n/* sec1 item layout */\r\n.layout {\r\n    font-weight: 500;\r\n    font-size: 12px;\r\n    line-height: 2;\r\n    color: #FFFFFF;\r\n    flex: none;\r\n    order: 0;\r\n    flex-grow: 0;\r\n}\r\n\r\n/* sec2 item layout  */\r\n.layoutAddr {\r\n    text-align: left;\r\n    letter-spacing: 0;\r\n    color: #fff;\r\n    font-size: 12px;\r\n}\r\n\r\n.setColor {\r\n    color: #3D72E8 !important;\r\n}\r\n\r\n/* bottom footer columns  */\r\n.footerBtm {\r\n    position: relative;\r\n    height: max-content;\r\n    left: 0px;\r\n    display: flex;\r\n    background: #1A2335;\r\n    border-top: 1px solid #454d5e;\r\n    padding: 25px;\r\n    margin-top: 40px;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n\r\n}\r\n\r\n/* bottom footer items */\r\n.ftr_itm {\r\n    color: #878787;\r\n    height: 14px;\r\n    font-weight: 500;\r\n    font-size: 12px;\r\n    line-height: 14px;\r\n    flex: none;\r\n    order: 0;\r\n    flex-grow: 0;\r\n}\r\n\r\n/* bottom footer item layout */\r\n.layoutBtm {\r\n    height: max-content;\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n    line-height: 14px;\r\n    color: #FFFFFF;\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: 8px;\r\n}\r\n\r\n/* Compare div  */\r\n.compareDiv {\r\n    right: 8px;\r\n    bottom: 8px;\r\n    position: fixed;\r\n    color: #3F72E9;\r\n    padding-bottom: 20px;\r\n    margin: 5px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-radius: 2px;\r\n    background-color: #fff;\r\n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .2);\r\n    border: 1px solid #f0f0f0;\r\n}\r\n\r\n.imageDiv {\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding-bottom: 35px;\r\n}\r\n\r\n.imageComboDiv {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.cancel_img {\r\n    font-size: 222px;\r\n    color: #d00;\r\n    font-weight: bold;\r\n    font-family: helvetica, arial;\r\n    line-height: 1;\r\n}\r\n\r\n.cancelImgDiv {\r\n    margin-top: 8px;\r\n}\r\n\r\n.close {\r\n    cursor: pointer;\r\n    margin-top: 8px;\r\n    margin-left: 107px;\r\n    width: 30px;\r\n    height: 20px;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    color: #878787;\r\n    background-color: #fff;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    padding: 0;\r\n}\r\n\r\n.close:hover {\r\n    opacity: 1;\r\n    color: #000000;\r\n}\r\n\r\n.close:before,\r\n.close:after {\r\n    position: relative;\r\n    left: 15px;\r\n    content: ' ';\r\n    height: 33px;\r\n    width: 2px;\r\n    background-color: #333;\r\n}\r\n\r\n.close:before {\r\n    transform: rotate(45deg);\r\n}\r\n\r\n.close:after {\r\n    transform: rotate(-45deg);\r\n}\r\n\r\n.childDiv {\r\n    display: flex;\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0 24px;\r\n    flex-direction: column;\r\n}\r\n\r\n.btnDiv {\r\n    display: flex;\r\n    flex-direction: row;\r\n    font-family: Roboto,Arial,sans-serif;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    right: auto;\r\n    position: relative;\r\n    justify-content: right;\r\n}\r\n\r\n.cmpButton {\r\n    background-color: #2874f0;\r\n    transition: background-color .2s ease-in;\r\n    border-radius: 2px;\r\n    color: #f0f0f0;\r\n    border: none;\r\n    float: right;\r\n    position: absolute;\r\n    display: block;\r\n    margin-top: 12px;\r\n    bottom: 8px;\r\n    right: 8px;\r\n    cursor: pointer;\r\n    height: 40px;\r\n    width: 144px;\r\n    text-decoration: none;\r\n}\r\n\r\n/* .compareDiv > div {\r\n    display: none;\r\n    padding: 0;\r\n    margin: 0;\r\n} */\r\n\r\n/* #compareDiv > div:target {\r\n    display: block;\r\n}\r\n\r\n#compareDiv > div[compareBtn]:target {\r\n    content: attr(id);\r\n} */\r\n\r\n.cmpButton:hover .compareDiv {\r\n    display: block;\r\n}\r\n\r\n.cmpText {\r\n    color: #f0f0f0;\r\n    padding-left: 24px;\r\n    line-height: 2.5;\r\n}\r\n\r\n.numOfProducts {\r\n    margin-left: 12px;\r\n    background-color: rgba(0, 0, 0, .2);\r\n    padding: 2px;\r\n    display: inline-block;\r\n    width: 20px;\r\n    text-align: center;\r\n}\r\n\r\n.remButton {\r\n    float: right;\r\n    color: #212121;\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n    line-height: 1;\r\n    margin-right: 160px ;\r\n}\r\n\r\n.btmName {\r\n    font-size: 12px;\r\n    margin-top: 15px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    text-align: center;\r\n    color: #212121;\r\n    width: 100px;\r\n}\r\n\r\n.btmImg {\r\n    height: 125px;\r\n    opacity: 1;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/Footer.ts":
/*!**********************************!*\
  !*** ./src/components/Footer.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFooter": () => (/* binding */ createFooter)
/* harmony export */ });
/* harmony import */ var _common_Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/Helper */ "./src/components/common/Helper.ts");

//footer div creation
function createFooter(parseStr) {
    var main_ftr = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createDivTag)("mainFtr");
    main_ftr.setAttribute("id", "mainFtr");
    //footer
    var ftr = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createDivTag)("footer");
    for (var j = 0; j < parseStr.footer.colunms.length; j++) {
        var ftr_parse = parseStr.footer.colunms[j];
        var ftr_sec = document.createElement("div");
        if (ftr_parse.dataType == "ARRAY") {
            ftr_sec.classList.add("sec1");
            var ftr_title = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createDivTag)("ftrTitle");
            ftr_title.innerText = "".concat(ftr_parse.title);
            ftr_sec.appendChild(ftr_title);
            for (var k = 0; k < ftr_parse.data.length; k++) {
                var ftr_data = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createDivTag)("layout");
                ftr_data.innerText = "".concat(ftr_parse.data[k]);
                ftr_sec.appendChild(ftr_data);
            }
        }
        else {
            ftr_sec.classList.remove("sec1");
            ftr_sec.classList.add("sec2");
            var ftr_title = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createDivTag)("ftrTitle");
            ftr_title.innerText = "".concat(ftr_parse.title);
            if (ftr_title.innerText == "Mail Us:")
                ftr_sec.style.borderLeft = '1px solid #454d5e';
            ftr_sec.appendChild(ftr_title);
            var ftr_data = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createDivTag)("layoutAddr");
            //to change color of telephone number value
            var split_word = ftr_parse.data.search("Telephone:");
            if (split_word > 0) {
                ftr_data.innerHTML = ftr_parse.data.substring(0, split_word + 10) + '<span class="setColor">' + ftr_parse.data.substring(split_word + 10) + '</span>';
            }
            else {
                ftr_data.innerText = "".concat(ftr_parse.data);
            }
            ftr_sec.appendChild(ftr_data);
        }
        ftr.appendChild(ftr_sec);
        main_ftr.appendChild(ftr);
        document.body.appendChild(main_ftr);
    }
    //footer bottom
    var ftr_btm = document.createElement("div");
    ftr_btm.classList.add("footerBtm");
    for (var l = 0; l < parseStr.footer.bottomColunms.length; l++) {
        var ftr_itm = document.createElement("div");
        ftr_itm.classList.add("layoutBtm");
        //add image
        if (parseStr.footer.bottomColunms[l].img) {
            var img = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createImageTag)("".concat(parseStr.footer.bottomColunms[l].img));
            ftr_itm.appendChild(img);
        }
        var btm_txt = document.createElement("span");
        btm_txt.classList.add("layoutBtm");
        if (parseStr.footer.bottomColunms[l].text)
            btm_txt.innerText = "".concat(parseStr.footer.bottomColunms[l].text);
        ftr_itm.appendChild(btm_txt);
        ftr_btm.appendChild(ftr_itm);
        main_ftr.appendChild(ftr_btm);
    }
}


/***/ }),

/***/ "./src/components/Header.ts":
/*!**********************************!*\
  !*** ./src/components/Header.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeader": () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _common_Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/Helper */ "./src/components/common/Helper.ts");

function createHeader() {
    var hdrBar = document.createElement("nav");
    hdrBar.id = "header";
    hdrBar.classList.add("header");
    //flipkart logo div
    var logoAnchorDiv = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createAnchorTag)("https://www.flipkart.com");
    var logo = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createImageTag)("../src/images/Logo.png", "vector", "logo", "logo");
    logoAnchorDiv.appendChild(logo);
    hdrBar.appendChild(logoAnchorDiv);
    //search bar
    var searchBarDiv = document.createElement("input");
    searchBarDiv.id = "srhTxt";
    searchBarDiv.type = "text";
    searchBarDiv.placeholder = "Search";
    searchBarDiv.classList.add("srchRect");
    hdrBar.appendChild(searchBarDiv);
    //become a seller option
    var sellerAnchorDiv = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createAnchorTag)("https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect", "text-decoration:none");
    var sellerDiv = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createDivTag)("seller");
    sellerDiv.innerText = "Become a seller";
    sellerAnchorDiv.appendChild(sellerDiv);
    hdrBar.appendChild(sellerAnchorDiv);
    //view cart
    var cartAnchorDiv = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createAnchorTag)("https://www.flipkart.com/viewcart?exploreMode=true&preference=FLIPKART", "text-decoration:none");
    var cartDiv = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createDivTag)("cart");
    cartDiv.innerText = "Cart";
    cartAnchorDiv.appendChild(cartDiv);
    hdrBar.appendChild(cartAnchorDiv);
    document.body.appendChild(hdrBar);
}


/***/ }),

/***/ "./src/components/Products.ts":
/*!************************************!*\
  !*** ./src/components/Products.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProducts": () => (/* binding */ createProducts)
/* harmony export */ });
/* harmony import */ var _common_Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/Helper */ "./src/components/common/Helper.ts");

function createProducts(productData) {
    var parsed_product_json = productData;
    for (var i = 0; i < parsed_product_json.productCard.length; i++) {
        createSingleProduct(parsed_product_json.productCard[i], i);
    }
}
function createSingleProduct(parsed_product_json, idx) {
    var product_parse = parsed_product_json;
    var product_div = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createDivTag)("listItem");
    //div for image and product info
    var img_prodinfo_div = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createDivTag)("imageProdInfo");
    //image
    var sub_prod_div = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createDivTag)("subProd");
    product_div.appendChild(sub_prod_div);
    var img_link = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createAnchorTag)("".concat(product_parse.productPageLink.url));
    var prod_img = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createImageTag)("".concat(product_parse.image.url), "iphoneImg", "".concat(product_parse.image.alt));
    prod_img.width = "".concat(product_parse.image.width);
    prod_img.height = "".concat(product_parse.image.height);
    prod_img.setAttribute('href', "".concat(product_parse.url));
    img_link.appendChild(prod_img);
    ////// sub_prod_div.appendChild(img_link);
    img_prodinfo_div.appendChild(img_link);
    //product info 
    var prod_info = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createDivTag)("prodInfo");
    //product title
    var prod_title = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createAnchorTag)("".concat(product_parse.productPageLink.url));
    prod_title.classList.add("itmName");
    prod_title.innerText = "".concat(product_parse.title);
    prod_info.appendChild(prod_title);
    //reviews
    var prod_rev = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createDivTag)("reviews");
    var prod_rating = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createDivTag)("rating");
    var prod_rat_span = document.createElement("span");
    prod_rat_span.classList.add("ratingNo");
    prod_rat_span.innerText = "".concat(product_parse.ratings.overallRating);
    //rating image
    var rat_img = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createImageTag)("../src/images/Star icon.png", "starIcon", "starIcon");
    var prod_rat_cnt = document.createElement("span");
    prod_rat_cnt.classList.add("ratingCount");
    var totalRatingsNum = product_parse.ratings.totalRatingsNum.toLocaleString('en-IN');
    var totalReviewsNum = product_parse.ratings.totalReviewsNum.toLocaleString('en-US');
    prod_rat_cnt.innerText = "".concat(totalRatingsNum, " Ratings & ").concat(totalReviewsNum, " Reviews");
    prod_rating.appendChild(prod_rat_span);
    prod_rating.appendChild(rat_img);
    prod_rev.appendChild(prod_rating);
    prod_rev.appendChild(prod_rat_cnt);
    prod_info.appendChild(prod_rev);
    //features
    var prod_feat = document.createElement("ul");
    prod_feat.classList.add("features");
    for (var j = 0; j < product_parse.featuresList.length; j++) {
        var prod_feat_li = document.createElement("li");
        prod_feat_li.innerText = "".concat(product_parse.featuresList[j]);
        prod_feat.appendChild(prod_feat_li);
    }
    prod_info.appendChild(prod_feat);
    ////// sub_prod_div.appendChild(prod_info);
    img_prodinfo_div.appendChild(prod_info);
    sub_prod_div.appendChild(img_prodinfo_div);
    //pricing info
    var prc_info = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createDivTag)("pricingInfo");
    var prc_sp = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createDivTag)("salePrice");
    var salePrice = product_parse.price.finalPrice.toLocaleString('en-US');
    prc_sp.innerText = "\u20B9 ".concat(salePrice);
    prc_info.appendChild(prc_sp);
    var mrp = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createDivTag)("mrp");
    var mrpText = document.createElement("strike");
    var mrp_format = product_parse.price.mrp.toLocaleString('en-US');
    mrpText.innerText = "\u20B9 ".concat(mrp_format);
    var discount = document.createElement("span");
    discount.classList.add("discount");
    discount.innerText = "\u00A0 ".concat(product_parse.price.discount.data, "% off");
    mrp.appendChild(mrpText);
    mrp.appendChild(discount);
    prc_info.appendChild(mrp);
    //delivery info
    var prod_del = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createDivTag)("delInfo");
    if (product_parse.freeDelivery == true)
        prod_del.innerText = "free delivery";
    prc_info.appendChild(prod_del);
    sub_prod_div.appendChild(prc_info);
    ///// product_div.appendChild(prc_info);
    //exchg info
    var prod_ex = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createDivTag)("excgInfo");
    var exchg_offer = product_parse.exchangeOfferDiscount.data.toLocaleString('en-US');
    prod_ex.innerHTML = "Upto <b>\u20B9".concat(exchg_offer, "</b> off on Exchange");
    prc_info.appendChild(prod_ex);
    //bank offers
    var prod_offers = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createDivTag)("offers");
    prod_offers.innerText = "".concat(product_parse.bankOffersLink.buttonText);
    prc_info.appendChild(prod_offers);
    var add_div = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createDivTag)("addDiv");
    //add to cart checkbox
    var prod_add = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createDivTag)("checkbox");
    var chk1 = document.createElement("input");
    chk1.type = "checkbox";
    chk1.name = "checkbox";
    prod_add.appendChild(chk1);
    var label = document.createElement('label');
    label.htmlFor = "id";
    label.appendChild(document.createTextNode('Add to Cart'));
    // persisting add to cart in local storage
    chk1.addEventListener("change", function (event) {
        if (this.checked) {
            localStorage.setItem('cartData', JSON.stringify(product_parse)); // store IDs of item
        }
    });
    prod_add.appendChild(chk1);
    prod_add.appendChild(label);
    // product_div.appendChild(prod_add);
    add_div.appendChild(prod_add);
    // add to compare checkbox
    var prod_add2 = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createDivTag)("checkbox");
    var chk2 = document.createElement("input");
    chk2.type = "checkbox";
    chk2.name = "checkbox";
    prod_add2.appendChild(chk2);
    chk2.setAttribute("id", "chkprod" + product_parse.title + idx);
    //compare functionality
    chk2.addEventListener("change", function (event) {
        if (this.checked) {
            var compare_div = document.getElementById("compareDiv");
            var image_div = document.getElementById("imageDiv");
            //if div is not yet created
            if (compare_div === null) {
                compare_div = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createDivTag)("compareDiv");
                compare_div.setAttribute("id", "compareDiv");
                document.body.appendChild(compare_div);
                image_div = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createDivTag)("imageDiv");
                image_div.setAttribute("id", "imageDiv");
                compare_div.appendChild(image_div);
            }
            //add image
            var child_div = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createDivTag)("childDiv");
            image_div.appendChild(child_div);
            child_div.setAttribute("id", "prod" + product_parse.title + idx);
            document.body.appendChild(compare_div);
            var img_combo_div = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createDivTag)("imageComboDiv");
            child_div.appendChild(img_combo_div);
            var cancel_img_div = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createDivTag)("cancelImgDiv");
            var cancel_img = document.createElement("span");
            cancel_img.classList.add("close");
            cancel_img.innerText = "✕";
            // cancel_img.src = '&times';
            cancel_img.addEventListener("click", function (event) {
                var del_elem = document.getElementById("prod" + product_parse.title + idx);
                del_elem.remove();
                var checked_elem = document.getElementById("chkprod" + product_parse.title + idx);
                checked_elem.checked = false;
                if (image_div.childElementCount == 0) {
                    var remove_button_div = document.getElementById("compareDiv");
                    remove_button_div.remove();
                }
                // compare_btn.innerText = 'COMPARE';
                else if (image_div.childElementCount == 1) { //hide remove all button if 1 product in compare div
                    var remove_btn = document.getElementById("removeBtn");
                    remove_btn.hidden = true;
                }
                // displaying number of products with compare button text
                var num_of_products = document.getElementById("numOfProducts");
                if (num_of_products)
                    num_of_products.innerText = image_div.childElementCount;
            });
            cancel_img_div.appendChild(cancel_img);
            img_combo_div.appendChild(cancel_img_div);
            var btmImageDiv = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createDivTag)("btmImageDiv");
            img_combo_div.appendChild(btmImageDiv);
            var prod_img_1 = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createImageTag)("".concat(product_parse.image.url), "btmImg", "".concat(product_parse.image.alt));
            // prod_img.width = `${product_parse.image.width}`;
            // prod_img.height = `${product_parse.image.height}`;
            btmImageDiv.appendChild(prod_img_1);
            //add title
            var prod_title_1 = (0,_common_Helper__WEBPACK_IMPORTED_MODULE_0__.createDivTag)("btmName");
            prod_title_1.innerText = "".concat(product_parse.title);
            child_div.appendChild(prod_title_1);
        }
        // remove product from compare div if Add to compare checkbox is unchecked
        else {
            var del_compare_div = document.getElementById("prod" + product_parse.title + idx);
            del_compare_div.remove();
            var image_div = document.getElementById("imageDiv");
            // handling the visibility of REMOVE ALL button
            if (image_div.childElementCount == 0) {
                var remove_button_div = document.getElementById("compareDiv");
                remove_button_div.remove();
            }
            else if (image_div.childElementCount == 1) {
                var remove_btn = document.getElementById("removeBtn");
                remove_btn.hidden = true;
            }
        }
        //adding remove and compare btn
        var btn_div = document.getElementById("removeBtn");
        var num_of_products = document.getElementById("numOfProducts");
        if (num_of_products) {
            var image_div = document.getElementById("imageDiv");
            num_of_products.innerText = image_div.childElementCount;
        }
        if (document.getElementById("removeBtn") && image_div.childElementCount > 1) {
            var remove_btn = document.getElementById("removeBtn");
            remove_btn.hidden = false;
        }
        else if (document.getElementById("removeBtn") && image_div.childElementCount < 1) {
            var remove_btn = document.getElementById("removeBtn");
            remove_btn.hidden = true;
        }
        if (btn_div === null) {
            var btn_div_1 = document.createElement("div");
            btn_div_1.classList.add("btnDiv");
            btn_div_1.setAttribute("id", "buttonDiv");
            compare_div.appendChild(btn_div_1);
            //show remove all button if products are greater than 1
            var remove_btn_1 = document.createElement("button");
            remove_btn_1.setAttribute("id", "removeBtn");
            remove_btn_1.classList.add("remButton");
            remove_btn_1.innerText = 'REMOVE ALL';
            btn_div_1.appendChild(remove_btn_1);
            if (image_div.childElementCount > 1)
                remove_btn_1.hidden = false;
            else
                remove_btn_1.hidden = true;
            remove_btn_1.addEventListener("click", function (event) {
                var del_compare_div = document.getElementById("imageDiv");
                while (del_compare_div.firstChild) {
                    var chk = document.getElementById("chk" + del_compare_div.firstChild.id);
                    chk.checked = false;
                    del_compare_div.removeChild(del_compare_div.firstChild);
                }
                var del_btn_div = document.getElementById("compareDiv");
                del_btn_div.remove();
                del_compare_div.remove();
            });
            if (!document.getElementById("compareBtn")) {
                var compare_btn = document.createElement("a");
                compare_btn.href = "#compareDiv";
                compare_btn.setAttribute("id", "compareBtn");
                compare_btn.classList.add("cmpButton");
                var compare_txt = document.createElement("span");
                compare_txt.setAttribute("id", "compareTxt");
                compare_txt.classList.add("cmpText");
                compare_txt.innerText = 'COMPARE';
                compare_btn.appendChild(compare_txt);
                //span to print number of items to compare
                var num_of_products_1 = document.createElement("span");
                num_of_products_1.setAttribute("id", "numOfProducts");
                num_of_products_1.classList.add("numOfProducts");
                num_of_products_1.innerText = image_div.childElementCount;
                compare_btn.appendChild(num_of_products_1);
                compare_div.appendChild(compare_btn);
            }
        }
    });
    var label2 = document.createElement('label');
    label2.htmlFor = "id";
    label2.appendChild(document.createTextNode('Add to Compare'));
    prod_add2.appendChild(chk2);
    prod_add2.appendChild(label2);
    // product_div.appendChild(prod_add2);
    add_div.appendChild(prod_add2);
    product_div.appendChild(add_div);
    document.body.appendChild(product_div);
}


/***/ }),

/***/ "./src/components/common/Helper.ts":
/*!*****************************************!*\
  !*** ./src/components/common/Helper.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAnchorTag": () => (/* binding */ createAnchorTag),
/* harmony export */   "createDivTag": () => (/* binding */ createDivTag),
/* harmony export */   "createImageTag": () => (/* binding */ createImageTag)
/* harmony export */ });
function createDivTag(className) {
    var divTag = document.createElement("div");
    divTag.classList.add(className);
    return divTag;
}
function createAnchorTag(href, style) {
    var anchorTag = document.createElement("a");
    anchorTag.href = href;
    anchorTag.target = "_blank";
    anchorTag.style.cssText = style;
    return anchorTag;
}
function createImageTag(src, className, alt, id) {
    var imageTag = document.createElement("img");
    imageTag.setAttribute("id", id);
    imageTag.src = src;
    imageTag.alt = alt;
    imageTag.classList.add(className);
    return imageTag;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Header */ "./src/components/Header.ts");
/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Products */ "./src/components/Products.ts");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Footer */ "./src/components/Footer.ts");
/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/style.css */ "./src/style.css");
// const div = document.createElement("div");
// div.innerHTML = "Hello Prachee!";
// document.body.appendChild(div);




var fetchRes = fetch("https://sandbox.nextleap.app/products/fetch");
fetchRes.then(function (res) { return res.json(); })
    .then(function (data) {
    (0,_components_Header__WEBPACK_IMPORTED_MODULE_0__.createHeader)();
    (0,_components_Products__WEBPACK_IMPORTED_MODULE_1__.createProducts)(data);
    (0,_components_Footer__WEBPACK_IMPORTED_MODULE_2__.createFooter)(data);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLFVBQVUsS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLE1BQU0sVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGNBQWMsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sUUFBUSxNQUFNLFVBQVUs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QUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQztBQUNwRSxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQUcsSUFBRSxVQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO0tBQ3JCLElBQUksQ0FBQyxjQUFJO0lBQ04sZ0VBQVksRUFBRSxDQUFDO0lBQ2Ysb0VBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixnRUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3R5cGVzY3JpcHQtdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3R5cGVzY3JpcHQtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3R5cGVzY3JpcHQtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXRlbXBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtdGVtcGxhdGUvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC10ZW1wbGF0ZS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RzLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtdGVtcGxhdGUvLi9zcmMvY29tcG9uZW50cy9jb21tb24vSGVscGVyLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3R5cGVzY3JpcHQtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3R5cGVzY3JpcHQtdGVtcGxhdGUvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBIZWFkZXIgKi9cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA1NnB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjM0Y3MkU5O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBmbGlwa2FydCBsb2dvICovXFxyXFxuLnZlY3RvciB7XFxyXFxuICAgIHdpZHRoOiA4OC44cHg7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyogc2VhcmNoIGJhciAqL1xcclxcbi5zcmNoUmVjdCB7XFxyXFxuICAgIHdpZHRoOiA1MDdweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xcclxcbiAgICB0ZXh0LWluZGVudDogOHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxyXFxufVxcclxcblxcclxcbi8qIGJlY29tZSBhIHNlbGxlciBvcHRpb24gICovXFxyXFxuLnNlbGxlciB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjRweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB2aWV3IGNhcnQgb24gaGVhZGVyICAqL1xcclxcbi5jYXJ0IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9keSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBMaXN0IEl0ZW0gKi9cXHJcXG4ubGlzdEl0ZW0ge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRjBGMEYxO1xcclxcbiAgICBwYWRkaW5nOiAyNHB4IDAgMzBweCAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBkaXYgZm9yIGltYWdlIGFuZCBwcm9kdWN0IGluZm8gdXNlZCBmb3IgYWxpZ25tZW50Ki9cXHJcXG4uaW1hZ2VQcm9kSW5mbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgLyogbWFyZ2luLWxlZnQ6IDMycHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDI0cHg7ICovXFxyXFxufVxcclxcblxcclxcbi8qIHN1YiBkaXYgZm9yIGxpc3QgaXRlbSB0byBtYWludGFpbiBkaXNwbGF5ICAqL1xcclxcbi5zdWJQcm9kIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBpcGhvbmUgaW1hZ2UgICovXFxyXFxuLmlwaG9uZUltZyB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogUHJvZHVjdCBJbmZvICovXFxyXFxuLnByb2RJbmZvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcXHJcXG4gICAgLyogZ2FwOiA4cHg7ICovXFxyXFxuICAgIC8qIG1hcmdpbi10b3A6IDI0cHg7ICovXFxyXFxufVxcclxcblxcclxcbi8qIEl0ZW0gTmFtZSAqL1xcclxcbi5pdG1OYW1lIHtcXHJcXG4gICAgaGVpZ2h0OiAyM3B4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICBmbGV4OiBub25lO1xcclxcbiAgICBvcmRlcjogMDtcXHJcXG4gICAgZmxleC1ncm93OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRtTmFtZTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAjMjg3NGYwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBSYXRpbmcgUGlsbCAqL1xcclxcbi5yYXRpbmcge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAycHggMnB4IDJweCA0cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM1MDhDNDc7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgZmxleDogbm9uZTtcXHJcXG4gICAgb3JkZXI6IDA7XFxyXFxuICAgIGZsZXgtZ3JvdzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogcmF0aW5nIG51bWJlciAgKi9cXHJcXG4ucmF0aW5nTm8ge1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gICAgZmxleDogbm9uZTtcXHJcXG4gICAgb3JkZXI6IDA7XFxyXFxuICAgIGZsZXgtZ3JvdzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogU3RhciBpY29uICovXFxyXFxuLnN0YXJJY29uIHtcXHJcXG4gICAgd2lkdGg6IDE0cHg7XFxyXFxuICAgIGhlaWdodDogMTRweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBSZXZpZXdzICYgUmF0aW5ncyAqL1xcclxcbi5yZXZpZXdzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbiAgICBnYXA6IDRweDtcXHJcXG4gICAgaGVpZ2h0OiAxOHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBSYXRpbmcgY291bnQgKi9cXHJcXG4ucmF0aW5nQ291bnQge1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xcclxcbiAgICBjb2xvcjogIzAwMDAwMDtcXHJcXG4gICAgZmxleDogbm9uZTtcXHJcXG4gICAgb3JkZXI6IDE7XFxyXFxuICAgIGZsZXgtZ3JvdzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogcHJvZHVjdCBmZWF0dXJlcyAgKi9cXHJcXG4uZmVhdHVyZXMge1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xcclxcbiAgICBjb2xvcjogIzAwMDAwMDtcXHJcXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDE2cHg7XFxyXFxuICAgIGZsZXg6IG5vbmU7XFxyXFxuICAgIG9yZGVyOiAyO1xcclxcbiAgICBmbGV4LWdyb3c6IDA7XFxyXFxufVxcclxcblxcclxcbi8qIFByaWNpbmcgSW5mbyAqL1xcclxcbi5wcmljaW5nSW5mbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjAwcHg7XFxyXFxuICAgIC8qIG1hcmdpbi10b3A6IDQ2cHg7ICAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBvcmlnaW5hbCBwcmljZSAgKi9cXHJcXG4ubXJwIHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XFxyXFxuICAgIGNvbG9yOiBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTYWxlIFByaWNlICovXFxyXFxuLnNhbGVQcmljZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XFxyXFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICBmbGV4OiBub25lO1xcclxcbiAgICBvcmRlcjogMDtcXHJcXG4gICAgZmxleC1ncm93OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBEZWxpdmVyeSBJbmZvICovXFxyXFxuLmRlbEluZm8ge1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xcclxcbiAgICBjb2xvcjogIzAwMDAwMDtcXHJcXG4gICAgZmxleDogbm9uZTtcXHJcXG4gICAgb3JkZXI6IDI7XFxyXFxuICAgIGZsZXgtZ3JvdzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRXhjaGFuZ2UgSW5mbyAqL1xcclxcbi5leGNnSW5mbyB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XFxyXFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICBmbGV4OiBub25lO1xcclxcbiAgICBvcmRlcjogMztcXHJcXG4gICAgZmxleC1ncm93OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBPZmZlcnMgSW5mbyAqL1xcclxcbi5vZmZlcnMge1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xcclxcbiAgICBjb2xvcjogIzUwOEM0NztcXHJcXG4gICAgZmxleDogbm9uZTtcXHJcXG4gICAgb3JkZXI6IDQ7XFxyXFxuICAgIGZsZXgtZ3JvdzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRGlzY291bnQgKi9cXHJcXG4uZGlzY291bnQge1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xcclxcbiAgICBjb2xvcjogIzUwOEM0NztcXHJcXG4gICAgZmxleDogbm9uZTtcXHJcXG4gICAgb3JkZXI6IDE7XFxyXFxuICAgIGZsZXgtZ3JvdzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogYWRkIHRvIGNhcnQgYW5kIGNvbXBhcmUgY2hlY2tib3hlcyAqL1xcclxcbi5jaGVja2JveCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFpbiBmb290ZXIgZGl2ICAqL1xcclxcbi5tYWluRnRyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzFBMjMzNTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9vdGVyICovXFxyXFxuLmZvb3RlciB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA2NXB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDM1cHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMxQTIzMzU7XFxyXFxufVxcclxcblxcclxcbi8qIGZvb3RlciBoZWFkZXJzICAqL1xcclxcbi5mdHJUaXRsZSB7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS40O1xcclxcbiAgICBjb2xvcjogIzg3ODc4NztcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA5cHg7XFxyXFxuICAgIGZsZXg6IG5vbmU7XFxyXFxuICAgIG9yZGVyOiAwO1xcclxcbiAgICBmbGV4LWdyb3c6IDA7XFxyXFxufVxcclxcblxcclxcbi8qIGZvb3RlciBzZWN0aW9ucyAgKi9cXHJcXG4uc2VjMSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi8qIGxhc3QgdHdvIGZvb3RlciBzZWN0aW9ucyAgKi9cXHJcXG4uc2VjMiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAwIDI1cHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogc2VjMSBpdGVtIGxheW91dCAqL1xcclxcbi5sYXlvdXQge1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyO1xcclxcbiAgICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gICAgZmxleDogbm9uZTtcXHJcXG4gICAgb3JkZXI6IDA7XFxyXFxuICAgIGZsZXgtZ3JvdzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogc2VjMiBpdGVtIGxheW91dCAgKi9cXHJcXG4ubGF5b3V0QWRkciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2V0Q29sb3Ige1xcclxcbiAgICBjb2xvcjogIzNENzJFOCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBib3R0b20gZm9vdGVyIGNvbHVtbnMgICovXFxyXFxuLmZvb3RlckJ0bSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXHJcXG4gICAgbGVmdDogMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMUEyMzM1O1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzQ1NGQ1ZTtcXHJcXG4gICAgcGFkZGluZzogMjVweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi8qIGJvdHRvbSBmb290ZXIgaXRlbXMgKi9cXHJcXG4uZnRyX2l0bSB7XFxyXFxuICAgIGNvbG9yOiAjODc4Nzg3O1xcclxcbiAgICBoZWlnaHQ6IDE0cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XFxyXFxuICAgIGZsZXg6IG5vbmU7XFxyXFxuICAgIG9yZGVyOiAwO1xcclxcbiAgICBmbGV4LWdyb3c6IDA7XFxyXFxufVxcclxcblxcclxcbi8qIGJvdHRvbSBmb290ZXIgaXRlbSBsYXlvdXQgKi9cXHJcXG4ubGF5b3V0QnRtIHtcXHJcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMTRweDtcXHJcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxyXFxufVxcclxcblxcclxcbi8qIENvbXBhcmUgZGl2ICAqL1xcclxcbi5jb21wYXJlRGl2IHtcXHJcXG4gICAgcmlnaHQ6IDhweDtcXHJcXG4gICAgYm90dG9tOiA4cHg7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgY29sb3I6ICMzRjcyRTk7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIC4yKTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmMDtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlRGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDM1cHg7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZUNvbWJvRGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbmNlbF9pbWcge1xcclxcbiAgICBmb250LXNpemU6IDIyMnB4O1xcclxcbiAgICBjb2xvcjogI2QwMDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2EsIGFyaWFsO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbmNlbEltZ0RpdiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMDdweDtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBjb2xvcjogIzg3ODc4NztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZTpob3ZlciB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2U6YmVmb3JlLFxcclxcbi5jbG9zZTphZnRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbGVmdDogMTVweDtcXHJcXG4gICAgY29udGVudDogJyAnO1xcclxcbiAgICBoZWlnaHQ6IDMzcHg7XFxyXFxuICAgIHdpZHRoOiAycHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZTpiZWZvcmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZTphZnRlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxufVxcclxcblxcclxcbi5jaGlsZERpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMCAyNHB4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuRGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90byxBcmlhbCxzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIHJpZ2h0OiBhdXRvO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5jbXBCdXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjg3NGYwO1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLWluO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgIGNvbG9yOiAjZjBmMGYwO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luLXRvcDogMTJweDtcXHJcXG4gICAgYm90dG9tOiA4cHg7XFxyXFxuICAgIHJpZ2h0OiA4cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB3aWR0aDogMTQ0cHg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLmNvbXBhcmVEaXYgPiBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufSAqL1xcclxcblxcclxcbi8qICNjb21wYXJlRGl2ID4gZGl2OnRhcmdldCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tcGFyZURpdiA+IGRpdltjb21wYXJlQnRuXTp0YXJnZXQge1xcclxcbiAgICBjb250ZW50OiBhdHRyKGlkKTtcXHJcXG59ICovXFxyXFxuXFxyXFxuLmNtcEJ1dHRvbjpob3ZlciAuY29tcGFyZURpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uY21wVGV4dCB7XFxyXFxuICAgIGNvbG9yOiAjZjBmMGYwO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyLjU7XFxyXFxufVxcclxcblxcclxcbi5udW1PZlByb2R1Y3RzIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjIpO1xcclxcbiAgICBwYWRkaW5nOiAycHg7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbUJ1dHRvbiB7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgY29sb3I6ICMyMTIxMjE7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNjBweCA7XFxyXFxufVxcclxcblxcclxcbi5idG1OYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogIzIxMjEyMTtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRtSW1nIHtcXHJcXG4gICAgaGVpZ2h0OiAxMjVweDtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxXQUFXO0FBQ1g7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQSxrQkFBa0I7QUFDbEI7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQSxlQUFlO0FBQ2Y7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFD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QUNkLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBIZWFkZXIgKi9cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA1NnB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjM0Y3MkU5O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBmbGlwa2FydCBsb2dvICovXFxyXFxuLnZlY3RvciB7XFxyXFxuICAgIHdpZHRoOiA4OC44cHg7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyogc2VhcmNoIGJhciAqL1xcclxcbi5zcmNoUmVjdCB7XFxyXFxuICAgIHdpZHRoOiA1MDdweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xcclxcbiAgICB0ZXh0LWluZGVudDogOHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxyXFxufVxcclxcblxcclxcbi8qIGJlY29tZSBhIHNlbGxlciBvcHRpb24gICovXFxyXFxuLnNlbGxlciB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjRweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB2aWV3IGNhcnQgb24gaGVhZGVyICAqL1xcclxcbi5jYXJ0IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9keSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBMaXN0IEl0ZW0gKi9cXHJcXG4ubGlzdEl0ZW0ge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRjBGMEYxO1xcclxcbiAgICBwYWRkaW5nOiAyNHB4IDAgMzBweCAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBkaXYgZm9yIGltYWdlIGFuZCBwcm9kdWN0IGluZm8gdXNlZCBmb3IgYWxpZ25tZW50Ki9cXHJcXG4uaW1hZ2VQcm9kSW5mbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgLyogbWFyZ2luLWxlZnQ6IDMycHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDI0cHg7ICovXFxyXFxufVxcclxcblxcclxcbi8qIHN1YiBkaXYgZm9yIGxpc3QgaXRlbSB0byBtYWludGFpbiBkaXNwbGF5ICAqL1xcclxcbi5zdWJQcm9kIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBpcGhvbmUgaW1hZ2UgICovXFxyXFxuLmlwaG9uZUltZyB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogUHJvZHVjdCBJbmZvICovXFxyXFxuLnByb2RJbmZvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcXHJcXG4gICAgLyogZ2FwOiA4cHg7ICovXFxyXFxuICAgIC8qIG1hcmdpbi10b3A6IDI0cHg7ICovXFxyXFxufVxcclxcblxcclxcbi8qIEl0ZW0gTmFtZSAqL1xcclxcbi5pdG1OYW1lIHtcXHJcXG4gICAgaGVpZ2h0OiAyM3B4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICBmbGV4OiBub25lO1xcclxcbiAgICBvcmRlcjogMDtcXHJcXG4gICAgZmxleC1ncm93OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRtTmFtZTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAjMjg3NGYwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBSYXRpbmcgUGlsbCAqL1xcclxcbi5yYXRpbmcge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAycHggMnB4IDJweCA0cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM1MDhDNDc7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgZmxleDogbm9uZTtcXHJcXG4gICAgb3JkZXI6IDA7XFxyXFxuICAgIGZsZXgtZ3JvdzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogcmF0aW5nIG51bWJlciAgKi9cXHJcXG4ucmF0aW5nTm8ge1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gICAgZmxleDogbm9uZTtcXHJcXG4gICAgb3JkZXI6IDA7XFxyXFxuICAgIGZsZXgtZ3JvdzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogU3RhciBpY29uICovXFxyXFxuLnN0YXJJY29uIHtcXHJcXG4gICAgd2lkdGg6IDE0cHg7XFxyXFxuICAgIGhlaWdodDogMTRweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBSZXZpZXdzICYgUmF0aW5ncyAqL1xcclxcbi5yZXZpZXdzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbiAgICBnYXA6IDRweDtcXHJcXG4gICAgaGVpZ2h0OiAxOHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBSYXRpbmcgY291bnQgKi9cXHJcXG4ucmF0aW5nQ291bnQge1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xcclxcbiAgICBjb2xvcjogIzAwMDAwMDtcXHJcXG4gICAgZmxleDogbm9uZTtcXHJcXG4gICAgb3JkZXI6IDE7XFxyXFxuICAgIGZsZXgtZ3JvdzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogcHJvZHVjdCBmZWF0dXJlcyAgKi9cXHJcXG4uZmVhdHVyZXMge1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xcclxcbiAgICBjb2xvcjogIzAwMDAwMDtcXHJcXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDE2cHg7XFxyXFxuICAgIGZsZXg6IG5vbmU7XFxyXFxuICAgIG9yZGVyOiAyO1xcclxcbiAgICBmbGV4LWdyb3c6IDA7XFxyXFxufVxcclxcblxcclxcbi8qIFByaWNpbmcgSW5mbyAqL1xcclxcbi5wcmljaW5nSW5mbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjAwcHg7XFxyXFxuICAgIC8qIG1hcmdpbi10b3A6IDQ2cHg7ICAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBvcmlnaW5hbCBwcmljZSAgKi9cXHJcXG4ubXJwIHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XFxyXFxuICAgIGNvbG9yOiBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTYWxlIFByaWNlICovXFxyXFxuLnNhbGVQcmljZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XFxyXFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICBmbGV4OiBub25lO1xcclxcbiAgICBvcmRlcjogMDtcXHJcXG4gICAgZmxleC1ncm93OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBEZWxpdmVyeSBJbmZvICovXFxyXFxuLmRlbEluZm8ge1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xcclxcbiAgICBjb2xvcjogIzAwMDAwMDtcXHJcXG4gICAgZmxleDogbm9uZTtcXHJcXG4gICAgb3JkZXI6IDI7XFxyXFxuICAgIGZsZXgtZ3JvdzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRXhjaGFuZ2UgSW5mbyAqL1xcclxcbi5leGNnSW5mbyB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XFxyXFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICBmbGV4OiBub25lO1xcclxcbiAgICBvcmRlcjogMztcXHJcXG4gICAgZmxleC1ncm93OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBPZmZlcnMgSW5mbyAqL1xcclxcbi5vZmZlcnMge1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xcclxcbiAgICBjb2xvcjogIzUwOEM0NztcXHJcXG4gICAgZmxleDogbm9uZTtcXHJcXG4gICAgb3JkZXI6IDQ7XFxyXFxuICAgIGZsZXgtZ3JvdzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRGlzY291bnQgKi9cXHJcXG4uZGlzY291bnQge1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xcclxcbiAgICBjb2xvcjogIzUwOEM0NztcXHJcXG4gICAgZmxleDogbm9uZTtcXHJcXG4gICAgb3JkZXI6IDE7XFxyXFxuICAgIGZsZXgtZ3JvdzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogYWRkIHRvIGNhcnQgYW5kIGNvbXBhcmUgY2hlY2tib3hlcyAqL1xcclxcbi5jaGVja2JveCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFpbiBmb290ZXIgZGl2ICAqL1xcclxcbi5tYWluRnRyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzFBMjMzNTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9vdGVyICovXFxyXFxuLmZvb3RlciB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA2NXB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDM1cHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMxQTIzMzU7XFxyXFxufVxcclxcblxcclxcbi8qIGZvb3RlciBoZWFkZXJzICAqL1xcclxcbi5mdHJUaXRsZSB7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS40O1xcclxcbiAgICBjb2xvcjogIzg3ODc4NztcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA5cHg7XFxyXFxuICAgIGZsZXg6IG5vbmU7XFxyXFxuICAgIG9yZGVyOiAwO1xcclxcbiAgICBmbGV4LWdyb3c6IDA7XFxyXFxufVxcclxcblxcclxcbi8qIGZvb3RlciBzZWN0aW9ucyAgKi9cXHJcXG4uc2VjMSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi8qIGxhc3QgdHdvIGZvb3RlciBzZWN0aW9ucyAgKi9cXHJcXG4uc2VjMiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAwIDI1cHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogc2VjMSBpdGVtIGxheW91dCAqL1xcclxcbi5sYXlvdXQge1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyO1xcclxcbiAgICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gICAgZmxleDogbm9uZTtcXHJcXG4gICAgb3JkZXI6IDA7XFxyXFxuICAgIGZsZXgtZ3JvdzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogc2VjMiBpdGVtIGxheW91dCAgKi9cXHJcXG4ubGF5b3V0QWRkciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2V0Q29sb3Ige1xcclxcbiAgICBjb2xvcjogIzNENzJFOCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBib3R0b20gZm9vdGVyIGNvbHVtbnMgICovXFxyXFxuLmZvb3RlckJ0bSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXHJcXG4gICAgbGVmdDogMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMUEyMzM1O1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzQ1NGQ1ZTtcXHJcXG4gICAgcGFkZGluZzogMjVweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi8qIGJvdHRvbSBmb290ZXIgaXRlbXMgKi9cXHJcXG4uZnRyX2l0bSB7XFxyXFxuICAgIGNvbG9yOiAjODc4Nzg3O1xcclxcbiAgICBoZWlnaHQ6IDE0cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XFxyXFxuICAgIGZsZXg6IG5vbmU7XFxyXFxuICAgIG9yZGVyOiAwO1xcclxcbiAgICBmbGV4LWdyb3c6IDA7XFxyXFxufVxcclxcblxcclxcbi8qIGJvdHRvbSBmb290ZXIgaXRlbSBsYXlvdXQgKi9cXHJcXG4ubGF5b3V0QnRtIHtcXHJcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMTRweDtcXHJcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxyXFxufVxcclxcblxcclxcbi8qIENvbXBhcmUgZGl2ICAqL1xcclxcbi5jb21wYXJlRGl2IHtcXHJcXG4gICAgcmlnaHQ6IDhweDtcXHJcXG4gICAgYm90dG9tOiA4cHg7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgY29sb3I6ICMzRjcyRTk7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIC4yKTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmMDtcXHJcXG59XFxyXFxuXFxyXFxuLmltYWdlRGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDM1cHg7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZUNvbWJvRGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbmNlbF9pbWcge1xcclxcbiAgICBmb250LXNpemU6IDIyMnB4O1xcclxcbiAgICBjb2xvcjogI2QwMDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2EsIGFyaWFsO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbmNlbEltZ0RpdiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMDdweDtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBjb2xvcjogIzg3ODc4NztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZTpob3ZlciB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2U6YmVmb3JlLFxcclxcbi5jbG9zZTphZnRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbGVmdDogMTVweDtcXHJcXG4gICAgY29udGVudDogJyAnO1xcclxcbiAgICBoZWlnaHQ6IDMzcHg7XFxyXFxuICAgIHdpZHRoOiAycHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZTpiZWZvcmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZTphZnRlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxufVxcclxcblxcclxcbi5jaGlsZERpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMCAyNHB4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuRGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90byxBcmlhbCxzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIHJpZ2h0OiBhdXRvO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5jbXBCdXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjg3NGYwO1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLWluO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgIGNvbG9yOiAjZjBmMGYwO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luLXRvcDogMTJweDtcXHJcXG4gICAgYm90dG9tOiA4cHg7XFxyXFxuICAgIHJpZ2h0OiA4cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB3aWR0aDogMTQ0cHg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLmNvbXBhcmVEaXYgPiBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufSAqL1xcclxcblxcclxcbi8qICNjb21wYXJlRGl2ID4gZGl2OnRhcmdldCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tcGFyZURpdiA+IGRpdltjb21wYXJlQnRuXTp0YXJnZXQge1xcclxcbiAgICBjb250ZW50OiBhdHRyKGlkKTtcXHJcXG59ICovXFxyXFxuXFxyXFxuLmNtcEJ1dHRvbjpob3ZlciAuY29tcGFyZURpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uY21wVGV4dCB7XFxyXFxuICAgIGNvbG9yOiAjZjBmMGYwO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyLjU7XFxyXFxufVxcclxcblxcclxcbi5udW1PZlByb2R1Y3RzIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjIpO1xcclxcbiAgICBwYWRkaW5nOiAycHg7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbUJ1dHRvbiB7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgY29sb3I6ICMyMTIxMjE7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNjBweCA7XFxyXFxufVxcclxcblxcclxcbi5idG1OYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogIzIxMjEyMTtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRtSW1nIHtcXHJcXG4gICAgaGVpZ2h0OiAxMjVweDtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZURpdlRhZywgY3JlYXRlSW1hZ2VUYWcgfSBmcm9tIFwiLi9jb21tb24vSGVscGVyXCI7XHJcbmltcG9ydCB7IEJyb3dzZVJlc3BvbnNlIH0gZnJvbSBcIi4vbW9kZWxzL1Jlc3BvbnNlXCI7XHJcblxyXG4vL2Zvb3RlciBkaXYgY3JlYXRpb25cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvb3RlcihwYXJzZVN0ciA6IEJyb3dzZVJlc3BvbnNlKSB7XHJcbiAgICBsZXQgbWFpbl9mdHIgPSBjcmVhdGVEaXZUYWcoXCJtYWluRnRyXCIpO1xyXG4gICAgbWFpbl9mdHIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluRnRyXCIpO1xyXG5cclxuICAgIC8vZm9vdGVyXHJcbiAgICBsZXQgZnRyID0gY3JlYXRlRGl2VGFnKFwiZm9vdGVyXCIpO1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBwYXJzZVN0ci5mb290ZXIuY29sdW5tcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIGxldCBmdHJfcGFyc2UgPSBwYXJzZVN0ci5mb290ZXIuY29sdW5tc1tqXTtcclxuICAgICAgICBsZXQgZnRyX3NlYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaWYgKGZ0cl9wYXJzZS5kYXRhVHlwZSA9PSBcIkFSUkFZXCIpIHtcclxuICAgICAgICAgICAgZnRyX3NlYy5jbGFzc0xpc3QuYWRkKFwic2VjMVwiKTtcclxuICAgICAgICAgICAgbGV0IGZ0cl90aXRsZSA9IGNyZWF0ZURpdlRhZyhcImZ0clRpdGxlXCIpO1xyXG4gICAgICAgICAgICBmdHJfdGl0bGUuaW5uZXJUZXh0ID0gYCR7ZnRyX3BhcnNlLnRpdGxlfWA7XHJcbiAgICAgICAgICAgIGZ0cl9zZWMuYXBwZW5kQ2hpbGQoZnRyX3RpdGxlKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBmdHJfcGFyc2UuZGF0YS5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZ0cl9kYXRhID0gY3JlYXRlRGl2VGFnKFwibGF5b3V0XCIpO1xyXG4gICAgICAgICAgICAgICAgZnRyX2RhdGEuaW5uZXJUZXh0ID0gYCR7ZnRyX3BhcnNlLmRhdGFba119YDtcclxuICAgICAgICAgICAgICAgIGZ0cl9zZWMuYXBwZW5kQ2hpbGQoZnRyX2RhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmdHJfc2VjLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWMxXCIpO1xyXG4gICAgICAgICAgICBmdHJfc2VjLmNsYXNzTGlzdC5hZGQoXCJzZWMyXCIpO1xyXG4gICAgICAgICAgICBsZXQgZnRyX3RpdGxlID0gY3JlYXRlRGl2VGFnKFwiZnRyVGl0bGVcIik7XHJcbiAgICAgICAgICAgIGZ0cl90aXRsZS5pbm5lclRleHQgPSBgJHtmdHJfcGFyc2UudGl0bGV9YDtcclxuICAgICAgICAgICAgaWYgKGZ0cl90aXRsZS5pbm5lclRleHQgPT0gXCJNYWlsIFVzOlwiKVxyXG4gICAgICAgICAgICAgICAgZnRyX3NlYy5zdHlsZS5ib3JkZXJMZWZ0ID0gJzFweCBzb2xpZCAjNDU0ZDVlJ1xyXG4gICAgICAgICAgICBmdHJfc2VjLmFwcGVuZENoaWxkKGZ0cl90aXRsZSk7XHJcbiAgICAgICAgICAgIGxldCBmdHJfZGF0YSA9IGNyZWF0ZURpdlRhZyhcImxheW91dEFkZHJcIik7XHJcbiAgICAgICAgICAgIC8vdG8gY2hhbmdlIGNvbG9yIG9mIHRlbGVwaG9uZSBudW1iZXIgdmFsdWVcclxuICAgICAgICAgICAgdmFyIHNwbGl0X3dvcmQgPSBmdHJfcGFyc2UuZGF0YS5zZWFyY2goXCJUZWxlcGhvbmU6XCIpO1xyXG4gICAgICAgICAgICBpZiAoc3BsaXRfd29yZCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGZ0cl9kYXRhLmlubmVySFRNTCA9IGZ0cl9wYXJzZS5kYXRhLnN1YnN0cmluZygwLCBzcGxpdF93b3JkICsgMTApICsgJzxzcGFuIGNsYXNzPVwic2V0Q29sb3JcIj4nICsgZnRyX3BhcnNlLmRhdGEuc3Vic3RyaW5nKHNwbGl0X3dvcmQgKyAxMCkgKyAnPC9zcGFuPic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmdHJfZGF0YS5pbm5lclRleHQgPSBgJHtmdHJfcGFyc2UuZGF0YX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ0cl9zZWMuYXBwZW5kQ2hpbGQoZnRyX2RhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdHIuYXBwZW5kQ2hpbGQoZnRyX3NlYyk7XHJcbiAgICAgICAgbWFpbl9mdHIuYXBwZW5kQ2hpbGQoZnRyKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5fZnRyKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy9mb290ZXIgYm90dG9tXHJcbiAgICBsZXQgZnRyX2J0bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBmdHJfYnRtLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJCdG1cIik7XHJcblxyXG4gICAgZm9yIChsZXQgbCA9IDA7IGwgPCBwYXJzZVN0ci5mb290ZXIuYm90dG9tQ29sdW5tcy5sZW5ndGg7IGwrKykge1xyXG4gICAgICAgIGxldCBmdHJfaXRtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBmdHJfaXRtLmNsYXNzTGlzdC5hZGQoXCJsYXlvdXRCdG1cIik7XHJcbiAgICAgICAgLy9hZGQgaW1hZ2VcclxuICAgICAgICBpZiAocGFyc2VTdHIuZm9vdGVyLmJvdHRvbUNvbHVubXNbbF0uaW1nKSB7XHJcbiAgICAgICAgICAgIGxldCBpbWcgPSBjcmVhdGVJbWFnZVRhZyhgJHtwYXJzZVN0ci5mb290ZXIuYm90dG9tQ29sdW5tc1tsXS5pbWd9YCk7XHJcbiAgICAgICAgICAgIGZ0cl9pdG0uYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBidG1fdHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgYnRtX3R4dC5jbGFzc0xpc3QuYWRkKFwibGF5b3V0QnRtXCIpO1xyXG4gICAgICAgIGlmIChwYXJzZVN0ci5mb290ZXIuYm90dG9tQ29sdW5tc1tsXS50ZXh0KVxyXG4gICAgICAgICAgICBidG1fdHh0LmlubmVyVGV4dCA9IGAke3BhcnNlU3RyLmZvb3Rlci5ib3R0b21Db2x1bm1zW2xdLnRleHR9YDtcclxuICAgICAgICBmdHJfaXRtLmFwcGVuZENoaWxkKGJ0bV90eHQpO1xyXG4gICAgICAgIGZ0cl9idG0uYXBwZW5kQ2hpbGQoZnRyX2l0bSk7XHJcbiAgICAgICAgbWFpbl9mdHIuYXBwZW5kQ2hpbGQoZnRyX2J0bSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVBbmNob3JUYWcsIGNyZWF0ZURpdlRhZywgY3JlYXRlSW1hZ2VUYWcgfSBmcm9tIFwiLi9jb21tb24vSGVscGVyXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xyXG4gICAgbGV0IGhkckJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgICBoZHJCYXIuaWQgPSBcImhlYWRlclwiO1xyXG4gICAgaGRyQmFyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XHJcblxyXG4gICAgLy9mbGlwa2FydCBsb2dvIGRpdlxyXG4gICAgbGV0IGxvZ29BbmNob3JEaXYgPSBjcmVhdGVBbmNob3JUYWcoXCJodHRwczovL3d3dy5mbGlwa2FydC5jb21cIik7XHJcbiAgICBsZXQgbG9nbyA9IGNyZWF0ZUltYWdlVGFnKFwiLi4vc3JjL2ltYWdlcy9Mb2dvLnBuZ1wiLFwidmVjdG9yXCIsXCJsb2dvXCIsXCJsb2dvXCIpO1xyXG4gICAgbG9nb0FuY2hvckRpdi5hcHBlbmRDaGlsZChsb2dvKTtcclxuICAgIGhkckJhci5hcHBlbmRDaGlsZChsb2dvQW5jaG9yRGl2KTtcclxuXHJcbiAgICAvL3NlYXJjaCBiYXJcclxuICAgIGxldCBzZWFyY2hCYXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBzZWFyY2hCYXJEaXYuaWQgPSBcInNyaFR4dFwiO1xyXG4gICAgc2VhcmNoQmFyRGl2LnR5cGUgPSBcInRleHRcIjtcclxuICAgIHNlYXJjaEJhckRpdi5wbGFjZWhvbGRlciA9IFwiU2VhcmNoXCI7XHJcbiAgICBzZWFyY2hCYXJEaXYuY2xhc3NMaXN0LmFkZChcInNyY2hSZWN0XCIpO1xyXG4gICAgaGRyQmFyLmFwcGVuZENoaWxkKHNlYXJjaEJhckRpdik7XHJcblxyXG4gICAgLy9iZWNvbWUgYSBzZWxsZXIgb3B0aW9uXHJcbiAgICBsZXQgc2VsbGVyQW5jaG9yRGl2ID0gY3JlYXRlQW5jaG9yVGFnKFwiaHR0cHM6Ly9zZWxsZXIuZmxpcGthcnQuY29tL3NlbGwtb25saW5lLz91dG1fc291cmNlPWZrd2Vic2l0ZSZ1dG1fbWVkaXVtPXdlYnNpdGVkaXJlY3RcIixcInRleHQtZGVjb3JhdGlvbjpub25lXCIpO1xyXG4gICAgbGV0IHNlbGxlckRpdiA9IGNyZWF0ZURpdlRhZyhcInNlbGxlclwiKTtcclxuICAgIHNlbGxlckRpdi5pbm5lclRleHQgPSBcIkJlY29tZSBhIHNlbGxlclwiO1xyXG4gICAgc2VsbGVyQW5jaG9yRGl2LmFwcGVuZENoaWxkKHNlbGxlckRpdik7XHJcbiAgICBoZHJCYXIuYXBwZW5kQ2hpbGQoc2VsbGVyQW5jaG9yRGl2KTtcclxuXHJcbiAgICAvL3ZpZXcgY2FydFxyXG4gICAgbGV0IGNhcnRBbmNob3JEaXYgPSBjcmVhdGVBbmNob3JUYWcoXCJodHRwczovL3d3dy5mbGlwa2FydC5jb20vdmlld2NhcnQ/ZXhwbG9yZU1vZGU9dHJ1ZSZwcmVmZXJlbmNlPUZMSVBLQVJUXCIsXCJ0ZXh0LWRlY29yYXRpb246bm9uZVwiKTtcclxuICAgIGxldCBjYXJ0RGl2ID0gY3JlYXRlRGl2VGFnKFwiY2FydFwiKTtcclxuICAgIGNhcnREaXYuaW5uZXJUZXh0ID0gXCJDYXJ0XCI7XHJcbiAgICBjYXJ0QW5jaG9yRGl2LmFwcGVuZENoaWxkKGNhcnREaXYpO1xyXG4gICAgaGRyQmFyLmFwcGVuZENoaWxkKGNhcnRBbmNob3JEaXYpO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGRyQmFyKTtcclxufSIsImltcG9ydCB7IGNyZWF0ZUFuY2hvclRhZywgY3JlYXRlRGl2VGFnLCBjcmVhdGVJbWFnZVRhZyB9IGZyb20gXCIuL2NvbW1vbi9IZWxwZXJcIjtcclxuaW1wb3J0IHsgQnJvd3NlUmVzcG9uc2UgfSBmcm9tIFwiLi9tb2RlbHMvUmVzcG9uc2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9kdWN0cyhwcm9kdWN0RGF0YTogQnJvd3NlUmVzcG9uc2UpIHtcclxuICAgIGxldCBwYXJzZWRfcHJvZHVjdF9qc29uID0gcHJvZHVjdERhdGE7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnNlZF9wcm9kdWN0X2pzb24ucHJvZHVjdENhcmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjcmVhdGVTaW5nbGVQcm9kdWN0KHBhcnNlZF9wcm9kdWN0X2pzb24ucHJvZHVjdENhcmRbaV0sIGkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTaW5nbGVQcm9kdWN0KHBhcnNlZF9wcm9kdWN0X2pzb24sIGlkeCkge1xyXG4gICAgbGV0IHByb2R1Y3RfcGFyc2UgPSBwYXJzZWRfcHJvZHVjdF9qc29uO1xyXG4gICAgbGV0IHByb2R1Y3RfZGl2ID0gY3JlYXRlRGl2VGFnKFwibGlzdEl0ZW1cIik7XHJcblxyXG4gICAgLy9kaXYgZm9yIGltYWdlIGFuZCBwcm9kdWN0IGluZm9cclxuICAgIGxldCBpbWdfcHJvZGluZm9fZGl2ID0gY3JlYXRlRGl2VGFnKFwiaW1hZ2VQcm9kSW5mb1wiKTtcclxuXHJcbiAgICAvL2ltYWdlXHJcbiAgICBsZXQgc3ViX3Byb2RfZGl2ID0gY3JlYXRlRGl2VGFnKFwic3ViUHJvZFwiKTtcclxuICAgIHByb2R1Y3RfZGl2LmFwcGVuZENoaWxkKHN1Yl9wcm9kX2Rpdik7XHJcblxyXG4gICAgbGV0IGltZ19saW5rID0gY3JlYXRlQW5jaG9yVGFnKGAke3Byb2R1Y3RfcGFyc2UucHJvZHVjdFBhZ2VMaW5rLnVybH1gKTtcclxuICAgIGxldCBwcm9kX2ltZyA9IGNyZWF0ZUltYWdlVGFnKGAke3Byb2R1Y3RfcGFyc2UuaW1hZ2UudXJsfWAsIFwiaXBob25lSW1nXCIsIGAke3Byb2R1Y3RfcGFyc2UuaW1hZ2UuYWx0fWApO1xyXG4gICAgcHJvZF9pbWcud2lkdGggPSBgJHtwcm9kdWN0X3BhcnNlLmltYWdlLndpZHRofWA7XHJcbiAgICBwcm9kX2ltZy5oZWlnaHQgPSBgJHtwcm9kdWN0X3BhcnNlLmltYWdlLmhlaWdodH1gO1xyXG4gICAgcHJvZF9pbWcuc2V0QXR0cmlidXRlKCdocmVmJywgYCR7cHJvZHVjdF9wYXJzZS51cmx9YClcclxuICAgIGltZ19saW5rLmFwcGVuZENoaWxkKHByb2RfaW1nKTtcclxuICAgIC8vLy8vLyBzdWJfcHJvZF9kaXYuYXBwZW5kQ2hpbGQoaW1nX2xpbmspO1xyXG4gICAgaW1nX3Byb2RpbmZvX2Rpdi5hcHBlbmRDaGlsZChpbWdfbGluayk7XHJcblxyXG4gICAgLy9wcm9kdWN0IGluZm8gXHJcbiAgICBsZXQgcHJvZF9pbmZvID0gY3JlYXRlRGl2VGFnKFwicHJvZEluZm9cIik7XHJcblxyXG4gICAgLy9wcm9kdWN0IHRpdGxlXHJcbiAgICBsZXQgcHJvZF90aXRsZSA9IGNyZWF0ZUFuY2hvclRhZyhgJHtwcm9kdWN0X3BhcnNlLnByb2R1Y3RQYWdlTGluay51cmx9YClcclxuICAgIHByb2RfdGl0bGUuY2xhc3NMaXN0LmFkZChcIml0bU5hbWVcIik7XHJcbiAgICBwcm9kX3RpdGxlLmlubmVyVGV4dCA9IGAke3Byb2R1Y3RfcGFyc2UudGl0bGV9YDtcclxuICAgIHByb2RfaW5mby5hcHBlbmRDaGlsZChwcm9kX3RpdGxlKTtcclxuXHJcbiAgICAvL3Jldmlld3NcclxuICAgIGxldCBwcm9kX3JldiA9IGNyZWF0ZURpdlRhZyhcInJldmlld3NcIik7XHJcblxyXG4gICAgbGV0IHByb2RfcmF0aW5nID0gY3JlYXRlRGl2VGFnKFwicmF0aW5nXCIpO1xyXG4gICAgbGV0IHByb2RfcmF0X3NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHByb2RfcmF0X3NwYW4uY2xhc3NMaXN0LmFkZChcInJhdGluZ05vXCIpO1xyXG4gICAgcHJvZF9yYXRfc3Bhbi5pbm5lclRleHQgPSBgJHtwcm9kdWN0X3BhcnNlLnJhdGluZ3Mub3ZlcmFsbFJhdGluZ31gO1xyXG5cclxuICAgIC8vcmF0aW5nIGltYWdlXHJcbiAgICBsZXQgcmF0X2ltZyA9IGNyZWF0ZUltYWdlVGFnKFwiLi4vc3JjL2ltYWdlcy9TdGFyIGljb24ucG5nXCIsIFwic3Rhckljb25cIiwgXCJzdGFySWNvblwiKTtcclxuICAgIGxldCBwcm9kX3JhdF9jbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHByb2RfcmF0X2NudC5jbGFzc0xpc3QuYWRkKFwicmF0aW5nQ291bnRcIik7XHJcbiAgICB2YXIgdG90YWxSYXRpbmdzTnVtID0gcHJvZHVjdF9wYXJzZS5yYXRpbmdzLnRvdGFsUmF0aW5nc051bS50b0xvY2FsZVN0cmluZygnZW4tSU4nKTtcclxuICAgIHZhciB0b3RhbFJldmlld3NOdW0gPSBwcm9kdWN0X3BhcnNlLnJhdGluZ3MudG90YWxSZXZpZXdzTnVtLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpO1xyXG4gICAgcHJvZF9yYXRfY250LmlubmVyVGV4dCA9IGAke3RvdGFsUmF0aW5nc051bX0gUmF0aW5ncyAmICR7dG90YWxSZXZpZXdzTnVtfSBSZXZpZXdzYDtcclxuICAgIHByb2RfcmF0aW5nLmFwcGVuZENoaWxkKHByb2RfcmF0X3NwYW4pO1xyXG4gICAgcHJvZF9yYXRpbmcuYXBwZW5kQ2hpbGQocmF0X2ltZyk7XHJcbiAgICBwcm9kX3Jldi5hcHBlbmRDaGlsZChwcm9kX3JhdGluZyk7XHJcbiAgICBwcm9kX3Jldi5hcHBlbmRDaGlsZChwcm9kX3JhdF9jbnQpO1xyXG4gICAgcHJvZF9pbmZvLmFwcGVuZENoaWxkKHByb2RfcmV2KTtcclxuXHJcbiAgICAvL2ZlYXR1cmVzXHJcbiAgICBsZXQgcHJvZF9mZWF0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgcHJvZF9mZWF0LmNsYXNzTGlzdC5hZGQoXCJmZWF0dXJlc1wiKTtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcHJvZHVjdF9wYXJzZS5mZWF0dXJlc0xpc3QubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBsZXQgcHJvZF9mZWF0X2xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIHByb2RfZmVhdF9saS5pbm5lclRleHQgPSBgJHtwcm9kdWN0X3BhcnNlLmZlYXR1cmVzTGlzdFtqXX1gO1xyXG4gICAgICAgIHByb2RfZmVhdC5hcHBlbmRDaGlsZChwcm9kX2ZlYXRfbGkpO1xyXG4gICAgfVxyXG4gICAgcHJvZF9pbmZvLmFwcGVuZENoaWxkKHByb2RfZmVhdCk7XHJcbiAgICAvLy8vLy8gc3ViX3Byb2RfZGl2LmFwcGVuZENoaWxkKHByb2RfaW5mbyk7XHJcbiAgICBpbWdfcHJvZGluZm9fZGl2LmFwcGVuZENoaWxkKHByb2RfaW5mbyk7XHJcbiAgICBzdWJfcHJvZF9kaXYuYXBwZW5kQ2hpbGQoaW1nX3Byb2RpbmZvX2Rpdik7XHJcblxyXG4gICAgLy9wcmljaW5nIGluZm9cclxuICAgIGxldCBwcmNfaW5mbyA9IGNyZWF0ZURpdlRhZyhcInByaWNpbmdJbmZvXCIpO1xyXG5cclxuICAgIGxldCBwcmNfc3AgPSBjcmVhdGVEaXZUYWcoXCJzYWxlUHJpY2VcIik7XHJcbiAgICB2YXIgc2FsZVByaWNlID0gcHJvZHVjdF9wYXJzZS5wcmljZS5maW5hbFByaWNlLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpO1xyXG4gICAgcHJjX3NwLmlubmVyVGV4dCA9IGDigrkgJHtzYWxlUHJpY2V9YDtcclxuICAgIHByY19pbmZvLmFwcGVuZENoaWxkKHByY19zcCk7XHJcblxyXG4gICAgbGV0IG1ycCA9IGNyZWF0ZURpdlRhZyhcIm1ycFwiKTtcclxuICAgIGxldCBtcnBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0cmlrZVwiKTtcclxuICAgIHZhciBtcnBfZm9ybWF0ID0gcHJvZHVjdF9wYXJzZS5wcmljZS5tcnAudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJyk7XHJcbiAgICBtcnBUZXh0LmlubmVyVGV4dCA9IGDigrkgJHttcnBfZm9ybWF0fWA7XHJcbiAgICBsZXQgZGlzY291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGRpc2NvdW50LmNsYXNzTGlzdC5hZGQoXCJkaXNjb3VudFwiKTtcclxuICAgIGRpc2NvdW50LmlubmVyVGV4dCA9IGBcXHUwMEEwICR7cHJvZHVjdF9wYXJzZS5wcmljZS5kaXNjb3VudC5kYXRhfSUgb2ZmYDtcclxuICAgIG1ycC5hcHBlbmRDaGlsZChtcnBUZXh0KTtcclxuICAgIG1ycC5hcHBlbmRDaGlsZChkaXNjb3VudCk7XHJcbiAgICBwcmNfaW5mby5hcHBlbmRDaGlsZChtcnApO1xyXG5cclxuICAgIC8vZGVsaXZlcnkgaW5mb1xyXG4gICAgbGV0IHByb2RfZGVsID0gY3JlYXRlRGl2VGFnKFwiZGVsSW5mb1wiKTtcclxuICAgIGlmIChwcm9kdWN0X3BhcnNlLmZyZWVEZWxpdmVyeSA9PSB0cnVlKVxyXG4gICAgICAgIHByb2RfZGVsLmlubmVyVGV4dCA9IFwiZnJlZSBkZWxpdmVyeVwiO1xyXG4gICAgcHJjX2luZm8uYXBwZW5kQ2hpbGQocHJvZF9kZWwpO1xyXG4gICAgc3ViX3Byb2RfZGl2LmFwcGVuZENoaWxkKHByY19pbmZvKTtcclxuICAgIC8vLy8vIHByb2R1Y3RfZGl2LmFwcGVuZENoaWxkKHByY19pbmZvKTtcclxuXHJcbiAgICAvL2V4Y2hnIGluZm9cclxuICAgIGxldCBwcm9kX2V4ID0gY3JlYXRlRGl2VGFnKFwiZXhjZ0luZm9cIik7XHJcbiAgICB2YXIgZXhjaGdfb2ZmZXIgPSBwcm9kdWN0X3BhcnNlLmV4Y2hhbmdlT2ZmZXJEaXNjb3VudC5kYXRhLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpO1xyXG4gICAgcHJvZF9leC5pbm5lckhUTUwgPSBgVXB0byA8Yj7igrkke2V4Y2hnX29mZmVyfTwvYj4gb2ZmIG9uIEV4Y2hhbmdlYDtcclxuICAgIHByY19pbmZvLmFwcGVuZENoaWxkKHByb2RfZXgpO1xyXG5cclxuICAgIC8vYmFuayBvZmZlcnNcclxuICAgIGxldCBwcm9kX29mZmVycyA9IGNyZWF0ZURpdlRhZyhcIm9mZmVyc1wiKTtcclxuICAgIHByb2Rfb2ZmZXJzLmlubmVyVGV4dCA9IGAke3Byb2R1Y3RfcGFyc2UuYmFua09mZmVyc0xpbmsuYnV0dG9uVGV4dH1gO1xyXG4gICAgcHJjX2luZm8uYXBwZW5kQ2hpbGQocHJvZF9vZmZlcnMpO1xyXG5cclxuICAgIGxldCBhZGRfZGl2ID0gY3JlYXRlRGl2VGFnKFwiYWRkRGl2XCIpO1xyXG4gICAgLy9hZGQgdG8gY2FydCBjaGVja2JveFxyXG4gICAgbGV0IHByb2RfYWRkID0gY3JlYXRlRGl2VGFnKFwiY2hlY2tib3hcIik7XHJcbiAgICBsZXQgY2hrMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGNoazEudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgIGNoazEubmFtZSA9IFwiY2hlY2tib3hcIjtcclxuICAgIHByb2RfYWRkLmFwcGVuZENoaWxkKGNoazEpO1xyXG5cclxuICAgIHZhciBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsYWJlbC5odG1sRm9yID0gXCJpZFwiO1xyXG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0FkZCB0byBDYXJ0JykpO1xyXG4gICAgLy8gcGVyc2lzdGluZyBhZGQgdG8gY2FydCBpbiBsb2NhbCBzdG9yYWdlXHJcbiAgICBjaGsxLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydERhdGEnLCBKU09OLnN0cmluZ2lmeShwcm9kdWN0X3BhcnNlKSk7Ly8gc3RvcmUgSURzIG9mIGl0ZW1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBwcm9kX2FkZC5hcHBlbmRDaGlsZChjaGsxKTtcclxuICAgIHByb2RfYWRkLmFwcGVuZENoaWxkKGxhYmVsKTtcclxuICAgIC8vIHByb2R1Y3RfZGl2LmFwcGVuZENoaWxkKHByb2RfYWRkKTtcclxuICAgIGFkZF9kaXYuYXBwZW5kQ2hpbGQocHJvZF9hZGQpO1xyXG4gICAgLy8gYWRkIHRvIGNvbXBhcmUgY2hlY2tib3hcclxuICAgIGxldCBwcm9kX2FkZDIgPSBjcmVhdGVEaXZUYWcoXCJjaGVja2JveFwiKTtcclxuXHJcbiAgICBsZXQgY2hrMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGNoazIudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgIGNoazIubmFtZSA9IFwiY2hlY2tib3hcIjtcclxuICAgIHByb2RfYWRkMi5hcHBlbmRDaGlsZChjaGsyKTtcclxuICAgIGNoazIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjaGtwcm9kXCIgKyBwcm9kdWN0X3BhcnNlLnRpdGxlICsgaWR4KTtcclxuXHJcbiAgICAvL2NvbXBhcmUgZnVuY3Rpb25hbGl0eVxyXG4gICAgY2hrMi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgdmFyIGNvbXBhcmVfZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21wYXJlRGl2XCIpO1xyXG4gICAgICAgICAgICB2YXIgaW1hZ2VfZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZURpdlwiKTtcclxuICAgICAgICAgICAgLy9pZiBkaXYgaXMgbm90IHlldCBjcmVhdGVkXHJcbiAgICAgICAgICAgIGlmIChjb21wYXJlX2RpdiA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY29tcGFyZV9kaXYgPSBjcmVhdGVEaXZUYWcoXCJjb21wYXJlRGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgY29tcGFyZV9kaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb21wYXJlRGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wYXJlX2Rpdik7XHJcblxyXG4gICAgICAgICAgICAgICAgaW1hZ2VfZGl2ID0gY3JlYXRlRGl2VGFnKFwiaW1hZ2VEaXZcIik7XHJcbiAgICAgICAgICAgICAgICBpbWFnZV9kaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbWFnZURpdlwiKTtcclxuICAgICAgICAgICAgICAgIGNvbXBhcmVfZGl2LmFwcGVuZENoaWxkKGltYWdlX2Rpdik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9hZGQgaW1hZ2VcclxuICAgICAgICAgICAgbGV0IGNoaWxkX2RpdiA9IGNyZWF0ZURpdlRhZyhcImNoaWxkRGl2XCIpO1xyXG4gICAgICAgICAgICBpbWFnZV9kaXYuYXBwZW5kQ2hpbGQoY2hpbGRfZGl2KTtcclxuICAgICAgICAgICAgY2hpbGRfZGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvZFwiICsgcHJvZHVjdF9wYXJzZS50aXRsZSArIGlkeCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcGFyZV9kaXYpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGltZ19jb21ib19kaXYgPSBjcmVhdGVEaXZUYWcoXCJpbWFnZUNvbWJvRGl2XCIpO1xyXG4gICAgICAgICAgICBjaGlsZF9kaXYuYXBwZW5kQ2hpbGQoaW1nX2NvbWJvX2Rpdik7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2FuY2VsX2ltZ19kaXYgPSBjcmVhdGVEaXZUYWcoXCJjYW5jZWxJbWdEaXZcIik7XHJcbiAgICAgICAgICAgIGxldCBjYW5jZWxfaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgICAgIGNhbmNlbF9pbWcuY2xhc3NMaXN0LmFkZChcImNsb3NlXCIpO1xyXG4gICAgICAgICAgICBjYW5jZWxfaW1nLmlubmVyVGV4dCA9IFwi4pyVXCI7XHJcbiAgICAgICAgICAgIC8vIGNhbmNlbF9pbWcuc3JjID0gJyZ0aW1lcyc7XHJcbiAgICAgICAgICAgIGNhbmNlbF9pbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRlbF9lbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kXCIgKyBwcm9kdWN0X3BhcnNlLnRpdGxlICsgaWR4KTtcclxuICAgICAgICAgICAgICAgIGRlbF9lbGVtLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoZWNrZWRfZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hrcHJvZFwiICsgcHJvZHVjdF9wYXJzZS50aXRsZSArIGlkeCk7XHJcbiAgICAgICAgICAgICAgICBjaGVja2VkX2VsZW0uY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGltYWdlX2Rpdi5jaGlsZEVsZW1lbnRDb3VudCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlbW92ZV9idXR0b25fZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21wYXJlRGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZV9idXR0b25fZGl2LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gY29tcGFyZV9idG4uaW5uZXJUZXh0ID0gJ0NPTVBBUkUnO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaW1hZ2VfZGl2LmNoaWxkRWxlbWVudENvdW50ID09IDEpIHsgLy9oaWRlIHJlbW92ZSBhbGwgYnV0dG9uIGlmIDEgcHJvZHVjdCBpbiBjb21wYXJlIGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZW1vdmVfYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZW1vdmVCdG5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlX2J0bi5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gZGlzcGxheWluZyBudW1iZXIgb2YgcHJvZHVjdHMgd2l0aCBjb21wYXJlIGJ1dHRvbiB0ZXh0XHJcbiAgICAgICAgICAgICAgICB2YXIgbnVtX29mX3Byb2R1Y3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJudW1PZlByb2R1Y3RzXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bV9vZl9wcm9kdWN0cylcclxuICAgICAgICAgICAgICAgICAgICBudW1fb2ZfcHJvZHVjdHMuaW5uZXJUZXh0ID0gaW1hZ2VfZGl2LmNoaWxkRWxlbWVudENvdW50O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2FuY2VsX2ltZ19kaXYuYXBwZW5kQ2hpbGQoY2FuY2VsX2ltZyk7XHJcbiAgICAgICAgICAgIGltZ19jb21ib19kaXYuYXBwZW5kQ2hpbGQoY2FuY2VsX2ltZ19kaXYpO1xyXG4gICAgICAgICAgICBsZXQgYnRtSW1hZ2VEaXYgPSBjcmVhdGVEaXZUYWcoXCJidG1JbWFnZURpdlwiKTtcclxuICAgICAgICAgICAgaW1nX2NvbWJvX2Rpdi5hcHBlbmRDaGlsZChidG1JbWFnZURpdik7XHJcbiAgICAgICAgICAgIGxldCBwcm9kX2ltZyA9IGNyZWF0ZUltYWdlVGFnKGAke3Byb2R1Y3RfcGFyc2UuaW1hZ2UudXJsfWAsIFwiYnRtSW1nXCIsIGAke3Byb2R1Y3RfcGFyc2UuaW1hZ2UuYWx0fWApXHJcbiAgICAgICAgICAgIC8vIHByb2RfaW1nLndpZHRoID0gYCR7cHJvZHVjdF9wYXJzZS5pbWFnZS53aWR0aH1gO1xyXG4gICAgICAgICAgICAvLyBwcm9kX2ltZy5oZWlnaHQgPSBgJHtwcm9kdWN0X3BhcnNlLmltYWdlLmhlaWdodH1gO1xyXG4gICAgICAgICAgICBidG1JbWFnZURpdi5hcHBlbmRDaGlsZChwcm9kX2ltZyk7XHJcblxyXG4gICAgICAgICAgICAvL2FkZCB0aXRsZVxyXG4gICAgICAgICAgICBsZXQgcHJvZF90aXRsZSA9IGNyZWF0ZURpdlRhZyhcImJ0bU5hbWVcIik7XHJcbiAgICAgICAgICAgIHByb2RfdGl0bGUuaW5uZXJUZXh0ID0gYCR7cHJvZHVjdF9wYXJzZS50aXRsZX1gO1xyXG4gICAgICAgICAgICBjaGlsZF9kaXYuYXBwZW5kQ2hpbGQocHJvZF90aXRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJlbW92ZSBwcm9kdWN0IGZyb20gY29tcGFyZSBkaXYgaWYgQWRkIHRvIGNvbXBhcmUgY2hlY2tib3ggaXMgdW5jaGVja2VkXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBkZWxfY29tcGFyZV9kaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2RcIiArIHByb2R1Y3RfcGFyc2UudGl0bGUgKyBpZHgpO1xyXG4gICAgICAgICAgICBkZWxfY29tcGFyZV9kaXYucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHZhciBpbWFnZV9kaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlRGl2XCIpO1xyXG4gICAgICAgICAgICAvLyBoYW5kbGluZyB0aGUgdmlzaWJpbGl0eSBvZiBSRU1PVkUgQUxMIGJ1dHRvblxyXG4gICAgICAgICAgICBpZiAoaW1hZ2VfZGl2LmNoaWxkRWxlbWVudENvdW50ID09IDApIHtcclxuICAgICAgICAgICAgICAgIHZhciByZW1vdmVfYnV0dG9uX2RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcGFyZURpdlwiKTtcclxuICAgICAgICAgICAgICAgIHJlbW92ZV9idXR0b25fZGl2LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGltYWdlX2Rpdi5jaGlsZEVsZW1lbnRDb3VudCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVtb3ZlX2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVtb3ZlQnRuXCIpO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlX2J0bi5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgIC8vYWRkaW5nIHJlbW92ZSBhbmQgY29tcGFyZSBidG5cclxuICAgICAgICAgdmFyIGJ0bl9kaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlbW92ZUJ0blwiKTtcclxuICAgICAgICAgdmFyIG51bV9vZl9wcm9kdWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibnVtT2ZQcm9kdWN0c1wiKTtcclxuICAgICAgICAgaWYgKG51bV9vZl9wcm9kdWN0cykge1xyXG4gICAgICAgICAgICAgdmFyIGltYWdlX2RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2VEaXZcIik7XHJcbiAgICAgICAgICAgICBudW1fb2ZfcHJvZHVjdHMuaW5uZXJUZXh0ID0gaW1hZ2VfZGl2LmNoaWxkRWxlbWVudENvdW50O1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlbW92ZUJ0blwiKSAmJiBpbWFnZV9kaXYuY2hpbGRFbGVtZW50Q291bnQgPiAxKSB7XHJcbiAgICAgICAgICAgICB2YXIgcmVtb3ZlX2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVtb3ZlQnRuXCIpO1xyXG4gICAgICAgICAgICAgcmVtb3ZlX2J0bi5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlbW92ZUJ0blwiKSAmJiBpbWFnZV9kaXYuY2hpbGRFbGVtZW50Q291bnQgPCAxKSB7XHJcbiAgICAgICAgICAgICB2YXIgcmVtb3ZlX2J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVtb3ZlQnRuXCIpO1xyXG4gICAgICAgICAgICAgcmVtb3ZlX2J0bi5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgICB9XHJcbiBcclxuICAgICAgICAgaWYgKGJ0bl9kaXYgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgIGxldCBidG5fZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgIGJ0bl9kaXYuY2xhc3NMaXN0LmFkZChcImJ0bkRpdlwiKTtcclxuICAgICAgICAgICAgIGJ0bl9kaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJidXR0b25EaXZcIik7XHJcbiAgICAgICAgICAgICBjb21wYXJlX2Rpdi5hcHBlbmRDaGlsZChidG5fZGl2KTtcclxuICAgICAgICAgICAgIC8vc2hvdyByZW1vdmUgYWxsIGJ1dHRvbiBpZiBwcm9kdWN0cyBhcmUgZ3JlYXRlciB0aGFuIDFcclxuICAgICAgICAgICAgIGxldCByZW1vdmVfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgIHJlbW92ZV9idG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyZW1vdmVCdG5cIik7XHJcbiAgICAgICAgICAgICByZW1vdmVfYnRuLmNsYXNzTGlzdC5hZGQoXCJyZW1CdXR0b25cIik7XHJcbiAgICAgICAgICAgICByZW1vdmVfYnRuLmlubmVyVGV4dCA9ICdSRU1PVkUgQUxMJztcclxuICAgICAgICAgICAgIGJ0bl9kaXYuYXBwZW5kQ2hpbGQocmVtb3ZlX2J0bik7XHJcbiAgICAgICAgICAgICBpZiAoaW1hZ2VfZGl2LmNoaWxkRWxlbWVudENvdW50ID4gMSlcclxuICAgICAgICAgICAgICAgICByZW1vdmVfYnRuLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgIHJlbW92ZV9idG4uaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgIHJlbW92ZV9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgIHZhciBkZWxfY29tcGFyZV9kaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlRGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgIHdoaWxlIChkZWxfY29tcGFyZV9kaXYuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICB2YXIgY2hrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGtcIiArIGRlbF9jb21wYXJlX2Rpdi5maXJzdENoaWxkLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgY2hrLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgZGVsX2NvbXBhcmVfZGl2LnJlbW92ZUNoaWxkKGRlbF9jb21wYXJlX2Rpdi5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgdmFyIGRlbF9idG5fZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21wYXJlRGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgIGRlbF9idG5fZGl2LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgIGRlbF9jb21wYXJlX2Rpdi5yZW1vdmUoKTtcclxuIFxyXG4gICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcGFyZUJ0blwiKSkge1xyXG4gICAgICAgICAgICAgICAgIGxldCBjb21wYXJlX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgICAgICAgICAgIGNvbXBhcmVfYnRuLmhyZWYgPSBcIiNjb21wYXJlRGl2XCI7XHJcbiAgICAgICAgICAgICAgICAgY29tcGFyZV9idG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb21wYXJlQnRuXCIpO1xyXG4gICAgICAgICAgICAgICAgIGNvbXBhcmVfYnRuLmNsYXNzTGlzdC5hZGQoXCJjbXBCdXR0b25cIik7XHJcbiAgICAgICAgICAgICAgICAgbGV0IGNvbXBhcmVfdHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgICAgICAgICAgY29tcGFyZV90eHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb21wYXJlVHh0XCIpO1xyXG4gICAgICAgICAgICAgICAgIGNvbXBhcmVfdHh0LmNsYXNzTGlzdC5hZGQoXCJjbXBUZXh0XCIpO1xyXG4gICAgICAgICAgICAgICAgIGNvbXBhcmVfdHh0LmlubmVyVGV4dCA9ICdDT01QQVJFJztcclxuICAgICAgICAgICAgICAgICBjb21wYXJlX2J0bi5hcHBlbmRDaGlsZChjb21wYXJlX3R4dCk7XHJcbiAgICAgICAgICAgICAgICAgLy9zcGFuIHRvIHByaW50IG51bWJlciBvZiBpdGVtcyB0byBjb21wYXJlXHJcbiAgICAgICAgICAgICAgICAgbGV0IG51bV9vZl9wcm9kdWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICAgICAgIG51bV9vZl9wcm9kdWN0cy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm51bU9mUHJvZHVjdHNcIik7XHJcbiAgICAgICAgICAgICAgICAgbnVtX29mX3Byb2R1Y3RzLmNsYXNzTGlzdC5hZGQoXCJudW1PZlByb2R1Y3RzXCIpO1xyXG4gICAgICAgICAgICAgICAgIG51bV9vZl9wcm9kdWN0cy5pbm5lclRleHQgPSBpbWFnZV9kaXYuY2hpbGRFbGVtZW50Q291bnQ7XHJcbiAgICAgICAgICAgICAgICAgY29tcGFyZV9idG4uYXBwZW5kQ2hpbGQobnVtX29mX3Byb2R1Y3RzKTtcclxuICAgICAgICAgICAgICAgICBjb21wYXJlX2Rpdi5hcHBlbmRDaGlsZChjb21wYXJlX2J0bik7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICB9KVxyXG5cclxuICAgIHZhciBsYWJlbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXHJcbiAgICBsYWJlbDIuaHRtbEZvciA9IFwiaWRcIjtcclxuICAgIGxhYmVsMi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnQWRkIHRvIENvbXBhcmUnKSk7XHJcblxyXG4gICAgcHJvZF9hZGQyLmFwcGVuZENoaWxkKGNoazIpO1xyXG4gICAgcHJvZF9hZGQyLmFwcGVuZENoaWxkKGxhYmVsMik7XHJcbiAgICAvLyBwcm9kdWN0X2Rpdi5hcHBlbmRDaGlsZChwcm9kX2FkZDIpO1xyXG4gICAgYWRkX2Rpdi5hcHBlbmRDaGlsZChwcm9kX2FkZDIpO1xyXG4gICAgcHJvZHVjdF9kaXYuYXBwZW5kQ2hpbGQoYWRkX2Rpdik7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHByb2R1Y3RfZGl2KTtcclxuXHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURpdlRhZyhjbGFzc05hbWU6IHN0cmluZyk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgIGxldCBkaXZUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGl2VGFnLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIHJldHVybiBkaXZUYWc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBbmNob3JUYWcoaHJlZjogc3RyaW5nLCBzdHlsZT86IHN0cmluZyk6IEhUTUxBbmNob3JFbGVtZW50IHtcclxuICAgIGxldCBhbmNob3JUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIGFuY2hvclRhZy5ocmVmID0gaHJlZjtcclxuICAgIGFuY2hvclRhZy50YXJnZXQgPSBcIl9ibGFua1wiO1xyXG4gICAgYW5jaG9yVGFnLnN0eWxlLmNzc1RleHQgPSBzdHlsZTtcclxuICAgIHJldHVybiBhbmNob3JUYWc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbWFnZVRhZyhzcmM/OiBzdHJpbmcsIGNsYXNzTmFtZT86IHN0cmluZywgYWx0Pzogc3RyaW5nLCBpZD86IHN0cmluZyk6IEhUTUxJbWFnZUVsZW1lbnQge1xyXG4gICAgbGV0IGltYWdlVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGltYWdlVGFnLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcclxuICAgIGltYWdlVGFnLnNyYyA9IHNyYztcclxuICAgIGltYWdlVGFnLmFsdCA9IGFsdDtcclxuICAgIGltYWdlVGFnLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIHJldHVybiBpbWFnZVRhZztcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbi8vIGRpdi5pbm5lckhUTUwgPSBcIkhlbGxvIFByYWNoZWUhXCI7XHJcbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUhlYWRlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVByb2R1Y3RzIH0gZnJvbSBcIi4vY29tcG9uZW50cy9Qcm9kdWN0c1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVGb290ZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5pbXBvcnQgXCIuLi9zcmMvc3R5bGUuY3NzXCI7XHJcblxyXG5sZXQgZmV0Y2hSZXMgPSBmZXRjaChcImh0dHBzOi8vc2FuZGJveC5uZXh0bGVhcC5hcHAvcHJvZHVjdHMvZmV0Y2hcIik7XHJcbmZldGNoUmVzLnRoZW4ocmVzPT5yZXMuanNvbigpKVxyXG4gICAgICAgIC50aGVuKGRhdGE9PiB7XHJcbiAgICAgICAgICAgIGNyZWF0ZUhlYWRlcigpO1xyXG4gICAgICAgICAgICBjcmVhdGVQcm9kdWN0cyhkYXRhKTtcclxuICAgICAgICAgICAgY3JlYXRlRm9vdGVyKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9