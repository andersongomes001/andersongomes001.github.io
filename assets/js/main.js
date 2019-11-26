$(function(){
    suffletext(".suffletext");
    suffletext("h2");
    suffletext("h5.card-title");
    suffletext(".posts h1");
    suffletext("ul.pagination  a");
    
});
function suffletext(elemente_text){
    var text = null;
    $(elemente_text).mouseenter(function() {
        $(this).data("text",$(this).text());
        text = new ShuffleText(this);
        text.start();
    }).mouseleave(function() {
        text.stop();
        this.innerText = $(this).data("text");
    });
}
function shtext(element){
    console.log("passou");
    console.log(element);
    console.log($( element ));
    var text = new ShuffleText(element);
    $(element).mouseenter(function() {
        console.log("iniciou");
        text.start();
    }).mouseleave(function() {
        text.stop();
        element.innerText = element.dataset.text; //Evita alguns problemas
        console.log("finalizou");
    });
    console.log("saiu");
    element.innerText = element.dataset.text; //Evita alguns problemas
}