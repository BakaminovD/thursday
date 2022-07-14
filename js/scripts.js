/* script for preloader */

let
    images = document.images,
    images_total_count = images.length,
    images_loaded_count = 0,
    preloader = document.getElementById('page-preloader'),
    perc_display = document.getElementById('load-perc');

for (var i = 0; i < images_total_count; i++){
    image_clone = new Image();
    image_clone.onload = image_loaded;
    image_clone.onerror = image_loaded;
    image_clone.src = images[i].src;
}

function image_loaded(){
    images_loaded_count++;
    perc_display.innerHTML = (((100/images_total_count) * images_loaded_count) << 0) + ' %';

    if (images_loaded_count >= images_total_count){
        setTimeout(function() {
            if (!preloader.classList.contains('done')) {
                preloader.classList.add('done')
            }
        }, 3900);
    }
}

/* script for button-up */

window.addEventListener('scroll', function(){
    let scroll = document.querySelector('.upward');
    scroll.classList.toggle("active", window.scrollY>500)
})
function scrollTopTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
};

/* script for photo-popup and close-button */
let photos = [
    'person/Aleksandra_Zubets.PNG', 
    'person/Anastasiya_Mishkina.PNG',
    'person/Daria_Isakova.PNG',
    'person/Daria_Petrova.PNG',
    'person/Dmitrii_Atlas.PNG',
    'person/Ekaterina_Markova.PNG',
    'person/Iulia_efimova.PNG',
    'person/Olesia_Dukar.PNG', 
    'person/Sergey_Zarechenskii.PNG', 
    'person/Veniamin_Bashkov.jpg' 
  ];

function getId(event){
    let my_img = document.getElementById('big_img');
    let now_photo = event.target.id;
    document.getElementById('form').style.display = 'flex';
    my_img.outerHTML = '<img src="' + photos[now_photo] + '" alt="" class="big_img" id="big_img" name="'+ now_photo +'">';
  };

function left_step(){
    let my_img = document.getElementById("big_img");
    let now_photo = my_img.name;
    if (now_photo == 0){
        now_photo = 9;
        my_img.outerHTML = '<img src="' + photos[now_photo] + '" alt="" class="big_img" id="big_img" name="'+ now_photo +'">';
    } else {
        now_photo = now_photo - 1;
        my_img.outerHTML = '<img src="' + photos[now_photo] + '" alt="" class="big_img" id="big_img" name="'+ now_photo +'">';
    };
};

function right_step(){
    let my_img = document.getElementById("big_img");
    let now_photo = my_img.name;
    if (now_photo == 9){
        now_photo = 0;
        my_img.outerHTML = '<img src="' + photos[now_photo] + '" alt="" class="big_img" id="big_img" name="'+ now_photo +'">';
    } else {
        now_photo++;
        my_img.outerHTML = '<img src="' + photos[now_photo] + '" alt="" class="big_img" id="big_img" name="'+ now_photo +'">';
    };
};
  
function clouse_photo(){
    document.getElementById('form').style.display = 'none';
  };

  /* script for switching opacity */

  function active2018(){
    let my_2018 = document.getElementById('2018');
    let my_2019 = document.getElementById('2019');
    let my_2020 = document.getElementById('2020');
    my_2018.classList.add('active');
    my_2019.classList.remove('active');
    my_2020.classList.remove('active');
  };
  
  function active2019(){
    let my_2018 = document.getElementById('2018');
    let my_2019 = document.getElementById('2019');
    let my_2020 = document.getElementById('2020');
    my_2018.classList.remove('active');
    my_2019.classList.add('active');
    my_2020.classList.remove('active');
  };
  
  function active2020(){
    let my_2018 = document.getElementById('2018');
    let my_2019 = document.getElementById('2019');
    let my_2020 = document.getElementById('2020');
    my_2018.classList.remove('active');
    my_2019.classList.remove('active');
    my_2020.classList.add('active');
  };