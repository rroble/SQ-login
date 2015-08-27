var username = "";
var password = "";

function autoLogin($)
{
    var u = $('input[name="username"]');
    if (u.size() > 0) {
        u.val(username);
        $('input[name="password"]').val(password);
        $('button.btn').html("Auto Login ;)").prop("disabled", true);
        u.parents("form").submit(); // autologin
    }
}

if(location.href.indexOf("arcanys.com") !== -1) {
    jQuery(autoLogin);
}
