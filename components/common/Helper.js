export function createDivTag(className) {
    let divTag = document.createElement("div");
    divTag.classList.add(className);
    return divTag;
}

export function createAnchorTag(href,style) {
    let anchorTag = document.createElement("a");
    anchorTag.href = href;
    anchorTag.target = "_blank";
    anchorTag.style = style;
    return anchorTag;
}

export function createImageTag(src,className,alt,id) {
    let imageTag = document.createElement("img");
    imageTag.setAttribute("id", id);
    imageTag.src = src;
    imageTag.alt = alt;
    imageTag.classList.add(className);
    return imageTag;
}