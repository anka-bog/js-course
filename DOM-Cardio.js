// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');

// put it into the body
document.body.appendChild(div);

// make an unordered list
const ul = document.createElement('ul');

// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
const li1 = document.createElement('li');
li1.textContent = 'one';

const li2 = document.createElement('li');
li2.textContent = 'two';

const li3 = document.createElement('li');
li3.textContent = 'three';

ul.appendChild(li1);
li1.insertAdjacentElement('afterend', li2);
ul.insertAdjacentElement('beforeend', li3);

div.appendChild(ul);

// create an image
const image = document.createElement('img');

// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper
image.src = 'https://source.unsplash.com/random/300x300';
image.width = 250;
image.classList.add('cute');
image.alt = 'Cute Puppy';

div.appendChild(image);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above

const myHTML = `
    <div class="innerDiv"> 
        <p>Brownie marzipan bonbon fruitcake halvah gummies gummi bears pie. Topping lollipop sesame snaps carrot cake pastry tart cake candy. Sweet roll candy caramels croissant pudding biscuit. Tiramisu macaroon marzipan donut soufflé pastry. Wafer jelly-o cupcake ice cream tart. Jelly-o biscuit muffin jelly beans soufflé chocolate cake. Tootsie roll donut topping pie chupa chups macaroon tootsie roll sesame snaps. Tart jujubes tart marshmallow macaroon chupa chups pastry tiramisu. Pastry danish dragée candy canes tart oat cake marzipan. Muffin dessert dessert toffee apple pie croissant caramels halvah. Soufflé carrot cake liquorice sesame snaps apple pie cupcake caramels topping. Dessert candy cake gingerbread carrot cake. Cupcake danish cake jelly brownie toffee gingerbread liquorice dragée. Cake brownie cake danish carrot cake jujubes muffin sesame snaps gingerbread. </p>
        <p>Chupa chups dessert candy canes biscuit lemon drops. Jelly-o gummi bears brownie icing dragée soufflé jelly donut. Gummi bears shortbread liquorice tart chupa chups bear claw shortbread cake. Cake gummies bonbon donut sugar plum gummies marzipan. Carrot cake liquorice brownie halvah croissant liquorice sesame snaps sesame snaps fruitcake. Gingerbread donut bear claw gingerbread lemon drops chocolate dragée. Marzipan carrot cake gummi bears topping gummies chocolate cake. Fruitcake lemon drops jelly beans cookie muffin tiramisu topping chocolate cake. Topping jelly beans jelly beans gummi bears chocolate bonbon halvah. Halvah cookie jelly beans carrot cake pudding lollipop chupa chups bear claw. Cheesecake shortbread danish candy canes lemon drops wafer jelly-o lollipop marshmallow. Jelly-o shortbread dessert candy canes sweet muffin candy canes soufflé. Lemon drops jujubes icing sesame snaps cake. </p>
    </div>
`;

div.insertAdjacentHTML('afterbegin', myHTML);

// add a class to the second paragraph called warning
// remove the first paragraph

const myFragment = document.createRange().createContextualFragment(myHTML);
// console.log(myFragment.querySelector(':nth-child(2)'));
myFragment.querySelector(':nth-child(2)').classList.add('warning');

const myDiv = div.querySelector('.innerDiv');
myDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
  const ageInDogYears = age * 7;
  const newHTML = `
        <div class="playerCard">
            <h2>${name} - ${age}</h2>
            <p> They are ${height} high and ${age} years old. In dog years this person would be ${ageInDogYears}. That would be a tall dog!</p>
            <button class="delete" type="button">&times; Delete</button>
        </div>
    `;
  console.log(newHTML);
  return newHTML;
}

// make a new div with a class of cards

const div2 = document.createElement('div');
div2.classList.add('cards');

// make 4 player cards using generatePlayerCard
const card1 = generatePlayerCard('Ania', 25, '158cm');
const card2 = generatePlayerCard('Doti', 12, '138cm');
const card3 = generatePlayerCard('Jack', 7, '98cm');
const card4 = generatePlayerCard('John', 49, '189cm');

div2.insertAdjacentHTML('afterbegin', card1);
div2.insertAdjacentHTML('afterbegin', card2);
div2.insertAdjacentHTML('afterbegin', card3);
div2.insertAdjacentHTML('afterbegin', card4);

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

div.insertAdjacentElement('beforebegin', div2);

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
// make out delete function
function deleteCards(event) {
  const buttonThatGotClicked = event.currentTarget;
  buttonThatGotClicked.parentElement.remove();
}
// loop over them and attach a listener
buttons.forEach((button) => button.addEventListener('click', deleteCards));
