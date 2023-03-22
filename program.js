function ccvalidation(x){
    let countOdd=0;
    let countEven=0;
    let k = x.length;
    for(let i=k-1; i>=0; i--){
        let curval= parseInt(x[i]);
        console.log(curval);
        if (i%2!==0){
            countOdd+=curval;
        }
        else{
            curval*=2;
            if(curval>9){
                curval-=9;
                countEven +=curval;
            }
            else{
                countEven +curval;
            }
            let sum=countOdd + countEven;
            if(sum% 10==0)
            return true;
            else
            return false;
        }
    }
    
}
let x = "4567890876543213"

function checkcc(){
    const ccBtn= document.getElementById("btnbtn")
    const ccNumber= document.getElementById('ccnum')
    if (ccvalidation(ccNumber.value)){
        ccNumber.style= "border-color:green";
        ccBtn.style= "background-color:green";
    }
    else{
        ccNumber.style= "border-color:red";
        ccBtn.style= "background-color:red";
    }
}