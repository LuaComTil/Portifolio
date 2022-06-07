var formacaoHtmlCss = document.getElementById("select-html-css");
var formacaoJs = document.getElementById("select-js");

//CLICAA HTMLCSS
formacaoHtmlCss.addEventListener('click', removePreview);
formacaoHtmlCss.addEventListener('click', adicionaHtmlCss);
formacaoHtmlCss.addEventListener('click', removeJs);

//CLICA JS
formacaoJs.addEventListener('click', removePreview);
formacaoJs.addEventListener('click', adicionaJs);
formacaoJs.addEventListener('click', removeHtmlCss);

//REMOVE PREVIEW
function removePreview() {
    var formacoesInfo = document.getElementById("formacoes-info");
    formacoesInfo.classList.remove("previewSettings");
    var formacoesInfoPreview = document.getElementById("formacoesInfoPreview");
    formacoesInfoPreview.classList.add("formacoes-info__previewOff");
    console.log('removeu')
}
//CLICOU HTMLCSS
function removeJs() {
    var groupJs = document.getElementById("group-js");
    groupJs.classList.add("groupsOff");
}
function adicionaHtmlCss() {
    var groupHtmlCss = document.getElementById("group-html-css");
    groupHtmlCss.classList.remove("groupsOff");
}
//CLICOU JS
function removeHtmlCss() {
    var groupHtmlCss = document.getElementById("group-html-css");
    groupHtmlCss.classList.add("groupsOff");
}
function adicionaJs() {
    var groupJs = document.getElementById("group-js");
    groupJs.classList.remove("groupsOff");
}
