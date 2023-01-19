function setCookie(name:string, value:any, days:number){
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name:string){
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function setClockCookie(clockDisplayed:boolean){
    setCookie("clockDisplayed", clockDisplayed.toString(), 7);
}

function setLinksCookie(linksDisplayed:boolean){
    setCookie("linksDisplayed", linksDisplayed.toString(), 7);
}

function setLinksValueCookie(linksValue:string){
    setCookie("linksValue", linksValue, 7);
}

function setVolumeCookie(volume:number){
    setCookie("volume", volume.toString(), 7);
}

function setVolumeMutedCookie(isVolumeMuted:boolean){
    setCookie("isVolumeMuted", isVolumeMuted.toString(), 7);
}