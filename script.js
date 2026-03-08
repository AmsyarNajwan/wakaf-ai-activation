function showScene(id){

document.querySelectorAll(".scene").forEach(scene=>{
scene.classList.remove("active")
})

document.getElementById(id).classList.add("active")

}

setTimeout(()=>{
showScene("scene2")
},2000)

setTimeout(()=>{
showScene("scene3")
},4000)

function checkPassword(){

let pass=document.getElementById("password").value

if(pass==="WAKAF2026"){

showScene("scene4")

setTimeout(()=>{
showScene("scene5")
},2000)

setTimeout(()=>{

document.getElementById("voice").play()

showScene("scene6")

},4000)

}else{

alert("Kata laluan salah")

}

}
