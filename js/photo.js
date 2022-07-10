

function getId(event){
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
  let my_img = document.getElementById('big_img');
  let now_photo = event.target.id;
  document.getElementById('form').style.display = 'flex';
  my_img.outerHTML = '<img src="' + photos[now_photo] + '" alt="" class="big_img" id="big_img">';
};

function clouse_photo(){
  document.getElementById('form').style.display = 'none';
};