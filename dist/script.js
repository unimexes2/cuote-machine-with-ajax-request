var q;
let citation = document.getElementById("text-main");
//let autor=document.getElementById("");
let docList = document.getElementById("btn");
// console.log(disp[0][1], docList);

function mainF() {
  async function getQuotes() {
    return $.ajax({
      headers: {
        Accept: "application/json"
      },
      url:
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
      success: function (jsonQuotes) {
        if (typeof jsonQuotes === "string") {
          obj = JSON.parse(jsonQuotes);
        }
      }
    });
  }

  getQuotes().then(
    function (value) {
      
      var as = JSON.parse(value);

      let random = Math.floor(Math.random() * 20);

      //////citatation
      let cit = JSON.stringify(as["quotes"][random]["quote"]);
      let aut = JSON.stringify(as["quotes"][random]["author"]);
      aut = aut.replace(/"/g, "");
      cit = cit + "</br>" + "</br>" + "<i>"+aut+"</i>";
      citation.innerHTML = cit;
      setRandomColor() ;
      ////////random background color
    
      
  function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function setRandomColor() {
  $("#bod").css("background-color", getRandomColor());
}
      
      
    },
    function (error) {
      console.log("It`s an error in sourse destination");
    }
  );
  // console.log(obj);
}

docList.addEventListener("click", () => mainF());