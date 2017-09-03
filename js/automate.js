// console.log('automate script injected');

var _re = new RegExp('^[0-9A-Z]{4,7}-[0-9A-Z]{4,7}-[0-9A-Z]{4,7}(?:(?:-[0-9A-Z]{4,7})?(?:-[0-9A-Z]{4,7}))?$','i');
var _key = document.getElementById('product_key').value;
var _valid = (_key != '') && _re.test(_key);

// Click SSA checkbox
document.getElementById('accept_ssa').click();

// Only click the button if key isn't empty and match pattern to allow users to correct it manually
// as an example for those posted on /r/FreeGameFindings/ or /r/FreeGamesOnSteam/ to avoid bots
if (_valid) {
    document.getElementById('register_btn').click();
}

// End of file;