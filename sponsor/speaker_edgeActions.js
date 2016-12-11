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
      
      
      Symbol.bindElementAction(compId, symbolName, "${_VAM_Logo}", "click", function(sym, e) {
         // insert code for mouse click here
         window.open("http://www.onlyvam.com");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_logo}", "click", function(sym, e) {
         // insert code for mouse click here
         window.open("https://www.licindia.in/");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-7073243");