function isBestFriend(object1, object2) {
  if (object1.name == object2.friend && object2.name == object1.friend) {
    return true;
  }
  else{
    return false;
  }
}

console.log(isBestFriend({name: "doe", friend: "alex"}, {name: "jhon", friend: "doe"}));