    // older tests to see how to target text
    //document.body.innerHTML = document.body.innerHTML.replace(new RegExp("Kevin", "g"), "<span style='background: yellow; color: red;;'>Kevin</span>");

    // older tests to see how to target links
    //var anchors = document.getElementsByTagName("a");
    //for (var i = 0; i < anchors.length; i++) {
        //anchors[i].href = "http://www.mysite.com/?redirect=" + anchors[i].href
    //}

    // detect if Intvoting Website
    if (document.getElementById("dvsLoadingInfo")) {
        // get rid of loading image (seems to want to hang around)
        var y = document.getElementById("dvsLoadingInfo");
        y.parentNode.removeChild(y);
        // get rid of yellowbox warning that voting is closed
        var y = document.getElementById("ctl00_cphContent_divProjStatusInfo");
        y.parentNode.removeChild(y);
        // Add vote buttons
        var x = document.getElementById("ctl00_cphContent_divNavigation");
        var html = "<button style='width: 100%; font-size: 24px; padding: 25px; margin-top: 25px;' class='link'>Vote for Red</button>";
        html = html + "<button style='width: 100%; font-size: 24px; padding: 25px; margin-top: 25px;' class='link'>Vote for Blue</button>";
        html = html + "<button style='width: 100%; font-size: 24px; padding: 25px; margin-top: 25px;' class='link'>Vote for Green</button>";
        html = html + "<button style='width: 100%; font-size: 24px; padding: 25px; margin-top: 25px;' class='link'>Vote for Orange</button>";
        x.innerHTML = html;
    }

    // detect if SimplyVoting website
    if (document.getElementById("sleeve")) {
        var x = document.getElementById("page");
        var html = "<div class='cpanel login-container'><h3>2018 Municipal and School Board Elections.</h3>";
        html = html + "<button style='background-image: linear-gradient(#f7f5f5, #d4d4cd); border-style: outset; width: 100%; font-size: 24px; padding: 25px; margin-top: 25px;' class='link'>Vote for Red</button>";
        html = html + "<button style='background-image: linear-gradient(#f7f5f5, #d4d4cd); border-style: outset; width: 100%; font-size: 24px; padding: 25px; margin-top: 25px;' class='link'>Vote for Blue</button>";
        html = html + "<button style='background-image: linear-gradient(#f7f5f5, #d4d4cd); border-style: outset; width: 100%; font-size: 24px; padding: 25px; margin-top: 25px;' class='link'>Vote for Green</button>";
        html = html + "<button style='background-image: linear-gradient(#f7f5f5, #d4d4cd); border-style: outset; width: 100%; font-size: 24px; padding: 25px; margin-top: 25px;' class='link'>Vote for Orange</button>";
        html = html + "</div>";
        x.innerHTML = html;
    }

    // detect if IntelliVoting
    if (document.getElementById("link_topPage")) {
        // a bit tougher because they're not using ID's for elements, have to find list of class elements.
        var x = document.getElementsByClassName("election-start-end");
        var html = "<button style='background-image: linear-gradient(#f7f5f5, #d4d4cd); border-style: outset; width: 100%; font-size: 24px; padding: 25px; margin-top: 25px;' class='link'>Vote for Red</button>";
        html = html + "<button style='background-image: linear-gradient(#f7f5f5, #d4d4cd); border-style: outset; width: 100%; font-size: 24px; padding: 25px; margin-top: 25px;' class='link'>Vote for Blue</button>";
        html = html + "<button style='background-image: linear-gradient(#f7f5f5, #d4d4cd); border-style: outset; width: 100%; font-size: 24px; padding: 25px; margin-top: 25px;' class='link'>Vote for Green</button>";
        html = html + "<button style='background-image: linear-gradient(#f7f5f5, #d4d4cd); border-style: outset; width: 100%; font-size: 24px; padding: 25px; margin-top: 25px;' class='link'>Vote for Orange</button>";
        x[0].innerHTML = html;  // use the first found object of that class [0]
    }

    // lets get a list of links and create onClick events
    var classname = document.getElementsByClassName("link");
    for (var i = 0; i < classname.length; i++) {
        classname[i].addEventListener('click', clicketty, false);
    }

    // the onclick event for the links. It could literally do anything, including
    // exfiltrating any form data (i.e. Login form) to an external server.
    // Right now we've got a 50/50 chance of redirecting votes to a hacker-preferred candidate.
    function clicketty() {
        if (Math.floor(Math.random() * 3) + 1 == 1) {
            alert("Voted for Acme V. Hacker!");
        } else {
            alert("Normal vote cast!");
        }
    }
    