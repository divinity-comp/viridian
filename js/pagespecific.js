function adjustSignIn() {
    var tl = new TimelineMax();
    if(idc("signIn").style.display == "none") {
        idc("adjustsign").innerHTML = "Sign Up";
        tl.fromTo(idc("signUp"), 0.3, {rotationX:"0deg"}, {rotationX:"270deg", ease:  Power0.easeNone, onComplete:function() {
        idc("signIn").style.display = "block";
        idc("signUp").style.display = "none";
            
        }})
        .fromTo(idc("signIn"), 0.1, {rotationX:"270deg"}, {rotationX:"360deg", ease:  Power0.easeNone});
        
    }
    else {
        tl.fromTo(idc("signIn"), 0.3, {rotationX:"0deg"}, {rotationX:"270deg", ease:  Power0.easeNone, onComplete:function() {
        idc("signUp").style.display = "block";
        idc("signIn").style.display = "none";
            
        }})
        .fromTo(idc("signUp"), 0.1, {rotationX:"270deg"}, {rotationX:"360deg", ease:  Power0.easeNone});
        idc("adjustsign").innerHTML = "Sign In";
    }
}
function selectionScreen() {
    var tl = new TimelineMax();
    
    var allabout = window.localStorage.getItem("allabout");
    displayBotMenu("", false);
    displayMenu("", true, "login.html",function() {
        selectionScreen();
    });
    
    if(allabout == "true") {
        tl.fromTo(document.getElementsByClassName("bluecirc")[0], 1.5, {y:1000,zIndex:2,scale:0}, {scale:1,y:0, ease: Circ.easeOut},0.5)
        .fromTo(document.getElementsByClassName("bluecirc")[0], 0.5, {scale:1}, {opacity:0.5,scale:1, ease: SlowMo.ease.config(0.1, 0.7, true)},1)
        .fromTo(document.getElementsByClassName("bluecirc")[0], 0.5, {opacity:0.5}, {opacity:1, ease: Circ.easeOut},1)
        .fromTo(document.getElementsByClassName("bluecirc")[1], 0.5, {scale:0,zIndex:1}, {scale:1.2, ease: Back.easeOut.config(1.7)},1.4)
        .fromTo(document.getElementsByClassName("bluecirc")[1], 0.5, {opacity:0,y:-100}, {y:0,opacity:1, ease: Circ.easeOut},1.4)
        .fromTo(document.getElementsByClassName("bluecirc")[2], 0.5, {scale:0,zIndex:0}, {scale:1, ease: Back.easeOut.config(1.7)},1.9)
        .fromTo(document.getElementsByClassName("bluecirc")[2], 0.5, {opacity:0,y:-100}, {y:0,opacity:0.5, ease: Circ.easeOut},1.9);
    }
    else {
        tl.fromTo(document.getElementsByClassName("bluecirc")[0], 1.5, {y:1000,zIndex:2,scale:0}, {scale:1,y:0, ease: Circ.easeOut},0.5)
        .fromTo(document.getElementsByClassName("bluecirc")[0], 0.5, {scale:1}, {opacity:0.5,scale:1.2, ease: SlowMo.ease.config(0.1, 0.7, true)},1)
        .fromTo(document.getElementsByClassName("bluecirc")[0], 0.5, {opacity:0.5}, {opacity:1, ease: Circ.easeOut},1)
        .fromTo(document.getElementsByClassName("bluecirc")[1], 0.5, {scale:0,zIndex:1}, {scale:1, ease: Back.easeOut.config(1.7)},1.4)
        .fromTo(document.getElementsByClassName("bluecirc")[1], 0.5, {opacity:0,y:-100}, {y:0,opacity:0.5, ease: Circ.easeOut},1.4)
        .fromTo(document.getElementsByClassName("bluecirc")[2], 0.5, {scale:0,zIndex:0}, {scale:1, ease: Back.easeOut.config(1.7)},1.9)
        .fromTo(document.getElementsByClassName("bluecirc")[2], 0.5, {opacity:0,y:-100}, {y:0,opacity:0.5, ease: Circ.easeOut},1.9);
    }
}

function allAboutInitial() {
    displayBotMenu("", true);
    displayMenu("", true, "walkthrough.html",function() {
        selectionScreen();
    });
    var allabout = new Hammer(idc("allabout"));
    
    allabout.on('swipeleft', function(ev) {
        var allaboutid = idc("allabout");
        var allaboutChildren = allaboutid.getElementsByClassName("slide");
        var allaboutChildrenactive = allaboutid.getElementsByClassName("active")[0];
        var slideMenu = allaboutid.getElementsByClassName("slideMenu")[0];
         if(parseInt(allaboutChildrenactive.getAttribute("num")) == 0) {
              allaboutChildren[1].className += " active";
             var tl = new TimelineMax();    
             tl.fromTo(slideMenu.children[0], 0.2, {opacity:1}, {opacity:0.5, ease: Circ.easeOut})
                 .fromTo(slideMenu.children[1], 0.2, {opacity:0.5}, {opacity:1, ease: Circ.easeOut})
                 .fromTo(allaboutChildrenactive, 1.5, {opacity:1,x:"0%"}, {x:"-100%",opacity:0, ease: Circ.easeOut,onComplete:function() {
                     allaboutChildrenactive.classList.remove("active");
                 }},0)
                 .fromTo(allaboutChildren[1], 1.5, {opacity:0,x:"100%"}, {x:"0%",opacity:1, ease: Circ.easeOut},0.5);

         }
    });
    allabout.on('swiperight', function(ev) {
        var allaboutid = idc("allabout");
        var allaboutChildren = allaboutid.getElementsByClassName("slide");
        var allaboutChildrenactive = allaboutid.getElementsByClassName("active")[0];
        var slideMenu = allaboutid.getElementsByClassName("slideMenu")[0];
         if(parseInt(allaboutChildrenactive.getAttribute("num")) == 1) {
             allaboutChildren[0].className += " active";
             var tl = new TimelineMax();    
             tl.fromTo(slideMenu.children[1], 0.2, {opacity:1}, {opacity:0.5, ease: Circ.easeOut})
                 .fromTo(slideMenu.children[0], 0.2, {opacity:0.5}, {opacity:1, ease: Circ.easeOut})
                 .fromTo(allaboutChildrenactive, 1.5, {opacity:1,x:"0%"}, {x:"100%",opacity:0, ease: Circ.easeOut,onComplete:function() {
                     allaboutChildrenactive.classList.remove("active");
                 }},0)
                 .fromTo(allaboutChildren[0], 1.5, {opacity:0,x:"-100%"}, {x:"0%",opacity:1, ease: Circ.easeOut},0.5);

         }
         window.localStorage.setItem("allabout", "true");

    });
}

function setupPage() {
    var setdate = window.localStorage.getItem("setdate");
    var stockist = window.localStorage.getItem("stockist");
    var rules = window.localStorage.getItem("rules");
    var schedule = window.localStorage.getItem("schedule");
    var intake = window.localStorage.getItem("intake");
    var motivation = window.localStorage.getItem("motivation");
    var shopping = window.localStorage.getItem("shopping");
    var setprofile = window.localStorage.getItem("setprofile");
    
    displayMenu("", true, "walkthrough.html",function() {
        selectionScreen();
    });
    displayBotMenu("", true);
    
    var greencircles = document.getElementsByClassName("greencircle");
    
     TweenMax.fromTo(idc("goFinish"), 0.2, {opacity:1}, {opacity:0, ease: Circ.easeOut});
     TweenMax.fromTo(greencircles, 0.2, {opacity:1}, {opacity:0.3, ease: Circ.easeOut});

     TweenMax.fromTo(greencircles[0], 0.5, {opacity:0.3}, {opacity:1, ease: Circ.easeOut});
    if(setdate == "done") {
     TweenMax.fromTo(greencircles[1], 0.5, {opacity:0.3}, {opacity:1, ease: Circ.easeOut});
    }
    if(stockist == "done") {
     TweenMax.fromTo(greencircles[2], 0.5, {opacity:0.3}, {opacity:1, ease: Circ.easeOut});
    }
    if(rules == "done") {
     TweenMax.fromTo(greencircles[3], 0.5, {opacity:0.3}, {opacity:1, ease: Circ.easeOut});
    }
    if(schedule == "done") {
     TweenMax.fromTo(greencircles[4], 0.5, {opacity:0.3}, {opacity:1, ease: Circ.easeOut});
    }
    if(intake == "done") {
     TweenMax.fromTo(greencircles[5], 0.5, {opacity:0.3}, {opacity:1, ease: Circ.easeOut});
    }
    if(motivation == "done") {
     TweenMax.fromTo(greencircles[6], 0.5, {opacity:0.3}, {opacity:1, ease: Circ.easeOut});
    }
    if(shopping == "done") {
     TweenMax.fromTo(greencircles[7], 0.5, {opacity:0.3}, {opacity:1, ease: Circ.easeOut});
    }
    if(setprofile == "done") {
     //TweenMax.fromTo(greencircles[7], 0.5, {opacity:0.3}, {opacity:1, ease: Circ.easeOut});
    }
}