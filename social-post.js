console.log('JS OK')

//creo un array di oggetti

const elements = [
    
        { 
            id: '1',
            name:'Ryan Reinolds',
            foto: 'img/austin-wade-X6Uj51n5CE8-unsplash.jpg',
            date: '05-03-2022',
            text: 'history is build by man',
            coreImg: 'img/mr-cup-fabien-barral-Fo5dTm6ID1Y-unsplash.jpg',
            likes: 23
        },
        { 
            id: '2',
            name:'gabriella clare',
            foto: 'img/gabriella-clare-marino-UpjtG9zkqdc-unsplash.jpg',
            date: '06-06-2022',
            text: 'i love nature',
            coreImg: 'img/micheile-dot-com-ZVprbBmT8QA-unsplash.jpg',
            likes: 35
           },
        { 
            id: '3',
            name:'Jackson David',
            foto: 'img/jackson-david-TqUiHBMG7Rc-unsplash.jpg',
            date: '09-14-2022',
            text: 'this planet is wonderfull!',
            coreImg: 'img/benigno-hoyuela-7Z-Uayu13ps-unsplash.jpg',
            likes: 10
           },
           { 
            id: '4',
            name:'Charlie Green',
            foto: 'img/charlie-green-3JmfENcL24M-unsplash.jpg',
            date: '12-04-2022',
            text: 'mountains are so chill',
            coreImg: 'img/garrett-parker-DlkF4-dbCOU-unsplash.jpg',
            likes: 23
           },
        
      
]



//prendo gli elementi necessari dal DOM
const container = document.getElementById('container')
const button = document.querySelector("like-button")


// creo un cclo che mi permetta di stampare gli elementi in pagina

    let card = ''
    for(let i=0; i < elements.length; i++ ){
      const cards = elements[i];

// trasformo la data americana in EU

      var date = new Date(cards.date);
      console.log(date)
      const euDate = date.getDate()+"/"+(date.getMonth() + 1)+"/"+date.getFullYear();
      console.log(euDate)


      card += `
      <div class="post">
      <div class="post__header">
        <div class="post-meta">
          <div class="post-meta__icon">
            <img class="profile-pic img-fluid" src="${cards.foto}" alt="" />
          </div>
          <div class="post-meta__data">
            <div class="post-meta__author">
            ${cards.name}
            </div>
            <div class="post-meta__time">${euDate}</div>
          </div>
        </div>
      </div>
      <div class="post__text">
        ${cards.text}
      </div>
      <div class="post__image">
        <img src="${cards.coreImg}" alt="${cards.name}" />
      </div>
      <div class="post__footer">
        <div class="likes js-likes">
          <div class="likes__cta">
            <button class="like-button js-like-button" href="#" data-postid="1">
              <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
              <span class="like-button__label">Mi Piace</span>
            </button>
          </div>
          <div class="likes__counter">Piace a <b id="like-counter-1" class="js-likes-counter">${cards.likes}</b> persone</div>
        </div>
      </div>
    </div>`
    }
  
    container.innerHTML = card
    console.log(card)
  
// aggiungo un event listener per modificare il button like

    let textButton = document.querySelector("like-button__label")
    console.log(textButton)

    for(i=0; i < button; i++){

    button[i].addEventListener("click", function(){
    textButton.classList.add("like-button--liked");

    })}

