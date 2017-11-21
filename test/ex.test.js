it('should return a vaild data', ()=> {
    if(2 !== 4){
        return new Error("Error");
    }else{
        console.log("Confirm");
    }
})