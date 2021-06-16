let whatisCrypto = $(".whatiscrypto-text-inside");
let whatisToken = $(".whatistoken-text-inside");
let knowCrypto = $(".infocrypto-text-inside");
let isLegal = $(".islegal-text-inside");


whatisCrypto.click(function () {
    let showModal = $(".modal-show-close");
    showModal.append(` <div class="modal-show">
        <div class="modal-heading">
            <div class="heading-text">What is the Future of Cryptocurrency?</div>
            <div class="close-modal" style="font-size :25px ;"><img
                    src="https://img.icons8.com/nolan/64/close-sign.png" /></div>
        </div>
        <div class="modal-text">Ten years back, we had nothing called cryptocurrencies. And then, one fine day
            back in 2009, somebody with the pseudonym Satoshi Nakamoto released the whitepaper of Bitcoin to a
            mailing list, and cryptocurrencies came into the picture.

            In the initial few years of its existence, only a couple of crypto enthusiasts were involved in
            Bitcoin and related activities. Gradually, by 2013 as Bitcoin started to gain traction, various
            other cryptocurrencies followed through. And now we have over 5000 cryptocurrencies in the crypto
            market.
            From the hundred million crypto investors globally, the world could see more new crypto investors enter the landscape. There is expected to be a rise in the number of crypto investors, both; retail and institutional.

Moving forward, Cryptocurrencies may not be about Bitcoin only; other cryptocurrencies with varied purposes might also pick fire. But not every cryptocurrency will possibly flourish, remember ‘Cryptocurrencies’ is an umbrella term for more than 5000 protocols in the market, and only the best of the best will survive. Hence, while investing, it is important to mindfully analyse and invest.

However, the forecast is based on the current state of the crypto ecosystem in India.</div>
    </div>`);

    let closeModal = $(".close-modal").click(function () {
        showModal.html("");
    })
})
whatisToken.click(function () {
    let showModal = $(".modal-show-close");
    showModal.append(` <div class="modal-show">
    <div class="modal-heading">
        <div class="heading-text">What Crypto Token?</div>
        <div class="close-modal" style="font-size :25px ;"><img
                src="https://img.icons8.com/nolan/64/close-sign.png" /></div>
    </div>
    <div class="modal-text">Crypto tokens are digital assets that offer functionality over and above what a cryptocurrency does. 

The best analogy to understand the difference is currency vs shares. Both of these have intrinsic value, but the token is valued in terms of the cryptocurrency. 

So, a crypto token on Ethereum will be valued in terms of the Ether cryptocurrency. You can, of course, extrapolate this value into regular currency such as INR. Ethereum has by far become the most popular blockchain for crypto tokens. It uses its own Ether cryptocurrency on it.

These tokens are typically issued via initial coin offerings (ICOs) by companies to fund projects. The difference is, instead of raising US dollars, or Indian Rupees, or Euros, they raise funding via the native token of the blockchain they exist on, like Ether or Bitcoin or NEO. 

Investors are given tokens that they can redeem for a product or service or something else of value. Unlike shares in a company that provides an ownership stake in the company, crypto tokens do not offer ownership. At no point is the investor part-owner in the company.</div>
</div>`)
    let closeModal = $(".close-modal").click(function () {
        showModal.html("");
    })
})

knowCrypto.click(function () {
    let showModal = $(".modal-show-close");
    showModal.append(`<div class="modal-show">
    <div class="modal-heading">
        <div class="heading-text">Everything You Need to know about smart Contarcts</div>
        <div class="close-modal" style="font-size :25px ;"><img
                src="https://img.icons8.com/nolan/64/close-sign.png" /></div>
    </div>
    <div class="modal-text">The growing popularity of cryptocurrencies has thrust a new set of jargons onto
        investors. Tokens, blockchain, smart contracts, decentralised apps etc., are becoming a part of our
        everyday vocabulary on cryptocurrencies or specific platforms.

        I know that these terms may sound like complex jargons, but the truth is that they are actually
        simple concepts to understand.

        The blockchain technology underpinning the first original cryptocurrency ‘Bitcoin’ has evolved two
        more generations since its inception.

        Ethereum, the second generation blockchain used to create smart contracts, is bringing forth
        strategic evolutions across multiple industries, including finance, insurance, healthcare and more.

        But what are smart contracts, and how do they work?

        Let us find out.
        Smart contracts are self-executing programs stored on a blockchain that run when pre-defined terms
        and conditions are met.

        In other words:

        They are a set of computer codes that run on blockchain technology. And constitute a set of
        pre-defined rules which are agreed upon by the involved parties.

        Smart Contracts help verify, enforce, and execute digital transactions without third parties’
        involvement once these predefined rules are met.

        Simply put:

        Smart contracts are designed to eliminate the need for middlemen such as a lawyer or a bank
        representative for getting a job done. The terms of agreement and contracts are written directly
        into lines of code. Upon fulfilment of the conditions laid out, the smart contracts self-execute the
        transaction.

         .</div>
</div>`);
    let closeModal = $(".close-modal").click(function () {
        showModal.html("");
    })
})
isLegal.click(function () {
    let showModal = $(".modal-show-close");
    showModal.append(`<div class="modal-show">
    <div class="modal-heading">
        <div class="heading-text">Is Bitcoin Legal In India</div>
        <div class="close-modal" style="font-size :25px ;"><img
                src="https://img.icons8.com/nolan/64/close-sign.png" /></div>
    </div>
    <div class="modal-text">Bitcoin or any other cryptocurrency is not illegal in India.

        With over 10 million Indian investors, it is not only not illegal, but it also enjoys tremendous
        support from a large and growing crypto community in India.

        India has come a long way in the cryptocurrency sector. From straight out banning banks from trading
        crypto in 2020 to looking to create a digital “national crypto” currency, the Indian government is
        deeply immersed in this sector.
        “Bitcoin is not illegal; It’s unregulated.”

        This is where people often get it wrong, Bitcoin isn’t illegal, but yes, it’s unregulated. The
        government hasn’t restricted people from buying, selling and holding cryptocurrencies. Anybody can
        freely trade in Bitcoin or any of the other cryptocurrencies.
        Cryptocurrencies, including Bitcoin, operate on a decentralised network called blockchain, which is
        out of any individual or entities reach.

        Blockchain was built to decentralise the financial ecosystem, which is otherwise heavily
        centralised. The prevailing banking system has a central authority that directs its working.

        Decentralisation ensures that no one person or authority has complete control over the crypto
        market’s functioning.

        Hence, it becomes difficult for the government to govern something which is out of their control.
    </div>
</div>`)
    let closeModal = $(".close-modal").click(function () {
        showModal.html("");
    })
})


let ApiInformattion_global_market = {

    "data": {
        "quotes": [{
                "timestamp": "2018-07-31T00:02:00.000Z",
                "btc_dominance": 47.9949,
                "active_cryptocurrencies": 2500,
                "active_exchanges": 600,
                "active_market_pairs": 1000,
                "quote": {
                    "USD": {
                        "total_market_38035Ecap": 292863223827.394,
                        "total_volume_24h": 17692152629.7864,
                        "total_volume_24h_reported": 375179000000,
                        "altcoin_market_cap": 187589500000,
                        "altcoin_volume_24h": 375179000000,
                        "altcoin_volume_24h_reported": 375179000000,
                        "timestamp": "2018-07-31T00:02:00.000Z"
                    }
                }
            },
            {
                "timestamp": "2018-08-01T00:02:00.000Z",
                "btc_dominance": 48.0585,
                "active_cryptocurrencies": 2500,
                "active_exchanges": 600,
                "active_market_pairs": 1000,
                "quote": {
                    "USD": {
                        "total_market_cap": 277770824530.303,
                        "total_volume_24h": 15398085549.0344,
                        "total_volume_24h_reported": 375179000000,
                        "altcoin_market_cap": 187589500000,
                        "altcoin_volume_24h": 375179000000,
                        "altcoin_volume_24h_reported": 375179000000,
                        "timestamp": "2018-07-31T00:02:00.000Z"
                    }
                }
            },
            {
                "timestamp": "2018-08-02T00:02:00.000Z",
                "btc_dominance": 48.041,
                "active_cryptocurrencies": 2500,
                "active_exchanges": 600,
                "active_market_pairs": 1000,
                "quote": {
                    "USD": {
                        "total_market_cap": 273078776005.223,
                        "total_volume_24h": 14300071695.0547,
                        "total_volume_24h_reported": 375179000000,
                        "altcoin_market_cap": 187589500000,
                        "altcoin_volume_24h": 375179000000,
                        "altcoin_volume_24h_reported": 375179000000,
                        "timestamp": "2018-07-31T00:02:00.000Z"
                    }
                }
            }
        ]
    },
    "status": {
        "timestamp": "2021-06-14T12:25:46.375Z",
        "error_code": 0,
        "error_message": "",
        "elapsed": 10,
        "credit_count": 1
    }
}


var apikey = {
    key: '478bf202-a03b-49f4-8924-824886accae2'
}
let cryptos;
let exchangeCap;
let Market_cap;
let twentyFourHVol;
request('GET', 'https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=' + apikey.key)
    .then((r1) => {
        var x1 = JSON.parse(r1.target.responseText);
        Market_cap = x1.data.quote.USD.total_market_cap;
        cryptos = x1.data.active_cryptocurrencies;
        exchangeCap = x1.data.active_exchanges;
        twentyFourHVol = x1.data.quote.USD.total_volume_24h_reported;

        Market_parms(Market_cap); //market captial show
        cryptos_parms(cryptos); //cryptos catilal show
        exchangeCap_parms(exchangeCap); // ECHANGE CAP SHOW
        twentyFourHVol_parms(twentyFourHVol); // 24h Vol show;



    }).catch(err => {
        console.log(err);
    })

function request(method, url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = resolve;
        xhr.onerror = reject;
        xhr.send();
    });
}


function Market_parms(market_cap) {
    let market_cap_api = $(".market-capital-cap-api").text("$" + `${market_cap}`);
    market_cap_api.text()
    // console.log("Market Capital= " + market_cap + "$")
}

function cryptos_parms(crypto) {
    let crypto_cap_api = $(".crypto-cap-api").text(`${crypto}`);
    // console.log("cCrypto"+ crypto_cap_api);
}

function exchangeCap_parms(exchgParms) {
    let exchange_Cap_api = $(".exchange-cap-api").text(`${exchgParms}`);
    // console.log("exchange Cap"+ exchange_Cap_api);
}

function twentyFourHVol_parms(twentyFourVol) {
    let twentyFourVol_cap_api = $(".24vol-cap-api").text(`${twentyFourVol}`);
    // console.log("24h Vol"+ twentyFourVol_cap_api);
}



let ApiInformattion_Coins = {
    "data": [{
            "id": 1,
            "name": "Bitcoin",
            "symbol": "BTC",
            "slug": "bitcoin",
            "cmc_rank": 5,
            "num_market_pairs": 500,
            "circulating_supply": 16950100,
            "total_supply": 16950100,
            "max_supply": 21000000,
            "last_updated": "2018-06-02T22:51:28.209Z",
            "date_added": "2013-04-28T00:00:00.000Z",
            "tags": [
                "mineable"
            ],
            "platform": null,
            "quote": {
                "USD": {
                    "price": 9283.92,
                    "volume_24h": 7155680000,
                    "percent_change_1h": -0.152774,
                    "percent_change_24h": 0.518894,
                    "percent_change_7d": 0.986573,
                    "market_cap": 158055024432,
                    "last_updated": "2018-08-09T22:53:32.000Z"
                },
                "BTC": {
                    "price": 1,
                    "volume_24h": 772012,
                    "percent_change_1h": 0,
                    "percent_change_24h": 0,
                    "percent_change_7d": 0,
                    "market_cap": 17024600,
                    "last_updated": "2018-08-09T22:53:32.000Z"
                }
            }
        },
        {
            "id": 1027,
            "name": "Ethereum",
            "symbol": "ETH",
            "slug": "ethereum",
            "num_market_pairs": 6360,
            "circulating_supply": 16950100,
            "total_supply": 16950100,
            "max_supply": 21000000,
            "last_updated": "2018-06-02T22:51:28.209Z",
            "date_added": "2013-04-28T00:00:00.000Z",
            "tags": [
                "mineable"
            ],
            "platform": null,
            "quote": {
                "USD": {
                    "price": 1283.92,
                    "volume_24h": 7155680000,
                    "percent_change_1h": -0.152774,
                    "percent_change_24h": 0.518894,
                    "percent_change_7d": 0.986573,
                    "market_cap": 158055024432,
                    "last_updated": "2018-08-09T22:53:32.000Z"
                },
                "ETH": {
                    "price": 1,
                    "volume_24h": 772012,
                    "percent_change_1h": 0,
                    "percent_change_24h": 0,
                    "percent_change_7d": 0,
                    "market_cap": 17024600,
                    "last_updated": "2018-08-09T22:53:32.000Z"
                }
            }
        }
    ],
    "status": {
        "timestamp": "2018-06-02T22:51:28.209Z",
        "error_code": 0,
        "error_message": "",
        "elapsed": 10,
        "credit_count": 1
    }
}
var apikey = {
    key: '478bf202-a03b-49f4-8924-824886accae2'
}
request('GET', 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=' + apikey.key)
    .then((r1) => {
        var x1 = JSON.parse(r1.target.responseText);
        // console.log(x1.data);
        // console.log("CMC ranking ::-" + x1.data[0].cmc_rank);
        // console.log("name:-" + x1.data[0].name);
        // console.log("Price :-" + x1.data[0].quote.USD.price);
        // console.log("24h %" + x1.data[0].quote.USD.percent_change_24h);
        // console.log("7days :-" + x1.data[0].quote.USD.percent_change_7d);
        // console.log("Market Cap:-" + x1.data[0].quote.USD.market_cap);
        // console.log("Volume 24H :-" + x1.data[0].quote.USD.volume_24h);
        // console.log("30 Days % :-" + x1.data[0].quote.USD.percent_change_30d);
        buildTable(x1.data);
        // console.log(x1.data[0].quote.USD.price);
    }).catch(err => {
        console.log(err);
    })

function request(method, url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = resolve;
        xhr.onerror = reject;
        xhr.send();
    });
}

function buildTable(data) {
    console.log(data);
    var table = $('#cyrpto-table-body')
  console.log(table);
    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
                        <td>${data[i].cmc_rank}</td>
                        <td>${data[i].name}</td>
                        <td>${"$"+data[i].quote.USD.price.toPrecision(6)}</td>
                        <td>${data[i].quote.USD.percent_change_24h.toPrecision(3) +"%"}</td>
                        <td>${data[i].quote.USD.percent_change_7d.toPrecision(3)+"%"}</td>
                        <td>${"$"+data[i].quote.USD.market_cap.toPrecision(13) }</td>
                        <td>${data[i].quote.USD.volume_24h.toPrecision(12)}</td>
                        <td>${data[i].quote.USD.percent_change_30d.toPrecision(3)+"%"}</td>
                        </tr>
                  `
        table.append(row) 
        console.log(table);
    }
}