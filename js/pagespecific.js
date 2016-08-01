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
    if(allabout == 8) {
        allabout = "true";
    }
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
    var allabout = window.localStorage.getItem("allabout");
    
    var greencircles = document.getElementsByClassName("greencircle");
     TweenMax.fromTo(greencircles, 0.2, {opacity:1}, {opacity:0.5, ease: Circ.easeOut});

    for(i = 0; i < parseInt(allabout) + 1;i++) {
     TweenMax.fromTo(greencircles[i], 0.2, {opacity:0.5}, {opacity:1, ease: Circ.easeOut});
    }
}
function allaboutComplete(num) {
    var allabout = window.localStorage.getItem("allabout");
    if(allabout == null) {
        allabout = 0;
        window.localStorage.setItem("allabout",1);
    }
    if(parseInt(allabout) < num) {
        window.localStorage.setItem("allabout", num);
    }
}
function setupComplete(num) {
    var setupstate = window.localStorage.getItem("setupstate");
    if(setupstate == null) {
        setupstate = 0;
        window.localStorage.setItem("setupstate",1);
    }
    if(parseInt(setupstate) < num) {
        window.localStorage.setItem("setupstate", num);
    }
}
function setupPage() {
    var setupNum = window.localStorage.getItem("setupstate");
    
    displayMenu("", true, "walkthrough.html",function() {
        selectionScreen();
    });
    displayBotMenu("", true);
    
    var greencircles = document.getElementsByClassName("greencircle");
    
     TweenMax.fromTo(idc("goFinish"), 0.2, {opacity:1}, {opacity:0, ease: Circ.easeOut});
     TweenMax.fromTo(greencircles, 0.2, {opacity:1}, {opacity:0.3, ease: Circ.easeOut});

     TweenMax.fromTo(greencircles[0], 0.5, {opacity:0.3}, {opacity:1, ease: Circ.easeOut});
    
    var greencircles = document.getElementsByClassName("greencircle");
     TweenMax.fromTo(greencircles, 0.2, {opacity:1}, {opacity:0.5, ease: Circ.easeOut});

    for(i = 0; i < parseInt(setupNum) + 1;i++) {
     TweenMax.fromTo(greencircles[i], 0.2, {opacity:0.5}, {opacity:1, ease: Circ.easeOut});
    }
}

function initialLoadTut() {
    var initialItem = idc("initial");
    var activeI = initialItem.getElementsByClassName("active")[0];
    
    TweenMax.fromTo(initialItem, 1.4, {y:300,scale:0}, {scale:activeI.getAttribute("scale"),y:0, ease: Back.easeOut});
    var initialItemHamn = new Hammer(initialItem);
    initialItemHamn.on('swipeleft', function(ev) {
        if(!disableTouch)
        initialnext();
    });
    initialItemHamn.on('swiperight', function(ev) {
        if(!disableTouch)
        initialback();
    });
}
function initialnext() {
    disableTouch = true;
    var initialItem = idc("initial");
    
    var activeI = initialItem.getElementsByClassName("active")[0];
    
    var numFound = parseInt(activeI.getAttribute("num")) + 1;
    TweenMax.to(initialItem, 0.4,  {scale:initialItem.children[parseInt(activeI.getAttribute("num")) + 1].getAttribute("scale"), ease: Circ.easeOut});
    for(i = 0; i < initialItem.children.length;i++) {
        if(i == numFound) {
        document.getElementsByClassName("slideMenu")[0].children[i].className = "vw2 vwh2 active";
        }
        else {
        document.getElementsByClassName("slideMenu")[0].children[i].className = "vw2 vwh2";
        }
    }
    
    if(numFound == 1) {
          TweenMax.to(activeI, 1,  {x:"-100%", ease: Circ.easeOut,onComplete:function() {
    disableTouch = false;
              activeI.className = "slide";
              initialItem.children[numFound].className = "slide active";
             
             var tl = new TimelineMax();    
             tl.fromTo(initialItem.children[numFound], 1, {x:"100%"}, {x:"0%", ease: Circ.easeOut})
                 .fromTo(initialItem.children[numFound].children[0].children[0].children[0], 0.8, {opacity:0}, {opacity:1, ease: Circ.easeOut})
             .fromTo(initialItem.children[numFound].children[2], 1, {scaleY:0,transformOrigin:"50% 0%"}, {scaleY:1, ease: Circ.easeOut})
             .fromTo(initialItem.children[numFound].children[3], 1, {scale:0,transformOrigin:"50% 100%"}, {scale:1, ease: Circ.easeOut}, "-=0.4");
          }});
    }
    else if(numFound == 2) {
          TweenMax.to(activeI, 1,  {x:"-100%", ease: Circ.easeOut,onComplete:function() {
              activeI.className = "slide";
    disableTouch = false;
              initialItem.children[numFound].className = "slide active";
             
             var tl = new TimelineMax();    
             tl.fromTo(initialItem.children[numFound], 1, {x:"100%"}, {x:"0%", ease: Circ.easeOut})
                 .fromTo(initialItem.children[numFound].children[0].children[0], 0.8, {y:30,opacity:0}, {y:0,opacity:1, ease: Circ.easeOut})
              .fromTo(initialItem.children[numFound].children[1], 0.8, {y:30,scale:0}, {y:0,scale:1, ease: Back.easeOut.config(1.7)});
          }});
    }
    else if(numFound == 3) {
          TweenMax.to(activeI, 1,  {x:"-100%", ease: Circ.easeOut,onComplete:function() {
              activeI.className = "slide";
    disableTouch = false;
              initialItem.children[numFound].className = "slide active";
             
             var tl = new TimelineMax();    
             tl.fromTo(initialItem.children[numFound], 1, {x:"100%"}, {x:"0%", ease: Circ.easeOut})
                 .fromTo(initialItem.children[numFound].children[0].children[0], 0.8, {y:30,opacity:0}, {y:0,opacity:1, ease: Circ.easeOut})
              .fromTo(initialItem.children[numFound].getElementsByTagName("img"), 0.8, {scale:0}, {scale:1, ease: Back.easeOut.config(1.7)})
              .fromTo(initialItem.children[numFound].getElementsByTagName("img")[1], 2, {rotation:"0"}, {rotation:"15", ease: SlowMo.ease.config(0.1, 0.7, true)})
              .fromTo(initialItem.children[numFound].getElementsByTagName("img")[0], 2, {rotation:"0"}, {rotation:"-15", ease: SlowMo.ease.config(0.1, 0.7, true)},"-=2");
          }});
    }
    else if(numFound == 4) {
          TweenMax.to(activeI, 1,  {x:"-100%", ease: Circ.easeOut,onComplete:function() {
              activeI.className = "slide";
    disableTouch = false;
              initialItem.children[numFound].className = "slide active";
             
             var tl = new TimelineMax();    
             tl.fromTo(initialItem.children[numFound], 1, {x:"100%"}, {x:"0%", ease: Circ.easeOut})
                 .fromTo(initialItem.children[numFound].children[0].children[0], 0.8, {y:30,opacity:0}, {y:0,opacity:1, ease: Circ.easeOut})
              .fromTo(initialItem.children[numFound].children[1], 0.8, {y:30,scale:0}, {y:0,scale:1, ease: Back.easeOut.config(1.7)});
          }});
    }
    else if(numFound == 5) {
          TweenMax.to(activeI, 1,  {x:"-100%", ease: Circ.easeOut,onComplete:function() {
              activeI.className = "slide";
              disableTouch = false;
              initialItem.children[numFound].className = "slide active";
             
             var tl = new TimelineMax();    
             tl.fromTo(initialItem.children[numFound], 1, {x:"100%"}, {x:"0%", ease: Circ.easeOut})
                 .fromTo(initialItem.children[numFound].children[0].children[0], 0.8, {y:30,opacity:0}, {y:0,opacity:1, ease: Circ.easeOut});
          }});
    }
    else if(numFound == 6) {
          TweenMax.to(activeI, 1,  {x:"-100%", ease: Circ.easeOut,onComplete:function() {
              activeI.className = "slide";
    disableTouch = false;
              initialItem.children[numFound].className = "slide active";
             document.getElementsByClassName("slideMenu")[0].children[document.getElementsByClassName("slideMenu")[0].children.length -1].style.visibility = "visible";
             var tl = new TimelineMax();    
             tl.fromTo(initialItem.children[numFound], 1, {x:"100%"}, {x:"0%", ease: Circ.easeOut})
                 .fromTo(initialItem.children[numFound].children[0].children[0], 0.8, {y:30,opacity:0}, {y:0,opacity:1, ease: Circ.easeOut})
              .fromTo(initialItem.children[numFound].children[0].children[1], 0.8, {y:30,scale:0}, {y:0,scale:1, ease: Back.easeOut.config(1.7)})
              .fromTo(initialItem.children[numFound].children[1], 0.8, {y:30,scale:0}, {y:0,scale:1, ease: Back.easeOut.config(1.7)})
              .fromTo(document.getElementsByClassName("slideMenu")[0].children[document.getElementsByClassName("slideMenu")[0].children.length -1], 0.8, {rotationX:"270deg"}, {rotationX:"0deg", ease: Back.easeOut.config(1.7)});
          }});
    }
    else {
        
    disableTouch = false;
    }
}
var disableTouch = false;
function initialback() {
    var initialItem = idc("initial");
    disableTouch = true;
    
    var activeI = initialItem.getElementsByClassName("active")[0];
    
    var numFound = parseInt(activeI.getAttribute("num")) - 1;
    TweenMax.to(initialItem, 0.4,  {scale:initialItem.children[parseInt(activeI.getAttribute("num")) - 1].getAttribute("scale"), ease: Circ.easeOut});
    for(i = 0; i < initialItem.children.length;i++) {
        if(i == numFound) {
        document.getElementsByClassName("slideMenu")[0].children[i].className = "vw2 vwh2 active";
        }
        else {
        document.getElementsByClassName("slideMenu")[0].children[i].className = "vw2 vwh2";
        }
    }
    
    if(numFound == 1) {
          TweenMax.to(activeI, 1,  {x:"100%", ease: Circ.easeOut,onComplete:function() {
              activeI.className = "slide";
    disableTouch = false;
              initialItem.children[numFound].className = "slide active";
             
             var tl = new TimelineMax();    
             tl.fromTo(initialItem.children[numFound], 1, {x:"-100%"}, {x:"0%", ease: Circ.easeOut});
          }});
    }
    else if(numFound == 1) {
          TweenMax.to(activeI, 1,  {x:"100%", ease: Circ.easeOut,onComplete:function() {
              activeI.className = "slide";
    disableTouch = false;
              initialItem.children[numFound].className = "slide active";
             
             var tl = new TimelineMax();    
             tl.fromTo(initialItem.children[numFound], 1, {x:"-100%"}, {x:"0%", ease: Circ.easeOut})
                 .fromTo(initialItem.children[numFound].children[0].children[0].children[0], 0.8, {opacity:0}, {opacity:1, ease: Circ.easeOut})
             .fromTo(initialItem.children[numFound].children[2], 1, {scaleY:0,transformOrigin:"50% 0%"}, {scaleY:1, ease: Circ.easeOut})
             .fromTo(initialItem.children[numFound].children[3], 1, {scale:0,transformOrigin:"50% 100%"}, {scale:1, ease: Circ.easeOut}, "-=0.4");
          }});
    }
    else if(numFound == 2) {
          TweenMax.to(activeI, 1,  {x:"100%", ease: Circ.easeOut,onComplete:function() {
              activeI.className = "slide";
    disableTouch = false;
              initialItem.children[numFound].className = "slide active";
             
             var tl = new TimelineMax();    
             tl.fromTo(initialItem.children[numFound], 1, {x:"-100%"}, {x:"0%", ease: Circ.easeOut})
                 .fromTo(initialItem.children[numFound].children[0].children[0], 0.8, {y:30,opacity:0}, {y:0,opacity:1, ease: Circ.easeOut})
              .fromTo(initialItem.children[numFound].children[1], 0.8, {y:30,scale:0}, {y:0,scale:1, ease: Back.easeOut.config(1.7)});
          }});
    }
    else if(numFound == 3) {
          TweenMax.to(activeI, 1,  {x:"100%", ease: Circ.easeOut,onComplete:function() {
              activeI.className = "slide";
    disableTouch = false;
              initialItem.children[numFound].className = "slide active";
             
             var tl = new TimelineMax();    
             tl.fromTo(initialItem.children[numFound], 1, {x:"-100%"}, {x:"0%", ease: Circ.easeOut})
                 .fromTo(initialItem.children[numFound].children[0].children[0], 0.8, {y:30,opacity:0}, {y:0,opacity:1, ease: Circ.easeOut})
              .fromTo(initialItem.children[numFound].getElementsByTagName("img"), 0.8, {scale:0}, {scale:1, ease: Back.easeOut.config(1.7)})
              .fromTo(initialItem.children[numFound].getElementsByTagName("img")[1], 2, {rotation:"0"}, {rotation:"15", ease: SlowMo.ease.config(0.1, 0.7, true)})
              .fromTo(initialItem.children[numFound].getElementsByTagName("img")[0], 2, {rotation:"0"}, {rotation:"-15", ease: SlowMo.ease.config(0.1, 0.7, true)},"-=2");
          }});
    }
    else if(numFound == 4) {
          TweenMax.to(activeI, 1,  {x:"100%", ease: Circ.easeOut,onComplete:function() {
              activeI.className = "slide";
    disableTouch = false;
              initialItem.children[numFound].className = "slide active";
             
             var tl = new TimelineMax();    
             tl.fromTo(initialItem.children[numFound], 1, {x:"-100%"}, {x:"0%", ease: Circ.easeOut})
                 .fromTo(initialItem.children[numFound].children[0].children[0], 0.8, {y:30,opacity:0}, {y:0,opacity:1, ease: Circ.easeOut})
              .fromTo(initialItem.children[numFound].children[1], 0.8, {y:30,scale:0}, {y:0,scale:1, ease: Back.easeOut.config(1.7)});
          }});
    }
    else if(numFound == 5) {
          TweenMax.to(activeI, 1,  {x:"100%", ease: Circ.easeOut,onComplete:function() {
              activeI.className = "slide";
    disableTouch = false;
              initialItem.children[numFound].className = "slide active";
             
             var tl = new TimelineMax();    
             tl.fromTo(initialItem.children[numFound], 1, {x:"-100%"}, {x:"0%", ease: Circ.easeOut})
                 .fromTo(initialItem.children[numFound].children[0].children[0], 0.8, {y:30,opacity:0}, {y:0,opacity:1, ease: Circ.easeOut});
          }});
    }
    else {
        
    disableTouch = false;
    }
}
function termsYes() {
    window.localStorage.setItem("tac","true");
    pageChange("pages/walkthrough.html", "fade", function() {
                selectionScreen();
    });
}

function onesecond() {
    var initialItem = idc("onesecond");
    var activeI = initialItem.getElementsByClassName("active")[0];
    
             var tla = new TimelineMax();    
    var slideMenu = document.getElementsByClassName("slideMenu")[0];
             TweenMax.staggerFromTo(initialItem.children[0].children, 1, {scale:"0"}, {scale:"1", ease: Circ.easeOut},0.2)
    var initialItemHamn = new Hammer(initialItem);
    initialItemHamn.on('swipeleft', function(ev) {
        if(initialItem.children[0].className = "slide active") {
    tla.fromTo(initialItem.parentNode.children[1], 0.3, {scale:"0"}, {scale:"1"}).fromTo(initialItem.parentNode.children[0], 0.3, {scale:"1"}, {scale:"0"})
          .to(initialItem.children[0], 1,  {x:"-100%", ease: Circ.easeOut,onComplete:function() {
              initialItem.children[0].className = "slide";
              initialItem.children[1].className = "slide active";
              slideMenu.children[0].className = "vw2 vwh2";
              slideMenu.children[1].className = "vw2 vwh2 active";
              initialItem.parentNode.children[0].className = "vhmt11 fontv6 maintitle";
              initialItem.parentNode.children[1].className = "vhmt11 fontv6 maintitle active";
             var tl = new TimelineMax();    
             tl.fromTo(initialItem.children[1], 1, {x:"100%"}, {x:"0%", ease: Circ.easeIn})
             .fromTo(initialItem.parentNode.children[1], 1, {opacity:"0"}, {opacity:"1", ease: Circ.easeOut})
             .staggerFromTo(initialItem.children[1].children, 1, {scale:"0"}, {scale:"1", ease: Circ.easeOut},0.2);
          }});
            
        }
    });
    initialItemHamn.on('swiperight', function(ev) {
        if(initialItem.children[1].className = "slide active") {
    tla.fromTo(initialItem.parentNode.children[0], 0.3, {scale:"0"}, {scale:"1"}).fromTo(initialItem.parentNode.children[1], 0.3, {scale:"1"}, {scale:"0"})
          .to(initialItem.children[1], 1,  {x:"100%", ease: Circ.easeOut,onComplete:function() {
              initialItem.children[1].className = "slide";
              initialItem.children[0].className = "slide active";
              slideMenu.children[0].className = "vw2 vwh2 active";
              slideMenu.children[1].className = "vw2 vwh2 ";
              initialItem.parentNode.children[0].className = "vhmt11 fontv6 maintitle active";
              initialItem.parentNode.children[1].className = "vhmt11 fontv6 maintitle ";

             var tl = new TimelineMax();    
             tl.fromTo(initialItem.children[0], 1, {x:"-100%"}, {x:"0%", ease: Circ.easeIn})
             .fromTo(initialItem.parentNode.children[0], 1, {opacity:"0"}, {opacity:"1", ease: Circ.easeOut})
             .staggerFromTo(initialItem.children[0].children, 1, {scale:"0"}, {scale:"1", ease: Circ.easeOut},0.2);
          }});
        }
    });
}
function oneseven() {
    var initialItem = idc("oneseven");
    var activeI = initialItem.getElementsByClassName("active")[0];
    
    var  slideMenu = document.getElementsByClassName("slideMenu")[0];
    
    var initialItemHamn = new Hammer(initialItem);
    initialItemHamn.on('swipeleft', function(ev) {
        if(initialItem.children[0].className = "slide active") {
          TweenMax.to(initialItem.children[0], 1,  {x:"-100%", ease: Circ.easeOut,onComplete:function() {
              initialItem.children[0].className = "slide";
              initialItem.children[1].className = "slide active";
              slideMenu.children[0].className = "vw2 vwh2";
              slideMenu.children[1].className = "vw2 vwh2 active";
             var tl = new TimelineMax();    
             tl.fromTo(initialItem.children[1], 1, {x:"100%"}, {x:"0%", ease: Circ.easeOut});
          }});
            
        }
    });
    initialItemHamn.on('swiperight', function(ev) {
        if(initialItem.children[1].className = "slide active") {
          TweenMax.to(initialItem.children[1], 1,  {x:"100%", ease: Circ.easeOut,onComplete:function() {
              initialItem.children[1].className = "slide";
              initialItem.children[0].className = "slide active";
              slideMenu.children[0].className = "vw2 vwh2 active";
              slideMenu.children[1].className = "vw2 vwh2 ";

             var tl = new TimelineMax();    
             tl.fromTo(initialItem.children[0], 1, {x:"-100%"}, {x:"0%", ease: Circ.easeOut});
          }});
        }
    });
}
function rulesPop() {
    var initialItem = idc("rules");
    var initialItems = initialItem.getElementsByClassName("slide");
    
    var initialItemHamn = new Hammer(initialItem);
    initialItemHamn.on('swipeleft', function(ev) {
    var activeI = initialItem.getElementsByClassName("active")[0];
    var numFound = parseInt(activeI.getAttribute("num"));
    var  slideMenu = document.getElementsByClassName("slideMenu")[0];
        if(numFound + 1 < initialItem.getElementsByClassName("slide").length) {
        for(i = 0; i < initialItems.length;i++) {
            if(i == numFound + 1) {
            document.getElementsByClassName("slideMenu")[0].children[i].className = "vw2 vwh2 active";
            }
            else {
            document.getElementsByClassName("slideMenu")[0].children[i].className = "vw2 vwh2";
            }
        }
          TweenMax.to(initialItems[numFound], 1,  {x:"-100%", ease: Circ.easeOut,onComplete:function() {
              activeI.className = "slide";
              initialItems[numFound + 1].className = "slide active";
             var tl = new TimelineMax();    
             tl.fromTo(initialItems[numFound + 1], 1, {x:"100%"}, {x:"0%", ease: Circ.easeOut});
          }});
        }
    });
    initialItemHamn.on('swiperight', function(ev) {
    var activeI = initialItem.getElementsByClassName("active")[0];
    var numFound = parseInt(activeI.getAttribute("num"));
    var  slideMenu = document.getElementsByClassName("slideMenu")[0];
        if(numFound > 0) {
            for(i = 0; i < initialItems.length;i++) {

                if(i == numFound - 1) {
                document.getElementsByClassName("slideMenu")[0].children[i].className = "vw2 vwh2 active";
                }
                else {
                document.getElementsByClassName("slideMenu")[0].children[i].className = "vw2 vwh2";
                }
            }
          TweenMax.to(initialItems[numFound], 1,  {x:"100%", ease: Circ.easeOut,onComplete:function() {
              activeI.className = "slide";
              initialItems[numFound - 1].className = "slide active";

             var tl = new TimelineMax();    
             tl.fromTo(initialItems[numFound -1], 1, {x:"-100%"}, {x:"0%", ease: Circ.easeOut});
          }});
            }
    });
}