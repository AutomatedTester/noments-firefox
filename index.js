var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "https://twitter.com/*",
  contentScript: "var MomentsButton = document.querySelector('.moments');" +
  "if(MomentsButton !== null){" +
  	"MomentsButton.parentNode.removeChild(MomentsButton);" +
  "}"
});
