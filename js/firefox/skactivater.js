function activatekey(info,tab) {
  chrome.tabs.create({
    url: "https://store.steampowered.com/account/registerkey?key=" + encodeURIComponent(info.selectionText.replace(/\s/g,''))}, function(tab) {
    browser.tabs.executeScript(tab.id, {file: '/js/automate.js'});
  });
};

browser.contextMenus.create({
  title: "Activate Steam Key: %s",
  contexts:["selection"],
  onclick: activatekey,
});

// End of file;
