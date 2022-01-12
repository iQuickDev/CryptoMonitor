var btcPrice = 0
var ethPrice = 0
var cardanoPrice = 0
var dogePrice = 0

FetchNewPrices()
setInterval(FetchNewPrices, 10000)

function httpGet(url)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false );
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

async function FetchNewPrices()
{   
    btcPrice = JSON.parse(httpGet("https://api.coinbase.com/v2/prices/spot?currency=EUR"))
    ethPrice = JSON.parse(httpGet("https://api.coinbase.com/v2/prices/ETH-EUR/spot"))
    cardanoPrice = JSON.parse(httpGet("https://api.coinbase.com/v2/prices/ADA-EUR/spot"))
    dogePrice = JSON.parse(httpGet("https://api.coinbase.com/v2/prices/DOGE-EUR/spot"))

    document.querySelector("#btcprice").textContent = btcPrice.data.amount + " €"
    document.querySelector("#ethprice").textContent = ethPrice.data.amount + " €"
    document.querySelector("#cardanoprice").textContent = cardanoPrice.data.amount + " €"
    document.querySelector("#dogeprice").textContent = dogePrice.data.amount + " €"
}
