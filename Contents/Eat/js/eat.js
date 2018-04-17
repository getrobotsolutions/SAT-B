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
Hotel_en[0] = new Array ( "Auntie Anne's/Cinnabon","The fresh, gooey taste of a Cinnabon cinnamon roll accompanied with a deliciously perfected Auntie Anne’s pretzel offers SAT passengers a sweet treat on the go.", "images/2.png" , "images/offers/Auntie_Anne/1.png");
Hotel_en[1] = new Array ( "Dunkin' Donuts","More than 2.7 million Americans a day can’t be wrong! Offering more than just donuts, the No. 1 U.S. retailer of coffee has been keeping America running since 1950. Let Dunkin’ Donuts give you that kick to your destination.", "images/5.png", "images/offers/404.png" );
Hotel_en[2] = new Array ( "Famous Famiglia Pizzeria","It’s the pizza New Yorkers vote No. 1 and the offcial pie of the New York Yankees and Madison Square Garden. Famous Famiglia offers traditional Italian at its best, including pasta, calzones, heroes and salads. Buon appetito!", "images/6.png" , "images/offers/404.png");
Hotel_en[3] = new Array ( "Fruteria","From fruit-infused cocktails to Mexican tapas, Fruteria offers a variety of items while providing the experience of Mexico’s beautiful and colorful fruit stands.", "images/7.png", "images/offers/La Fruteria/La Fruteria-1.png" );
Hotel_en[4] = new Array ( "Good Fellows","", "images/Good Fellows.jpeg", "images/offers/404.png" );
Hotel_en[5] = new Array ( "Gervin's","Traveling got you stressed? Chill at Gervin’s Sports Bar. Featuring memorabilia from George “Ice Man” Gervin, catch up on the Spurs while savoring Base Line nachos, the Slam Dunk turkey sandwich or the Nothing But Net club sandwich. Game on!", "images/9.png" , "images/offers/404.png");
Hotel_en[6] = new Array ( "La Gloria","Experience the rich and delicious street foods of Mexico. From tacos to shrimp cocktail, these street foods are as unique and colorful as Mexico’s traditions, people and culture.", "images/10.png", "images/offers/La Gloria/La Gloria-1.png" );
Hotel_en[7] = new Array ( "La Tapenade","Take your taste buds on a trip with a Mediterranean-inspired meal. La Tapenade Mediterranean Café offers a plethora of healthy, yet delicious meals to satisfy that preflight hunger.", "images/11.png", "images/offers/La Tapenade/La Tapenade-1.png" );
Hotel_en[8] = new Array ( "Mission City Ice House","Have time to spare? Then cool your jets and grab a seat at our bar. Relax and enjoy a wide variety of locally brewed beers.", "images/12.png" , "images/offers/404.png");
Hotel_en[9] = new Array ( "Natalie's Candy Jar","Giant lollipops mark the spot that offers vintage candies, deluxe chocolates and every gummy variety under the rainbow, and that just scratches the sugar-coated surface.", "images/13.png" , "images/offers/404.png");
Hotel_en[10] = new Array ( "Raising Cane's Chicken Fingers","We only have one love: chicken fingers. Add Texas Toast, our specialty sauce and crinkle cut fries and you have a made-to-order meal to cluck about..", "images/14.png", "images/offers/Raising Cane's/Raising Cane's-1.png" );
Hotel_en[11] = new Array ( "R Sala Bebida Botana Bar","R Sala Bebida Botana Bar goers passengers a relaxed lounge, serving light fare with a distinctive San Antonio Mex-Chic flavor, while Starbucks goers the world’s most recognizable brand of coffee — all to create a destination to relax and recharge.", "images/15.png", "images/offers/R-Salsa/R-Salsa-1.png" );
Hotel_en[12] = new Array ( "SA Express News","", "images/Stars of San Antonio.jpeg" , "images/offers/404.png");
Hotel_en[13] = new Array ( "Steak 'n Shake","Proudly serving America’s best, freshest, and tastiest burgers and shakes for more than 75 years. Add a side of fries and you’ll surely satisfy your hunger.", "images/19.png", "images/offers/Steak n' Shake/Steak n' Shake-1.png" );
Hotel_en[14] = new Array ( "Vino Volo","Boutique retail meets lounging in style at Vino Volo, where great wines from across the globe are sold to travelers by glass or by bottle, en route or pre-flight. Travel the world, glass by glass!", "images/20.png", "images/offers/Vino Volo/Vino Volo-1.png" );


var Hotel_sp = new Array ( );

Hotel_sp[0] = new Array ( "Auntie Anne's/Cinnabon","El sabor fresco y pegajoso de un rollo de canela Cinnabon acompañado con un pretzel de la Auntie Anne deliciosamente perfeccionado ofrece a los pasajeros del SAT un dulce regalo en el camino.", "images/2.png", "images/offers/Auntie_Anne/1.png" );
Hotel_sp[1] = new Array ( "Dunkin' Donuts","Más de 2.7 millones de Americanos al día no pueden estar equivocados! Ofreciendo algo más que rosquillas, el mayor minorista de café de EE. UU. Ha mantenido a América en funcionamiento desde 1950. Permita que Dunkin 'Donuts le dé esa patada a su destino.", "images/5.png" , "images/offers/404.png");
Hotel_sp[2] = new Array ( "Famous Famiglia Pizzeria","Es la pizza que los Neoyorquinos votan n. ° 1 y el pastel oficial de los Yankees de Nueva York y el Madison Square Garden. El famoso Famiglia ofrece lo mejor del italiano tradicional, como pasta, calzones, héroes y ensaladas. Buon appetito!", "images/6.png" , "images/offers/404.png");
Hotel_sp[3] = new Array ( "Fruteria","Desde cócteles infundidos con frutas hasta tapas mexicanas, Fruteria ofrece una variedad de artículos mientras brinda la experiencia de los hermosos y coloridos puestos de frutas de México.", "images/7.png", "images/offers/La Fruteria/La Fruteria-1.png" );
Hotel_sp[4] = new Array ( "Good Fellows","", "images/Good Fellows.jpeg", "images/offers/404.png" );
Hotel_sp[5] = new Array ( "Gervin's","Viajar te hizo estresar? Relájate en el Gervin’s Sports Bar. Con recuerdos de George Ice Man Gervin, ponte al día con los Spurs mientras saboreas los nachos de Base Line, el sándwich de pavo Slam Dunk o el sándwich del club Nothing But Net. Juego encendido!", "images/9.png" , "images/offers/404.png");
Hotel_sp[6] = new Array ( "La Gloria","Experimenta las ricas y deliciosas comidas callejeras de México. Desde tacos hasta cócteles de camarones, estos alimentos callejeros son tan únicos y coloridos como las tradiciones, la gente y la cultura de México.", "images/10.png" ,"images/offers/La Gloria/La Gloria-1.png");
Hotel_sp[7] = new Array ( "La Tapenade","Disfrute de sus papilas gustativas en un viaje con una comida de inspiración mediterránea. La Tapenade Mediterranean Café ofrece una gran cantidad de comidas sanas pero deliciosas para satisfacer el hambre antes del avistamiento.", "images/11.png", "images/offers/La Tapenade/La Tapenade-1.png" );
Hotel_sp[8] = new Array ( "Mission City Ice House","Tienes tiempo de sobra? Luego refresque sus jets y tome asiento en nuestro bar. Relájese y disfrute de una amplia variedad de cervezas locales.", "images/12.png" , "images/offers/404.png");
Hotel_sp[9] = new Array ( "Natalie's Candy Jar","Las piruletas gigantes marcan el lugar que ofrece dulces vintage, chocolates de lujo y cada variedad gomosa bajo el arco iris, y que solo araña la superficie recubierta de azúcar.", "images/13.png" , "images/offers/404.png");
Hotel_sp[10] = new Array ( "Raising Cane's Chicken Fingers","Solo tenemos un amor: dedos de pollo. Agregue Texas Toast, nuestra especialidad de salsa y papas fritas rizadas  y usted tendrá una comida hecha por encargo para cacarear.", "images/14.png", "images/offers/Raising Cane's/Raising Cane's-1.png" );
Hotel_sp[11] = new Array ( "R Sala Bebida Botana Bar","R Sala Bebida Botana Bar ofrece a los pasajeros un lounge relajado, que sirve comida ligera con un distintivo sabor Mex-Chic de San Antonio, mientras que Starbucks disfruta de la marca de café más reconocida del mundo, todo para crear un destino para relajarse y recargar energías.", "images/15.png", "images/offers/R-Salsa/R-Salsa-1.png" );
Hotel_sp[12] = new Array ( "SA Express News","", "images/Stars of San Antonio.jpeg" , "images/offers/404.png");
Hotel_sp[13] = new Array ( "Steak 'n Shake","Orgullosamente sirviendo las mejores y más frescas hamburguesas y batidos de los Estados Unidos durante más de 75 años. Agregue un lado de las papas fritas y seguramente saciará su hambre.", "images/19.png", "images/offers/Steak n' Shake/Steak n' Shake-1.png" );
Hotel_sp[14] = new Array ( "Vino Volo","Boutique minor se encuentra con estilo en Vino Volo, donde los grandes vinos de todo el mundo se venden a los viajeros por copa o en botella, en ruta o antes del vuelo. Viaja por el mundo, vidrio por vidrio! ", "images/20.png", "images/offers/Vino Volo/Vino Volo-1.png" );



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