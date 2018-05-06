chrome.extension.sendRequest({action: "getStatus"}, function(response) {
    if(response.status==="TRUE"){
        var cssURL = chrome.extension.getURL("VJB.css");
        var head=document.getElementsByTagName("head");  
        var es=document.createElement("link");  
        es.href=cssURL;  
        es.rel="stylesheet";  
        es.type="text/css";  
        head[0].appendChild(es);
    }
});
