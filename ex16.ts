let Guestlist2:string[]=["Ahmad Hassan",'Ali','Fatma'];
let cannotatten="Fatma";
console.log(`${cannotatten} does not come in inviting dinner`) 
let newgues="Kinza"
Guestlist2[Guestlist2.indexOf(cannotatten)]=newgues
Guestlist2.map((items)=>{console.log(`Dear ${items} You are invite  the dinner`)
})
Guestlist2.map((items)=>{console.log(`Dear ${items}I were give a big table and more space`);
})
Guestlist2.splice(0,0,"Alja")
Guestlist2.splice(1,0,"Bisma")
Guestlist2.splice(4,0,"Eman")
Guestlist2.map((items)=>{
    console.log(`Dear ${items} ,All the person would be come in Dinner `);
    
})