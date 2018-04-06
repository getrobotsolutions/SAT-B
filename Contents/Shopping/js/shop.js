//-----------------------------------------------------
//Redirects to homepage after 1 minute of not interaction
//-----------------------------------------------------

function redirect(){
    window.location.href = "../../maincontents.htm";
}
var initial=setTimeout(redirect,60000);

$(document).click(function(event) {
    clearTimeout( initial );
    initial=setTimeout(redirect,12000);
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


var Shop_en = new Array ( );

Shop_en[0] = new Array ( "InMotion Entertainment","InMotion Entertainment is the largest entertainment and electronics airport retailer in the U.S. With a unique blend of cutting-edge electronics, accessories, music, movies and rental services, we guarantee to make your next trip more enjoyable. InMotion: Just press play.", "images/2.png", "images/offers/InMotion/InMotion-1.png" );
Shop_en[1] = new Array ( "Stars of San Antonio","Stock up for the one who’s deep in your heart. Texas-themed jewelry, shirts and sauces abound at this shop that offers 10% for every $100 purchase.", "images/6.png", "images/offers/Stars of San Antonio/Stars of San Antonio-1.png" );
Shop_en[2] = new Array ( "Texas Monthly News","Texas Monthly News gives travelers the customer convenience and satisfaction with an authentic brand experience providing the best selection of local, regional, national, international newspapers, magazines and periodicals, along with travel friendly essentials and accessories.", "images/7.png" , "images/offers/404.png" );


var Shop_sp = new Array ( );


Shop_sp[0] = new Array ( "InMotion Entertainment","InMotion Entertainment es el minorista de aeropuertos de entretenimiento y electrónica más grande de los EE. UU. Con una combinación única de electrónica de vanguardia, accesorios, música, películas y servicios de alquiler, le garantizamos que su próximo viaje sea más agradable. InMotion: solo presiona play.", "images/2.png", "images/offers/InMotion/InMotion-1.png" );
Shop_sp[1] = new Array ( "Stars of San Antonio","Abastécete de quien está en lo más profundo de tu corazón. En esta tienda, abundan las joyas, camisetas y salsas con temas de Texas, que ofrecen un 10% por cada compra de $ 100..", "images/6.png", "images/offers/Stars of San Antonio/Stars of San Antonio-1.png" );
Shop_sp[2] = new Array ( "Texas Monthly News","Texas Monthly News ofrece a los viajeros la comodidad y satisfacción del cliente con una experiencia de marca auténtica que ofrece la mejor selección de periódicos, revistas y publicaciones periódicas locales, regionales, nacionales e internacionales, junto con accesorios y artículos esenciales para viajes.", "images/7.png" , "images/offers/404.png" );





if(readCookie("CurrentLanguage") === "English")
{
  var Hotel = new Array ( );
   Hotel = Shop_en ;
   document.getElementById("HotelDesc").innerHTML = "Homes need love, too. That’s why there’s Brookstone, a bottomless collection of fun and interactive products for the abode. Nice to look at and rooted in purpose, it’s okay to touch the merchandise here.";
}else if(readCookie("CurrentLanguage") === "Spanish")
{
   var Hotel = new Array ( );
   Hotel = Shop_sp ;
    document.getElementById("HotelDesc").innerHTML = "Las casas también necesitan amor. Es por eso que está Brookstone, una colección sin fondo de productos divertidos e interactivos para la residencia. Es bueno mirar y enraizar en el propósito, está bien tocar la mercancía aquí.";
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

            });



function getHodetlDetails(HotelName) {

  for (var i = 0; i< Hotel.length; i++) { 

       if(HotelName.trim() === Hotel[i][0].trim()){
      
        var  HotelDesc= Hotel[i][1];
        var  HotelImag= Hotel[i][2];
        var  HotelOffers = Hotel[i][3];
    
      }
      
    
    }

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
  
  document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="'+ src +'"/></div></div>';
  //$("#dialog-box").append('<div class="dialog-content"><div id="dialog-message">'+ message +'</div><a href="#" class="button">Close</a></div>');
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