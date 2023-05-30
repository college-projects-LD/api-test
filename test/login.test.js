const fetch = require("node-fetch2");
 
it("Should get a login token",async ()=>{
 
    let token = "";//this is an emptry string
    const options = {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            "userName":"derp@q.com",
    
            "password":"Riverside#736"
        })
    }
 
    const response = await fetch('https://dev.stedi.me/login',options);
 
    token = await response.text();
    const status = response.status;
    console.log("Token "+token);
    
 
    
    expect(token.length).toBe(36);
    expect(status).toBe(200);
    
})

it("Should detect a bad password",async ()=>{
 
    let token = "";//this is an emptry string
    const options = {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            "userName":"Derp@q.com",
    
            "password":"Herp"
        })
    }
 
    const response = await fetch('https://dev.stedi.me/login',options);
 
    token = await response.text();
    const status = response.status;
    console.log("Token "+token);
    
 
    
    expect(token.length).toBe(60);
    expect(status).toBe(500);
    
})

it("Should detect a bad username",async ()=>{
 
    let token = "";//this is an emptry string
    const options = {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            "userName":"jerp@Baduser.com",
    
            "password":"Riverside#736"
        })
    }
 
    const response = await fetch('https://dev.stedi.me/login',options);
 
    token = await response.text();
    const status = response.status;
    console.log("Token "+token);
    
 
    expect(token.length).toBe(60);
    expect(status).toBe(500);
    
})