chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.action == "getStatus") {
        sendResponse({status: localStorage.activateVJB});
    }else if (request.action == "getAnswer") {
        /*
         * this section, of which scheduled to provide users with the solutions of those problems displayed
         * is still under development and required further notice
         * thus temporally commented
         **/

        /*
        var xhr = new XMLHttpRequest();
        console.log("success");
        xhr.open("GET", "https://search.1cf.co/search?q=site:csdn.net "+request.value, true);
        xhr.onreadystatechange = function() {
            console.log(xhr);
          if (xhr.readyState == 4) {
            //var resp = eval("(" + xhr.responseText + ")");
            console.log(xhr.responseText);
            sendResponse({answer: 1});
          }
        }
        xhr.send();
        */
    }else sendResponse({}); // snub them.
});
if(!localStorage.activateVJB) localStorage.activateVJB="TRUE";
if(localStorage.activateVJB==="FALSE"){
    chrome.browserAction.setBadgeBackgroundColor({color: [0, 0, 0, 125]});
    chrome.browserAction.setBadgeText({text : '关'});
}else{
    chrome.browserAction.setBadgeBackgroundColor({color: [76, 175, 80, 125]});
    chrome.browserAction.setBadgeText({text: '开'});
}

chrome.browserAction.onClicked.addListener(function(tab) {
    if(localStorage.activateVJB==="TRUE"){
        //Activate
        localStorage.activateVJB="FALSE";
        chrome.browserAction.setBadgeBackgroundColor({color: [0, 0, 0, 125]});
        chrome.browserAction.setBadgeText({text : '关'});
        //chrome.browserAction.setTitle({title: '关'});
    }else{
        localStorage.activateVJB="TRUE";
        chrome.browserAction.setBadgeBackgroundColor({color: [76, 175, 80, 125]});
        chrome.browserAction.setBadgeText({text: '开'});
    }
});