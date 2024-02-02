const address = 'PuranDhaka';
const part = address.slice(5, 10);
console.log(part);

const sentence = 'I am a good and hardworking person';
console.log(sentence.split('and'));

const friendsStr = 'Rahim, Kabbo, Sayem, Mahir, Nazmul, Gazi';
const friends = friendsStr.split(',');
console.log(friends);

const realFriends = ['Rahim', 'Kabbo', 'Sayem', 'Mahir', 'Nazmul', 'Gazi'];
console.log(realFriends.join());
console.log(realFriends.join('|'));
console.log(realFriends.join('-'));