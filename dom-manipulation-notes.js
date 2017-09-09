//what is the DOM?

//steps to manipulate an element: 

// 1. make sure html has id and onclick
// 2. write function to match onclick
// 3. grab an html element by id
// 4. change something about it.

function changePic() {
    //grab the HTML elemebt by its id
    var pic = document.getElementById('fred-pic')
    //change the src attribute of the elemnt grabbed
    pic.setAttribute('src','https://media.giphy.com/media/rjbLEWCY7tbSU/giphy.gif')
    var des = document.getElementById('description')
    des.innerHTML='Fred is the most fascinating animal in the world.'
    var bod = document.getElementById('everything')
    bod.style.background ='#A1CDF7'
}

//changing inner HTML
function lifeStory(){
    var story = document.getElementById('lifestory')
    story.innerHTML='Fred jumped off a boat.'
    var newPara = document.createElement("p")
    newPara.innerHTML="Fred didn't jump of the boat"
    document.getElementById('everything').appendChild(newPara)
}




//changing an attribute

//changing the style


//creating a new HTML element and appending it to the body



//appending a p5 element to the body!
