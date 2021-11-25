// <!-- 
//   This is a template for the dog list item

//   <li class="dogs-list__button">Mr. Bonkers</li> 

// -->


// <!-- This is a template for the main dog card -->

//<section class="main__dog-section">
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
//   </section> 


 

  console.log(dogs)

  function createDogTag (dog) {
    const liEl = document.createElement('li')
    liEl.setAttribute('class', 'dogs-list__button')
    liEl.textContent = dog.name
  
    liEl.addEventListener('click', function () {
      displayDogInfo(dog)
    })
  
    const dogListUl = document.querySelector('.dogs-list')
    dogListUl.append(liEl)
  }
  
  for (const dog of dogs) {
    createDogTag(dog)
  }
  
  function displayDogInfo (dog) {
    const sectionEl = document.querySelector('.main__dog-section')
    sectionEl.innerHTML = ''
  
    const titleEl = document.createElement('h2')
    titleEl.textContent = dog.name
  
    const imageEl = document.createElement('img')
    imageEl.setAttribute('alt', '')
    imageEl.setAttribute('src', dog.image)
  
    const descEl = document.createElement('div')
    descEl.setAttribute('class', 'main__dog-section__desc')
  
    const bioTitle = document.createElement('h3')
    bioTitle.textContent = 'Bio'
  
    const textEl = document.createElement('p')
    textEl.textContent = dog.bio
  
    descEl.append(bioTitle, textEl)
  
    const naughtyEl = document.createElement('p')
    const emEl = document.createElement('em')
    emEl.textContent = 'Is naughty?'
    naughtyEl.append(emEl, dog.isGoodDog ? ' No!' : ' Yes!')
  
    const goodBtn = document.createElement('button')
    goodBtn.textContent = dog.isGoodDog ? 'Bad dog!' : 'Good dog!'
  
    goodBtn.addEventListener('click', function () {
      toggleGoodDog(dog)
    })
  
    sectionEl.append(titleEl, imageEl, descEl, naughtyEl, goodBtn)
  }
  
  function toggleGoodDog (dog) {
    dog.isGoodDog = !dog.isGoodDog
    displayDogInfo(dog)
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