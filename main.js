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
        
        //console.log(translate(textbox.value))
        textbox.value = ""
    
    }else if(selected === "search"){
        results.innerHTML = "" //Instead of merely setting the `.innerText` of our `<h1 id="results">` to this array of objects, clear the current content of our `<h1 id="results">` output.
        const list = search(textbox.value)
        if(list.length === 0){
       results.innerText = "no emoji's found"
        }
        for(let emoji of list){
            const p = document.createElement('p') 
            p.innerText = emoji.symbol
            results.appendChild(p)
         }
       
        //console.log(search(textbox.value))
         textbox.value = ""

    }else if(selected === "random"){
        const randomFeature = [encode,translate,madlib,search]
        const randomIndex =Math.floor(Math.random() * randomFeature.length)
        const sumnElse = randomFeature[randomIndex](textbox.value)
        
        // document.querySelector('#results').innerText = random(textbox.value)
        // textbox.value = ""
         console.log(sumnElse)
    }
}

const submitButton = document.querySelector('#submit-button')
submitButton.addEventListener('click',submit)