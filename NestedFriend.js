const myNumber = 83;
const myFriendNumber = 89;

if (myNumber>80){
    if(myFriendNumber>80){
        console.log('Go for a Lunch !')
    }
    else if(myFriendNumber<80 && myFriendNumber>=60){
        console.log('Good Luck Next Time.')
    }
    else if(myFriendNumber<60 && myFriendNumber>=40){
        console.log('Message Unseen')
    }
    else{
        console.log('Block Friend')
    }
}
else{
    console.log('go to home and sleep and act sad')
}