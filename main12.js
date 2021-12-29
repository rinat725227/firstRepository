function checkForm(el) {

    var name = el.name.value
    var pass = el.pass.value
    var repass  = el.repass.value
    var state = el.state.value
    
        var fail = ""
        
    if (name == "" || pass == "" || state == "")
    fail = "Заполниет все поля"
        else if (name.length <= 1 || name.length > 50)
            fail = "не коректное имя"
    else if (pass != repass)
    fail = "Пароли не зовпадают"
    else if (pass.split("$").length > 1)
    fail = "не коректный пароль"
    
    if(fail != "") {
    document.getElementById('error').innerHTML = fail
        return false
    } else {
    alert("все заполнено коректно")
        return true
    }
    
    
        console.log(state + " - " + pass + " - " + repass)
        return false
    }