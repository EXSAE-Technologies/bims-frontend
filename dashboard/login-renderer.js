var wrapper = betapi.apiWrapper()

        document.querySelector("#loginButton").addEventListener("click",()=>{
            document.querySelector("#loginButton").innerHTML="Logging in..."
            document.querySelector("#loginButton").setAttribute("disabled","true")
            fetch(wrapper.tokenUrl,{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username:document.querySelector("#inputUsername").value,
                    password:document.querySelector("#inpuptPassword").value
                })
            }).then((response)=>response.json()).then((data)=>{
                if(data.token){
                    localStorage.setItem("token",data.token)
                    location.assign("index.html")
                } else {
                    alert(data.detail)
                }
                
                document.querySelector("#loginButton").innerHTML="Login"
                document.querySelector("#loginButton").removeAttribute("disabled")
            }).catch((error)=>{
                alert(error)
                
                document.querySelector("#loginButton").innerHTML="Login"
                document.querySelector("#loginButton").removeAttribute("disabled")
            })
        })