var inputName = document.getElementById('name')
var inputDes = document.getElementById('des')
var inputImage = document.getElementById('image')
var searchButton = document.getElementById('submit')
var output = document.getElementById('output')

function addData(){
    let url = inputImage.value
    let col = document.createElement('div')
    col.setAttribute("class","col-lg-4 col-md-6 col-sm-12")
    let card = document.createElement('div')
    card.setAttribute("class","card")
    card.setAttribute("style","width: 18rem;")
    col.appendChild(card)
    let img = document.createElement('img')
    img.setAttribute("src",url)
    img.setAttribute("class","card-img-top")
    card.appendChild(img)

    let cardbody = document.createElement('div')
    cardbody.setAttribute("class","cardbody")
    let title = document.createElement('h5')
    title.innerHTML = inputName.value
    title.setAttribute("class","card-title");
    let des = document.createElement('p')
    des.setAttribute("class","card-text my-0")
    des.innerHTML = inputDes.value
    cardbody.appendChild(title)
    cardbody.appendChild(des)
    card.appendChild(cardbody)


    output.appendChild(col)
   
    
}


searchButton.addEventListener('click',addData)