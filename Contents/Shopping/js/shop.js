//-----------------------------------------------------
//Redirects to homepage after 1 minute of not interaction
//-----------------------------------------------------

function redirect(){
    window.location.href = "../../main.htm";
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
   document.getElementById("HotelDesc").innerHTML = "";
}else if(readCookie("CurrentLanguage") === "Spanish")
{
   var Hotel = new Array ( );
   Hotel = Shop_sp ;
    document.getElementById("HotelDesc").innerHTML = "";
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
               
            function getDate() {
                        var now     = new Date(); 
                        var year    = now.getFullYear();
                        var month   = now.getMonth()+1; 
                        var day     = now.getDate();

                        if(month.toString().length == 1) {
                            var month = '0'+month;
                        }
                        if(day.toString().length == 1) {
                            var day = '0'+day;
                        }   
                         var dateTime = year+'/'+month+'/'+day;   
                         return dateTime;
                    }

                      function getTime() {
                          var now     = new Date(); 
                          var hour    = now.getHours();
                          var minute  = now.getMinutes();
                          var second  = now.getSeconds(); 
                          if(hour.toString().length == 1) {
                              var hour = '0'+hour;
                          }
                          if(minute.toString().length == 1) {
                              var minute = '0'+minute;
                          }
                          if(second.toString().length == 1) {
                              var second = '0'+second;
                          }   
                          var Time = hour+':'+minute+':'+second;   
                           return Time;
                      }


              var HotelName = $(this).text()    
              getHodetlDetails(HotelName);
     document.getElementById("mapBtn").style.visibility = "visible";

             var language = readCookie("CurrentLanguage");
              var current_date =  getDate();
              var current_time = getTime();
               var terminal = 'Terminal-B';


                 $.ajax({
                         url:'http://ars.xamut.com/robot/getshopdata.php',
                         type:'POST',
                                  //data:hotelName,  
                         data: {
                          'Name': HotelName, 
                          'date': current_date,
                          'time': current_time,
                          'language': language,
                          'terminal':terminal
                        },
                                  success:function(result){
                                   //   $("#response").text(result);
                                     console.log(result);
                                    
                                  },
                                  failure: function(result) {
                                 console.log(result);
                                }

                          });
                  

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
      //$("#mapBtn").show();
      $("#mapBtn").attr('dir',HotelOffers);
    }
    else
      $("#mapBtn").attr('dir',"");


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
      PlaySpeech("Please take a picture with your phone and show Merchant for your special offer.");
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