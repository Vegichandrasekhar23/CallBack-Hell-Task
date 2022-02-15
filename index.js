let count = 10;
setTimeout(() => {
    document.getElementById("countDownDiv").innerHTML = count;
    setTimeout(() => {
        document.getElementById("countDownDiv").innerHTML = count-1,count--;
        setTimeout(() => {
            document.getElementById("countDownDiv").innerHTML = count-1,count--;
            setTimeout(() => {
                document.getElementById("countDownDiv").innerHTML = count-1,count--;
                setTimeout(() => {
                    document.getElementById("countDownDiv").innerHTML = count-1,count--;
                    setTimeout(() => {
                        document.getElementById("countDownDiv").innerHTML = count-1,count--;
                        setTimeout(() => {
                            document.getElementById("countDownDiv").innerHTML = count-1,count--;
                            setTimeout(() => {
                                document.getElementById("countDownDiv").innerHTML = count-1,count--;
                                setTimeout(() => {
                                    document.getElementById("countDownDiv").innerHTML = count-1,count--;
                                    setTimeout(() => {
                                        document.getElementById("countDownDiv").innerHTML = count-1,count--;
                                        setTimeout(() => {
                                            document.getElementById("countDownDiv").innerHTML = "Happy Independence Day";                           
                                        }, 1000);                           
                                    }, 1000);                               
                                }, 1000);                    
                            }, 1000);                            
                    }, 1000);                  
                }, 1000);                   
            }, 1000);          
        }, 1000);   
        }, 1000);
    }, 1000);
}, 1000);