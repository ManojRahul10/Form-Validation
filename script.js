const name= document.getElementById('name')
const password=document.getElementById('password')
const form= document.getElementById('form')
const errorElement= document.getElementById('error')

form.addEventListener('submit', (e)=>{
    let messages= []
    if (name.value ==='' || name.value==null){
        messages.push("name is required")
    }

    if(password.value.length<=6){
        messages.push('password must be longer than 6 characters')
    }

        if(password.value==='password'){
            messages.push("dontttt")
        }

    if(messages.length>0){
        e.preventDefault()
        errorElement.innerText=messages.join(', ')
    }else{
        e.preventDefault(); // stop actual form submission
        alert("Form submitted successfully!");
        form.reset();
        errorElement.innerHTML = "";
    }
     
})
