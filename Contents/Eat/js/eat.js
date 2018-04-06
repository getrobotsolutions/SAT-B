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
Hotel_en[1] = new Array ( "Auntie Anne's/Cinnabon","The fresh, gooey taste of a Cinnabon cinnamon roll accompanied with a deliciously perfected Auntie Anne’s pretzel offers SAT passengers a sweet treat on the go.", "images/2.png" , "images/offers/Auntie_Anne/1.png");
Hotel_en[2] = new Array ( "Bon Du Monde","Stop by and pick up a chocolate surprise for your loved ones. Bon Du Monde provides you with an array of thoughtful gifts to sweeten your trip.", "images/3.png",  "images/offers/404.png" );
Hotel_en[3] = new Array ( "Charley's Grilled Subs","Famous for its award-winning Philly Cheese Steak, chicken sandwiches, subs, gourmet fries, natural lemonade, salads and healthy options, Charley’s Grilled Subs prepares its sandwiches right in front of the customer, providing high-quality meat, fresh produce and attentive service.", "images/4.png" , "images/offers/404.png");
Hotel_en[4] = new Array ( "Dunkin' Donuts","More than 2.7 million Americans a day can’t be wrong! Offering more than just donuts, the No. 1 U.S. retailer of coffee has been keeping America running since 1950. Let Dunkin’ Donuts give you that kick to your destination.", "images/5.png", "images/offers/404.png" );
Hotel_en[5] = new Array ( "Famous Famiglia Pizzeria","It’s the pizza New Yorkers vote No. 1 and the offcial pie of the New York Yankees and Madison Square Garden. Famous Famiglia offers traditional Italian at its best, including pasta, calzones, heroes and salads. Buon appetito!", "images/6.png" , "images/offers/404.png");
Hotel_en[6] = new Array ( "Fruteria","From fruit-infused cocktails to Mexican tapas, Fruteria offers a variety of items while providing the experience of Mexico’s beautiful and colorful fruit stands.", "images/7.png", "images/offers/La Fruteria/La Fruteria-1.png" );
Hotel_en[7] = new Array ( "Green Beans Coffee","On the go? Come enjoy your favorite hot beverage and buy a “Cup of Joe” for troops serving far from home and have it delivered with your own personal note of encouragement.", "images/8.png", "images/offers/Green Beans Coffee/Green Beans Coffee-1.png" );
Hotel_en[8] = new Array ( "Iceman Gervin's Sports Bar","Traveling got you stressed? Chill at Gervin’s Sports Bar. Featuring memorabilia from George “Ice Man” Gervin, catch up on the Spurs while savoring Base Line nachos, the Slam Dunk turkey sandwich or the Nothing But Net club sandwich. Game on!", "images/9.png" , "images/offers/404.png");
Hotel_en[9] = new Array ( "La Gloria","Experience the rich and delicious street foods of Mexico. From tacos to shrimp cocktail, these street foods are as unique and colorful as Mexico’s traditions, people and culture.", "images/10.png", "images/offers/La Gloria/La Gloria-1.png" );
Hotel_en[10] = new Array ( "La Tapenade","Take your taste buds on a trip with a Mediterranean-inspired meal. La Tapenade Mediterranean Café offers a plethora of healthy, yet delicious meals to satisfy that preflight hunger.", "images/11.png", "images/offers/La Tapenade/La Tapenade-1.png" );
Hotel_en[11] = new Array ( "Mission City Ice House","Have time to spare? Then cool your jets and grab a seat at our bar. Relax and enjoy a wide variety of locally brewed beers.", "images/12.png" , "images/offers/404.png");
Hotel_en[12] = new Array ( "Natalie's Candy Jar","Giant lollipops mark the spot that offers vintage candies, deluxe chocolates and every gummy variety under the rainbow, and that just scratches the sugar-coated surface.", "images/13.png" , "images/offers/404.png");
Hotel_en[13] = new Array ( "Raising Cane's Chicken Fingers","We only have one love: chicken fingers. Add Texas Toast, our specialty sauce and crinkle cut fries and you have a made-to-order meal to cluck about..", "images/14.png", "images/offers/Raising Cane's/Raising Cane's-1.png" );
Hotel_en[14] = new Array ( "R Sala Bebida Botana Bar","R Sala Bebida Botana Bar goers passengers a relaxed lounge, serving light fare with a distinctive San Antonio Mex-Chic flavor, while Starbucks goers the world’s most recognizable brand of coffee — all to create a destination to relax and recharge.", "images/15.png", "images/offers/R-Salsa/R-Salsa-1.png" );
Hotel_en[15] = new Array ( "Rosario's","Featuring a newly-expanded restaurant service in Terminal B, San Antonio’s own Rosario’s strives to exceed guests’ expectations on food, service and overall design, while truly creating a sense of San Antonio within the airport.", "images/16.png", "images/offers/Rosarios/Rosarios-1.png" );
Hotel_en[16] = new Array ( "Sbarro","Best known for freshly-made, hand-tossed pizza topped with the finest ingredients. Sbarro fresh Italian cooking features time honored recipes including pasta, salads, entrées and desserts.", "images/17.png" , "images/offers/404.png");
Hotel_en[17] = new Array ( "Starbucks","Handcrafted beverages and a name you can trust – it doesn’t get any cozier than that. Curl up with a favorite brew or Tazo tea creation today … and don’t forget the biscotti..", "images/18.png", "images/offers/Starbucks/Starbucks-1.png" );
Hotel_en[18] = new Array ( "Steak 'n Shake","Proudly serving America’s best, freshest, and tastiest burgers and shakes for more than 75 years. Add a side of fries and you’ll surely satisfy your hunger.", "images/19.png", "images/offers/Steak n' Shake/Steak n' Shake-1.png" );
Hotel_en[19] = new Array ( "Vino Volo","Boutique retail meets lounging in style at Vino Volo, where great wines from across the globe are sold to travelers by glass or by bottle, en route or pre-flight. Travel the world, glass by glass!", "images/20.png", "images/offers/Vino Volo/Vino Volo-1.png" );



var Hotel_sp = new Array ( );
Hotel_sp[0] = new Array ( "Alamo Alehouse","En Alamo Alehouse, puedes elegir entre muchos excelentes platos de menú que incluyen sándwiches para el desayuno, hamburguesas personalizables y sabrosos entrantes y acompañantes. Y, por supuesto, al ser una cervecería, Alamo también ofrece una excelente selección de cervezas y vinos.", "images/1.png" , "images/offers/404.png");
Hotel_sp[1] = new Array ( "Auntie Anne's/Cinnabon","El sabor fresco y pegajoso de un rollo de canela Cinnabon acompañado con un pretzel de la Auntie Anne deliciosamente perfeccionado ofrece a los pasajeros del SAT un dulce regalo en el camino.", "images/2.png", "images/offers/Auntie_Anne/1.png" );
Hotel_sp[2] = new Array ( "Bon Du Monde","Venga y recoja una sorpresa de chocolate para sus seres queridos. Bon Du Monde le ofrece una variedad de regalos pensados para endulzar su viaje.", "images/3.png" , "images/offers/404.png");
Hotel_sp[3] = new Array ( "Charley's Grilled Subs","Famoso por su galardonado Philly Cheese Steak, sándwiches de pollo, sándwiches, papas fritas gourmet, limonada natural, ensaladas y opciones saludables, Charley's Grilled Subs prepara sus sándwiches justo en frente del cliente, ofreciendo carne de alta calidad, productos frescos y un servicio atento.", "images/4.png" , "images/offers/404.png");
Hotel_sp[4] = new Array ( "Dunkin' Donuts","Más de 2.7 millones de Americanos al día no pueden estar equivocados! Ofreciendo algo más que rosquillas, el mayor minorista de café de EE. UU. Ha mantenido a América en funcionamiento desde 1950. Permita que Dunkin 'Donuts le dé esa patada a su destino.", "images/5.png" , "images/offers/404.png");
Hotel_sp[5] = new Array ( "Famous Famiglia Pizzeria","Es la pizza que los Neoyorquinos votan n. ° 1 y el pastel oficial de los Yankees de Nueva York y el Madison Square Garden. El famoso Famiglia ofrece lo mejor del italiano tradicional, como pasta, calzones, héroes y ensaladas. Buon appetito!", "images/6.png" , "images/offers/404.png");
Hotel_sp[6] = new Array ( "Fruteria","Desde cócteles infundidos con frutas hasta tapas mexicanas, Fruteria ofrece una variedad de artículos mientras brinda la experiencia de los hermosos y coloridos puestos de frutas de México.", "images/7.png", "images/offers/La Fruteria/La Fruteria-1.png" );
Hotel_sp[7] = new Array ( "Green Beans Coffee","Muy activo? Ven a disfrutar de tu bebida caliente favorita y compra una Cup of Joe para las tropas que sirven lejos de casa y haz que te la entreguen con tu nota personal de aliento.", "images/8.png", "images/offers/Green Beans Coffee/Green Beans Coffee-1.png"  );
Hotel_sp[8] = new Array ( "Iceman Gervin's Sports Bar","Viajar te hizo estresar? Relájate en el Gervin’s Sports Bar. Con recuerdos de George Ice Man Gervin, ponte al día con los Spurs mientras saboreas los nachos de Base Line, el sándwich de pavo Slam Dunk o el sándwich del club Nothing But Net. Juego encendido!", "images/9.png" , "images/offers/404.png");
Hotel_sp[9] = new Array ( "La Gloria","Experimenta las ricas y deliciosas comidas callejeras de México. Desde tacos hasta cócteles de camarones, estos alimentos callejeros son tan únicos y coloridos como las tradiciones, la gente y la cultura de México.", "images/10.png" ,"images/offers/La Gloria/La Gloria-1.png");
Hotel_sp[10] = new Array ( "La Tapenade","Disfrute de sus papilas gustativas en un viaje con una comida de inspiración mediterránea. La Tapenade Mediterranean Café ofrece una gran cantidad de comidas sanas pero deliciosas para satisfacer el hambre antes del avistamiento.", "images/11.png", "images/offers/La Tapenade/La Tapenade-1.png" );
Hotel_sp[11] = new Array ( "Mission City Ice House","Tienes tiempo de sobra? Luego refresque sus jets y tome asiento en nuestro bar. Relájese y disfrute de una amplia variedad de cervezas locales.", "images/12.png" , "images/offers/404.png");
Hotel_sp[12] = new Array ( "Natalie's Candy Jar","Las piruletas gigantes marcan el lugar que ofrece dulces vintage, chocolates de lujo y cada variedad gomosa bajo el arco iris, y que solo araña la superficie recubierta de azúcar.", "images/13.png" , "images/offers/404.png");
Hotel_sp[13] = new Array ( "Raising Cane's Chicken Fingers","Solo tenemos un amor: dedos de pollo. Agregue Texas Toast, nuestra especialidad de salsa y papas fritas rizadas  y usted tendrá una comida hecha por encargo para cacarear.", "images/14.png", "images/offers/Raising Cane's/Raising Cane's-1.png" );
Hotel_sp[14] = new Array ( "R Sala Bebida Botana Bar","R Sala Bebida Botana Bar ofrece a los pasajeros un lounge relajado, que sirve comida ligera con un distintivo sabor Mex-Chic de San Antonio, mientras que Starbucks disfruta de la marca de café más reconocida del mundo, todo para crear un destino para relajarse y recargar energías.", "images/15.png", "images/offers/R-Salsa/R-Salsa-1.png" );
Hotel_sp[15] = new Array ( "Rosario's","Con un nuevo servicio de restaurante expandido en la Terminal B, el propio Rosario de San Antonio se esfuerza por exceder las expectativas de los huéspedes en cuanto a comida, servicio y diseño general, mientras que realmente crea una sensación de San Antonio dentro del aeropuerto.", "images/16.png", "images/offers/Rosarios/Rosarios-1.png" );
Hotel_sp[16] = new Array ( "Sbarro","Mejor conocido por pizza recién hecha y hecha a mano con los mejores ingredientes. La cocina italiana fresca de Sbarro ofrece recetas de larga tradición como pasta, ensaladas, entrantes y postres.", "images/17.png" , "images/offers/404.png");
Hotel_sp[17] = new Array ( "Starbucks","Bebidas artesanales y un nombre en el que puede confiar: no hay nada más acogedor que eso. Acurrúcate con una bebida favorita o una creación de té Tazo hoy ... y no te olvides de los biscotti.", "images/18.png", "images/offers/Starbucks/Starbucks-1.png" );
Hotel_sp[18] = new Array ( "Steak 'n Shake","Orgullosamente sirviendo las mejores y más frescas hamburguesas y batidos de los Estados Unidos durante más de 75 años. Agregue un lado de las papas fritas y seguramente saciará su hambre.", "images/19.png", "images/offers/Steak n' Shake/Steak n' Shake-1.png" );
Hotel_sp[19] = new Array ( "Vino Volo","Boutique minor se encuentra con estilo en Vino Volo, donde los grandes vinos de todo el mundo se venden a los viajeros por copa o en botella, en ruta o antes del vuelo. Viaja por el mundo, vidrio por vidrio! ", "images/20.png", "images/offers/Vino Volo/Vino Volo-1.png" );




if(readCookie("CurrentLanguage") === "English")
{
  var Hotel = new Array ( );
   Hotel = Hotel_en ;
   document.getElementById("HotelDesc").innerHTML = "At the Alamo Alehouse, you can choose from many great menu items including breakfast sandwiches, customizable burgers and tasty starters and sides! And of course, being an alehouse, Alamo also offers a great beer and wine selection!";
}else if(readCookie("CurrentLanguage") === "Spanish")
{
   var Hotel = new Array ( );
   Hotel = Hotel_sp ;
    document.getElementById("HotelDesc").innerHTML = "En Alamo Alehouse, puedes elegir entre muchos excelentes platos de menú que incluyen sándwiches para el desayuno, hamburguesas personalizables y sabrosos entrantes y acompañantes. Y, por supuesto, al ser una cervecería, Alamo también ofrece una excelente selección de cervezas y vinos.";
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