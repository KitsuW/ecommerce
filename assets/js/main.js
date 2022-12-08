const section = document.querySelector (".products")

const generalContainer = document.createElement( "section" )

section.appendChild( generalContainer )

function displayProduct( productArray ){
    const container1 = document.createElement( "div" )

    const container2 = document.createElement( "div" )

    const image = document.createElement( "img" )
    image.src = productArray.image

    const cart = document.createElement ("p")
    cart.classList.add("addToCart")
    cart.textContent = "+"

    const name = document.createElement( "h3" )
    name.textContent = `${productArray.name}`
    
    const price = document.createElement( "h4" )
    price.textContent = `$${productArray.price}`
    
    const category = document.createElement( "span" )
    category.textContent = `${productArray.category}  `

    const availability = document.createElement( "span" )
    availability.textContent = `Available: ${productArray.quantity} `
    

    container1.appendChild( image )
    container1.appendChild( cart )
    container2.appendChild( name )
    container2.appendChild( price )
    container2.appendChild( category )
    container2.appendChild( availability )
    
    generalContainer.appendChild( container1 )
    generalContainer.appendChild( container2 )

}

const items = [
    {   
        id: 1,
        name: "Cool Girl",
        category: "Original",
        price: 30,
        image: "assets/images/Products/CoolGirl.jpeg",
        quantity: 1
    },
    {   
        id: 2,
        name: "Door Bee",
        category: "Animals",
        price: 30,
        image: "assets/images/Products/DoorBee.jpeg",
        quantity: 1
    },
    {   
        id: 3,
        name: "Elf",
        category: "Seasonal",
        price: 30,
        image: "assets/images/Products/Elf.jpeg",
        quantity: 1
    },
    {   
        id: 4,
        name: "Frida",
        category: "Mexico",
        price: 30,
        image: "assets/images/Products/Frida.jpeg",
        quantity: 1
    },
    {   
        id: 5,
        name: "Mouse",
        price: 25,
        category: "Animals",
        image: "assets/images/Products/Mouse.jpeg",
        quantity: 1
    },
    {   
        id: 6,
        name: "Pink Rabbit",
        price: 27,
        category: "Animals",
        image: "assets/images/Products/PinkRabbit.jpeg",
        quantity: 1
    },
    {   
        id: 7,
        name: "SantasHelper",
        category: "Seasonal",
        price: 35,
        image: "assets/images/Products/SantasHelper.jpeg",
        quantity: 1
    },
    {   
        id: 8,
        name: "Scarecrow",
        category: "Seasonal",
        price: 35,
        image: "assets/images/Products/Scarecrow.jpeg",
        quantity: 1
    },
    {   
        id: 9,
        name: "Snowman",
        category: "Seasonal",
        price: 35,
        image: "assets/images/Products/Snowman.jpeg",
        quantity: 1
    },
    {   
        id: 10,
        name: "Wednesday",
        category: "Movies",
        price: 35,
        image: "assets/images/Products/Wednesday.jpeg",
        quantity: 1
    }
]

function getRandomArbitrary(min, max) {
    let randomNum = Math.random() * (max - min) + min;
    return Math.trunc(randomNum)
}

    displayProduct( items[getRandomArbitrary(0, items.length)] )

    displayProduct( items[getRandomArbitrary(0, items.length)] )

    displayProduct( items[getRandomArbitrary(0, items.length)] )

const section2 = document.querySelector ("#featured")

const generalContainer2 = document.createElement( "section" )

section2.appendChild( generalContainer2 )

function displayFeatured( productArray ){

    const container1 = document.createElement( "div" )
    const container2 = document.createElement( "div" )

    const image = document.createElement( "img" )
    image.src = productArray.image

    const name = document.createElement( "h3" )
    name.textContent = `${productArray.name}`
    
    const price = document.createElement( "h4" )
    price.textContent = `$${productArray.price}`

    container1.appendChild( image )
    container2.appendChild( name )
    container2.appendChild( price )

    generalContainer2.appendChild( container1 )
    generalContainer2.appendChild( container2 )
}

const items2 = [
    {   
        id: 1,
        name: "CoolGirl",
        category: "other",
        price: 30,
        image: "assets/images/Products/CoolGirl.jpeg",
        quantity: 1
    },
    {   
        id: 2,
        name: "DoorBee",
        category: "other",
        price: 30,
        image: "assets/images/Products/DoorBee.jpeg",
        quantity: 1
    },
    {   
        id: 3,
        name: "Elf",
        category: "seasonal",
        price: 30,
        image: "assets/images/Products/Elf.jpeg",
        quantity: 1
    },
    {   
        id: 4,
        name: "Frida",
        category: "Mexico",
        price: 30,
        image: "assets/images/Products/Frida.jpeg",
        quantity: 1
    },
    {   
        id: 5,
        name: "Mouse",
        price: 25,
        category: "other",
        image: "assets/images/Products/Mouse.jpeg",
        quantity: 1
    },
    {   
        id: 6,
        name: "PinkRabbit",
        price: 27,
        category: "other",
        image: "assets/images/Products/PinkRabbit.jpeg",
        quantity: 1
    },
    {   
        id: 7,
        name: "SantasHelper",
        category: "seasonal",
        price: 35,
        image: "assets/images/Products/SantasHelper.jpeg",
        quantity: 1
    },
    {   
        id: 8,
        name: "Scarecrow",
        category: "seasonal",
        price: 35,
        image: "assets/images/Products/Scarecrow.jpeg",
        quantity: 1
    },
    {   
        id: 9,
        name: "Snowman",
        category: "seasonal",
        price: 35,
        image: "assets/images/Products/Snowman.jpeg",
        quantity: 1
    },
    {   
        id: 10,
        name: "Wednesday",
        category: "movies",
        price: 35,
        image: "assets/images/Products/Wednesday.jpeg",
        quantity: 1
    }
]

function getRandomArbitrary(min, max) {
    let randomNum = Math.random() * (max - min) + min;
    return Math.trunc(randomNum)
}

    displayFeatured( items2[getRandomArbitrary(0, items2.length)] )

const hamMenu =  getElementsByClassName( "menu" )
    hamMenu.addEventListener("click", function () {
    const navMenu =  getElementsByClassName( "nav-bar-items" )
    navMenu.classList.add("mobile-menu")
} )

const body = document.body
const darktheme = document.getElementById("theme")
    darktheme.addEventListener("click", e => {
        body.classList.add("dark")
    })