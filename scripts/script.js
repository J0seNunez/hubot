// module.exports = function(bot){
//     bot.hear(/hi/, function(res){
//         return res.send("Hello World!");
//     })
// }

var squirrels;
squirrels = ["http://img.skitch.com/20100714-d6q52xajfh4cimxr3888yb77ru.jpg", "https://img.skitch.com/20111026-r2wsngtu4jftwxmsytdke6arwd.png", "http://cl.ly/1i0s1r3t2s2G3P1N3t3M/Screen_Shot_2011-10-27_at_9.36.45_AM.png", "http://shipitsquirrel.github.com/images/squirrel.png"];
const dclogos = ["http://clipart-library.com/images/AcbbjMxc4.png", "http://clipart-library.com/images/pcoAr9gRi.jpg", "http://clipart-library.com/image_gallery/n1121170.jpg", "http://clipart-library.com/images_k/wonder-woman-logo-transparent-background/wonder-woman-logo-transparent-background-8.png", "http://clipart-library.com/new_gallery/102-1021268_lightning-bolt-the-flash.png"];
const marvel=["http://clipart-library.com/image_gallery2/Iron-Man-PNG-HD.png", "http://clipart-library.com/new_gallery/26-262307_captain-america-shield-png-captain-america-shield-texture.png", "http://clipart-library.com/img/1364954.jpg", "http://clipart-library.com/data_images/298106.jpg"];

const capitalList = [
  { "country":"Afghanistan" , "capital":"Kabul" }, 
  { "country":"Albania" , "capital":"Tirana (Tirane)" }, 
  { "country":"Algeria" , "capital":"Algiers" }, 
  { "country":"Andorra" , "capital":"Andorra la Vella" }, 
  { "country":"Angola" , "capital":"Luanda" }, 
  { "country":"Antigua and Barbuda" , "capital":"Saint John's" }, 
  { "country":"Argentina" , "capital":"Buenos Aires" }, 
  { "country":"Armenia" , "capital":"Yerevan" }, 
  { "country":"Australia" , "capital":"Canberra" }, 
  { "country":"Austria" , "capital":"Vienna" }, 
  { "country":"Azerbaijan" , "capital":"Baku" }, 
  { "country":"Bahamas" , "capital":"Nassau" }, 
  { "country":"Bahrain" , "capital":"Manama" }, 
  { "country":"Bangladesh" , "capital":"Dhaka" }, 
  { "country":"Barbados" , "capital":"Bridgetown" }, 
  { "country":"Belarus" , "capital":"Minsk" }, 
  { "country":"Belgium" , "capital":"Brussels" }, 
  { "country":"Belize" , "capital":"Belmopan" }, 
  { "country":"Benin" , "capital":"Porto Novo" }, 
  { "country":"Bhutan" , "capital":"Thimphu" }, 
  { "country":"Bolivia" , "capital":"La Paz" }, 
  { "country":"Bosnia and Herzegovina" , "capital":"Sarajevo" }, 
  { "country":"Botswana" , "capital":"Gaborone" }, 
  { "country":"Brazil" , "capital":"Brasilia" }, 
  { "country":"Brunei" , "capital":"Bandar Seri Begawan" }, 
  { "country":"Bulgaria" , "capital":"Sofia" }, 
  { "country":"Burkina Faso" , "capital":"Ouagadougou" }, 
  { "country":"Burundi" , "capital":"Gitega" }, 
  { "country":"Cambodia" , "capital":"Phnom Penh" }, 
  { "country":"Cameroon" , "capital":"Yaounde" }, 
  { "country":"Canada" , "capital":"Ottawa" }, 
  { "country":"Cape Verde" , "capital":"Praia" }, 
  { "country":"Central African Republic" , "capital":"Bangui" }, 
  { "country":"Chad" , "capital":"N'Djamena" }, 
  { "country":"Chile" , "capital":"Santiago" }, 
  { "country":"China" , "capital":"Beijing" }, 
  { "country":"Colombia" , "capital":"Bogota" }, 
  { "country":"Comoros" , "capital":"Moroni" }, 
  { "country":"Democratic Republic of the Congo" , "capital":"Kinshasa" }, 
  { "country":"Republic of the Congo" , "capital":"Brazzaville" }, 
  { "country":"Costa Rica" , "capital":"San Jose" }, 
  { "country":"Ivory Coast" , "capital":"Yamoussoukro" }, 
  { "country":"Croatia" , "capital":"Zagreb" }, 
  { "country":"Cuba" , "capital":"Havana" }, 
  { "country":"Cyprus" , "capital":"Nicosia" }, 
  { "country":"Czech Republic" , "capital":"Prague" }, 
  { "country":"Denmark" , "capital":"Copenhagen" }, 
  { "country":"Djibouti" , "capital":"Djibouti" }, 
  { "country":"Dominica" , "capital":"Roseau" }, 
  { "country":"Dominican Republic" , "capital":"Santo Domingo" }, 
  { "country":"East Timor" , "capital":"Dili" }, 
  { "country":"Ecuador" , "capital":"Quito" }, 
  { "country":"Egypt" , "capital":"Cairo" }, 
  { "country":"El Salvador" , "capital":"San Salvador" }, 
  { "country":"England" , "capital":"London" }, 
  { "country":"Equatorial Guinea" , "capital":"Malabo" }, 
  { "country":"Eritrea" , "capital":"Asmara" }, 
  { "country":"Estonia" , "capital":"Tallinn" }, 
  { "country":"Swaziland" , "capital":"Mbabana" }, 
  { "country":"Ethiopia" , "capital":"Addis Ababa" }, 
  { "country":"Federated States of Micronesia" , "capital":"Palikir" }, 
  { "country":"Fiji" , "capital":"Suva" }, 
  { "country":"Finland" , "capital":"Helsinki" }, 
  { "country":"France" , "capital":"Paris" }, 
  { "country":"French Guiana" , "capital":"Cayenne" }, 
  { "country":"Gabon" , "capital":"Libreville" }, 
  { "country":"Gambia" , "capital":"Banjul" }, 
  { "country":"Georgia" , "capital":"Tbilisi" }, 
  { "country":"Germany" , "capital":"Berlin" }, 
  { "country":"Ghana" , "capital":"Accra" }, 
  { "country":"Greece" , "capital":"Athens" }, 
  { "country":"Grenada" , "capital":"Saint George's" }, 
  { "country":"Guatemala" , "capital":"Guatemala City" }, 
  { "country":"Guinea" , "capital":"Conakry" }, 
  { "country":"Guinea-Bissau" , "capital":"Bissau" }, 
  { "country":"Guyana" , "capital":"Georgetown" }, 
  { "country":"Haiti" , "capital":"Port au Prince" }, 
  { "country":"Honduras" , "capital":"Tegucigalpa" }, 
  { "country":"Hungary" , "capital":"Budapest" }, 
  { "country":"Iceland" , "capital":"Reykjavik" }, 
  { "country":"India" , "capital":"New Delhi" }, 
  { "country":"Indonesia" , "capital":"Jakarta" }, 
  { "country":"Iran" , "capital":"Tehran" }, 
  { "country":"Iraq" , "capital":"Baghdad" }, 
  { "country":"Ireland" , "capital":"Dublin" }, 
  { "country":"Israel" , "capital":"Tel Aviv (Jerusalem has limited recognition)" }, 
  { "country":"Italy" , "capital":"Rome" }, 
  { "country":"Jamaica" , "capital":"Kingston" }, 
  { "country":"Japan" , "capital":"Tokyo" }, 
  { "country":"Jordan" , "capital":"Amman" }, 
  { "country":"Kazakhstan" , "capital":"Astana" }, 
  { "country":"Kenya" , "capital":"Nairobi" }, 
  { "country":"Kiribati" , "capital":"Tarawa Atoll" }, 
  { "country":"Kosovo" , "capital":"Pristina" }, 
  { "country":"Kuwait" , "capital":"Kuwait City" }, 
  { "country":"Kyrgyzstan" , "capital":"Bishkek" }, 
  { "country":"Laos" , "capital":"Vientiane" }, 
  { "country":"Latvia" , "capital":"Riga" }, 
  { "country":"Lebanon" , "capital":"Beirut" }, 
  { "country":"Lesotho" , "capital":"Maseru" }, 
  { "country":"Liberia" , "capital":"Monrovia" }, 
  { "country":"Libya" , "capital":"Tripoli" }, 
  { "country":"Liechtenstein" , "capital":"Vaduz" }, 
  { "country":"Lithuania" , "capital":"Vilnius" }, 
  { "country":"Luxembourg" , "capital":"Luxembourg" }, 
  { "country":"Madagascar" , "capital":"Antananarivo" }, 
  { "country":"Malawi" , "capital":"Lilongwe" }, 
  { "country":"Malaysia" , "capital":"Kuala Lumpur" }, 
  { "country":"Maldives" , "capital":"Male" }, 
  { "country":"Mali" , "capital":"Bamako" }, 
  { "country":"Malta" , "capital":"Valletta" }, 
  { "country":"Marshall Islands" , "capital":"Majuro" }, 
  { "country":"Mauritania" , "capital":"Nouakchott" }, 
  { "country":"Mauritius" , "capital":"Port Louis" }, 
  { "country":"Mexico" , "capital":"Mexico City" }, 
  { "country":"Moldova" , "capital":"Chisinau" }, 
  { "country":"Monaco" , "capital":"Monaco" }, 
  { "country":"Mongolia" , "capital":"Ulaanbaatar" }, 
  { "country":"Montenegro" , "capital":"Podgorica" }, 
  { "country":"Morocco" , "capital":"Rabat" }, 
  { "country":"Mozambique" , "capital":"Maputo" }, 
  { "country":"Myanmar" , "capital":"Nay Pyi Taw" }, 
  { "country":"Namibia" , "capital":"Windhoek" }, 
  { "country":"Nauru" , "capital":"No official capital" }, 
  { "country":"Nepal" , "capital":"Kathmandu" }, 
  { "country":"Netherlands" , "capital":"Amsterdam" }, 
  { "country":"New Zealand" , "capital":"Wellington" }, 
  { "country":"Nicaragua" , "capital":"Managua" }, 
  { "country":"Niger" , "capital":"Niamey" }, 
  { "country":"Nigeria" , "capital":"Abuja" }, 
  { "country":"North Korea" , "capital":"Pyongyang" }, 
  { "country":"Macedonia" , "capital":"Skopje" }, 
  { "country":"Northern Ireland" , "capital":"Belfast" }, 
  { "country":"Norway" , "capital":"Oslo" }, 
  { "country":"Oman" , "capital":"Muscat" }, 
  { "country":"Pakistan" , "capital":"Islamabad" }, 
  { "country":"Palau" , "capital":"Melekeok" }, 
  { "country":"Panama" , "capital":"Panama City" }, 
  { "country":"Papua New Guinea" , "capital":"Port Moresby" }, 
  { "country":"Paraguay" , "capital":"Asuncion" }, 
  { "country":"Peru" , "capital":"Lima" }, 
  { "country":"Philippines" , "capital":"Manila" }, 
  { "country":"Poland" , "capital":"Warsaw" }, 
  { "country":"Portugal" , "capital":"Lisbon" }, 
  { "country":"Qatar" , "capital":"Doha" }, 
  { "country":"Romania" , "capital":"Bucharest" }, 
  { "country":"Russia" , "capital":"Moscow" }, 
  { "country":"Rwanda" , "capital":"Kigali" }, 
  { "country":"Saint Kitts and Nevis" , "capital":"Basseterre" }, 
  { "country":"Saint Lucia" , "capital":"Castries" }, 
  { "country":"Saint Vincent and the Grenadines" , "capital":"Kingstown" }, 
  { "country":"Samoa" , "capital":"Apia" }, 
  { "country":"San Marino" , "capital":"San Marino" }, 
  { "country":"Sao Tome and Principe" , "capital":"Sao Tome" }, 
  { "country":"Saudi Arabia" , "capital":"Riyadh" }, 
  { "country":"Scotland" , "capital":"Edinburgh" }, 
  { "country":"Senegal" , "capital":"Dakar" }, 
  { "country":"Serbia" , "capital":"Belgrade" }, 
  { "country":"Seychelles" , "capital":"Victoria" }, 
  { "country":"Sierra Leone" , "capital":"Freetown" }, 
  { "country":"Singapore" , "capital":"Singapore" }, 
  { "country":"Slovakia" , "capital":"Bratislava" }, 
  { "country":"Slovenia" , "capital":"Ljubljana" }, 
  { "country":"Solomon Islands" , "capital":"Honiara" }, 
  { "country":"Somalia" , "capital":"Mogadishu" }, 
  { "country":"South Africa" , "capital":"Pretoria, Bloemfontein, Cape Town" }, 
  { "country":"South Korea" , "capital":"Seoul" }, 
  { "country":"South Sudan" , "capital":"Juba" }, 
  { "country":"Spain" , "capital":"Madrid" }, 
  { "country":"Sri Lanka" , "capital":"Colombo" }, 
  { "country":"Sudan" , "capital":"Khartoum" }, 
  { "country":"Suriname" , "capital":"Paramaribo" }, 
  { "country":"Sweden" , "capital":"Stockholm" }, 
  { "country":"Switzerland" , "capital":"Bern" }, 
  { "country":"Syria" , "capital":"Damascus" }, 
  { "country":"Taiwan" , "capital":"Taipei" }, 
  { "country":"Tajikistan" , "capital":"Dushanbe" }, 
  { "country":"Tanzania" , "capital":"Dodoma" }, 
  { "country":"Thailand" , "capital":"Bangkok" }, 
  { "country":"Togo" , "capital":"Lome" }, 
  { "country":"Tonga" , "capital":"Nuku'alofa" }, 
  { "country":"Trinidad and Tobago" , "capital":"Port of Spain" }, 
  { "country":"Tunisia" , "capital":"Tunis" }, 
  { "country":"Turkey" , "capital":"Ankara" }, 
  { "country":"Turkmenistan" , "capital":"Ashgabat" }, 
  { "country":"Tuvalu" , "capital":"Funafuti" }, 
  { "country":"Uganda" , "capital":"Kampala" }, 
  { "country":"Ukraine" , "capital":"Kiev" }, 
  { "country":"United Arab Emirates" , "capital":"Abu Dhabi" }, 
  { "country":"United Kingdom" , "capital":"London" }, 
  { "country":"United States" , "capital":"Washington D.C." }, 
  { "country":"Uruguay" , "capital":"Montevideo" }, 
  { "country":"Uzbekistan" , "capital":"Tashkent" }, 
  { "country":"Vanuatu" , "capital":"Port Vila" }, 
  { "country":"Vatican City" , "capital":"Vatican City" }, 
  { "country":"Venezuela" , "capital":"Caracas" }, 
  { "country":"Vietnam" , "capital":"Hanoi" }, 
  { "country":"Wales" , "capital":"Cardiff" }, 
  { "country":"Yemen" , "capital":"Sana'a" }, 
  { "country":"Zambia" , "capital":"Lusaka" }, 
  { "country":"Zimbabwe" , "capital":"Harare" }
];

const orbitals = [
  {
    periods: "1234567",
    size: 2,
    name: "s"
  },
  {
    periods: "234567",
    size: 6,
    name: "p"
  },
  {
    periods: "3456",
    size: 10,
    name: "d"
  },
  {
    periods: "45",
    size: 14,
    name: "f"
  }
];

const listOfElements =[
  { "name":"Hydrogen" , "number":"1" , "symbol":"H" }, 
  { "name":"Helium" , "number":"2" , "symbol":"He" }, 
  { "name":"Lithium" , "number":"3" , "symbol":"Li" }, 
  { "name":"Beryllium" , "number":"4" , "symbol":"Be" }, 
  { "name":"Boron" , "number":"5" , "symbol":"B" }, 
  { "name":"Carbon" , "number":"6" , "symbol":"C" }, 
  { "name":"Nitrogen" , "number":"7" , "symbol":"N" }, 
  { "name":"Oxygen" , "number":"8" , "symbol":"O" }, 
  { "name":"Fluorine" , "number":"9" , "symbol":"F" }, 
  { "name":"Neon" , "number":"10" , "symbol":"Ne" }, 
  { "name":"Sodium" , "number":"11" , "symbol":"Na" }, 
  { "name":"Magnesium" , "number":"12" , "symbol":"Mg" }, 
  { "name":"Aluminum" , "number":"13" , "symbol":"Al" }, 
  { "name":"Silicon" , "number":"14" , "symbol":"Si" }, 
  { "name":"Phosphorus" , "number":"15" , "symbol":"P" }, 
  { "name":"Sulfur" , "number":"16" , "symbol":"S" }, 
  { "name":"Chlorine" , "number":"17" , "symbol":"Cl" }, 
  { "name":"Argon" , "number":"18" , "symbol":"Ar" }, 
  { "name":"Potassium" , "number":"19" , "symbol":"K" }, 
  { "name":"Calcium" , "number":"20" , "symbol":"Ca" }, 
  { "name":"Scandium" , "number":"21" , "symbol":"Sc" }, 
  { "name":"Titanium" , "number":"22" , "symbol":"Ti" }, 
  { "name":"Vanadium" , "number":"23" , "symbol":"V" }, 
  { "name":"Chromium" , "number":"24" , "symbol":"Cr" }, 
  { "name":"Manganese" , "number":"25" , "symbol":"Mn" }, 
  { "name":"Iron" , "number":"26" , "symbol":"Fe" }, 
  { "name":"Cobalt" , "number":"27" , "symbol":"Co" }, 
  { "name":"Nickel" , "number":"28" , "symbol":"Ni" }, 
  { "name":"Copper" , "number":"29" , "symbol":"Cu" }, 
  { "name":"Zinc" , "number":"30" , "symbol":"Zn" }, 
  { "name":"Gallium" , "number":"31" , "symbol":"Ga" }, 
  { "name":"Germanium" , "number":"32" , "symbol":"Ge" }, 
  { "name":"Arsenic" , "number":"33" , "symbol":"As" }, 
  { "name":"Selenium" , "number":"34" , "symbol":"Se" }, 
  { "name":"Bromine" , "number":"35" , "symbol":"Br" }, 
  { "name":"Krypton" , "number":"36" , "symbol":"Kr" }, 
  { "name":"Rubidium" , "number":"37" , "symbol":"Rb" }, 
  { "name":"Strontium" , "number":"38" , "symbol":"Sr" }, 
  { "name":"Yttrium" , "number":"39" , "symbol":"Y" }, 
  { "name":"Zirconium" , "number":"40" , "symbol":"Zr" }, 
  { "name":"Niobium" , "number":"41" , "symbol":"Nb" }, 
  { "name":"Molybdenum" , "number":"42" , "symbol":"Mo" }, 
  { "name":"Technetium" , "number":"43" , "symbol":"Tc" }, 
  { "name":"Ruthenium" , "number":"44" , "symbol":"Ru" }, 
  { "name":"Rhodium" , "number":"45" , "symbol":"Rh" }, 
  { "name":"Palladium" , "number":"46" , "symbol":"Pd" }, 
  { "name":"Silver" , "number":"47" , "symbol":"Ag" }, 
  { "name":"Cadmium" , "number":"48" , "symbol":"Cd" }, 
  { "name":"Indium" , "number":"49" , "symbol":"In" }, 
  { "name":"Tin" , "number":"50" , "symbol":"Sn" }, 
  { "name":"Antimony" , "number":"51" , "symbol":"Sb" }, 
  { "name":"Tellurium" , "number":"52" , "symbol":"Te" }, 
  { "name":"Iodine" , "number":"53" , "symbol":"I" }, 
  { "name":"Xenon" , "number":"54" , "symbol":"Xe" }, 
  { "name":"Cesium" , "number":"55" , "symbol":"Cs" }, 
  { "name":"Barium" , "number":"56" , "symbol":"Ba" }, 
  { "name":"Lanthanum" , "number":"57" , "symbol":"La" }, 
  { "name":"Cerium" , "number":"58" , "symbol":"Ce" }, 
  { "name":"Praseodymium" , "number":"59" , "symbol":"Pr" }, 
  { "name":"Neodymium" , "number":"60" , "symbol":"Nd" }, 
  { "name":"Promethium" , "number":"61" , "symbol":"Pm" }, 
  { "name":"Samarium" , "number":"62" , "symbol":"Sm" }, 
  { "name":"Europium" , "number":"63" , "symbol":"Eu" }, 
  { "name":"Gadolinium" , "number":"64" , "symbol":"Gd" }, 
  { "name":"Terbium" , "number":"65" , "symbol":"Tb" }, 
  { "name":"Dysprosium" , "number":"66" , "symbol":"Dy" }, 
  { "name":"Holmium" , "number":"67" , "symbol":"Ho" }, 
  { "name":"Erbium" , "number":"68" , "symbol":"Er" }, 
  { "name":"Thulium" , "number":"69" , "symbol":"Tm" }, 
  { "name":"Ytterbium" , "number":"70" , "symbol":"Yb" }, 
  { "name":"Lutetium" , "number":"71" , "symbol":"Lu" }, 
  { "name":"Hafnium" , "number":"72" , "symbol":"Hf" }, 
  { "name":"Tantalum" , "number":"73" , "symbol":"Ta" }, 
  { "name":"Tungsten" , "number":"74" , "symbol":"W" }, 
  { "name":"Rhenium" , "number":"75" , "symbol":"Re" }, 
  { "name":"Osmium" , "number":"76" , "symbol":"Os" }, 
  { "name":"Iridium" , "number":"77" , "symbol":"Ir" }, 
  { "name":"Platinum" , "number":"78" , "symbol":"Pt" }, 
  { "name":"Gold" , "number":"79" , "symbol":"Au" }, 
  { "name":"Mercury" , "number":"80" , "symbol":"Hg" }, 
  { "name":"Thallium" , "number":"81" , "symbol":"Tl" }, 
  { "name":"Lead" , "number":"82" , "symbol":"Pb" }, 
  { "name":"Bismuth" , "number":"83" , "symbol":"Bi" }, 
  { "name":"Polonium" , "number":"84" , "symbol":"Po" }, 
  { "name":"Astatine" , "number":"85" , "symbol":"At" }, 
  { "name":"Radon" , "number":"86" , "symbol":"Rn" }, 
  { "name":"Francium" , "number":"87" , "symbol":"Fr" }, 
  { "name":"Radium" , "number":"88" , "symbol":"Ra" }, 
  { "name":"Actinium" , "number":"89" , "symbol":"Ac" }, 
  { "name":"Thorium" , "number":"90" , "symbol":"Th" }, 
  { "name":"Protactinium" , "number":"91" , "symbol":"Pa" }, 
  { "name":"Uranium" , "number":"92" , "symbol":"U" }, 
  { "name":"Neptunium" , "number":"93" , "symbol":"Np" }, 
  { "name":"Plutonium" , "number":"94" , "symbol":"Pu" }, 
  { "name":"Americium" , "number":"95" , "symbol":"Am" }, 
  { "name":"Curium" , "number":"96" , "symbol":"Cm" }, 
  { "name":"Berkelium" , "number":"97" , "symbol":"Bk" }, 
  { "name":"Californium" , "number":"98" , "symbol":"Cf" }, 
  { "name":"Einsteinium" , "number":"99" , "symbol":"Es" }, 
  { "name":"Fermium" , "number":"100" , "symbol":"Fm" }, 
  { "name":"Mendelevium" , "number":"101" , "symbol":"Md" }, 
  { "name":"Nobelium" , "number":"102" , "symbol":"No" }, 
  { "name":"Lawrencium" , "number":"103" , "symbol":"Lr" }, 
  { "name":"Rutherfordium" , "number":"104" , "symbol":"Rf" }, 
  { "name":"Dubnium" , "number":"105" , "symbol":"Db" }, 
  { "name":"Seaborgium" , "number":"106" , "symbol":"Sg" }, 
  { "name":"Bohrium" , "number":"107" , "symbol":"Bh" }, 
  { "name":"Hassium" , "number":"108" , "symbol":"Hs" }, 
  { "name":"Meitnerium" , "number":"109" , "symbol":"Mt" }
];
  
function getOrbitals(atomic_number) {
  let output = "";
  for (let i = 1; i <= 8; i++) {
    let x = Math.min(i, 4);
    let y = Math.max(i - 3, 1);
    while (x > 0 && y <= 7) {
      var orbital = orbitals[x-1];
      if (orbital.periods.indexOf(y) !== -1) {
        output += y;
        output += orbital.name;
        output += Math.min(atomic_number, orbital.size);
        if (atomic_number <= orbital.size) {
          return output;
        }
        atomic_number -= orbital.size;
        output += " ";
      }
      x--;
      y++;
    }
  }
}

module.exports = function(robot) {
  // /* Basic example of respond / send. If the user enters hi or hello the bot responds "Howdy!" */
  robot.respond(/hi|hello/i, function(msg) {
    return msg.send("Hope you are having a great coding day.");
  });

  // /* Random Example
  // If a user enters 'ship it' we return a random squirrel, which is popular for symbolizing shipping something with engineers */
  // return robot.hear(/ship it/i, function(msg) {
  //   return msg.send(msg.random(squirrels));
  // });

  /* Marvel and DC
  If a user enters 'marvel' or 'DC', the bot sends a elated image.*/
  robot.hear(/marvel/i, function(res) {
      return res.send(res.random(marvel));
    });
  robot.hear(/DC/i, function(res) {
    return res.send(res.random(dclogos));
  });

  /*Reply with Capital Cities
  If a user asks for the capital of a Country, the bot should reply with the capital city*/
  
  robot.respond(/what is the capital of (.*)/i, function(res) {
    let countryInput;
    countryInput = res.match[1];
    //res.send(countryInput);
    let capitalQuery = capitalList.filter(function(target) {
      return target.country == countryInput;
    });

    if (capitalQuery.length===0){
      return res.reply("I do not know the country " + countryInput + ". Please revise, make sure is capitalized or give me another country. (Do not use any characters at the end, like question marks.)");
    } else {
      return res.reply("The capital of " + countryInput + " is " + capitalQuery[0].capital);
    }
  });

  /*Reply with electron configuration of an element
  If user asks for the electron configuration of an element, the bot should reply with atomic number, symbol, and electron configuration*/
  
  robot.respond(/electron configuration for (.*)/i, function(res) {
    let elementInput;
    elementInput = res.match[1];
    //res.send(elementInput);
    let elementQuery = listOfElements.filter(function(target) {
      return target.name == elementInput;
    });

    if (elementQuery.length===0){
      return res.reply("I do not know the element " + elementInput + ". Please revise, make sure is capitalized or give me another element. (Do not use any characters at the end, like question marks.)");
    } else {
      return res.reply(elementInput + " : " + elementQuery[0].symbol + " : " + elementQuery[0].number + " : " + getOrbitals(elementQuery[0].number));
    }
  });

};
