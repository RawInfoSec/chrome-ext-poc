//document.body.innerHTML = document.body.innerHTML.replace(new RegExp("Kevin", "g"), "<span style='background: yellow; color: red;;'>Kevin</span>");

//var anchors = document.getElementsByTagName("a");
//for (var i = 0; i < anchors.length; i++) {
    //anchors[i].href = "http://www.mysite.com/?redirect=" + anchors[i].href
//}

var y = document.getElementById("dvsLoadingInfo");
y.parentNode.removeChild(y);

var y = document.getElementById("ctl00_cphContent_divProjStatusInfo");
y.parentNode.removeChild(y);

var x = document.getElementById("ctl00_cphContent_divNavigation");

var html = "<button style='width: 100%; font-size: 24px; padding: 25px; margin-top: 25px;' value='test'>Vote for Red</button>";
html = html + "<button style='width: 100%; font-size: 24px; padding: 25px; margin-top: 25px;' value='test'>Vote for Blue</button>";
html = html + "<button style='width: 100%; font-size: 24px; padding: 25px; margin-top: 25px;' value='test'>Vote for Green</button>";
html = html + "<button style='width: 100%; font-size: 24px; padding: 25px; margin-top: 25px;' value='test'>Vote for Orange</button>";
x.innerHTML = html;