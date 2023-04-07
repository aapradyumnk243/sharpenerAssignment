async function fun1 (){
    try{
console.log("person1 : shows ticket");
console.log("person2 : shows ticket");

const promiseWifeBringingTicks = await new Promise((resolve,rejct)=>{
    setTimeout(()=>{
        resolve('ticket');
    },3000)
}); 
console.log(promiseWifeBringingTicks);

const getpopcorn = await new Promise((resolve,reject)=>{
    console.log('wife : I have a ticket');
    console.log('husband : we should go in');
    console.log('wife : no i am hungry');
    resolve('popcorn')
})
console.log(getpopcorn);

    
const getbutter = await new Promise((resolve,reject)=>{
    console.log('husband : I have some popcorn');
    console.log('husband : we should go in');
    console.log('wife : I need butter on popcorn');
    resolve('butter')
    });
    console.log(getbutter);
    


const getcoldDringks =  await new Promise((resolve,reject )=>{
    console.log("husband : darling take this coldrink")
    resolve('coldDrink')
});
console.log(getcoldDringks);
  
 

console.log('person4 : shows tiket');
console.log('person5 : shows tiket');
    }
    catch (err){
        console.log(err)}
}

fun1()


//-------------------------------------------------------
// async function dadmakespromise(){
//     try{
// const dadpromise = await new Promise((resolve,reject)=>{
    
//     setTimeout(()=>{
//          var salaryCreadited = true;
//     var salary = 100000
//     var costofPs5 = 400000
//     var costofPs4 = 30000

//     if(salaryCreadited === true && salary>costofPs5){
//         resolve('buy him a ps3')
//     }
//     else if(salaryCreadited === true && salary>costofPs4){
//         reject('buy him a ps4');
//     }
//     else{
//         reject('sorry son i will try next month')
//     }

//     },1000)
// })

//     }catch((err)=>{console.log(err)})
// }
// console.log(dadpromise)

//  dadmakespromise().catch((msg)=>console.log(msg))
//------------------------------------------------------------


// console.log("person1 : shows ticket");
// console.log("person2 : shows ticket");

// const promiseWifeBringingTicks = new Promise((resolve,rejct)=>{
//     setTimeout(()=>{
//         resolve('ticket');
//     },3000)
// }); 

// const getpopcorn = promiseWifeBringingTicks.then((t)=>{
//     console.log('wife : I have a ticket');
//     console.log('husband : we should go in');
//     console.log('wife : no i am hungry');
//     return new Promise((resolve,reject)=>resolve(`${t} popcorn`))

// });

// const getbutter = getpopcorn.then((t)=>{
//     console.log('husband : I have some popcorn');
//     console.log('husband : we should go in');
//     console.log('wife : I need butter on popcorn');
//      return new Promise((resolve,reject)=>resolve(`${t} butter`))
// });

// const getcoldDringks = getbutter.then((t)=>{
//     console.log("husband : darling take this coldrink")
//    return new Promise((resolve,reject )=>resolve(`${t} coldDrink `))
 
// })
// console.log('person4 : shows tiket');
// console.log('person5 : shows tiket');

// getcoldDringks.then((data)=>{
//     console.log(data); 
//  })

//=======================================================