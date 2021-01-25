jQuery(document).ready(function($){
	var contentSections = $('.cd-section'),
		navigationItems = $('#cd-vertical-nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
        );
	}
});




var btnEnLan = document.getElementById('en');
var btnSkLan = document.getElementById('sk');
var skLabel = document.querySelector('.sk-label');
var enLabel = document.querySelector('.en-label');
var loader = document.querySelector('#loader');
var language = false;  // false=sk;true=en


//vars
//nav links

//Header
var navLink1 = document.querySelector('.link1');
var navLink2 = document.querySelector('.link2');
var navLink3 = document.querySelector('.link3');
var navLink4 = document.querySelector('.link4');
var navLink5 = document.querySelector('.link5');
/*responsive nav*/
var rnavLink1 = document.querySelector('.r-link1');
var rnavLink2 = document.querySelector('.r-link2');
var rnavLink3 = document.querySelector('.r-link3');
var rnavLink4 = document.querySelector('.r-link4');
var rnavLink5 = document.querySelector('.r-link5');

var headerTitle = document.querySelector('.header-title');
var headerParagraph = document.querySelector('.header-paragraph');
var headerBtnMore = document.querySelector('.header-btn-more');
//vertical navbar
var vLink1 = document.querySelector('.v-link1');
var vLink2 = document.querySelector('.v-link2');
var vLink3 = document.querySelector('.v-link3');
var vLink4 = document.querySelector('.v-link4');
var vLink5 = document.querySelector('.v-link5');
//skills sec
var skillsMainTitle = document.querySelector('.skills-main-title');
var smt1 = document.querySelector('.smt1');         //smp  ==  skillsModuleParagraph
var smt2 = document.querySelector('.smt2');         //smt  ==  skillsModuleTitle
var smt3 = document.querySelector('.smt3');         
var smp1 = document.querySelector('.smp1');
var smp2 = document.querySelector('.smp2');
var smp3 = document.querySelector('.smp3');
//about sec
var amt = document.querySelector('.amt');
var amp = document.querySelector('.amp');
//benefits sec
var benefitsMainTitle = document.querySelector('.section-title');
var bmt1 = document.querySelector('.bmt1');
var bmp1 = document.querySelector('.bmp1');
var bmt2 = document.querySelector('.bmt2');
var bmp2 = document.querySelector('.bmp2');
var bmt3 = document.querySelector('.bmt3');
var bmp3 = document.querySelector('.bmp3');
var benefitsBtnToContact = document.querySelector('.btn-to-contact');
//contact sec
var contactMainTitle = document.querySelector('.contact-main-title');
var contactSubTitle = document.querySelector('.contact-sub-title');
var labelName = document.getElementById('l-name');
var labelEmail = document.getElementById('l-email');
var message = document.getElementById('message-inp');
var sendButton = document.querySelector('.send-btn');

var allRightsReserved = document.querySelector('#all-rights-reserved');

btnEnLan.addEventListener('click', ()=>{
  loadingtrue();
  setTimeout(loadingflase,1000);
  
  setEn()

});
btnSkLan.addEventListener('click', ()=>{
  loadingtrue();
  setTimeout(loadingflase,1000);
  setSk()
});

function setEn(){
  btnSkLan.checked = false;
  language = true;
  skLabel.classList.remove('current-lan');
  enLabel.classList.add('current-lan');
}
function setSk(){
  btnEnLan.checked = false;
  language = false;
  enLabel.classList.remove('current-lan');
  skLabel.classList.add('current-lan');
}


function loadingtrue (){
  loader.style.display = 'block';
}
function loadingflase (){
  loader.style.display = 'none';
}



window.onchange = () =>{

  if (language){                        ///EN lan
    navLink1.textContent = enLanguageText.nav_link1;
    navLink2.textContent = enLanguageText.nav_link2;
    navLink3.textContent = enLanguageText.nav_link3;
    navLink4.textContent = enLanguageText.nav_link4;
    navLink5.textContent = enLanguageText.nav_link5;
    /*responsive navs*/
    rnavLink1.textContent = enLanguageText.nav_link1;
    rnavLink2.textContent = enLanguageText.nav_link2;
    rnavLink3.textContent = enLanguageText.nav_link3;
    rnavLink4.textContent = enLanguageText.nav_link4;
    rnavLink5.textContent = enLanguageText.nav_link5;

    headerTitle.textContent = enLanguageText.header_title;
    headerParagraph.textContent = enLanguageText.header_paragraph;
    headerBtnMore.textContent = enLanguageText.header_btn_more;
    //vertical navbar
    vLink1.textContent = enLanguageText.nav_link1;
    vLink2.textContent = enLanguageText.nav_link2;
    vLink3.textContent = enLanguageText.nav_link3;
    vLink4.textContent = enLanguageText.nav_link4;
    vLink5.textContent = enLanguageText.nav_link5;
    //skills sec
    skillsMainTitle.textContent = enLanguageText.skills_main_title;
    smt1.textContent = enLanguageText.smt1;
    smt2.textContent = enLanguageText.smt2;
    smt3.textContent = enLanguageText.smt3;
    smp1.textContent = enLanguageText.smp1;
    smp2.textContent = enLanguageText.smp2;
    smp3.textContent = enLanguageText.smp3;
    //about sec
    amt.textContent = enLanguageText.amt;
    amp.textContent = enLanguageText.amp;
    //benefits sec
    benefitsMainTitle.textContent = enLanguageText.benefits_main_title;
    bmt1.textContent = enLanguageText.bmt1;
    bmt2.textContent = enLanguageText.bmt2;
    bmt3.textContent = enLanguageText.bmt3;
    bmp1.textContent = enLanguageText.bmp1;
    bmp2.textContent = enLanguageText.bmp2;
    bmp3.textContent = enLanguageText.bmp3;
    benefitsBtnToContact.textContent = enLanguageText.benefits_btn;
    //contact sec
    contactMainTitle.textContent = enLanguageText.contact_main_title;
    contactSubTitle.textContent = enLanguageText.contact_sub_title;
    labelName.textContent = enLanguageText.label_name;
    labelEmail.textContent = enLanguageText.label_email;
    message.placeholder = enLanguageText.placeholder_message;
    sendButton.textContent = enLanguageText.send_button;
    allRightsReserved.textContent = enLanguageText.all_rights_reserved;
  }
  else{                                 ///SK lan
    navLink1.textContent = skLanguageText.nav_link1;
    navLink2.textContent = skLanguageText.nav_link2;
    navLink3.textContent = skLanguageText.nav_link3;
    navLink4.textContent = skLanguageText.nav_link4;
    navLink5.textContent = skLanguageText.nav_link5;
    /*responsive navs*/
    rnavLink1.textContent = skLanguageText.nav_link1;
    rnavLink2.textContent = skLanguageText.nav_link2;
    rnavLink3.textContent = skLanguageText.nav_link3;
    rnavLink4.textContent = skLanguageText.nav_link4;
    rnavLink5.textContent = skLanguageText.nav_link5;
    headerTitle.textContent = skLanguageText.header_title;
    headerParagraph.textContent = skLanguageText.header_paragraph;
    headerBtnMore.textContent = skLanguageText.header_btn_more;
    //vertical navbar
    vLink1.textContent = skLanguageText.nav_link1;
    vLink2.textContent = skLanguageText.nav_link2;
    vLink3.textContent = skLanguageText.nav_link3;
    vLink4.textContent = skLanguageText.nav_link4;
    vLink5.textContent = skLanguageText.nav_link5;
    //skills sec
    skillsMainTitle.textContent = skLanguageText.skills_main_title;
    smt1.textContent = skLanguageText.smt1;
    smt2.textContent = skLanguageText.smt2;
    smt3.textContent = skLanguageText.smt3;
    smp1.textContent = skLanguageText.smp1;
    smp2.textContent = skLanguageText.smp2;
    smp3.textContent = skLanguageText.smp3;
    //about sec
    amt.textContent = skLanguageText.amt;
    amp.textContent = skLanguageText.amp;
    //benefits sec
    benefitsMainTitle.textContent = skLanguageText.benefits_main_title;
    bmt1.textContent = skLanguageText.bmt1;
    bmt2.textContent = skLanguageText.bmt2;
    bmt3.textContent = skLanguageText.bmt3;
    bmp1.textContent = skLanguageText.bmp1;
    bmp2.textContent = skLanguageText.bmp2;
    bmp3.textContent = skLanguageText.bmp3;
    benefitsBtnToContact.textContent = skLanguageText.benefits_btn;
    //contact sec
    contactMainTitle.textContent = skLanguageText.contact_main_title;
    contactSubTitle.textContent = skLanguageText.contact_sub_title;
    labelName.textContent = skLanguageText.label_name;
    labelEmail.textContent = skLanguageText.label_email;
    message.placeholder = skLanguageText.placeholder_message;
    sendButton.textContent = skLanguageText.send_button;
    allRightsReserved.textContent = skLanguageText.all_rights_reserved;
  }



};

const enLanguageText = {
  'nav_link1':'Home',
  'nav_link2':'Skills',
  'nav_link3':'About me',
  'nav_link4':'Benefits',
  'nav_link5':'Contact',
  'header_title':'Welcome on my website !',
  'header_paragraph':'If you were tinking about your own Web, blog or else website I would be glad if you choose me. In benefits section you will find out some inforamtions, in case of interest you can write me an email.',
  'header_btn_more':'More',
  'skills_main_title': 'My programming skills',
  'smt1':'What languages I use ?',
  'smp1': 'I know several programming languages like HTML, CSS, JS, Python.',
  'smt2':'Which language I use for ?',
  'smp2':'I mainly use HTML and CSS to create and design webpages. I use Javascript to create animation and more dificult design. And if is needed an database I use Python framework Django.',
  'smt3':"What I plan for the future ?",
  'smp3':'In the future, I would like to improve in JavaScript and learn React JS.',
  'amt':'My name is Matej Duben adn I am a programmer',
  'amp':"My name is Matej, I'm learning programming and creating websites. I've been very interested to programming since my 12. That's when I started learning to write the first lines of code according to the book I got. I was learning Pascal. I know it's nothing amazing, but later I switched to a python where I can do something and about a year ago I decided to start learning how to create pages using HTML, CSS and JS. ",
  'benefits_main_title':'Benefits for you',
  'bmt1':'Low price',
  'bmp1':"I'm a beginning programmer, so I'm not asking for lot of money. Complet website in Html, Css I can made under 180€",
  'bmt2':'The web exactly according to you',
  'bmp2':'I always arrange personal or online meeting with Client firstly, to find out everything what he wants to have on his website.',
  'bmt3':'Reliability',
  'bmp3':"You don't worry that you would get your website after term, on which we firstly agreed. I'm always on the time!",
  'benefits_btn':'I want my own website !',
  'contact_main_title':'If you need a website',
  'contact_sub_title':'Type me',
  'label_name':'Name and surname',
  'label_email':'Your email',
  'placeholder_message':'Message',
  'send_button':'Send',
  'all_rights_reserved':'All Rights Reserved'
}



const skLanguageText = {
  'nav_link1':'Domov',
  'nav_link2':'Skills',
  'nav_link3':'O mne',
  'nav_link4':'Benefity',
  'nav_link5':'Kontakt',
  'header_title':'Vítam ťa na mojej stránke !',
  'header_paragraph':'Ak by ste uvažovali nad vlastným webom, blogom alebo inou stránkou budem rád ak si vyberiete mňa. V sekcii benefity sa dozviete zopár informácii, v pripade záujmu mi môžete napísať email.',
  'header_btn_more':'Viac',
  'skills_main_title': 'Moje skills v programovaní',
  'smt1':'Aké jazyky používam ?',
  'smp1':'Ovládam viacero programovacích jazykov ako HTML,  CSS,  JavaScript, Python.',
  'smt2':'Ktorý jazyk na čo používam ?',
  'smp2':'Na tvorbu a dizajn stránok používam hlavne HTML a CSS. Na animácie a viac náročnejší dizajn JavaScript. A pokiaľ je potreba databázu tak tam používam Python framework Django.',
  'smt3':"Čo plánujem do budúcna ?",
  'smp3':'Do budúcna by som sa chcel zlepšiť v JavaScripte a naučiť sa React JS.',
  'amt':'Volám sa Matej Duben a som programátor.',
  'amp':"Volám sa Matej, učím sa programovať a vytvárať webové stránky. Programovanie ma veľmi zaujímalo už v mojich dvanástich. Vtedy som sa začal podla knižky ktorú som dostal učiť písať prvé riadky kódu. Učil som sa jazyk Pascal. Viem nieje to nič užasné, neskôr som však prešiel na python v ktorom už čosi viem spraviť a asi pred rokom som sa rozhodol že sa začnem učit tvoriť stránky pomocou HTML, CSS a JS.",
  'benefits_main_title':'Benefity pre vás',
  'bmt1':'Nízka cena',
  'bmp1':"Som začínajúci programátor, takže si nepýtam velké peniaze. Kompletnú stránku v Html, Css možem spraviť do 180 eur.",
  'bmt2':'Web presne podľa vás',
  'bmp2':'Vždy si najprv s klientom dohodnem stretnutie osobné alebo online, aby som podrobne zistil čo všetko chce mať na svojej stránke. ',
  'bmt3':'Spolahlivosť',
  'bmp3':"Nemusíťe sa obávať že by ste svoju stránku dostali po termíne na ktorom sa dohodneme. Som vždy načas!",
  'benefits_btn':'Chcem svoju stránku !',
  'contact_main_title':'Ak potrebujete webovú stránku',
  'contact_sub_title':'Napíšte mi',
  'label_name':'Meno a priezvisko',
  'label_email':'Váš email',
  'placeholder_message':'Správa',
  'send_button':'Odoslať',
  'all_rights_reserved':'Všekty Práva Vyhradené'
}


/*Footer copyrights set*/
var footerYear = document.querySelector('#current-year');
var date = new Date();
var year = date.getFullYear();
//set current year
footerYear.textContent = year;



/* responsive nav bar */


var hamburgerBtn = document.querySelector('.hamburger-rg');
var linksResponsive = document.querySelector('.res-links-wrapper');
var isOpen = false;
hamburgerBtn.addEventListener('click', ()=>{
  linksResponsive.style.display = 'flex';
  isOpen = true;
});

window.onscroll = () =>{
  if (isOpen){
    isOpen = false;
    linksResponsive.style.display = 'none';
  }
};


/*
document.querySelector('body').addEventListener('click', ()=>{
  if(linksResponsive.style.display === "flex"){
    linksResponsive.style.display = 'none';
    linksResponsive.style.display = 'none';
  }
  
})
*/



window.onload = () =>{

  if (parseInt(window.innerWidth) > 925){
    /***gsap animations scripts***/

      //header page
      var mainSign = document.querySelector('.header-sign');
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(mainSign, {
        scrollTrigger: {
          trigger: mainSign,
          markers: false,
          start: "700px 200px",
          end: '700px 400px',
          endTrigger: '#head',
          toggleActions: 'restart none reverse none'
        },
        rotation: 0,
        duration:1
      });

      var navBar = document.querySelector('nav');
      const tl = gsap.timeline();
      tl.fromTo(navBar, {
        y: "-200px"
      },{
        y: 0,
        duration: 1
      });

      tl.fromTo(".no-res-logo", {
        x: "-300px"
      },{
        x: 0,
        duration: 1
      });

      tl.fromTo("#item1", {
        y: "-200px"
      },{
        y: 0,
        duration: 0.3
      });
      tl.fromTo("#item2", {
        y: "-200px"
      },{
        y: 0,
        duration: 0.3
      });
      tl.fromTo("#item3", {
        y: "-200px"
      },{
        y: 0,
        duration: 0.3
      });
      tl.fromTo("#item4", {
        y: "-200px"
      },{
        y: 0,
        duration: 0.3
      });
      tl.fromTo("#item5", {
        y: "-200px"
      },{
        y: 0,
        duration: 0.3
      });

      // info main
      tl.fromTo(".header-info-wrapper", {
        x: "1000px"
      },{
        x: 0,
        duration: 1
      });
      tl.fromTo(mainSign, {
        x: "-900px"
      },{
        x: 0,
        duration: 1
      });
      tl.fromTo(".header-btn-more", {
        opacity: 0,
        scale: 0.5
      },{
        opacity: 1,
        scale: 1,
        duration: 0.2
      });

  }




}

  //Myskills page
  
  gsap.fromTo('.section-dots', {
    x: "300px"
  },{
    scrollTrigger: {
      trigger: "#section2",
      start: "top center",
      end: "top center",
      //toggleActions: "play pause replay pause",
      toggleActions: "play none reverse none",
      markers: false,
    },
    x:0,
    duration: 1

  }
  
  )




  var skillsPart_tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".know-line",
        start: "top center",
        //toggleActions: "play pause replay pause",
        toggleActions: "play none none none",
        markers: false,
      }
    });

  var skillsPartNums_tl = gsap.timeline({
      scrollTrigger: {
          trigger: ".percents",
          start: "top center",
          //toggleActions: "play pause replay pause",
          toggleActions: "play none none none",
          markers: false
        }
  });
  const htmlknowing = 85, cssknowing = 85, jsknowing = 40, pyknowing = 65 ;
  var Conthtml={val:0}, Contcss={val:0}, Contjs={val:0}, Contpy={val:0};

  /*
  var Cont={val:0} , NewVal = 100 ;
  TweenLite.to(Cont,5,{val:NewVal,roundProps:"val",onUpdate:function(){
    document.querySelector(".percents").innerHTML=Cont.val
  }});
  */
  //HTML knowing
  skillsPart_tl.fromTo('.html-knowing', {
    x: "-100%"
  },{
    x: 0,
    duration: 1.2,
  });
  skillsPartNums_tl.to(
    Conthtml, {
      val: htmlknowing,
      roundProps:"val",
      onUpdate:function(){ document.querySelector("#html-percent").innerHTML=Conthtml.val + "%" },
      duration: 1.2,
    }
  )
  
  
  //css knowing
  skillsPart_tl.fromTo('.css-knowing', {
    x: "-100%"
  },{
    x: 0,
    duration: 1.2
  });
  skillsPartNums_tl.to(
    Contcss, {
      val: cssknowing,
      roundProps:"val",
      onUpdate:function(){ document.querySelector("#css-percent").innerHTML=Contcss.val + "%" },
      duration: 1.2,
    }
  )

  // JS hnowing
 
  skillsPart_tl.fromTo('.js-knowing', {
    x: "-100%"
  },{
    x: 0,
    duration: 1.2
  });
  skillsPartNums_tl.to(
    Contjs, {
      val: jsknowing,
      roundProps:"val",
      onUpdate:function(){ document.querySelector("#js-percent").innerHTML=Contjs.val + "%" },
      duration: 1.2,
    }
  )


  // python knowing
  skillsPart_tl.fromTo('.py-knowing', {
    x: "-100%"
  },{
    x: 0,
    duration: 1.2
  });
  skillsPartNums_tl.to(
    Contpy, {
      val: pyknowing,
      roundProps:"val",
      onUpdate:function(){ document.querySelector("#py-percent").innerHTML=Contpy.val + "%" },
      duration: 1.2,
    }
  )