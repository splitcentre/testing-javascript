function checknumber() {
    let num1= prompt("input Bilangan Pertama:")
let num2= prompt("input Bilangan kedua")

num1= parseInt(num1)
num2=parseInt(num2)

if (num1 > num2) {
    document.write("BILANGAN 1 LEBIH BESAR DARI BILANGAN 2")
} else {
    document.write( "BILANGAN 2 LEBIH BESAR DARI BILANGAN 1")
}
}
checknumber()
