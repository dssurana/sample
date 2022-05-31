function getData(nm){
    return new Promise((resolve,reject)=>
     setTimeout(() => {
         console.log("inner name timeout");
         resolve(nm);
         
     },1000)
    )
    
}
 function getHobbies(name){
     
        return promiseObj = new Promise((resolve,reject)=>
                 setTimeout(() => {
                     console.log("inner hobbby timeout");
                     console.log(['cricket','reading']);
                     resolve(name);
                     
                 }, 2000)
        )
                }
             getData('sonam')
            .then(nm=>getHobbies(nm))
            .then(hobby=>console.log(hobby));