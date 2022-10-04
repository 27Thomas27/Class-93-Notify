function adduser()
{
    nick_name = document.getElementById("Login").value
    localStorage.setItem("nick_name" , nick_name)
    window.location = "notifyroom.html"
}
