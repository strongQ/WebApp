
function add(x:number,y:number):number{
    return x+y;
}

let myAdd:(x:number,y:number)=>number=function(x:number,y:number):number{return x+y;};
let myAdd1:(x:number,y:number)=>number=function(x,y){return x+y;};


// 可选参数
function buildName(firstName:string,lastName?:string){
    if(lastName) return firstName+" "+lastName;
    else return firstName;
}

// 剩余参数
function bulidName(firstName:string,...restOfName:string[]){
    return firstName+" "+restOfName.join(" ");
}

//泛型
function identity<T>(arg:T):T{
    return arg;
}