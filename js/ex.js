$(function(){
 
$('div.hideWrap a.hideBtn').each(function(i){var cookie=getCookie('hideBtn'+i);
if (cookie&&cookie.indexOf('show')>-1)$(this).toggleClass('show').siblings('div.hideCont').show();})
 
$('div.hideWrap a.hideBtn').click(function(){
$(this).toggleClass('show').siblings('div.hideCont').slideToggle('normal');
var hideBtn=$('div.hideWrap a.hideBtn').index($(this)),isShow=$(this).attr('class');
setCookie('hideBtn'+hideBtn,isShow,365);
return false;
});
 
});