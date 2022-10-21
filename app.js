const btn = document.querySelector('button')
const data = document.querySelector('.data')



const quote =[

    "The greatest glory in living lies not in never falling, but in rising every time we fall.",

    "The way to get started is to quit talking and begin doing.",

    "If life were predictable it would cease to be life, and be without flavor.",

    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. ",

    "Life is what happens when you're busy making other plans.",

    "It is during our darkest moments that we must focus to see the light.",


    "Whoever is happy will make others happy too.",

    " Don't judge each day by the harvest you reap but by the seeds that you plant.",

    "It is during our darkest moments that we must focus to see the light.",

    "In the end, it's not the years in your life that count. It's the life in your years.",

    "Life is a succession of lessons which must be lived to be understood.",

    "You will face many defeats in life, but never let yourself be defeated." ,

    "The only impossible journey is the one you never begin." ,

    "Only a life lived for others is a life worthwhile." ,


    "The greatest glory in living lies not in never falling, but in rising every time we fall.",

    "Do not let making a living prevent you from making a life.",

    "In three words I can sum up everything I've learned about life: it goes on.",

    "Life is made of ever so many partings welded together." ,

    "In three words I can sum up everything I've learned about life: it goes on.",

    "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",

    "Life is trying things to see if they work."


]


// const color = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]




btn.addEventListener('click', (e)=>{

data.innerText = quote[Math.floor(Math.random()*quote.length)]


let colorchange = "#";

// for (let i=0; i < 6; i++){


//     colorchange += color[]
// }


e.target.style.backgroundColor = colorchange

})