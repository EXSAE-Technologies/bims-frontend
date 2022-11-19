const { contextBridge } = require('electron');

const APIWrapper = {
  apiBaseUrl:"http:localhost:8000/api",

  send: (endPoint,init,onResult,onError) => {
      var defaultInit = {
          method:"POST",
          headers: {
              "Content-Type":"application/json",
          },
      }
      fetch(`http:localhost:8000/api${endPoint}`,{
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