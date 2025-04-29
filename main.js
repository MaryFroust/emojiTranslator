function submit(){
    const radioButtons = document.querySelectorAll('.radio-button')
    let selected = null
    radioButtons.forEach(button => {
        if(button.checked === true){//loops thru to see which buttons are checked
           selected = button.id
        }
    })
    //console.log(selected)
    const textbox = document.querySelector('#translator-input')
    if(selected === "encode"){
       document.querySelector('#results').innerText = encode(textbox.value)
       textbox.value = ""// erases whats in the textbox once submit
       //is clicked...BUT still logs what was in the textbox
       console.log(encode(textbox.value))
    }else if(selected === "madlib"){
       document.querySelector('#results').innerText = madlib(textbox.value)
       textbox.value = ""
       console.log(madlib(textbox.value))
    }else if(selected === "translate"){
        document.querySelector('#results').innerText = translate(textbox.value)
        textbox.value = ""
        console.log(translate(textbox.value))
    
    }else if(selected === "search"){
        results.innerHTML = ''
        const list = search(textbox.value)
        for(let emoji of list){
            const p = document.createElement('p') 
            p.innerText = emoji.symbol
            results.appendChild(p)
        }
        
        
        
        textbox.value = ""
       // console.log(search(textbox.value))

    }else if(selected === "random"){
        document.querySelector('#results').innerText = random(textbox.value)
        textbox.value = ""
        console.log(random(textbox.value))
    }
}

const submitButton = document.querySelector('#submit-button')
submitButton.addEventListener('click',submit)