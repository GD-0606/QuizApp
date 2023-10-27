const validate=(obj)=>{
    const {name,val}=obj;
    obj.errormsg="";
    obj.isShowError=false;
    switch(name){
        case "que":
            if(!val){
                obj.errormsg="Please enter Question"
            }else{
                if(val.length<10){
                    obj.errormsg="Question should contain minimum 10 characters"
                }
            }
            if(obj.errormsg){
                obj.isShowError=true;
            }
            break;
        case "opt1":
        case "opt2":
        case "opt3":
        case "opt4":
            if(!val){
                obj.errormsg=`Please enter ${name}`
                obj.isShowError=true;
            }
            break;
        case "type":
        case "ans":
            if(!val){
                obj.errormsg=`Please Select ${name}`
                obj.isShowError=true
            }
            break;
    }
    
}
export {validate}