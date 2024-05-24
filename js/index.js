
var newQute=document.getElementById("nQuet");
var newQute2=document.getElementById("nqueto2")
const quots=[
   {qute: '“Be yourself; everyone else is already taken.”',
    auther:'“Maya Angelou”',
   },
   {qute: '“So many books, so little time.”',
    auther:'“Elbert Hubbard”',
   },
   {qute: '“A room without books is like a body without a soul.”',
    auther: '“Mark Twain”',
   },
   {qute: '“You only live once, but if you do it right, once is enough.”',
    auther: '“Elbert Hubbard”',
   },

   {qute:"“If you tell the truth, you don't have to remember anything.”",
    auther:"“ Oscar Wilde”",
   },
   {qute: '“Be yourself; everyone else is already taken.”',
    auther: "“Mahatma Gandhi”",
   },
   {qute: "“A friend is someone who knows all about you and still loves you.”",
    auther: "“ Ralph Waldo Emerson”",
   },
   {qute: "“To live is the rarest thing in the world. Most people exist, that is all.”",
   auther: "“Marilyn Monroe”",
  },
  {qute:  "“Always forgive your enemies; nothing annoys them so much.”",
  auther:"“Marilyn Monroe”",
 },
 {qute:"“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
 auther: "“Frank Zappa”",
},
{qute:"“Without music, life would be a mistake.”",
 auther:"“ Albert Einstein”"
}
]

function newQuets(){
    for(var i=0;i<=quots.length;i++){
        const randomQute=Math.floor(Math.random()*quots.length);
        if (!quots.includes(randomQute)) {
            newQute.innerHTML=quots[randomQute].qute;
            newQute2.innerHTML=quots[randomQute].auther;
            console.log(quots[randomQute].auther);
            console.log(quots[randomQute].qute);
        }
    }
}
