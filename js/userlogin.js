function login()
{
    var username = document.getElementsByName("username");
    var password = document.getElementsByName("pwd");

            if(username[0].value=="yash" && password[0].value=="123")
            {
                alert("Login Succesful");
                window.location.replace("https://devanshuram.github.io/OnlineMusicSystem/web");
            }
            else if(username[0].value=="yash" && password[0].value!="123")
            {
                alert("Invalid Password"); 
            }
            else if(username[0].value!="yash" && password[0].value=="123")
            {
                alert("Invalid Username"); 
            }
            else
            {
                alert("Invalid User Name and Password");
            }

}