
function logoutUser(){
    localStorage.removeItem("token")
    location.reload()
}