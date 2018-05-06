chrome.extension.sendRequest({action: "getStatus"}, function(response) {
    var cssURL = chrome.extension.getURL("VJB-finishCSS.css");
    var head=document.getElementsByTagName("head");  
    var es=document.createElement("link");  
    es.href=cssURL;  
    es.rel="stylesheet";  
    es.type="text/css";  
    head[0].appendChild(es);
    if(response.status==="TRUE"){
        //alert(1);
        //var cssURL = chrome.extension.getURL("VJB.css");
        var avatar = document.getElementsByTagName('img');
        var $i=0;
        while(true) {
            if(avatar[$i]) {
                if(!avatar[$i].src.indexOf("https://cdn.v2ex.com/gravatar")){
                    avatar[$i].src+="?s="+avatar[$i].offsetWidth*2;
                }
            }
            else break;
            $i++;
        }
        var iframe=document.getElementsByTagName("iframe");
        var $i=0;
        console.log(iframe);
        while(1){
            if(iframe[$i]){
                alert(iframe[$i].src.indexOf("https://vjudge.net/problem/description/"));
                if(!iframe[$i].src.indexOf("https://vjudge.net/problem/description/")){
                    var desc=document.getElementsByTagName('iframe')[$i].contentDocument.evaluate("//*[@id=\"description-container\"]/dd[1]", document.getElementsByTagName('iframe')[$i].contentDocument).iterateNext().innerText;
                    desc=desc.replace(/[\n\r\t]/g,'');
                    chrome.extension.sendRequest({action: "getAnswer",value:desc}, function(response) {
                        ;
                    });
                    break;
                }
            } else break;
            $i++;
        }
    }
});
