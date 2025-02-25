function a() {
    console.log("esta é a primeria função: a()")
    b()
}

function b() {
    console.log("função: b()")
}

function c() {
    console.log("função: c()")
}

c()
b()
a()

// esta aula apenas demonsta a ordem em q o js lê as linhas