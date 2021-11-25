// <!-- 
//   This is a template for the dog list item

//   <li class="dogs-list__button">Mr. Bonkers</li> 

// -->

for (const dog of dogs) {
    const listEl = document.querySelector('.dogs-list')

    const liEl = document.createElement('li')
    liEl.setAttribute('class', `dogs-list__button`)
    liEl.textContent=dog.name

    listEl.append(liEl)

    liEl.addEventListener('click', function () {
        createCard(dog) 
    
      })
}

    // <!-- This is a template for the main dog card -->

    // <!-- <section class="main__dog-section">
    //         <h2>Mr. Bonkers</h2>
    //         <img
    //           src="https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
    //           alt=""
    //         />
    //         <div class="main__dog-section__desc">
    //           <h3>Bio</h3>
    //           <p>
    //             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
    //             minima voluptates libero cumque rerum consequatur optio aliquid sint
    //             eum maxime illo laborum omnis quo ab rem cupiditate nulla
    //             perspiciatis ipsum!
    //           </p>
    //         </div class="main__dog-section__btn">
    //         <p><em>Is naughty?</em> yes!</p>
    //         <button>Good dog!</button>
    //   </section>  -->
      

    // {
    //     id: 1,
    //     name: "Mr. Bonkers",
    //     bio: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
    //             minima voluptates libero cumque rerum consequatur optio aliquid sint
    //             eum maxime illo laborum omnis quo ab rem cupiditate nulla
    //             perspiciatis ipsum!`,
    //     isGoodDog: true,
    //     image: "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
    //   },



function createCard(dog) {

    const infoSection = document.querySelector('.main__dog-section')
        infoSection.innerHTML = ''

    const section1 = document.querySelector('.main__dog-section')
    
    

    // const infoSection = document.querySelector('.dogs-list__button')
    //         infoSection.innerHTML = ''

    const nameEl = document.createElement('h2')
    nameEl.textContent = dog.name
  
    const avatarEl = document.createElement('img')
    avatarEl.setAttribute('src', `${dog.image}`)
    avatarEl.setAttribute('alt', ``)
  
    const divMain = document.createElement('div')
    divMain.setAttribute('class', `main-dog-section__desc`)

    const namebio = document.createElement('h3')
    namebio.textContent = 'Bio'

    const pEl1 = document.createElement('p')
    pEl1.textContent = dog.bio

    const divMainBtn = document.createElement('div')
    divMainBtn.setAttribute('class', `main-dog-section__btn`)

    const pEl2 = document.createElement('p')
    pEl2.textContent = 'yes'

    // const emEl = document.createElement('em')
    // emEl.textContent = 'Is naghty'

    const buttonEl = document.createElement('button')
    buttonEl.textContent = dog.isGoodDog
  
    
    section1.append(nameEl, avatarEl, divMain, divMainBtn, pEl2, buttonEl)

    const divBiop = document.querySelector('.main-dog-section__desc')
    divBiop.append(namebio, pEl1)

    infoSection.append(section1)

    // const divBiop = document.querySelector('.main__dog-section')
    // divBiop.append(namebio, pEl1)

    }
 

  function createDogs() {
    for (const dog of dogs) {
      createCard(dog)
    }
  }
  
 












//   <!-- 
//     This is a template for the add dog form

//     <section class="main__dog-section">
//       <h2>Add a new Dog</h2>
//       <form class="form">

//         <label for="name">Dog's name</label>
//         <input type="text" id="name" name="name">

//         <label for="image">Dog's picture</label>
//         <input type="url" id="image" name="image">

//         <label for="bio">Dog's bio</label>
//         <textarea rows="5" id="bio" name="bio"></textarea>

//         <input type="submit" id="submit" name="submit" value="Let's add a dog!" class="form__button">
//       </form>
//   </section>
//    --></input>