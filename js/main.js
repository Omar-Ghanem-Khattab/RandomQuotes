

var quotes=[
    {
        quote:"“Be yourself; everyone else is already taken.”" ,
        auother: '― Oscar Wilde'
    },
    {
        quote:"“So many books, so little time.”" ,
        auother:  '― Frank Zappa'
    },
    {
        quote: "“A room without books is like a body without a soul.”" ,
        auother:  '― Marcus Tullius Cicero'
    },
    {
        quote: "“If you tell the truth, you don't have to remember anything.”",
        auother: '― Mark Twain'
    }
]

var lastQuoteIndex;
function btnHook() {
    var randomQuotes =Math.floor(Math.random() * quotes.length)
  if (randomQuotes == lastQuoteIndex) {
    btnHook()
    return
  } else { 
    document.getElementById('quoteOutPut').innerHTML= quotes [randomQuotes] .quote;
    document.getElementById('auotherOutPut').innerHTML= quotes [randomQuotes] .auother;
    
  }
  lastQuoteIndex = randomQuotes;
}
