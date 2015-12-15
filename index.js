var self = require('sdk/self');
var pageMod = require("sdk/page-mod");

// a dummy function, to show how tests work.
// to see how to test this function, look at test/test-index.js
pageMod.PageMod({
  include: "https://twitter.com/",
  contentScript: "var MomentsButton = document.querySelector('.moments');" +
  "if(MomentsButton !== null){" +
  	"MomentsButton.parentNode.removeChild(document.querySelector('.moments'));" +
  "}"
});
