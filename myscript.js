// older tests to see how to target text
//document.body.innerHTML = document.body.innerHTML.replace(new RegExp("Kevin", "g"), "<span style='background: yellow; color: red;;'>Kevin</span>");

// older tests to see how to target links
//var anchors = document.getElementsByTagName("a");
//for (var i = 0; i < anchors.length; i++) {
    //anchors[i].href = "http://www.mysite.com/?redirect=" + anchors[i].href
//}

// get rid of loading image (seems to want to hang around)
var y = document.getElementById("dvsLoadingInfo");
y.parentNode.removeChild(y);

// get rid of yellowbox warning that voting is closed
var y = document.getElementById("ctl00_cphContent_divProjStatusInfo");
y.parentNode.removeChild(y);

// Add vote buttons
var x = document.getElementById("ctl00_cphContent_divNavigation");
var html = "<button style='width: 100%; font-size: 24px; padding: 25px; margin-top: 25px;' value='test'>Vote for Red</button>";
html = html + "<button style='width: 100%; font-size: 24px; padding: 25px; margin-top: 25px;' value='test'>Vote for Blue</button>";
html = html + "<button style='width: 100%; font-size: 24px; padding: 25px; margin-top: 25px;' value='test'>Vote for Green</button>";
html = html + "<button style='width: 100%; font-size: 24px; padding: 25px; margin-top: 25px;' value='test'>Vote for Orange</button>";
x.innerHTML = html;