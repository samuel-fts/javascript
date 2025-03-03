const long=document.getElementById("long")
const lati=document.getElementById("lati")

navigator.geolocation.getCurrentPosition(geo,erroLocation)//é uma funçao que apresenta um tipo boolean e precisa ter um parametro para entragar o call back
pos.coords.latitude
function geo(pos){
    console.log(pos)
}
function erroLocation(){
    console.log("erro ao obter a localização")
}