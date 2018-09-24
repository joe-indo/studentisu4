	  var str = 0;
	  var intel = 0;
	  var time = 3;
	  var flag;
	  var day = 22;
	  var dayName = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	  var itemArray = [
	      ["Patty", 0],
	      ["Gundam", 0],
	      ["Video Game", 0],
	      ["Manga", 0],
	      ["Card Pack", 0],
	      ["Collectible Vinyl Figurine", 0],
	      ["Fight Stick Game Controller", 0, 0],
	      ["Vinyl Figurine Set", 0, 0],
	      ["Ikea Markus Swivel Chair", 0, 0]
	  ];
	  var week = 0;
	  var month = "May";
	  var totalDay = 1;
	  var cash = 0;
	  var cashadd;
	  var RP = 0;
	  var datePoints = 0;
	  var gabriel = 0;
	  var monster = 0;
	  var converseBranch = 0;
	  var flagTwo = 1;
	  var flagThree = 0;
	  var finalExam = false;
	  var andyShopFlag = 0;
	  var gabrielNumber = false;
	  var talkFlag = 0;
	  var gabTalk;
	  var gabDate;
	  //Gets audio element from HTML, then plays the corresponding one.
	  audio = document.getElementById("music1")
	  audio.play();
	  //Same thing. Just changes each time a new area is loaded.
	  function musicChng(id) {
	      audio.pause();
	      audio = document.getElementById("music" + id);
	      audio.currentTime = 0;
	      audio.play();
	  }
	  //Time checker. Runs every time the game hits 9 o' clock, and resets the game to 3 o' clock at school, the next day.
	  function timeCheck() {
	      if (time >= 9) {
	          dayUpdate();
	          musicChng(1);
	          alert("You realize it's a little too late for that. You go home and sleep.");
	          //This is for the gabriel checks.
	          flagTwo = 1;
	          //Makes all the required elements visible and others invisible. You'll see this a whole lot.
	          document.getElementById("time").innerHTML = "TIME 03:00";
	          document.getElementById("school").src = "school.jpg";
	          document.getElementById("schoolFlex").style.display = "block";
	          document.getElementById("schoolGrind").style.display = "block";
	          document.getElementById("openMap").style.display = "block";
	          document.getElementById("mapHome").style.display = "none";
	          document.getElementById("mapSchool").style.display = "none";
	          document.getElementById("mapWork").style.display = "none";
	          document.getElementById("mapPark").style.display = "none";
	          document.getElementById("openStore").style.display = "none";
	          document.getElementById("converse").style.display = "none";
	          document.getElementById("wildGabriel").style.display = "none";
	          document.getElementById("gabbomain").style.display = "none";
	          document.getElementById("right1").style.display = "none";
	          document.getElementById("wrong1").style.display = "none";
	          document.getElementById("right2").style.display = "none";
	          document.getElementById("wrong2").style.display = "none";
	          document.getElementById("right3").style.display = "none";
	          document.getElementById("wrong3").style.display = "none";
	          document.getElementById("monsterRun").style.display = "none";
	          document.getElementById("mapStore").style.display = "none";
	          document.getElementById("wildGabriel").style.display = "none";
	          document.getElementById("wait").style.display = "none";
	          document.getElementById("andyShop").style.display = "none";
	          document.getElementById("andyShop").style.display = "none";
	          document.getElementById("andyClose").style.display = "none";
	          document.getElementById("storeBG2").style.display = "none";
	          document.getElementById("leave").style.display = "none";
	          document.getElementById("date").style.display = "none";
	          document.getElementById("work").style.display = "none";
	          time = 3;
	          return true;
	      }
	      flag = ""
	  }

	  function trainSTR() {
	      flag = timeCheck();
	      if (flag == true) {
	          return;
	      }
	      flag = confirm("Do you want to work out for the next hour?");
	      if (flag == true) {
	          //Makes a text box appear. There's 7 of them so you'll see the parameters change a bunch.
	          textBoxAppears(1);
	          //Edits the text in textboxes.
	          document.getElementById("tBoxText1").innerHTML = "You spend 1 hour training your body. +5 Strength";
	          str += 5;
	          time++;
	          document.getElementById("str").innerHTML = "STR " + str;
	          document.getElementById("time").innerHTML = "TIME 0" + time + ":00";
	          gabrielCheck();
	      } else {
	          textBoxAppears(1);
	          document.getElementById("tBoxText1").innerHTML = "Aight.";
	          flag = "";
	      }
	  }

	  function trainINT() {
	      flag = timeCheck();
	      if (flag == true) {
	          return;
	      }
	      flag = confirm("Do you want to study for the next hour?");
	      if (flag == true) {
	          textBoxAppears(1);
	          document.getElementById("tBoxText1").innerHTML = "You spend 1 hour studying. +5 Intelligence.";
	          intel += 5;
	          time++;
	          document.getElementById("int").innerHTML = "INT " + intel;
	          document.getElementById("time").innerHTML = "TIME 0" + time + ":00";
	          gabrielCheck();
	      } else {
	          textBoxAppears(1);
	          document.getElementById("tBoxText1").innerHTML = "Aight.";
	          flag = "";
	      }
	  }

	  function openMap() {
	      textBoxAppears(1);
	      document.getElementById("tBoxText1").innerHTML = "You open the map.";
	      document.getElementById("school").src = "map.png";
	      document.getElementById("schoolFlex").style.display = "none";
	      document.getElementById("schoolGrind").style.display = "none";
	      document.getElementById("openMap").style.display = "none";
	      document.getElementById("mapHome").style.display = "block";
	      document.getElementById("mapSchool").style.display = "block";
	      document.getElementById("mapWork").style.display = "block";
	      document.getElementById("mapPark").style.display = "block";
	      document.getElementById("mapStore").style.display = "block";
	      document.getElementById("openStore").style.display = "none";
	      document.getElementById("work").style.display = "none";
	      document.getElementById("wildGabriel").style.display = "none";
	      document.getElementById("converse").style.display = "none";
	      document.getElementById("wait").style.display = "none";
	      document.getElementById("closeStore").style.display = "none";
	      document.getElementById("storeBG").style.display = "none";
	      document.getElementById("andyShop").style.display = "none";
	      document.getElementById("andyClose").style.display = "none";
	      document.getElementById("storeBG2").style.display = "none";
		  document.getElementById("openInv").style.display = "block";
	      //Gets rid of the store UI if the player still has it up when they leave the store.
	      for (i = 1; i <= 6; i++) {
	          document.getElementById("buyItem" + i).style.display = "none";
	      }
	  }

	  function goHome() {
	      flag = confirm("Do you want to go home for the day? This will end the current day.");
	      //Only triggers if you have Gabriel's phone number. Lets the player get extra RP without having to wait for Gabriel to show up.
	      if (flag == true && talkFlag >= 1 && time < 9) {
	          alert("You go home and talk to Gabriel for " + (9 - time) + " hours.");
	          alert("Relationship points +" + ((9 - time) * 15) + ".");
	          alert("You go home and get a good night's rest.");
	          RP = RP + ((9 - time) * 15);
	          document.getElementById("rptext").innerHTML = "RELATIONSHIP POINTS " + RP;
	          musicChng(1);
	          flagTwo = 1;
	          time = 3
	          document.getElementById("time").innerHTML = "TIME 03:00";
	          document.getElementById("school").src = "school.jpg";
	          document.getElementById("schoolFlex").style.display = "block";
	          document.getElementById("schoolGrind").style.display = "block";
	          document.getElementById("openMap").style.display = "block";
	          document.getElementById("mapHome").style.display = "none";
	          document.getElementById("mapSchool").style.display = "none";
	          document.getElementById("mapWork").style.display = "none";
	          document.getElementById("mapPark").style.display = "none";
	          document.getElementById("mapStore").style.display = "none";
	          document.getElementById("gabbomain").style.display = "none";
	          //Runs the update day function.
	          dayUpdate();
	          flag = "";
	          //Triggers if you don't have Gabriel's number.
	      } else if (flag == true) {
	          textBoxAppears(1);
	          document.getElementById("tBoxText1").innerHTML = "You go home and get a good night's rest.";
	          //Changes music.
	          musicChng(1);
	          time = 3
	          document.getElementById("time").innerHTML = "TIME 03:00";
	          document.getElementById("school").src = "school.jpg";
	          document.getElementById("schoolFlex").style.display = "block";
	          document.getElementById("schoolGrind").style.display = "block";
	          document.getElementById("openMap").style.display = "block";
	          document.getElementById("mapHome").style.display = "none";
	          document.getElementById("mapSchool").style.display = "none";
	          document.getElementById("mapWork").style.display = "none";
	          document.getElementById("mapPark").style.display = "none";
	          document.getElementById("mapStore").style.display = "none";
	          dayUpdate();
	          flag = "";
	      }
	      flag = "";
	  }

	  function goSchool() {
	      flag = timeCheck();
	      if (flag == true) {
	          return;
	      }
	      musicChng(1);
	      flagTwo = 1
	      time++;
	      document.getElementById("time").innerHTML = "TIME 0" + time + ":00";
	      document.getElementById("school").src = "school.jpg";
	      document.getElementById("schoolFlex").style.display = "block";
	      document.getElementById("schoolGrind").style.display = "block";
	      document.getElementById("openMap").style.display = "block";
	      document.getElementById("mapHome").style.display = "none";
	      document.getElementById("mapSchool").style.display = "none";
	      document.getElementById("mapWork").style.display = "none";
	      document.getElementById("mapPark").style.display = "none";
	      document.getElementById("mapStore").style.display = "none";
	      //Checks for Gabriel.
	      gabrielCheck()
	      //You can get mugged. It's a 5% chance.
	      mugging();
	  }

	  function gabrielCheck() {
	      gabriel = (Math.floor(Math.random() * 6) + 1);
	      if (totalDay == 1 && time == 3) {
	          gabriel = 1
	      }
	      if (gabriel == 1) {
	          document.getElementById("wildGabriel").style.display = "block";
	      }
	      //Different cases for different maps.
	      if (flagTwo == 1) {
	          document.getElementById("wildGabriel").style.width = "280px";
	          document.getElementById("wildGabriel").style.height = "220px";
	          document.getElementById("wildGabriel").style.left = "950px";
	          document.getElementById("wildGabriel").style.top = "280px";
	      } else if (flagTwo == 2) {
	          document.getElementById("wildGabriel").style.width = "100px";
	          document.getElementById("wildGabriel").style.height = "70px";
	          document.getElementById("wildGabriel").style.left = "673px";
	          document.getElementById("wildGabriel").style.top = "275px";
	      } else if (flagTwo == 3) {
	          document.getElementById("wildGabriel").style.width = "130px";
	          document.getElementById("wildGabriel").style.height = "100px";
	          document.getElementById("wildGabriel").style.left = "747px";
	          document.getElementById("wildGabriel").style.top = "14px";
	      } else if (flagTwo == 4) {
	          document.getElementById("wildGabriel").style.width = "300px";
	          document.getElementById("wildGabriel").style.height = "220px";
	          document.getElementById("wildGabriel").style.left = "950px";
	          document.getElementById("wildGabriel").style.top = "340px";
	      }
	  }

	  function goPark() {
	      document.getElementById("school").src = "monarch.jpg";
	      //Checks for time every time. If it's 9, day resets and action gets cancelled.
	      flag = timeCheck();
	      if (flag == true) {
	          return;
	      }
	      //Secret unlockable shop.
	      if (andyShopFlag == 1) {
	          document.getElementById("andyShop").style.display = "block";
	      }
	      musicChng(2);
	      flagTwo = 2;
	      gabrielCheck()
	      mugging();
	      document.getElementById("openMap").style.display = "block";
	      document.getElementById("mapHome").style.display = "none";
	      document.getElementById("mapSchool").style.display = "none";
	      document.getElementById("mapWork").style.display = "none";
	      document.getElementById("mapPark").style.display = "none";
	      document.getElementById("mapStore").style.display = "none";
	      document.getElementById("wait").style.display = "block";
	      time++;
	      document.getElementById("time").innerHTML = "TIME 0" + time + ":00";
	  }
	  //Waiting function.
	  function goWait() {
	      flag = timeCheck();
	      if (flag == true) {
	          return;
	          flag = ""
	      }
	      flag = prompt("How many hours do you want to waste?");
	      //Checks if input is not a number. Then it rejects if true.
	      if (isNaN(flag) == true) {
	          textBoxAppears(1);
	          document.getElementById("tBoxText1").innerHTML = "Please enter a numeric value.";
	          return;
	      }
	      for (i = 0; i < flag; i++) {
	          //Checks for the monster. If the monster or Gabriel show up, then the loop ends and you can interact with them.
	          monster = (Math.floor(Math.random() * 7) + 1);
	          gabrielCheck();
	          time++
	          document.getElementById("time").innerHTML = "TIME 0" + time + ":00";
	          if (document.getElementById("wildGabriel").style.display == "block") {
	              break;
	          } else if (monster == 3) {
	              break;
	          } else if (time == 9) {
	              timeCheck();
	              return;
	          }
	      }
	      //Done like this to prevent both Gabriel and the Monster showing up at the same time.
	      if (monster == 3) {
	          textBoxAppears(1);
	          musicChng(4);
	          document.getElementById("tBoxText1").innerHTML = "???: <br><br> I'm supposed to give you some facts on Gabriel but right now I got nothin'.";
	          document.getElementById("monster").style.display = "block";
	          document.getElementById("monsterRun").style.display = "block";
	          document.getElementById("wait").style.display = "none";
	      } else {
	          textBoxAppears(1);
	          document.getElementById("tBoxText1").innerHTML = "Nothing happened.";
	      }
	  }
	  //Opens Gabriel's chat UI.
	  function giveOptions() {
	      gabTalk = 1;
	      document.getElementById("converse").style.display = "block";
	      document.getElementById("date").style.display = "block";
	      document.getElementById("leave").style.display = "block";
	      textBoxAppears(1);
	      document.getElementById("wildGabriel").style.display = "none";
	      document.getElementById("tBoxText1").innerHTML = "Gabriel: <br><br>Hey.";
	      document.getElementById("gabbomain").style.display = "block";
	      document.getElementById("gabbomain").src = "gabboarms.png";
	  }
	  //Run away from the monster to the school.
	  function running() {
	      musicChng(1);
	      document.getElementById("school").src = "school.jpg";
	      document.getElementById("schoolFlex").style.display = "block";
	      document.getElementById("schoolGrind").style.display = "block";
	      document.getElementById("openMap").style.display = "block";
	      document.getElementById("wait").style.display = "none";
	      document.getElementById("converse").style.display = "none";
	      document.getElementById("wildGabriel").style.display = "none";
	      document.getElementById("right1").style.display = "none";
	      document.getElementById("wrong1").style.display = "none";
	      document.getElementById("right2").style.display = "none";
	      document.getElementById("wrong2").style.display = "none";
	      document.getElementById("right3").style.display = "none";
	      document.getElementById("wrong3").style.display = "none";
	      document.getElementById("monsterRun").style.display = "none";
	      document.getElementById("monster").style.display = "none";
	      document.getElementById("andyShop").style.display = "none";
	      document.getElementById("andyShop").style.display = "none";
	      document.getElementById("andyClose").style.display = "none";
	      document.getElementById("storeBG2").style.display = "none";
	      textBoxAppears(1);
	      document.getElementById("tBoxText1").innerHTML = "You ran away in fear.";
	  }
	  //The Chat button gives a randomized chat dialogue for the player to answer. Incredibly easy.
	  function goChat() {
	      flag = timeCheck();
	      if (flag == true) {
	          return;
	      }
	      flag = confirm("Would you like to chat with Gabriel for an hour?");
	      if (flag == true) {
	          document.getElementById("leave").style.display = "none";
	          document.getElementById("date").style.display = "none";
	          document.getElementById("openMap").style.display = "none";
	          document.getElementById("openInv").style.display = "none";
	          converseBranch = (Math.floor(Math.random() * 3) + 1);
	          if (converseBranch == 2) {
	              document.getElementById("converse").style.display = "none";
	              textBoxAppears(1);
	              textBoxAppears(2);
	              document.getElementById("tBoxText1").innerHTML = "Gabriel: <br><br>Do you like Gundams?";
	              document.getElementById("tBoxText2").innerHTML = "Gabriel: <br><br>You wanna talk? Okay, I guess.";
	              document.getElementById("right1").style.display = "block";
	              document.getElementById("wrong1").style.display = "block";
	              time++;
	              document.getElementById("time").innerHTML = "TIME 0" + time + ":00";
	              flag = "";
	          } else if (converseBranch == 1) {
	              textBoxAppears(1);
	              textBoxAppears(2);
	              document.getElementById("converse").style.display = "none";
	              document.getElementById("tBoxText1").innerHTML = "Gabriel: <br><br>Do you like Street Fighter?";
	              document.getElementById("tBoxText2").innerHTML = "Gabriel: <br><br>You wanna talk? Okay, I guess.";
	              document.getElementById("right2").style.display = "block";
	              document.getElementById("wrong2").style.display = "block";
	              time++;
	              document.getElementById("time").innerHTML = "TIME 0" + time + ":00";
	              flag = "";
	          } else if (converseBranch == 3) {
	              textBoxAppears(1);
	              textBoxAppears(2);
	              document.getElementById("converse").style.display = "none";
	              document.getElementById("tBoxText1").innerHTML = "Gabriel: <br><br>Do you like Roblox?";
	              document.getElementById("tBoxText2").innerHTML = "Gabriel: <br><br>You wanna talk? Okay, I guess.";
	              document.getElementById("right3").style.display = "block";
	              document.getElementById("wrong3").style.display = "block";
	              time++;
	              document.getElementById("time").innerHTML = "TIME 0" + time + ":00";
	              flag = "";
	          }
	      }
	  }

	  function right() {
	      document.getElementById("right1").style.display = "none";
	      document.getElementById("wrong1").style.display = "none";
	      document.getElementById("right2").style.display = "none";
	      document.getElementById("wrong2").style.display = "none";
	      document.getElementById("right3").style.display = "none";
	      document.getElementById("wrong3").style.display = "none";
	      document.getElementById("rptext").innerHTML = "RELATIONSHIP POINTS " + RP;
	      if (RP > 1200 && talkFlag == 2) {
	          //Unlocks Dating as an option.
	          textBoxAppears(1);
	          textBoxAppears(2);
	          textBoxAppears(3);
	          textBoxAppears(4);
	          textBoxAppears(5);
	          document.getElementById("gabbomain").src = "gabboEYY.png";
	          document.getElementById("tBoxText4").innerHTML = "He seems happy.<br> +40 Relationship points.";
	          document.getElementById("tBoxText5").innerHTML = "Gabriel: <br><br>Yeah, me too!";
	          RP = RP + 40
	          document.getElementById("gabbomain").src = "gabbothink.png";
	          document.getElementById("tBoxText1").innerHTML = "You can now ask Gabriel out on a date!";
	          document.getElementById("tBoxText3").innerHTML = "Gabriel: <br><br>I think we're pretty close friends now. So, uh, if you ever want to go on a date, hit me up.";
	          document.getElementById("tBoxText2").innerHTML = "Your excitedly promise to do that sometime in the future.";
	          flagThree = 1;
	          document.getElementById("rptext").innerHTML = "RELATIONSHIP POINTS " + RP;
	          talkFlag = 3
	          document.getElementById("openMap").style.display = "block";
	          document.getElementById("openInv").style.display = "block";
	          gabTalk = 0;
	      } else if (RP > 500 && talkFlag == 1) {
	          //Unlocks gifts as an option.
	          textBoxAppears(1);
	          textBoxAppears(2);
	          textBoxAppears(3);
	          textBoxAppears(4);
	          textBoxAppears(5);
	          document.getElementById("gabbomain").src = "gabboEYY.png";
	          document.getElementById("tBoxText4").innerHTML = "He seems happy.<br> +40 Relationship points.";
	          document.getElementById("tBoxText5").innerHTML = "Gabriel: <br><br>Yeah, me too!";
	          RP = RP + 40
	          document.getElementById("gabbomain").src = "gabbothink.png";
	          document.getElementById("tBoxText1").innerHTML = "You can now give Gabriel gifts. To do so, open up your Inventory (the Items button) and click on one of the items there.";
	          document.getElementById("tBoxText3").innerHTML = "Gabriel: <br><br>Hey, by the way, I trust you enough. If you ever try giving me a gift, then I'm open to accepting it.";
	          document.getElementById("tBoxText2").innerHTML = "The way he said that leads you to believe that he sort of wants you to give him gifts. Whatever, I guess.";
	          flagThree = 1;
	          document.getElementById("rptext").innerHTML = "RELATIONSHIP POINTS " + RP;
	          talkFlag = 2
	          document.getElementById("openMap").style.display = "block";
	          document.getElementById("openInv").style.display = "block";
	          gabTalk = 0;
	      } else if (RP > 200 && talkFlag == 0) {
	          //Unlocks Gabriel's phone number.
	          textBoxAppears(1);
	          textBoxAppears(2);
	          textBoxAppears(3);
	          textBoxAppears(4);
	          textBoxAppears(5);
	          document.getElementById("gabbomain").src = "gabboEYY.png";
	          document.getElementById("tBoxText4").innerHTML = "He seems happy.<br> +40 Relationship points.";
	          document.getElementById("tBoxText5").innerHTML = "Gabriel: <br><br>Yeah, me too!";
	          RP = RP + 40
	          document.getElementById("gabbomain").src = "gabbothink.png";
	          document.getElementById("tBoxText1").innerHTML = "You can now call Gabriel whenever you go home. You get 15 Relationship Points for every hour you haven't used by the time you get home.";
	          document.getElementById("tBoxText3").innerHTML = "Gabriel: <br><br>Hey, we talk a lot, so why don't we just give each other our phone numbers?";
	          document.getElementById("tBoxText2").innerHTML = "You excitedly agree to such an exchange.";
	          flagThree = 1;
	          document.getElementById("rptext").innerHTML = "RELATIONSHIP POINTS " + RP;
	          talkFlag = 1
	          document.getElementById("openMap").style.display = "block";
	          document.getElementById("openInv").style.display = "block";
	      } else {
	          textBoxAppears(1);
	          textBoxAppears(2);
	          textBoxAppears(3);
	          document.getElementById("gabbomain").src = "gabboEYY.png";
	          document.getElementById("tBoxText1").innerHTML = "He seems happy.<br> +40 Relationship points.";
	          document.getElementById("tBoxText3").innerHTML = "Gabriel: <br><br>Yeah, me too!";
	          document.getElementById("tBoxText2").innerHTML = "Gabriel: <br><br>Well, gotta blast. Bye!";
	          RP = RP + 40
	          flagThree = 1;
	          document.getElementById("rptext").innerHTML = "RELATIONSHIP POINTS " + RP;
	          document.getElementById("openMap").style.display = "block";
	          document.getElementById("openInv").style.display = "block";
	          gabTalk = 0;
	      }
	  }

	  function wrong() {
	      document.getElementById("right1").style.display = "none";
	      document.getElementById("wrong1").style.display = "none";
	      document.getElementById("right2").style.display = "none";
	      document.getElementById("wrong2").style.display = "none";
	      document.getElementById("right3").style.display = "none";
	      document.getElementById("wrong3").style.display = "none";
	      textBoxAppears(1);
	      textBoxAppears(2);
	      textBoxAppears(3);
	      document.getElementById("tBoxText1").innerHTML = "He seems sad.<br> -40 Relationship points.";
	      document.getElementById("tBoxText3").innerHTML = "Gabriel: <br><br>Well you didn't have to be rude about it.";
	      document.getElementById("tBoxText2").innerHTML = "Gabriel: <br><br>Well, I have to go now. Seeya.";
	      RP = RP - 40
	      document.getElementById("gabbomain").src = "gabbodisgust.png";
	      document.getElementById("rptext").innerHTML = "RELATIONSHIP POINTS " + RP;
	      flagThree = 1;
	      document.getElementById("openMap").style.display = "block";
	      document.getElementById("openInv").style.display = "block";
	  }
	  //diferent buttons with same function
	  function goDonald() {
	      flag = timeCheck();
	      if (flag == true) {
	          return;
	      }
	      musicChng(7)
	      flagTwo = 3
	      time++;
	      document.getElementById("time").innerHTML = "TIME 0" + time + ":00";
	      document.getElementById("school").src = "mcdd.jpg";
	      document.getElementById("openMap").style.display = "block";
	      document.getElementById("mapHome").style.display = "none";
	      document.getElementById("mapSchool").style.display = "none";
	      document.getElementById("mapWork").style.display = "none";
	      document.getElementById("mapPark").style.display = "none";
	      document.getElementById("mapStore").style.display = "none";
	      document.getElementById("work").style.display = "block";
	      gabrielCheck()
	      mugging();
	  }

	  function goStore() {
	      flag = timeCheck();
	      if (flag == true) {
	          return;
	      }
	      musicChng(3);
	      flagTwo = 4
	      time++;
	      document.getElementById("time").innerHTML = "TIME 0" + time + ":00";
	      document.getElementById("school").src = "store.jpg";
	      document.getElementById("openMap").style.display = "block";
	      document.getElementById("mapHome").style.display = "none";
	      document.getElementById("mapSchool").style.display = "none";
	      document.getElementById("mapWork").style.display = "none";
	      document.getElementById("mapPark").style.display = "none";
	      document.getElementById("mapStore").style.display = "none";
	      document.getElementById("openStore").style.display = "block";
	      gabrielCheck()
	      mugging();
	  }

	  function mouseOver(id) {
	      document.getElementById("preview").innerHTML = id;
	      document.getElementById("text5").style.display = "block";
	  }

	  function mouseLeave() {
	      document.getElementById("preview").innerHTML = "";
	      document.getElementById("text5").style.display = "none";
	  }

	  function workConfirm() {
	      flag = confirm("Would you like to work?")
	      if (flag == true) {
	          timeCheck();
	          //Denies the player if too late.
	          if (flag == true) {
	              textBoxAppears(1);
	              document.getElementById("tBoxText1").innerHTML = "Actually, it's kinda late for that.";
	              flagTwo = 1;
	              return;
	          } else if (flag == false) {
	              work();
	          }
	      } else {
	          textBoxAppears(1);
	          document.getElementById("tBoxText1").innerHTML = "Oh ok.";
	      }
	  }

	  function work() {
	      //Gives you money.
	      textBoxAppears(1);
	      textBoxAppears(2);
	      textBoxAppears(3);
	      document.getElementById("tBoxText3").innerHTML = "You work for " + (9 - time) + " hours!";
	      document.getElementById("tBoxText2").innerHTML = "You got $" + ((9 - time) * 13) + "!";
	      document.getElementById("tBoxText1").innerHTML = "After clocking out, you go home and sleep.";
	      flagTwo = 1;
	      cashadd = ((9 - time) * 13);
	      cash = cash + cashadd;
	      document.getElementById("money").innerHTML = "MONEY $" + cash;
	      time = 9;
	      document.getElementById("time").innerHTML = "TIME 0" + time + ":00";
	      setTimeout(function() {
	          dayUpdate();
	          document.getElementById("time").innerHTML = "TIME 03:00";
	          document.getElementById("school").src = "school.jpg";
	          document.getElementById("schoolFlex").style.display = "block";
	          document.getElementById("schoolGrind").style.display = "block";
	          document.getElementById("openMap").style.display = "block";
	          document.getElementById("work").style.display = "none";
	          document.getElementById("wildGabriel").style.display = "none";
	          time = 3;
	      }, 250);
	  }

	  function dayUpdate() {
	      totalDay++;
	      day++;
	      flag = totalDay % 7
	      //Changes month.
	      if (totalDay == 10) {
	          day = 1;
	          month = "June";
	      }
	      //Updates week.
	      if (flag == 0) {
	          week++;
	      }
	      //Updates the date.
	      document.getElementById("monthDayText").innerHTML = month + " " + day + ", " + (dayName[totalDay - (7 * week)]) + ", 2018";
	      //Tests. Weekly, every Friday.
	      if (totalDay == 4 || totalDay == 11 || totalDay == 18 || totalDay == 25) {
	          textBoxAppears(3);
	          textBoxAppears(2);
	          document.getElementById("tBoxText3").innerHTML = "You had a test today...";
	          if (intel >= (totalDay * 6)) {
	              document.getElementById("tBoxText2").innerHTML = "You passed! <br> Your reward is nothing!";
	          } else if (intel < (totalDay * 6)) {
	              document.getElementById("tBoxText2").innerHTML = "You failed! Maybe if you study around 6 times a week you'd pass. You spend the next two days studying.";
	              intel = (totalDay * 6);
	              document.getElementById("int").innerHTML = "INT " + intel;
	              day = day + 2
	              totalDay = totalDay + 2
	              document.getElementById("monthDayText").innerHTML = month + " " + day + ", " + (dayName[totalDay - (7 * week)]) + ", 2018";
	          }
	          if (totalDay == 25) {
	              textBoxAppears(1);
	              document.getElementById("tBoxText1").innerHTML = "Your final exam is coming up next week! Better study hard!";
	          }
	          //Final Exam. Decides whether or not you get worst ending.
	      } else if (totalDay == 32) {
	          textBoxAppears(2);
	          textBoxAppears(1);
	          document.getElementById("tBoxText2").innerHTML = "You had your final exam today...";
	          if (intel >= (totalDay * 6)) {
	              document.getElementById("tBoxText1").innerHTML = "You passed! <br> Your reward is still nothing!";
	              finalExam = true;
	          } else if (intel < (totalDay * 6)) {
	              document.getElementById("tBoxText1").innerHTML = "You failed your exam! Your parents ground you for a week.";
	              document.getElementById("monthDayText").innerHTML = month + " " + day + ", " + (dayName[totalDay - (7 * week)]) + ", 2018";
	          }
	      } else if (totalDay == 33 && finalExam === false) {
	          document.getElementById("schoolFlex").style.display = "none";
	          document.getElementById("schoolGrind").style.display = "none";
	          document.getElementById("openMap").style.display = "none";
	          document.getElementById("mapHome").style.display = "none";
	          document.getElementById("mapSchool").style.display = "none";
	          document.getElementById("mapWork").style.display = "none";
	          document.getElementById("mapPark").style.display = "none";
	          document.getElementById("openStore").style.display = "none";
	          document.getElementById("converse").style.display = "none";
	          document.getElementById("wildGabriel").style.display = "none";
	          document.getElementById("right1").style.display = "none";
	          document.getElementById("wrong1").style.display = "none";
	          document.getElementById("right2").style.display = "none";
	          document.getElementById("wrong2").style.display = "none";
	          document.getElementById("right3").style.display = "none";
	          document.getElementById("wrong3").style.display = "none";
	          document.getElementById("monsterRun").style.display = "none";
	          document.getElementById("mapStore").style.display = "none";
	          document.getElementById("wildGabriel").style.display = "none";
	          document.getElementById("wait").style.display = "none";
	          document.getElementById("andyShop").style.display = "none";
	          document.getElementById("andyShop").style.display = "none";
	          document.getElementById("andyClose").style.display = "none";
	          document.getElementById("storeBG2").style.display = "none";
	          document.getElementById("openInv").style.display = "none";
	          audio.pause();
	          for (i = 1; i < 8; i++) {
	              textBoxAppears(i);
	          }
	          //Worst Ending
	          document.getElementById("tBoxText7").innerHTML = "Today is Gabriel's final day in this country.";
	          document.getElementById("tBoxText6").innerHTML = "Unfortunately, your parents grounded you for failing your final exam.";
	          document.getElementById("tBoxText5").innerHTML = "You try and call him but he does not answer.";
	          document.getElementById("tBoxText4").innerHTML = "You call other people that know him.";
	          document.getElementById("tBoxText3").innerHTML = "They say that he's been gone for a couple hours now.";
	          document.getElementById("tBoxText2").innerHTML = "You failed to confess your love to Gabriel, all because you refused to study.";
	          document.getElementById("tBoxText1").innerHTML = "WORST END.";
	      } else if (totalDay == 33 && finalExam === true) {
	          for (i = 6; i < 8; i++) {
	              textBoxAppears(i);
	          }
	          document.getElementById("tBox1").style.display = "none";
	          document.getElementById("tBoxText7").innerHTML = "Today is Gabriel's final day in this country.";
	          document.getElementById("tBoxText6").innerHTML = "You rush out to see him leave, to confess your feelings.";
	          //Pause audio for dramatic effect.
	          audio.pause();
	          //Leads to plotMover
	          document.getElementById("black").style.display = "block";
	      }
	  }

	  function plotMover() {
	      document.getElementById("black").style.display = "none";
	      document.getElementById("school").src = "airport.jpg";
	      document.getElementById("gabbomain").style.display = "block";
	      document.getElementById("schoolFlex").style.display = "none";
	      document.getElementById("schoolGrind").style.display = "none";
	      document.getElementById("openMap").style.display = "none";
	      document.getElementById("mapHome").style.display = "none";
	      document.getElementById("mapSchool").style.display = "none";
	      document.getElementById("mapWork").style.display = "none";
	      document.getElementById("mapPark").style.display = "none";
	      document.getElementById("openStore").style.display = "none";
	      document.getElementById("converse").style.display = "none";
	      document.getElementById("wildGabriel").style.display = "none";
	      document.getElementById("right1").style.display = "none";
	      document.getElementById("wrong1").style.display = "none";
	      document.getElementById("right2").style.display = "none";
	      document.getElementById("wrong2").style.display = "none";
	      document.getElementById("right3").style.display = "none";
	      document.getElementById("wrong3").style.display = "none";
	      document.getElementById("monsterRun").style.display = "none";
	      document.getElementById("mapStore").style.display = "none";
	      document.getElementById("wildGabriel").style.display = "none";
	      document.getElementById("wait").style.display = "none";
	      document.getElementById("andyShop").style.display = "none";
	      document.getElementById("andyShop").style.display = "none";
	      document.getElementById("andyClose").style.display = "none";
	      document.getElementById("storeBG2").style.display = "none";
	      document.getElementById("openInv").style.display = "none";
	      musicChng(13);
	      for (i = 1; i < 8; i++) {
	          textBoxAppears(i);
	      }
	      if (RP < 2000) {
	          document.getElementById("tBoxText7").innerHTML = "Gabriel: <br><br>Hey.";
	          document.getElementById("tBoxText6").innerHTML = "You greet him back.";
	          document.getElementById("tBoxText5").innerHTML = "You work up the courage and confess your love to him.";
	          document.getElementById("blankMover1").style.display = "block";
	          document.getElementById("tBoxText4").innerHTML = "Gabriel: <br><br> I barely even know you that well.";
	          document.getElementById("tBoxText3").innerHTML = "Gabriel: <br><br> Maybe if we talked more and I knew you better, it could work. But no.";
	          document.getElementById("blankMover6").style.display = "block"
	          document.getElementById("tBoxText2").innerHTML = "Gabriel leaves and boards his plane. You sit there, defeated.";
	          document.getElementById("tBoxText1").innerHTML = "BAD END.";
	          //Anderson secret ending can occur in Bad and Good ending.
	          if (itemArray[6][2] == 1 && itemArray[7][2] == 1 && itemArray[8][2] == 1) {
	              document.getElementById("blankMover4").style.display = "block";
	          }
	      } else if (RP >= 4000) {
	          document.getElementById("tBoxText7").innerHTML = "Gabriel: <br><br>Hey.";
	          document.getElementById("tBoxText6").innerHTML = "You greet him back.";
	          document.getElementById("tBoxText5").innerHTML = "You work up the courage and confess your love to him.";
	          document.getElementById("blankMover2").style.display = "block";
	          document.getElementById("tBoxText4").innerHTML = "Gabriel: <br><br> Oh my g*sh.";
	          document.getElementById("tBoxText3").innerHTML = "Gabriel: <br><br> Yes! The distance between us will make it difficult but I will try and make it work between us.";
	          document.getElementById("blankMover6").style.display = "block"
	          document.getElementById("tBoxText2").innerHTML = "Gabriel leaves and boards his plane. You tearfully wave goodbye.";
	          document.getElementById("tBoxText1").innerHTML = "BEST END.";
	      } else if (RP >= 2000) {
	          document.getElementById("tBoxText7").innerHTML = "Gabriel: <br><br>Hey.";
	          document.getElementById("tBoxText6").innerHTML = "You greet him back.";
	          document.getElementById("tBoxText5").innerHTML = "You work up the courage and confess your love to him.";
	          document.getElementById("blankMover3").style.display = "block";
	          document.getElementById("tBoxText4").innerHTML = "Gabriel: <br><br> Oh man.";
	          document.getElementById("tBoxText3").innerHTML = "Gabriel: <br><br> I feel the same way, but I feel that it won't work between us now because of the distance. <br>Sorry, but goodbye.";
	          document.getElementById("blankMover6").style.display = "block"
	          document.getElementById("tBoxText2").innerHTML = "Gabriel leaves and boards his plane. You sadly wave goodbye, heartbroken, but happy knowing he feels the same.";
	          document.getElementById("tBoxText1").innerHTML = "GOOD END.";
	          if (itemArray[6][2] == 1 && itemArray[7][2] == 1 && itemArray == [8][2]) {
	              document.getElementById("blankMover4").style.display = "block";
	          }
	      }
	  }
	  //Gabriel dipsets
	  function disappear() {
	      document.getElementById("gabbomain").style.display = "none";
	      document.getElementById("blankMover6").style.display = "none";
	  }
	  //Changes Gabriel and music to suit the occasion. Some of these are in comments to prevent codebreaks.
	  function endings(id) {
	      if (id == 1) {
	          document.getElementById("gabbomain").src = "gabbowhat.png";
	          //musicChng(9);
	      } else if (id == 2) {
	          document.getElementById("gabbomain").src = "gabbohappy.png";
	          //musicChng(11);
	      } else if (id == 3) {
	          document.getElementById("gabbomain").src = "gabbothink.png";
	          //musicChng(10);
	      } else if (id == 4) {
	          document.getElementById("gabbomain").src = "gabbothink.png";
	          //musicChng(12);
	          for (i = 1; i < 8; i++) {
	              textBoxAppears(i);
	          }
	          document.getElementById("tBoxText7").innerHTML = "You feel a hand tap your shoulder.";
	          document.getElementById("tBoxText6").innerHTML = "Anderson: <br><br> That's rough, buddy.";
	          document.getElementById("tBoxText5").innerHTML = "Anderson: <br><br> Sorry it didn't work out with Gabriel.";
	          document.getElementById("tBoxText4").innerHTML = "Anderson: <br><br> If you want, maybe you and I could work out.";
	          document.getElementById("tBoxText3").innerHTML = "Anderson: <br><br> You wanna try?";
	          document.getElementById("tBoxText2").innerHTML = "Anderson: <br><br> ... <br><br> You don't talk a lot, huh?";
	          document.getElementById("tBoxText1").innerHTML = "SECRET END.";
	      } else if (id == 5) {
	          //musicChng(8);
	      }
	      document.getElementById("blankMover" + id).style.display = "none";
	  }
	  //Shop stuff
	  function buyItem(id) {
	      if (id == 1) {
	          if (cash < 2) {
	              textBoxAppears(1);
	              document.getElementById("tBoxText1").innerHTML = "You need $2 to buy a Patty.";
	              return;
	          }
	          textBoxAppears(1);
	          document.getElementById("tBoxText1").innerHTML = "You buy a Patty.";
	          cash = cash - 2;
	          document.getElementById("money").innerHTML = "MONEY $" + cash;
	          itemArray[0][1]++;
	      }
	      if (id == 2) {
	          if (cash < 40) {
	              textBoxAppears(1);
	              document.getElementById("tBoxText1").innerHTML = "You need $40 to buy a Gundam.";
	              return;
	          }
	          textBoxAppears(1);
	          document.getElementById("tBoxText1").innerHTML = "You buy a Gundam.";
	          cash = cash - 40;
	          document.getElementById("money").innerHTML = "MONEY $" + cash;
	          itemArray[1][1]++;
	      }
	      if (id == 3) {
	          if (cash < 30) {
	              textBoxAppears(1);
	              document.getElementById("tBoxText1").innerHTML = "You need $30 to buy a Video Game.";
	              return;
	          }
	          textBoxAppears(1);
	          document.getElementById("tBoxText1").innerHTML = "You buy a Video Game.";
	          cash = cash - 30;
	          document.getElementById("money").innerHTML = "MONEY $" + cash;
	          itemArray[2][1]++;
	      }
	      if (id == 4) {
	          if (cash < 15) {
	              textBoxAppears(1);
	              document.getElementById("tBoxText1").innerHTML = "You need $15 to buy a Manga Volume.";
	              return;
	          }
	          textBoxAppears(1);
	          document.getElementById("tBoxText1").innerHTML = "You buy a Manga Volume.";
	          cash = cash - 15;
	          document.getElementById("money").innerHTML = "MONEY $" + cash;
	          itemArray[3][1]++;
	      }
	      if (id == 5) {
	          if (cash < 6) {
	              textBoxAppears(1);
	              document.getElementById("tBoxText1").innerHTML = "You need $6 to buy a Card Pack.";
	              return;
	          }
	          textBoxAppears(1);
	          document.getElementById("tBoxText1").innerHTML = "You buy a Card Pack.";
	          cash = cash - 6;
	          document.getElementById("money").innerHTML = "MONEY $" + cash;
	          itemArray[4][1]++;
	      }
	      if (id == 6) {
	          if (cash < 20) {
	              textBoxAppears(1);
	              document.getElementById("tBoxText1").innerHTML = "You need $20 to buy a Collectible Vinyl Figure.";
	              return;
	          }
	          textBoxAppears(1);
	          document.getElementById("tBoxText1").innerHTML = "You buy a Collectible Vinyl Figure.";
	          cash = cash - 20;
	          document.getElementById("money").innerHTML = "MONEY $" + cash;
	          itemArray[5][1]++;
	      }
	      if (id == 7) {
	          if (cash < 50 || itemArray[0][1] < 2) {
	              textBoxAppears(1);
	              document.getElementById("tBoxText1").innerHTML = "You need $50 and 2 patties to buy a Fight Stick from Anderson.";
	              return;
	          } else if (itemArray[6][2] != 0) {
	              textBoxAppears(1);
	              document.getElementById("tBoxText1").innerHTML = "You already bought one, I just can't give you another. <br>I'm running a business here.";
	              return;
	          }
	          textBoxAppears(1);
	          document.getElementById("tBoxText1").innerHTML = "You buy a Fight Stick from Anderson.";
	          cash = cash - 50;
	          document.getElementById("money").innerHTML = "MONEY $" + cash;
	          itemArray[0][1] -= 2
	          itemArray[6][1]++;
	          itemArray[6][2]++;
	      }
	      if (id == 8) {
	          if (cash < 50 || itemArray[0][1] < 3) {
	              textBoxAppears(1);
	              document.getElementById("tBoxText1").innerHTML = "You need $50 and 3 patties to buy a Vinyl Figure Set from Anderson.";
	              return;
	          } else if (itemArray[7][2] != 0) {
	              textBoxAppears(1);
	              document.getElementById("tBoxText1").innerHTML = "You already bought one, I just can't give you another. <br>I'm running a business here.";
	              return;
	          }
	          textBoxAppears(1);
	          document.getElementById("tBoxText1").innerHTML = "You buy a Vinyl Figure Set from Anderson.";
	          cash = cash - 50;
	          document.getElementById("money").innerHTML = "MONEY $" + cash;
	          itemArray[0][1] -= 3;
	          itemArray[7][1]++;
	          itemArray[7][2]++;
	      }
	      if (id == 9) {
	          if (cash < 169 || itemArray[0][1] < 5) {
	              textBoxAppears(1);
	              document.getElementById("tBoxText1").innerHTML = "You need $169 and 5 patties to buy this item from Anderson.";
	              return;
	          } else if (itemArray[8][2] != 0) {
	              textBoxAppears(1);
	              document.getElementById("tBoxText1").innerHTML = "You already bought one, I just can't give you another. <br>I'm running a business here.";
	              return;
	          }
	          textBoxAppears(1);
	          document.getElementById("tBoxText1").innerHTML = "You buy an Ikea Markus Swivel Chair from Anderson.";
	          cash = cash - 169;
	          document.getElementById("money").innerHTML = "MONEY $" + cash;
	          itemArray[0][1] -= 5;
	          itemArray[8][1]++;
	          itemArray[8][2]++;
	      }
	  }

	  function openStore() {
	      for (i = 1; i <= 6; i++) {
	          document.getElementById("buyItem" + i).style.display = "block";
	      }
	      document.getElementById("Patty2").style.display = "block";
	      document.getElementById("Gundam2").style.display = "block";
	      document.getElementById("VideoGame2").style.display = "block";
	      document.getElementById("Manga2").style.display = "block";
	      document.getElementById("CardPack2").style.display = "block";
	      document.getElementById("Figure2").style.display = "block";
	      document.getElementById("openStore").style.display = "none";
	      document.getElementById("closeStore").style.display = "block";
	      document.getElementById("storeBG").style.display = "block";
		  document.getElementById("openInv").style.display = "none";
	  }

	  function closeStore() {
	      for (i = 1; i <= 6; i++) {
	          document.getElementById("buyItem" + i).style.display = "none";
	      }
	      document.getElementById("Patty2").style.display = "none";
	      document.getElementById("Gundam2").style.display = "none";
	      document.getElementById("VideoGame2").style.display = "none";
	      document.getElementById("Manga2").style.display = "none";
	      document.getElementById("CardPack2").style.display = "none";
	      document.getElementById("Figure2").style.display = "none";
	      document.getElementById("openStore").style.display = "block";
	      document.getElementById("closeStore").style.display = "none";
	      document.getElementById("storeBG").style.display = "none";
		  document.getElementById("openInv").style.display = "block";
	  }

	  function openInv() {
	      for (i = 1; i <= 9; i++) {
	          document.getElementById("inv" + i).style.display = "block";
	      }
	      document.getElementById("Patty").style.display = "block";
	      document.getElementById("Gundam").style.display = "block";
	      document.getElementById("VideoGame").style.display = "block";
	      document.getElementById("Manga").style.display = "block";
	      document.getElementById("CardPack").style.display = "block";
	      document.getElementById("Figure").style.display = "block";
	      document.getElementById("Stick").style.display = "block";
	      document.getElementById("FunkoSet").style.display = "block";
	      document.getElementById("Chair").style.display = "block";
	      document.getElementById("closeInv").style.display = "block";
	      document.getElementById("invBG").style.display = "block";
		  document.getElementById("openMap").style.display = "none";
	  }

	  function closeInv() {
	      for (i = 1; i <= 9; i++) {
	          document.getElementById("inv" + i).style.display = "none";
	      }
	      document.getElementById("Patty").style.display = "none";
	      document.getElementById("Gundam").style.display = "none";
	      document.getElementById("VideoGame").style.display = "none";
	      document.getElementById("Manga").style.display = "none";
	      document.getElementById("CardPack").style.display = "none";
	      document.getElementById("Figure").style.display = "none";
	      document.getElementById("Stick").style.display = "none";
	      document.getElementById("FunkoSet").style.display = "none";
	      document.getElementById("Chair").style.display = "none";
	      document.getElementById("closeInv").style.display = "none";
	      document.getElementById("invBG").style.display = "none";
		  document.getElementById("openMap").style.display = "block";
	  }

	  function textBoxAppears(id) {
	      document.getElementById("tBox" + id).style.display = "block";
	      document.getElementById("blank" + id).style.display = "block";
	  }

	  function textMover(id) {
	      document.getElementById("tBox" + id).style.display = "none";
	      document.getElementById("blank" + id).style.display = "none";
	      if (id == 1) {
	          if (flagThree == 1) {
	              document.getElementById("gabbomain").style.display = "none";
	              flagThree = 0;
	          }
	      }
	  }

	  function mugging() {
	      flag = Math.floor(Math.random() * 20)
	      if (flag == 1 && str < (totalDay * 5)) {
	          textBoxAppears(1);
	          document.getElementById("tBoxText1").innerHTML = "On your way to your destination, a man in a ski mask threatened you and stole 75% of your money. <br><br>He said he needed water.";
	          cash = Math.round(cash - (cash * .75));
	          document.getElementById("money").innerHTML = "MONEY $" + cash;
	      } else if (flag == 1 && str >= (totalDay * 5)) {
	          textBoxAppears(1);
	          document.getElementById("tBoxText1").innerHTML = "On your way to your destination, a man in a ski mask threatened to steal exactly 75% of your money. <br><br>You overpowered the burglar with your bulging muscles.";
	      }
	  }
	  //Flavour text and Gabriel Gifting code.
	  function invCheck(id) {
	      if (gabTalk >= 1 && itemArray[id - 1][1] >= 1 && RP > 500) {
	          textBoxAppears(1);
	          textBoxAppears(2);
	          textBoxAppears(3);
	          flag = itemArray[id - 1][0];
	          if (flag == "Patty") {
	              document.getElementById("tBoxText1").innerHTML = "Gabriel eats the patty. +5 Relationship Points";
	              document.getElementById("tBoxText2").innerHTML = "Gabriel: <br><br>Oh, thanks, I was getting hungry.";
	              document.getElementById("tBoxText3").innerHTML = "You give Gabriel a Patty.";
	              RP = RP + 5
	              document.getElementById("rptext").innerHTML = "RELATIONSHIP POINTS " + RP;
	              itemArray[id - 1][1]--
	          } else if (flag == "Gundam") {
	              document.getElementById("tBoxText1").innerHTML = "Gabriel takes the Gundam and puts it in his backpack. +150RP";
	              document.getElementById("tBoxText2").innerHTML = "Gabriel: <br><br>Oh, thanks, I was thinking of getting this one.";
	              document.getElementById("tBoxText3").innerHTML = "You give Gabriel a Gundam.";
	              RP = RP + 200
	              document.getElementById("rptext").innerHTML = "RELATIONSHIP POINTS " + RP;
	              itemArray[id - 1][1]--
	          } else if (flag == "Video Game") {
	              document.getElementById("tBoxText1").innerHTML = "Gabriel takes the Video Game and puts it in his backpack. +120RP";
	              document.getElementById("tBoxText2").innerHTML = "Gabriel: <br><br>Oh man! I've been meaning to play this. Thanks!";
	              document.getElementById("tBoxText3").innerHTML = "You give Gabriel the Video Game.";
	              RP = RP + 150
	              document.getElementById("rptext").innerHTML = "RELATIONSHIP POINTS " + RP;
	              itemArray[id - 1][1]--
	          } else if (flag == "Manga") {
	              document.getElementById("tBoxText1").innerHTML = "Reading at the park seems like a good idea.";
	              document.getElementById("tBoxText2").innerHTML = "Gabriel: <br><br>Nah, you can keep it. I'm not into that series. If you want to read it, go do it at the park, it's nice there.";
	              document.getElementById("tBoxText3").innerHTML = "You try to give Gabriel the Manga Set.";
	          } else if (flag == "Card Pack") {
	              document.getElementById("tBoxText3").innerHTML = "You give Gabriel the Card Pack.";
	              flag = Math.floor((Math.random() * 6) + 1)
	              console.log(flag)
	              if (flag == 6) {
	                  RP = RP + 250
	                  document.getElementById("rptext").innerHTML = "RELATIONSHIP POINTS " + RP;
	                  document.getElementById("tBoxText1").innerHTML = "Gabriel carefully puts the card into his backpack. +250RP";
	                  document.getElementById("tBoxText2").innerHTML = "Gabriel:<br><br>I GOT A SECRET RARE!! Thank you so much!";
	              } else if (flag == 5 || flag == 4) {
	                  RP = RP + 20
	                  document.getElementById("rptext").innerHTML = "RELATIONSHIP POINTS " + RP;
	                  document.getElementById("tBoxText1").innerHTML = "Gabriel puts the card into his backpack. +20RP";
	                  document.getElementById("tBoxText2").innerHTML = "Gabriel:<br><br>Sweet! A reverse holo card. Thanks!";
	              } else {
	                  RP = RP + 5
	                  document.getElementById("rptext").innerHTML = "RELATIONSHIP POINTS " + RP;
	                  document.getElementById("tBoxText1").innerHTML = "Gabriel puts the cards into his backpack. +5RP";
	                  document.getElementById("tBoxText2").innerHTML = "Gabriel:<br><br>Just some commons. Thanks anyway.";
	              }
	              itemArray[id - 1][1]--
	          } else if (flag == "Collectible Vinyl Figurine") {
	              document.getElementById("tBoxText1").innerHTML = "Gabriel takes the figurine and puts it in his backpack. +90RP";
	              document.getElementById("tBoxText2").innerHTML = "Gabriel: <br><br>Thanks! I don't have this one yet.";
	              document.getElementById("tBoxText3").innerHTML = "You give Gabriel a Collectible Vinyl Figurine.";
	              RP = RP + 200
	              document.getElementById("rptext").innerHTML = "RELATIONSHIP POINTS " + RP;
	              itemArray[id - 1][1]--
	          } else if (flag == "Fight Stick Game Controller") {
	              document.getElementById("tBoxText1").innerHTML = "Gabriel takes the Fight Stick and puts it in his backpack. +300RP";
	              document.getElementById("tBoxText2").innerHTML = "Gabriel: <br><br>Oh heck yeah! I don't have one of these, it'll make my gameplay so much easier now. Thanks, I mean it!";
	              document.getElementById("tBoxText3").innerHTML = "You give Gabriel a Fight Stick Game Controller.";
	              RP = RP + 600
	              document.getElementById("rptext").innerHTML = "RELATIONSHIP POINTS " + RP;
	              itemArray[id - 1][1]--
	          } else if (flag == "Vinyl Figurine Set") {
	              document.getElementById("tBoxText1").innerHTML = "Gabriel takes the Figurine Set and puts it in his backpack. +200RP";
	              document.getElementById("tBoxText2").innerHTML = "Gabriel: <br><br>I saw Anderson buy one of these about 3 weeks ago. Such a clean set for my collection.";
	              document.getElementById("tBoxText3").innerHTML = "You give Gabriel the Vinyl Figurine Set.";
	              RP = RP + 900
	              document.getElementById("rptext").innerHTML = "RELATIONSHIP POINTS " + RP;
	              itemArray[id - 1][1]--
	          } else if (flag == "Ikea Markus Swivel Chair") {
	              document.getElementById("tBoxText1").innerHTML = "Gabriel takes the chair and puts it in his backpack. He is confused too. +250RP";
	              document.getElementById("tBoxText2").innerHTML = "Gabriel: <br><br>Where did you even put this? I mean, thanks, but how?";
	              document.getElementById("tBoxText3").innerHTML = "You give Gabriel the Chair.";
	              RP = RP + 2000
	              document.getElementById("rptext").innerHTML = "RELATIONSHIP POINTS " + RP;
	              itemArray[id - 1][1]--
	          }
	      } else if (itemArray[id - 1][1] >= 1) {
	          textBoxAppears(1);
	          flag = itemArray[id - 1][0];
	          if (flag == "Patty") {
	              document.getElementById("tBoxText1").innerHTML = "It's a spicy beef patty. Nothing really special about it.";
	          } else if (flag == "Gundam") {
	              document.getElementById("tBoxText1").innerHTML = "It's a Gundam. It says 'MASTER GRADE' on the side in big gold letters. You think they all look the same anyways.";
	          } else if (flag == "Video Game") {
	              flagTwo = Math.floor(Math.random() * 6);
	              if (flagTwo == 0) {
	                  document.getElementById("tBoxText1").innerHTML = "It's Request of Responsibility: Shade Operation the Second. These games always get rated high for no reason.";
	              }
	              if (flagTwo == 1) {
	                  document.getElementById("tBoxText1").innerHTML = "It's Ultra Person 15. They keep making the same game to appeal to the older audience. Who needs the youth market, right?";
	              }
	              if (flagTwo == 2) {
	                  document.getElementById("tBoxText1").innerHTML = "It's Persona(l) 5. It has some sweet jazz. Oh yeah the game's pretty cool, too.";
	              }
	              if (flagTwo == 3) {
	                  document.getElementById("tBoxText1").innerHTML = "It's Minecraft.";
	              }
	              if (flagTwo == 4) {
	                  document.getElementById("tBoxText1").innerHTML = "It's Samus Aran. You play as Metroid in this game. You wonder why they didn't just name the game after the main character.";
	              }
	              if (flagTwo == 5) {
	                  document.getElementById("tBoxText1").innerHTML = "It's Interstellar Hound for that new Bintendo console. This series is infamous for not having had a sequel in almost 15 years.";
	              }
	          } else if (flag == "Manga") {
	              document.getElementById("tBoxText1").innerHTML = "It's a 10 volume set of Tokyo Mew Mew. Classic, but garbage.";
	              if (flagTwo == 2 && andyShopFlag == 0) {
	                  textBoxAppears(2);
	                  textBoxAppears(3);
	                  textBoxAppears(4);
	                  textBoxAppears(5);
	                  textBoxAppears(6);
	                  textBoxAppears(7);
	                  document.getElementById("tBoxText7").innerHTML = "You feel a tap on your shoulder and hear a voice from behind you.";
	                  document.getElementById("tBoxText6").innerHTML = "???:<br><br>Hey are you going to finish that?";
	                  document.getElementById("tBoxText5").innerHTML = "You turn around, silent.";
	                  document.getElementById("tBoxText4").innerHTML = "???:<br><br>The manga. Are you going to finish that? It's something I've been wanting to read for a while.";
	                  document.getElementById("tBoxText3").innerHTML = "You awkwardly stammer, but agree to let him read your copy.";
	                  document.getElementById("tBoxText2").innerHTML = "Anderson:<br><br>Thanks, dude. I got a buncha stuff for sale if you're interested, by the way. I'm trying to get a new computer. <br>I take both cash and beef patties as payment.";
	                  document.getElementById("tBoxText1").innerHTML = "Unlocked Anderson's Shop.";
	                  andyShopFlag = 1;
	                  document.getElementById("andyShop").style.display = "block";
	              }
	          } else if (flag == "Card Pack") {
	              document.getElementById("tBoxText1").innerHTML = "It's a pack of trading cards. There's a chance at opening a rare card. I think Gabriel'd like that a lot.";
	          } else if (flag == "Collectible Vinyl Figurine") {
	              document.getElementById("tBoxText1").innerHTML = "Is this what action figures are now? Such a large head.";
	          } else if (flag == "Fight Stick Game Controller") {
	              document.getElementById("tBoxText1").innerHTML = "It looks like the controls to an arcade machine. Really good for fighting games.<br> No, Smash Bros. is not a fighting game.";
	          } else if (flag == "Vinyl Figurine Set") {
	              document.getElementById("tBoxText1").innerHTML = "A whole set of those big headed figurines.";
	          } else if (flag == "Ikea Markus Swivel Chair") {
	              document.getElementById("tBoxText1").innerHTML = "It's a whole G*d d*ng chair. Why did you buy this? Why did Anderson sell you a chair? There are many questions to ask.";
	          }
	      } else {
	          textBoxAppears(1);
	          document.getElementById("tBoxText1").innerHTML = "You don't have one of these.";
	      }
	  }

	  function andyShop() {
	      for (i = 7; i <= 9; i++) {
	          document.getElementById("buyItem" + i).style.display = "block";
	      }
	      textBoxAppears(1);
	      document.getElementById("tBoxText1").innerHTML = "Anderson: <br><br>Oh hey man. Come to buy some stuff?";
	      document.getElementById("Stick2").style.display = "block";
	      document.getElementById("FunkoSet2").style.display = "block";
	      document.getElementById("Chair2").style.display = "block";
	      document.getElementById("andyShop").style.display = "none";
	      document.getElementById("andyClose").style.display = "block";
	      document.getElementById("storeBG2").style.display = "block";
		  document.getElementById("openMap").style.display = "none";
		  document.getElementById("openInv").style.display = "none";
	  }

	  function closeAndy() {
	      for (i = 7; i <= 9; i++) {
	          document.getElementById("buyItem" + i).style.display = "none";
	      }
	      document.getElementById("Stick2").style.display = "none";
	      document.getElementById("FunkoSet2").style.display = "none";
	      document.getElementById("Chair2").style.display = "none";
	      document.getElementById("andyShop").style.display = "block";
	      document.getElementById("andyClose").style.display = "none";
	      document.getElementById("storeBG2").style.display = "none";
		  document.getElementById("openMap").style.display = "block";
		  document.getElementById("openInv").style.display = "block";
	  }

	  function leaveGab() {
	      document.getElementById("gabbomain").style.display = "none";
	      document.getElementById("converse").style.display = "none";
	      document.getElementById("leave").style.display = "none";
	      document.getElementById("date").style.display = "none";
	      textBoxAppears(1);
	      document.getElementById("tBoxText1").innerHTML = "Gabriel: <br><br>Seeya.";
	      gabTalk = 0;
	  }
	  //Date stuff. Kinda lackluster, I know, but time constraints'll do that to ya.
	  function goDate() {
	      if (RP > 1200 || talkFlag == 3) {
	          alert("You go on a date with Gabriel. +500RP");
	          RP = RP + 500
	          document.getElementById("rptext").innerHTML = "RELATIONSHIP POINTS " + RP;
	          gabTalk = 0;
	          document.getElementById("gabbomain").style.display = "none";
	          document.getElementById("leave").style.display = "none";
	          document.getElementById("date").style.display = "none";
	          document.getElementById("converse").style.display = "none";
	          document.getElementById("openInv").style.display = "block";
	          document.getElementById("openMap").style.display = "block";
	          dayUpdate();
	      } else {
	          document.getElementById("gabbomain").src = "gabbowhat.png";
	          textBoxAppears(1);
	          document.getElementById("tBoxText1").innerHTML = "Gabriel: <br><br>Whoa chill out man, I don't know you like that.";
	      }
	  }
	  //Intro.
	  function opener() {
	      for (i = 1; i < 8; i++) {
	          textBoxAppears(i);
	      }
	      document.getElementById("tBoxText7").innerHTML = "For your entire high school life, you've had a crush on one guy: Gabriel Tolentino.";
	      document.getElementById("tBoxText6").innerHTML = "Unfortunately, your shyness has prevented you from pursuing him. However, you hear that he's leaving the country at the end of the school year.";
	      document.getElementById("tBoxText5").innerHTML = "So, today onward, you decide to come out of your shell and finally confess before he leaves.";
	      document.getElementById("tBoxText4").innerHTML = "[Welcome to Love Gab Simulator! This is one of the Lead Coders speaking!]";
	      document.getElementById("tBoxText3").innerHTML = "[This game has you, the player, trying to romance Gabriel. At the end of every day, such as when it hits 9PM, the day will reset back to 3PM.]";
	      document.getElementById("tBoxText2").innerHTML = "[This is because the game takes place after the player wakes up or leaves school.]";
	      document.getElementById("tBoxText1").innerHTML = "[To do things, simply click around! To talk to Gabriel, click him. Good luck!]";
	  }