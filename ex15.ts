/*Changing Guest List: You just heard that one of your guests can’t make the dinner
, so you need to send out a new set of invitations.
 You’ll have to think of someone else to invite*/
let Guestlist1:string[]=["Ahmad Hassan",'Ali','Fatma'];
let cannotattend="Fatma";
console.log(`${cannotattend} does not come in inviting dinner`) 
let newguest="Kinza"
Guestlist1[Guestlist1.indexOf(cannotattend)]=newguest
Guestlist1.map((items)=>{console.log(`Dear ${items} You are invite  the dinner`)
})