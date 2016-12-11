/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         
         if(screen.width<screen.height) {
         //alert($(window).width());
         sym.stop("750");
         }
         else
         {
         //alert($(window).width());
         sym.stop("1300");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "window", "orientationchange", function(sym, e) {
         
         if(screen.width<screen.height) {
         //alert($(window).width());
         sym.stop("750");
         }
         else
         {
         //alert($(window).width());
         sym.stop("1300");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "window", "resize", function(sym, e) {
         
         if(screen.width<screen.height) {
         //alert($(window).width());
         sym.stop("750");
         }
         else
         {
         //alert($(window).width());
         sym.stop("1300");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         
         if(screen.width<screen.height) {
         //alert($(window).width());
         sym.stop("750");
         }
         else
         {
         //alert($(window).width());
         sym.stop("1300");
         }
         
         
         var stageWidth = $('#Stage').width();
         var stageHeight = $('#Stage').height();
         
         // box2
         var Ellipse_R_1_LMinPosX = 686;
         var Ellipse_R_1_LMaxPosX = 686;
         var Ellipse_R_1_LMinPosY = 90;
         var Ellipse_R_1_LMaxPosY = 84;
         
         
         
         sym.onMouseMove = function( pageX, pageY ){
         	// move box2
         	var Ellipse_R_1_LRequestPosX = sym.getTranslation(0, stageWidth, Ellipse_R_1_LMinPosX, Ellipse_R_1_LMaxPosX, pageX);
         	var Ellipse_R_1_LRequestPosY = sym.getTranslation(0, stageHeight, Ellipse_R_1_LMinPosY, Ellipse_R_1_LMaxPosY, pageY);
         	sym.$("Ellipse_R_1_L").css({left:Ellipse_R_1_LRequestPosX, top:Ellipse_R_1_LRequestPosY});
         
         	// box
         
         
         
         
         	var Ellipse_R_2_LMinPosX = 810;
         var Ellipse_R_2_LMaxPosX = 810;
         var Ellipse_R_2_LMinPosY = 36;
         var Ellipse_R_2_LMaxPosY = 49;
         
         
         	// move box
         	var Ellipse_R_2_LRequestPosX = sym.getTranslation(0, stageWidth, Ellipse_R_2_LMinPosX, Ellipse_R_2_LMaxPosX, pageX);
         	var Ellipse_R_2_LRequestPosY = sym.getTranslation(0, stageHeight, Ellipse_R_2_LMinPosY, Ellipse_R_2_LMaxPosY, pageY);
         	sym.$("Ellipse_R_2_L").css({left:Ellipse_R_2_LRequestPosX, top:Ellipse_R_2_LRequestPosY});
         
         		var Ellipse_R_3_LMinPosX = 738;
         var Ellipse_R_3_LMaxPosX = 748;
         var Ellipse_R_3_LMinPosY = 32;
         var Ellipse_R_3_LMaxPosY = 42;
         
         
         	// move box
         	var Ellipse_R_3_LRequestPosX = sym.getTranslation(0, stageWidth, Ellipse_R_3_LMinPosX, Ellipse_R_3_LMaxPosX, pageX);
         	var Ellipse_R_3_LRequestPosY = sym.getTranslation(0, stageHeight, Ellipse_R_3_LMinPosY, Ellipse_R_3_LMaxPosY, pageY);
         	sym.$("Ellipse_R_3_L").css({left:Ellipse_R_3_LRequestPosX, top:Ellipse_R_3_LRequestPosY});
         
         	var Ellipse_R_4_LMinPosX = 530;
         var Ellipse_R_4_LMaxPosX = 540;
         var Ellipse_R_4_LMinPosY = 57;
         var Ellipse_R_4_LMaxPosY = 67;
         
         
         	// move box
         	var Ellipse_R_4_LRequestPosX = sym.getTranslation(0, stageWidth, Ellipse_R_4_LMinPosX, Ellipse_R_4_LMaxPosX, pageX);
         	var Ellipse_R_4_LRequestPosY = sym.getTranslation(0, stageHeight, Ellipse_R_4_LMinPosY, Ellipse_R_4_LMaxPosY, pageY);
         	sym.$("Ellipse_R_4_L").css({left:Ellipse_R_4_LRequestPosX, top:Ellipse_R_4_LRequestPosY});
         
         
         		var Ellipse_R_5_LMinPosX = 613;
         var Ellipse_R_5_LMaxPosX = 603;
         var Ellipse_R_5_LMinPosY = 105;
         var Ellipse_R_5_LMaxPosY = 105;
         
         
         	// move box
         	var Ellipse_R_5_LRequestPosX = sym.getTranslation(0, stageWidth, Ellipse_R_5_LMinPosX, Ellipse_R_5_LMaxPosX, pageX);
         	var Ellipse_R_5_LRequestPosY = sym.getTranslation(0, stageHeight, Ellipse_R_5_LMinPosY, Ellipse_R_5_LMaxPosY, pageY);
         	sym.$("Ellipse_R_5_L").css({left:Ellipse_R_5_LRequestPosX, top:Ellipse_R_5_LRequestPosY});
         
         	var Ellipse_R_6_LMinPosX = 563;
         var Ellipse_R_6_LMaxPosX = 573;
         var Ellipse_R_6_LMinPosY = 166;
         var Ellipse_R_6_LMaxPosY = 176;
         
         
         	// move box
         	var Ellipse_R_6_LRequestPosX = sym.getTranslation(0, stageWidth, Ellipse_R_6_LMinPosX, Ellipse_R_6_LMaxPosX, pageX);
         	var Ellipse_R_6_LRequestPosY = sym.getTranslation(0, stageHeight, Ellipse_R_6_LMinPosY, Ellipse_R_6_LMaxPosY, pageY);
         	sym.$("Ellipse_R_6_L").css({left:Ellipse_R_6_LRequestPosX, top:Ellipse_R_6_LRequestPosY});	
         
         var Ellipse_R_8_LMinPosX = 504;
         var Ellipse_R_8_LMaxPosX = 514;
         var Ellipse_R_8_LMinPosY = 199;
         var Ellipse_R_8_LMaxPosY = 199;
         
         
         	// move box
         	var Ellipse_R_8_LRequestPosX = sym.getTranslation(0, stageWidth, Ellipse_R_8_LMinPosX, Ellipse_R_8_LMaxPosX, pageX);
         	var Ellipse_R_8_LRequestPosY = sym.getTranslation(0, stageHeight, Ellipse_R_8_LMinPosY, Ellipse_R_8_LMaxPosY, pageY);
         	sym.$("Ellipse_R_8_L").css({left:Ellipse_R_8_LRequestPosX, top:Ellipse_R_8_LRequestPosY});	
         
         var Ellipse_R_7_LMinPosX = 751;
         var Ellipse_R_7_LMaxPosX = 765;
         var Ellipse_R_7_LMinPosY = 207;
         var Ellipse_R_7_LMaxPosY = 207;
         
         
         	// move box
         	var Ellipse_R_7_LRequestPosX = sym.getTranslation(0, stageWidth, Ellipse_R_7_LMinPosX, Ellipse_R_7_LMaxPosX, pageX);
         	var Ellipse_R_7_LRequestPosY = sym.getTranslation(0, stageHeight, Ellipse_R_7_LMinPosY, Ellipse_R_7_LMaxPosY, pageY);
         	sym.$("Ellipse_R_7_L").css({left:Ellipse_R_7_LRequestPosX, top:Ellipse_R_7_LRequestPosY});	
         
         	var Ellipse_R_9_LMinPosX = 738;
         var Ellipse_R_9_LMaxPosX = 748;
         var Ellipse_R_9_LMinPosY = 337;
         var Ellipse_R_9_LMaxPosY = 347;
         
         
         	// move box
         	var Ellipse_R_9_LRequestPosX = sym.getTranslation(0, stageWidth, Ellipse_R_9_LMinPosX, Ellipse_R_9_LMaxPosX, pageX);
         	var Ellipse_R_9_LRequestPosY = sym.getTranslation(0, stageHeight, Ellipse_R_9_LMinPosY, Ellipse_R_9_LMaxPosY, pageY);
         	sym.$("Ellipse_R_9_L").css({left:Ellipse_R_9_LRequestPosX, top:Ellipse_R_9_LRequestPosY});	
         
         
         	}
         
         
         
         sym.getTranslation = function(minInput, maxInput, minOutput, maxOutput, inputNumber) {		
         	var translatedVal = ((inputNumber - minInput) * (maxOutput -minOutput)/(maxInput - minInput) ) + minOutput;
         	return translatedVal;	
         }

      });
      //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "mousemove", function(sym, e) {
         // insert code to be run when the mouse is moved over the object
         sym.onMouseMove(e.pageX,e.pageY);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 79, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 118, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 159, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 195, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Group_13_L}", "click", function(sym, e) {
         sym.play("13");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Group_16_L}", "click", function(sym, e) {
         sym.play("16");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Group_15_L}", "click", function(sym, e) {
         sym.play("15");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Group_14_L}", "click", function(sym, e) {
         sym.play("14");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_AT_p_black}", "click", function(sym, e) {
         sym.play("hold");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_AR_P_Goback}", "click", function(sym, e) {
         sym.play("hold");// insert code for mouse click here

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_AT_P_TEXT_BACK}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("hold");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Group_About_P}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("AboutTedP");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 424, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 450, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 473, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__15_P_B}", "click", function(sym, e) {
         sym.play("hold");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__15_BACK_BUTTON_P}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("hold");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_TEXT_15_P_BACK}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("hold");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Group_15_P}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("15P");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 544, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__14_P_back_TEXT}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("hold");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__14_P_Back_button}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("hold");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__14_P_B}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("hold");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 570, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__13_P_Back_Text}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("hold");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__13_P_button}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("hold");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__13_P_B}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("hold");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Group_13_P}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("13P");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Group_14_P}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("14P");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 41, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Group_About_L}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("ATedL");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 615, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Group_16_P}", "click", function(sym, e) {
         sym.play("16P");

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${_Group_Contact_L}", "click", function(sym, e) {
         // insert code for mouse click here
         window.open("contact us/materialize/haha.html");
         //else
         //window.opem("https://docs.google.com/forms/d/1vv8jMXibw5n2d614OKrBV-YpCv8Pe0tLo-hWWdsupaE/edit?usp=sharing");

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_Group_Speaker_Details_L}", "click", function(sym, e) {
         // insert code for mouse click here
         window.open("speaker/speaker.html");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__16_P_Back}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("hold");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__16_P_Back_Button}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("hold");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Group_Contact_P}", "click", function(sym, e) {
         // insert code for mouse click here
         if(screen.width>screen.height)
         {
         window.open("contact us/materialize/haha.html");
         }
         else
         {
         window.open("https://docs.google.com/forms/d/1vv8jMXibw5n2d614OKrBV-YpCv8Pe0tLo-hWWdsupaE/edit?usp=sharing");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Speaker_Button}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("hold");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 698, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Group_Speakers_P}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("speaker_P");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Group_Event_Back_Button_L}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("16");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle16}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("16");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 352, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Group_Event_Details}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("event_L");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Group_YSP_L}", "click", function(sym, e) {
         // insert code for mouse click here
         window.open("https://docs.google.com/forms/d/1yxBM16zuI58BHE4gTfxKCT-LQdpkszp6IdywFyb6O7g/edit?usp=sharing");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Group_ysp_P}", "click", function(sym, e) {
         // insert code for mouse click here
         window.open("https://docs.google.com/forms/d/1yxBM16zuI58BHE4gTfxKCT-LQdpkszp6IdywFyb6O7g/edit?usp=sharing");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_fb_P}", "click", function(sym, e) {
         // insert code for mouse click here
         window.open("https://www.facebook.com/Tedxvitvellore");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_fb_L}", "click", function(sym, e) {
         // insert code for mouse click here
         window.open("https://www.facebook.com/Tedxvitvellore");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Speaker_B_P}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("hold");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Group_Sponsor_L}", "click", function(sym, e) {
         // insert code for mouse click here
         window.open("sponsor/sponsor.html");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Group_Sponsor_P}", "click", function(sym, e) {
         // insert code for mouse click here
         window.open("sponsor/sponsor.html");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-576077479");