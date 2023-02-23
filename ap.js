
var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var xrp = document.getElementById("ripple");
var dog = document.getElementById("dogecoin");

var liveprice = {
    "async" : true,
    "scroosDomain" : true,
    "url" : "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cdogecoin%2Cethereum%2Cripple&vs_currencies=usd",

    "method" : "GET",
    "headers" : {}
}

$.ajax(liveprice).done(function (response){

    console.log(response);

    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    xrp.innerHTML = response.ripple.usd;
    dog.innerHTML = response.dogecoin.usd;
});
