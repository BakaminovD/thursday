

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