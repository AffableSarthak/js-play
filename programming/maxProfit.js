function maxProfit(prices) {
   /**
    * Input: prices = [7,1,5,3,6,4]
    * Output: 5
    * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
    * Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
    */ 
    console.log(prices.length, "LENGTH")
   if(prices.length <= 1){
    return 0
   }

   let minP = prices[0]
   let maxProf = 0
   for (let price of prices) {
        if(price < minP) {
            console.log(price)
            minP = Math.min(minP, price)
        } else if (price > minP) {
            prof = price - minP
            maxProf = Math.max(prof, maxProf)
            console.log(prof)
        }
  
        
   }
   console.log(minP, maxProf)
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitV2= function(prices) {
    
    let maxProfit = 0;
    let left = 0;
    let right = 1;

    while(right < prices.length){
        if(prices[left] < prices[right]){
            let currentProfit = prices[right]-prices[left]
            maxProfit = Math.max(currentProfit, maxProfit)
        }else{
            left=right;
        }right++;
    }

    console.log(maxProfit)

};

const case1 = [7,6,4,3,1]
maxProfitV2(case1)