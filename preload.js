const { contextBridge } = require('electron');

const apiBaseUrl = "http://server.iitsar.com:8000/api"
const APIWrapper = {
  apiBaseUrl:apiBaseUrl,

  send: (endPoint,init,onResult,onError) => {
      var defaultInit = {
          method:"POST",
          headers: {
              "Content-Type":"application/json",
          },
      }
      fetch(`${apiBaseUrl}${endPoint}`,{
          ...defaultInit,
          ...init
      }).then((response)=>response.json()).then((data)=>{
          onResult(data)
      }).catch((error)=>{
          onError(error)
      })
  }
}

contextBridge.exposeInMainWorld('betapi', {
  apiWrapper: ()=> APIWrapper,
});