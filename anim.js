let navBtn = document.querySelectorAll(".nav_link");

for (let i = 0; i < navBtn.length; i++) {
    console.log(navBtn[i]);
    navBtn[i].addEventListener('mouseenter', (e) => {
      let ellement = navBtn[i];
      console.log("Элемент с нуммерацией: " + i + " , а так же элементом: " + ellement);
      ellement.classList.add('active');
          
      ellement.addEventListener('pointerout', () => {
        if (ellement.classList.contains("active")) {
            console.log("Да, он актив, и ты вышел из объекта");
        }
        function deleteClasses() {
            if (ellement.classList.contains("active")){
                ellement.classList.remove("active");
            }
        }
        setTimeout(deleteClasses, 750);
      });
  
    });  
  }

// function deleteClasses(e) {
//     for (let i = 0; i <= navBtn.length; i++){
//         let ellement = navBtn[i];
//         ellement.addEventListener('pointerout', (b) => {
            
//         });
//         setTimeout(() => {
//             ellement.classList.remove("active");
//         }, 1600);
//         // if (ellement.classList.contains("active")) {
//         //     console.log("Вошел в цикл удаления");
//         //     ellement.classList.remove('active');
//         // }
//     }
// }



//  for (let i = 0; i < navBtn.length; i++) {
//     let ellement = navBtn[i];
//     ellement.addEventListener('pointerout', (b) => {
//         if (ellement.classList.contains("active")) {
//             ellement.classList.remove("active");
//         }
//     });
// }



