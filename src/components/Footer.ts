import { createDivTag, createImageTag } from "./common/Helper";
import { BrowseResponse } from "./models/Response";

//footer div creation
export function createFooter(parseStr : BrowseResponse) {
    let main_ftr = createDivTag("mainFtr");
    main_ftr.setAttribute("id", "mainFtr");

    //footer
    let ftr = createDivTag("footer");
    for (let j = 0; j < parseStr.footer.colunms.length; j++) {
        let ftr_parse = parseStr.footer.colunms[j];
        let ftr_sec = document.createElement("div");
        if (ftr_parse.dataType == "ARRAY") {
            ftr_sec.classList.add("sec1");
            let ftr_title = createDivTag("ftrTitle");
            ftr_title.innerText = `${ftr_parse.title}`;
            ftr_sec.appendChild(ftr_title);
            for (let k = 0; k < ftr_parse.data.length; k++) {
                let ftr_data = createDivTag("layout");
                ftr_data.innerText = `${ftr_parse.data[k]}`;
                ftr_sec.appendChild(ftr_data);
            }
        }
        else {
            ftr_sec.classList.remove("sec1");
            ftr_sec.classList.add("sec2");
            let ftr_title = createDivTag("ftrTitle");
            ftr_title.innerText = `${ftr_parse.title}`;
            if (ftr_title.innerText == "Mail Us:")
                ftr_sec.style.borderLeft = '1px solid #454d5e'
            ftr_sec.appendChild(ftr_title);
            let ftr_data = createDivTag("layoutAddr");
            //to change color of telephone number value
            var split_word = ftr_parse.data.search("Telephone:");
            if (split_word > 0) {
                ftr_data.innerHTML = ftr_parse.data.substring(0, split_word + 10) + '<span class="setColor">' + ftr_parse.data.substring(split_word + 10) + '</span>';
            }
            else {
                ftr_data.innerText = `${ftr_parse.data}`;
            }
            ftr_sec.appendChild(ftr_data);
        }
        ftr.appendChild(ftr_sec);
        main_ftr.appendChild(ftr);
        document.body.appendChild(main_ftr);

    }

    //footer bottom
    let ftr_btm = document.createElement("div");
    ftr_btm.classList.add("footerBtm");

    for (let l = 0; l < parseStr.footer.bottomColunms.length; l++) {
        let ftr_itm = document.createElement("div");
        ftr_itm.classList.add("layoutBtm");
        //add image
        if (parseStr.footer.bottomColunms[l].img) {
            let img = createImageTag(`${parseStr.footer.bottomColunms[l].img}`);
            ftr_itm.appendChild(img);

        }
        let btm_txt = document.createElement("span");
        btm_txt.classList.add("layoutBtm");
        if (parseStr.footer.bottomColunms[l].text)
            btm_txt.innerText = `${parseStr.footer.bottomColunms[l].text}`;
        ftr_itm.appendChild(btm_txt);
        ftr_btm.appendChild(ftr_itm);
        main_ftr.appendChild(ftr_btm);
    }
}