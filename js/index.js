/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        var phoneModel = window.device.model;
        var phoneModel = device.model;
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.startApp();
        phoneModel = window.device.model;
        
        var regs = window.localStorage.getItem("registered");
        var remember = window.localStorage.getItem("remember");
        fbId = window.localStorage.getItem("fbid");
        
        if(regs == "active" && fbId.length != 0) {
            var datapersonal = window.localStorage.getItem("data");
            if(datapersonal === null || datapersonal === 0) {
                ajaxPost(
                    "http://www.divinitycomputing.com/apps/beoples/fbviewprofile.php", 
                    function (response) {
                        window.localStorage.setItem("data",response);
                        datapersonal = response;
                        afterLogin();
                },
               'factualid=' + fbId);
            }
            else {
                personalJSON = JSON.parse(datapersonal);
                afterLogin();
            }
            
        }
        else if((remember != "" || remember != null) && regs == "active") {
            afterLogin();
        }
        else {
            var datapersonal = window.localStorage.getItem("data");
            if(datapersonal === null || datapersonal === 0) {
            }
            else {
                personalJSON = JSON.parse(datapersonal);
            }
            var tlaa = new TimelineMax();
                tlaa.set(document.getElementById("pagewrap"), {display:"block"})
                .fromTo(document.getElementById("pagewrap"), 1, {y:"100%"}, {y:"0%",ease: Circ.easeOut});
            
            document.getElementById("fblog").style.display = "block";
            document.getElementById("fblog").addEventListener("click", function() {
                app.fblogin();
            });
            facebookConnectPlugin.getLoginStatus(function(response) {
              if (response.status === 'connected') {
                app.fblogin();
                var uid = response.authResponse.userID;
                var accessToken = response.authResponse.accessToken;
              }
              else if (response.status === 'not_authorized') {
              } 
            });
        }
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
    },
    startApp: function() {
        setTimeout(function(){
            if(window.localStorage.getItem("setupdone") != "done") {
                if(window.localStorage.getItem("doneintro") != "true") {
                    window.localStorage.setItem("doneintro", "true");  

                    pageChange("pages/intro.html", "fade", function() {
                        initialLoadTut();
                    });
                }
                else {
                    if(window.localStorage.getItem("remember") == "true" && window.localStorage.getItem("logged")) {
                        pageChange("pages/walkthrough.html", "fade", function() {
                        selectionScreen();
                        }); 
                    }
                    else {
                        pageChange("pages/login.html", "fade", function() {
                            
        document.getElementById("facebookLogin").addEventListener("click", function() {
            register();
        });
                        });
                    }
                }
            }
            else {
                if(window.localStorage.getItem("remember") == "true" && window.localStorage.getItem("logged")) {
                    pageChange("pages/daily.html", "fade", function() {
                    }); 
                }
                else {
                        pageChange("pages/login.html", "fade", function() {
                            
        document.getElementById("facebookLogin").addEventListener("click", function() {
            register();
        });
                        });
                }
            }
        }, 200);
    },
	fblogin: function() {
		var fbLoginSuccess = function (userData) {
				fullJSON = userData;
				fbId = fullJSON.authResponse.userID;
                ajaxPost(
                    "http://www.network-divinity.com/viridian/hasreg.php", 
                    function (response) {
                    if(response == "yes") {
                        ajaxPost(
                        "http://www.network-divinity.com/viridian/fbviewprofile.php", 
                        function (response) {
                                var foundjson = JSON.parse(response);
                                window.localStorage.setItem("data",response);
                                window.localStorage.setItem("registered", "active");
                                window.localStorage.setItem("fbid", fbId);
                                personalJSON = foundjson;
        
                                afterLogin();
                        },
                       'factualid=' + fbId);
                        
                    }
                    else if(response == "no") {
                        registerGetInfo();
                    }
                    else {
                        alert("fail: " + response);
                    }
                },
               'fbid=' + fullJSON.authResponse.userID);
                
			}

			facebookConnectPlugin.login(["public_profile", "user_birthday","user_photos","user_hometown","user_likes","user_work_history","user_location","user_about_me","user_actions.books","user_actions.news","user_likes","user_actions.fitness","user_actions.music","user_actions.video"],
				fbLoginSuccess,
				function (error) { console.warn("error " + error) }
			);
	}
};
        var phoneModel;

var fbId; 
var personalJSON;
var fullJSON;
var profileJSON;

function register() {
    app.fblogin();
}
function registerGetInfo() {
    facebookConnectPlugin.api("/" + fbId + "?fields=bio,birthday,first_name,gender,relationship_status", ["public_profile","user_birthday","user_photos","user_hometown","user_likes","user_work_history","user_location","user_about_me","user_actions.books","user_actions.news","user_likes","user_actions.fitness","user_actions.music","user_actions.video"],
    function (result) {
        profileJSON = result;
        var datesset = result.birthday.split('/');

        personalJSON = JSON.parse('{ "personalData": { "firstname":"' + profileJSON.first_name +'","age":"' + calculateAge(new Date(datesset[2],datesset[0],datesset[1],0,0,0)) +'","relationship":"' + profileJSON.relationship_status + '", "description":"' + profileJSON.bio +'","gender":"'+ profileJSON.gender +'"  }, "version":0  }');
        
        ajaxPost(
            "http://www.network-divinity.com/viridian/register.php", 
            function (response) {
            if(response.indexOf("success") >= 0) {
                window.localStorage.setItem("remember", response.slice(0, -7));
                window.localStorage.setItem("rememberAllowed", "true");
                afterLogin();
            } 
            else {
                alert("fb reg" + response);
            }
        },
       'typeuser=' + "0" + "&fbid=" + fbId + "&data=" + JSON.stringify(personalJSON));
    },
    function (error) {
        alert("fb confused" +error);
    });
    
    
}
function loginPage() {
    pageChange("pages/login.html", "fade", function() {
        document.getElementById("facebookLogin").addEventListener("click", function() {
            register();
        });
    });
}
function signIn() {
    var usernameV = idc("email").value;
    var passcodeV = idc("pass").value;
    
    if(usernameV != "" && passcodeV != "") {
        ajaxPost(
            "http://www.network-divinity.com/viridian/login.php", 
            function (response) {
            if(response.indexOf("allowed") >= 0) {
                var parts = response.split("}");
                var result = parts[parts.length - 1];
                window.localStorage.setItem("remember", result);
                window.localStorage.setItem("data", parts[0] + "}");
                afterLogin();
            } 
            else {
                alert(response);
            }
        },
       'typeuser=' + "1" + "&username=" + usernameV + "&passcode=" + passcodeV);
    }
}
function attemptRegisterV() {
    var usernameV = idc("email").value;
    var passcodeV = idc("pass").value;
    
    if(usernameV != "" && passcodeV != "") {
        ajaxPost(
            "http://www.network-divinity.com/viridian/register.php", 
            function (response) {
            if(response == "wrong information") {
                alert("information did not get entered correctly");
            }
            else if(response.indexOf("success") >= 0) {
                window.localStorage.setItem("remember", response.slice(0, -7));
                window.localStorage.setItem("username", usernameV);
                if(idc("remuser").getAttribute("remember") == "yes")
                window.localStorage.setItem("rememberAllowed", "true");
                afterLogin();
            } 
            else {
                alert(response);
            }
        },
       'typeuser=' + "1" + "&username=" + usernameV + "&passcode=" + passcodeV);
    }
}
function rememberAccount(ele) {
    if(ele.getAttribute("remember") == "no") {
        ele.setAttribute("remember", "yes");     
         window.localStorage.setItem("remember", "true");

    }
    else {
        ele.setAttribute("remember", "no"); 
         window.localStorage.setItem("remember", "false");
    }
}
function afterLogin() {
    var needwalk = window.localStorage.getItem("setupdone");
    var acceptTaC = window.localStorage.getItem("tac");
    window.localStorage.setItem("logged", "true");
    if(acceptTaC != true) {
        pageChange("pages/disclaimer.html", "fade", function() {
        });
    }
    else {
        if(window.localStorage.getItem("setupdone") != "done") {
            pageChange("pages/walkthrough.html", "fade", function() {
                        selectionScreen();
            });
        }
        else {
            pageChange("pages/daily.html", "fade", function() {
            });
        }
    }
}
var ajaxGet = function (url, callback) {
    var callback = (typeof callback == 'function' ? callback : false), xhr = null;
    try {
      xhr = new XMLHttpRequest();
    } catch (e) {
      try {
        ajxhrax = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }
    }
    if (!xhr)
           return null;
    xhr.open("GET", url,true);
    xhr.onreadystatechange=function() {
      if (xhr.readyState==4 && callback) {
        callback(xhr.responseText);
      }
    }
    xhr.send(null);
    return xhr;
}
var ajaxPost = function (url, callback,data) {
    var callback = (typeof callback == 'function' ? callback : false), xhr = null;
    try {
      xhr = new XMLHttpRequest();
    } catch (e) {
      try {
        ajxhrax = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }
    }
    if (!xhr)
           return null;
    xhr.open("POST", url,true);
    xhr.onreadystatechange=function() {
      if (xhr.readyState==4 && callback) {
        callback(xhr.responseText);
      }
    }
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send(data);
    return xhr;
}
function calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
function viewAdjust() {
        var vw = (viewport().width/100);
        document.body.style.fontSize = vw + "px";
}
        viewAdjust();
function idc(id) {
    return document.getElementById(id);
}
function displayMenu(menuAnim, displayyes, backLink, backlinkFunction) {
    if(displayyes == true) {
        idc("navigation").style.display = "block";
    }
    else {
        idc("navigation").style.display = "none";
    }
    idc("backbutton").onclick = function() {
        pageChange("pages/" + backLink, "fade", function() {
                    backlinkFunction();
        });
    }
}
function displayBotMenu(menuAnim, displayyes) {
    if(displayyes == true) {
        idc("botnavigation").style.display = "block";
    }
    else {
        idc("botnavigation").style.display = "none";
    }
}