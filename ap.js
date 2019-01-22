let friends = ['lou', 'kent', 'cam', 'pete', 'lee'];
let addFriend = document.getElementById('addFriend');
addFriend.addEventListener('click', newFriend)
function newFriend(){
    let nameBox = document.getElementById('nameBox').value;
    if (nameBox != ""){
        friends.push(nameBox)
        console.log(friends)
    }
}
function FriendList(){ for (var i = 0; i < friends.length; i++) {
    for (var j = 99; j > 0; j--) {
        if(j == 1 ){
        console.log(j + " line of code in the file, " + j + " line of code " + friends[i] + " strikes one out clears it all out, no more lines of code in the file")
        }else{
              console.log(j + " lines of code in the file, " + j + " lines of code " + friends[i] + " strikes one out clears it all out, " + (j - 1) + " lines of code in the file")
        }
    }
}
}
