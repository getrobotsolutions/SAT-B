//-----------------------------------------------------
//Redirects to homepage after 1 minute of not interaction
//-----------------------------------------------------

function redirect(){
    window.location.href = "../../maincontents.htm";
}
var initial=setTimeout(redirect,60000);

$(document).click(function(event) {
    clearTimeout( initial );
    initial=setTimeout(redirect,60000);
});
//-----------------------------------------------------


function LanguageChange(lang)
{
    if(lang === "english")
    {
        eraseCookie("Spanish");
        writeCookie("CurrentLanguage", "English", 30);
        document.getElementById("btn_english").style.backgroundColor = "white";
        document.getElementById("btn_english").style.color = "#FF6600";
        document.getElementById("btn_spanish").style.backgroundColor = "#FF6600";
        document.getElementById("btn_spanish").style.color = "white";
    }
    else if (lang === "spanish")
    {
        eraseCookie("English");
        writeCookie("CurrentLanguage", "Spanish", 30);
        document.getElementById("btn_english").style.backgroundColor = "#FF6600";
        document.getElementById("btn_english").style.color = "white";
        document.getElementById("btn_spanish").style.backgroundColor = "white";
        document.getElementById("btn_spanish").style.color = "#FF6600";
    }
location.reload();
}



var Hotel_en = new Array ( );
Hotel_en[0] = new Array ( "Alamo Alehouse","At the Alamo Alehouse, you can choose from many great menu items including breakfast sandwiches, customizable burgers and tasty starters and sides! And of course, being an alehouse, Alamo also offers a great beer and wine selection!", "images/1.png", "images/offers/404.png" );
Hotel_en[1] = new Array ( "Bon Du Monde","Stop by and pick up a chocolate surprise for your loved ones. Bon Du Monde provides you with an array of thoughtful gifts to sweeten your trip.", "images/3.png",  "images/offers/404.png" );
Hotel_en[2] = new Array ( "Charley's Grilled Subs","Famous for its award-winning Philly Cheese Steak, chicken sandwiches, subs, gourmet fries, natural lemonade, salads and healthy options, Charley’s Grilled Subs prepares its sandwiches right in front of the customer, providing high-quality meat, fresh produce and attentive service.", "images/4.png" , "images/offers/404.png");
Hotel_en[3] = new Array ( "Good Fellows","", "images/Good Fellows.jpeg");
Hotel_en[4] = new Array ( "Green Beans Coffee","On the go? Come enjoy your favorite hot beverage and buy a “Cup of Joe” for troops serving far from home and have it delivered with your own personal note of encouragement.", "images/8.png", "images/offers/Green Beans Coffee/Green Beans Coffee-1.png" );
Hotel_en[5] = new Array ( "Rosario's","Featuring a newly-expanded restaurant service in Terminal B, San Antonio’s own Rosario’s strives to exceed guests’ expectations on food, service and overall design, while truly creating a sense of San Antonio within the airport.", "images/16.png", "images/offers/Rosarios/Rosarios-1.png" );
Hotel_en[6] = new Array ( "SA Express News","", "images/Stars of San Antonio.jpeg");
Hotel_en[7] = new Array ( "Sbarro","Best known for freshly-made, hand-tossed pizza topped with the finest ingredients. Sbarro fresh Italian cooking features time honored recipes including pasta, salads, entrées and desserts.", "images/17.png" , "images/offers/404.png");
Hotel_en[8] = new Array ( "Starbucks","Handcrafted beverages and a name you can trust – it doesn’t get any cozier than that. Curl up with a favorite brew or Tazo tea creation today … and don’t forget the biscotti..", "images/18.png", "images/offers/Starbucks/Starbucks-1.png" );


var Hotel_sp = new Array ( );

Hotel_sp[0] = new Array ( "Alamo Alehouse","En Alamo Alehouse, puedes elegir entre muchos excelentes platos de menú que incluyen sándwiches para el desayuno, hamburguesas personalizables y sabrosos entrantes y acompañantes. Y, por supuesto, al ser una cervecería, Alamo también ofrece una excelente selección de cervezas y vinos.", "images/1.png" , "images/offers/404.png");
Hotel_sp[1] = new Array ( "Bon Du Monde","Venga y recoja una sorpresa de chocolate para sus seres queridos. Bon Du Monde le ofrece una variedad de regalos pensados para endulzar su viaje.", "images/3.png" , "images/offers/404.png");
Hotel_sp[2] = new Array ( "Charley's Grilled Subs","Famoso por su galardonado Philly Cheese Steak, sándwiches de pollo, sándwiches, papas fritas gourmet, limonada natural, ensaladas y opciones saludables, Charley's Grilled Subs prepara sus sándwiches justo en frente del cliente, ofreciendo carne de alta calidad, productos frescos y un servicio atento.", "images/4.png" , "images/offers/404.png");
Hotel_sp[3] = new Array ( "Good Fellows","", "images/Good Fellows.jpeg");
Hotel_sp[4] = new Array ( "Green Beans Coffee","Muy activo? Ven a disfrutar de tu bebida caliente favorita y compra una Cup of Joe para las tropas que sirven lejos de casa y haz que te la entreguen con tu nota personal de aliento.", "images/8.png", "images/offers/Green Beans Coffee/Green Beans Coffee-1.png"  );
Hotel_sp[5] = new Array ( "Rosario's","Con un nuevo servicio de restaurante expandido en la Terminal B, el propio Rosario de San Antonio se esfuerza por exceder las expectativas de los huéspedes en cuanto a comida, servicio y diseño general, mientras que realmente crea una sensación de San Antonio dentro del aeropuerto.", "images/16.png", "images/offers/Rosarios/Rosarios-1.png" );
Hotel_sp[6] = new Array ( "SA Express News","", "images/Stars of San Antonio.jpeg");
Hotel_sp[7] = new Array ( "Sbarro","Mejor conocido por pizza recién hecha y hecha a mano con los mejores ingredientes. La cocina italiana fresca de Sbarro ofrece recetas de larga tradición como pasta, ensaladas, entrantes y postres.", "images/17.png" , "images/offers/404.png");
Hotel_sp[8] = new Array ( "Starbucks","Bebidas artesanales y un nombre en el que puede confiar: no hay nada más acogedor que eso. Acurrúcate con una bebida favorita o una creación de té Tazo hoy ... y no te olvides de los biscotti.", "images/18.png", "images/offers/Starbucks/Starbucks-1.png" );


if(readCookie("CurrentLanguage") === "English")
{
  var Hotel = new Array ( );
   Hotel = Hotel_en ;
}else if(readCookie("CurrentLanguage") === "Spanish")
{
   var Hotel = new Array ( );
   Hotel = Hotel_sp ;
}


   


for (var i = 0; i< Hotel.length; i++) { 

  var HotelName = Hotel[i][0]; 
  //$('.myList').append('<a href="#" calss = "HotelName" style = "margin: 40px;"> ' + HotelName + '</a><br><br>');
 // $('#theList li:last-child').append('<li style="display:none;color:green;">' + HotelName + '</li>');
        
  var ul = document.getElementById("dynamic-list");
  var li = document.createElement("li");
  //  li.setAttribute('id',HotelName);
    li.appendChild(document.createTextNode(HotelName));
    ul.appendChild(li);      
}


  $('ul.listul li:even').addClass('even');
  $('ul.listul li:odd').addClass('odd');


 $("ul[id*=dynamic-list] li").click(function () {
               

              var HotelName = $(this).text()    
              getHodetlDetails(HotelName);
              document.getElementById("mapBtn").style.visibility = "visible";
            });



function getHodetlDetails(HotelName) {

  for (var i = 0; i< Hotel.length; i++) { 

       if(HotelName.trim() === Hotel[i][0].trim()){
      
        var  HotelDesc= Hotel[i][1];
        var  HotelImag= Hotel[i][2];
        var  HotelOffers = Hotel[i][3];

      }


    }
    if (HotelOffers!=null) {
      $("#mapBtn").attr('dir',HotelOffers);
    }
    else
      $("#mapBtn").attr('dir',"");

$("#mapBtn").attr('dir',HotelOffers);
   document.getElementById("icon").src= HotelImag;
  document.getElementById("HotelName").innerHTML = HotelName;
  document.getElementById("HotelDesc").innerHTML = HotelDesc;





}


$(document).ready(function(){

   $('a.btn-ok, #dialog-overlay, #dialog-box').click(function () {   
      $('#dialog-overlay, #dialog-box').hide();   
      return false;
    });

  $("#btn").click(function () {
    ShowPopup($("#btn").attr('dir'));

    //$("$list1").show();

  });
  $("#mapBtn").click(function () {
    ShowPopup($("#mapBtn").attr('dir'));

    //$("$list1").show();

  });

});


function ShowPopup(src){

// get the screen height and width  
  var maskHeight = $(document).height();  
  var maskWidth = $(window).width();
  
  // calculate the values for center alignment
var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());  
var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2); 
  
  // assign values to the overlay and dialog box
  $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
  $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();
  
  if (src=="") {
    document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="images/offers/404.png"/></div></div>';
  }
  else{
    if(readCookie("CurrentLanguage") === "English")
      PlaySpeech("Please take a picture with your phone and show merchant for your special offer.");
    else if(readCookie("CurrentLanguage") === "Spanish")
      PlaySpeech("Por favor, tome una foto con su teléfono y muestre al comerciante su oferta especial.");
  
  document.getElementById('dialog-box').innerHTML = '<p style="width:  70%;display:  block;float:  left;font-size: 29px;padding: 20px;">Take Picure and Show merchant</p><a href="#" class="button" style="float: left;position:  relative;top: 20px;">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="'+ src +'"/></div></div>';
  //$("#dialog-box").append('<div class="dialog-content"><div id="dialog-message">'+ message +'</div><a href="#" class="button">Close</a></div>');
    }
}

function ShowPopupARS(src){

// get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();

    // calculate the values for center alignment
    var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());
    var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2);

    // assign values to the overlay and dialog box
    $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
    $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();

    document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="'+ src +'"/></div></div>';
}