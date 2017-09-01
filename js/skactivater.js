function activatekey(info,tab) {
  chrome.tabs.create({
    url: "https://store.steampowered.com/account/registerkey?key=" + info.selectionText}, function(tab) {
    chrome.tabs.executeScript(tab.id, {file: 'js/automate.js'});
  });
};

chrome.contextMenus.create({
  title: "Activate Steam Key: %s",
  contexts:["selection"],
  onclick: activatekey,
});

// End of file;