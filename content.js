//wait for page to load
var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        main();
    }
}, 10);

function main() {

    var badSites = [/google/ig, /facebook/ig, /nytimes/ig]
    const bad = badSites.some(rx => rx.test(document.URL));

    if (!bad){
        link=document.createElement('link');
        link.href='https://fonts.googleapis.com/css?family=Nunito';
        link.rel='stylesheet';

        $('head').append(link);

    //method 1
        $('*', document).addBack().contents().each(function() {
            if(this.nodeType == 3) {
                var u = this.nodeValue;
                var reg = /supreme/ig;
                $(this).replaceWith(u.replace(reg,'<span style="background-color:red;font-style:italic;color:white;font:Nunito !important;font-weight:800;"> Supreme </span>'));
            }
        });
    }

}
