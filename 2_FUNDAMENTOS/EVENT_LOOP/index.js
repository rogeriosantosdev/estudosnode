function a(){
    console.log("Executando A()")
}

function b(){
    console.log("Executando B()")
}


function c(){
    console.log("Executando C()")
    b()
    a()
}

c()

