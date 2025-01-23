
   const DataInicial = new Date("2024-05-30T11:19:00")
   let chat
setInterval(function() {

   let res = document.getElementById("res")
   const HoraAtual = new Date()
   
   let contagem = HoraAtual - DataInicial
   
   let segundos =Math.floor(contagem / 1000) % 60
   let minutos =Math.floor(contagem /(1000 * 60)) % 60
   let horas = Math.floor(contagem / (1000 * 60 * 60)) % 24
   let dias = Math.floor(contagem / (1000 * 60 * 60 * 24))
   
   res.innerText = `${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos `

  
   chat = document.getElementById("chat")

   if (Notification.permission === "granted") {
      if (segundos == 39) {
         new Notification ("completamos mais uma hora")
   }
   } else {
      Notification.requestPermission().then
   }
   
}, 1000); 




   
