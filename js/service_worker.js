function activatekey(info, tab) {
    chrome.tabs.create({
        url: "https://store.steampowered.com/account/registerkey?key=" + info.selectionText.replace(/\s/g, '')
    }, function(tab) {
        chrome.scripting.executeScript({
            target: {
                tabId: tab.id
            },
            world: chrome.scripting.ExecutionWorld.MAIN,
            files: ['js/automate.js']
        });
    });
};

chrome.contextMenus.removeAll(function() {
    chrome.contextMenus.create({
        id: "ActSteamKey",
        title: "Activate Steam Key: %s",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "ActSteamKey") {
        activatekey(info, tab);
    }
});

// End of file;