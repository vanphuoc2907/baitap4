var Arr = [
    {
        id: 1,
        User_Name: "HuyHoang",
        Password: "Hoang123"
    },
    {
        id: 2,
        User_Name: "HoangTran",
        Password: "Hoang456"
    },
    {
        id: 3,
        User_Name: "HoangOk",
        Password: "Hoang789"
    },
]

function Login(User_Name, Password) {
    console.log(User_Name, Password)
    var result = true;
    for (i = 0; i < Arr.length; i++) {
        if (User_Name == Arr[i].User_Name) {
            if (Password == Arr[i].Password) {
                result = true
                break
            } else {
                result = false
                continue
            }
        } else {
            result = false
            continue

        }
    }
    if (result == true) {
        document.write("<b>Fan CR7</b>");
    } else {
        alert("Username or Password Incorrect")
    }
}
function Clear() {
    document.getElementById("User_Name").value = ''
    document.getElementById("Password").value = ''
}