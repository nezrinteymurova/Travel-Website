const swiper = new Swiper(".swiper",{
    slidesPerView: 1,
    effect: "creative",
    creativeEffect:{
        prev:{
            translate:[0,0,-400],
        },
        next:{
            translate:["100%", 0, 0],
        },
    },
    loop:true,
    direction:"horizontal",

    autoplay:{
        delay:5000,
    },
    
    speed:400,
    spaceBetween:100
});

const swiper2 = new Swiper(".swiper2", { // ".swiper2" sinfinə malik HTML elementində yeni bir Swiper instansiyası yaradırıq.
    slidesPerView: 3, // Ekranda eyni anda görünən slayderlərin sayını (bu halda 3) müəyyən edir.
    spaceBetween: 35, // Slayderlər arasında piksel ilə məsafəni (bu halda 35px) təyin edir.
    slidesPerGroup: 1, // Hər dəfə irəlilədikdə və ya geri çəkildikdə sürüşdürüləcək slayderlərin sayını (bu halda 1) təyin edir.
    loop: true, // Slayderi dövrü (loop) rejimdə aktivləşdirir. Son slayd göstərildikdən sonra birincini göstərməyə davam edir.
    fade:true,
    centerSlide: true, // Aktiv slaydı mərkəzdə göstərməyə çalışır. 'slidesPerView' 1-dən çox olduqda faydalıdır.
    grabCursor: true, // Slayder üzərinə gələrkən kursorun "tutmaq" (grab) işarəsinə çevrilməsini təmin edir.
    loopFillGroupWithBlank: true, // Əgər 'loop' aktivdirsə və slayderlərin ümumi sayı 'slidesPerGroup' ilə tam bölünmürsə, boş slayderlər əlavə edərək qrupu tamamlayır.

    autoplay: { // Slayderin avtomatik olaraq irəliləməsini (autoplay) tənzimləyir.
        delay: 5000, // Hər slaydın görünmə müddətini (5000 millisaniyə, yəni 5 saniyə) təyin edir.
    },

    speed: 400, // Sürüşmə (tranzisiya) animasiyasının sürətini millisaniyə ilə (bu halda 400ms) müəyyən edir.
    spaceBetween: 100, // **QEYD:** Bu xüsusiyyət yuxarıda artıq təyin edilmişdir. Bu, yuxarıdakı 'spaceBetween: 35' dəyərini ləğv edərək onu 100px olaraq yenidən təyin edir.
    breakpoints:{
    320:{
        slidesPerView: 1,
    },
    768:{
        slidesPerView: 2,
    },
    968:{
        slidesPerView: 3,
    }
},

});

var restaurantSlider = new Swiper(".swiper3", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3500,
  },
  breakpoints: {
    640: { 
        slidesPerView: 2, 
        spaceBetween: 20 
    },
    1024: { 
        slidesPerView: 3, 
        spaceBetween: 30 },
  },
});
