//Convert Kilometer to Meter
// 1 kilometer = 1000 meters.
function kilometerToMeter(num){
    var kilometer=num;
    if(kilometer>0){
      var meter =kilometer*1000;
      return meter;
    }
    else{
       return "Input is not correct format"; 
    }
}

console.log(kilometerToMeter(2.5));

//Budget Calculator return total cost
//Watch = 50, Phone = 100 and Laptop = 500 USD for 1 piece.
function budgetCalculator(qty1,qty2,qty3){
   var sum =0;
   if(qty1>0 && qty2>0 && qty3>0){
       var watchCost=Math.floor(qty1)*50;
       var phoneCost=Math.floor(qty2)*100;
       var laptopCost=Math.floor(qty3)*500;
       sum=watchCost+phoneCost+laptopCost;
       return sum;
   }
   else{
       return "Input is not correct format";
   }
}

console.log(budgetCalculator(2, 1, 2));


//Hotel Cost expense return totoal expense
//1-10 days 100, 11-20 days 80 , 20> 50 USD
function hotelCost(num){
   var days=Math.floor(num);
   if(days >0){
       var cost =0;
       if(days<=10){
           cost=days*100;
       }
       else if(days<=20){
           var firstPartDays=10*100;
           var remainDays=days-10;
           var secondPartdays=remainDays*80;
           cost=firstPartDays+secondPartdays;
       }else{
           var firstPartDays=10*100;
           var secondPartDays=10*80;
           var remainDays=days-20;
           var thirdPartdays=remainDays*50;
           cost=firstPartDays+secondPartDays+thirdPartdays;
       }
       return cost;
       
   }else{
       return "Input is not correct format";
   }
}

console.log(hotelCost(22));

// Finding the longest string in an array of String
function megaFriend(friends){
      // Check that array is not empty
   if(friends && friends.length){
       var size = 0;
       var longest;
           for (var i = 0; i < friends.length; i++) {
           if (friends[i].length > size) {
               var size = friends[i].length;
               longest = friends[i];
           }
           }
           return longest
    }
    else{
        return "Input is not correct format";
    }
}
var friends = ["Rahim vaiaaiaiaaaa", "kaka Mama", "Abuler Manananana", "Mama","kkkk"];
var friend = [];
console.log(megaFriend(friends));