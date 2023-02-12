var custom_error = document.getElementById('errorText'); 
var custom_searchText = "Your password has expired."; 

if (custom_error.innerText.substring(0, custom_searchText.length) == custom_searchText) 
{ 
	custom_error.innerText = 'Your password has expired. Please click "Change Current / Expired Password" below to update your password.'; 
}