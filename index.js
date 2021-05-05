// write your code here!
// This variable has the data you're working with

// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <section class="cards"></section>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

// - Create one card for one pokemon
//    - create article 'card' and place in document <section class="cards"></section>
let cardSection = document.querySelector(".cards")
let card = document.createElement("article")
card.setAttribute("class", "card")
cardSection.append(card)
console.log(card)

let pokemonName = document.createElement("h2")
pokemonName.innerText = data[0].name
card.append(pokemonName)

let pokemonImage = document.createElement("img")
pokemonImage.setAttribute("src", data[0].sprites.other["official-artwork"].front_default)
card.append(pokemonImage)

let pokemonText = document.createElement("div")
pokemonText.setAttribute("p", data[0].stats[0])
console.log(pokemonText)

//       - create h2 , img and card-text elements
//       - fill them
//       - place them in article 'card'
//    - make into function

// - make all cards
//    - run an for if statement to make all cards in data.
//    - make into function


console.log(data);
