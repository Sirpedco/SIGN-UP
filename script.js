alert('WELCOME')
const name = document.getElementById('name')
const email = document.getElementById('email')
const PhoneNumber = document.getElementById('Phone Number')
const Password = document.getElementById('password')
const Confirmpassword = document.getElementById('Confirm password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

    form.addEventListener('Submit', (e) =>{
        let messages = []
        if (name.value === '' || name.value == null){
            messages.push('Name is required')
        }  
        
        if (Password.value.length <= 6) {
            messages.push('password must be longer than 6 characters')
        }

        if (Password.value.length >=20) {
            messages.push('password must be less than 20 characters')
        } 

        if (Password.value === 'password') {
            messages.push('password can not be password')
        }
        
        if (Password.value === Confirmpassword.value){
            messages.push('password matched')
        } 
        else{
            messages.push('password not matched')
        }
        if (email.value === "https?://.+") {
            messages.push('email invalid')
        }


        if (messages.length > 0) {
            e.preventDefault()
            errorElement.innerText = messages.join(', ')
        }
        
    })
