
var nums = [prompt("input a number"),prompt("input a number"),prompt("input a number"),prompt("input a number")];
function productExceptSelf (nums) {
    let n = nums.length;
    let res = Array(n).fill(1);
    let i, temp = 1;
    
    for(i=0; i<n; i++){
        res[i] = temp;
        temp*= nums[i];
    };
    
    temp = 1;
    for(i=n-1; i>=0; i--){
        res[i] *= temp;
        temp*= nums[i];
    };
    
    return res;
};
console.log(nums);
alert(productExceptSelf(nums));