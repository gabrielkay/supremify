var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        main();
    }
}, 10);

function main() {

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

    //method 2
    /* $.fn.changeWord = function (str) {
        var regex = new RegExp(str, "gi");
        return this.each(function () {
            console.log(this.nodeType)
            //if (this.nodeType == 3) {
                this.innerHTML = this.innerHTML.replace(regex, function(matched) {
                    return '<span style="background-color:red;font-style:italic;color:white;font:Nunito;font-weight:800;"> Supreme </span>';
                });
            //}
            // else {
            //     return this.innerHTML
            // }
            
        });
    };
    $('body').changeWord('supreme'); */


//method 3
/*     // Replace all initial text on page
    replaceNodeText(document.body);

    // Create a mutation observer to monitor the DOM for changes
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            Array.prototype.slice.call(mutation.addedNodes).forEach(replaceNodeText);
        });
    });

    // Configure and start the observer
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false
    });
}

function replaceNodeText(node) {

    // Do nothing for nodes contained in a Google Docs editor (sorry I.E. no support for you)
    if(node.closest && node.closest('.kix-appview')) return;

    // Create a tree walker to traverse all text nodes
    var walker = document.createTreeWalker(
        node,
        NodeFilter.SHOW_TEXT,
        {
            acceptNode: function(node) {
                // Reject contentEditable nodes
                return (node.parentElement && node.parentElement.isContentEditable) ?
                    NodeFilter.FILTER_SKIP :
                    NodeFilter.FILTER_ACCEPT;
            }
        },
        false
    );

    // Replace all text nodes
    var textNode;
    while(textNode = walker.nextNode()) {
        var regex = new RegExp('supreme', "gi");
        textNode.nodeValue = textNode.nodeValue.replace(regex, '<span style="background-color:red;font-style:italic;color:white;font:Nunito;font-weight:800;"> Supreme </span>');

        //textNode.nodeValue = generateReplacment(textNode.nodeValue);
    }
}
function generateReplacment(text) {
    // TODO: perform with a single replace command
    var regex = new RegExp('supreme', "gi");
    return text.replace(regex, '<span style="background-color:red;font-style:italic;color:white;font:Nunito;font-weight:800;"> Supreme </span>');
}
*/
