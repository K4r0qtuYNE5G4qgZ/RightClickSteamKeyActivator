// The script only clicks continue if key isn't empty and match pattern to allow users to correct it manually
// as an example for those posted on /r/FreeGameFindings/ or /r/FreeGamesOnSteam/ to avoid bots.
// console.log('automate script injected');

var _re = new RegExp('^[0-9A-Z]{4,7}-[0-9A-Z]{4,7}-[0-9A-Z]{4,7}(?:(?:-[0-9A-Z]{4,7})?(?:-[0-9A-Z]{4,7}))?$','i');
var _key = document.getElementById('product_key').value;
var _valid = (_key != '') && _re.test(_key);

// Check SSA Checkbox and Click Continue
var checkSSAExist = setInterval(function CheckSSA() {
    const element = document.getElementById('accept_ssa');
    if (element) {
        element.checked = true;
        clearInterval(checkSSAExist);
        if (_valid) {
            document.getElementById('register_btn').click();
        }
    }
}, 100); // check every 100ms

// End of file;