 const print = (mode) => {
     document.getElementById('modal').classList.add('show');
     document.getElementById('overlay').classList.add('show');
     document.getElementById("body").classList.add('anti-scroll');
     const div = document.createElement("div");
     if (mode == "modalText") {
         div.setAttribute("id", "modal-text");
         const divComment = ` <p class="text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus non quam non rhoncus. Duis mollis lorem ut magna aliquet, vitae mattis eros porttitor. Cras rhoncus, sapien ac mollis rutrum, libero augue euismod augue, sit amet aliquam
                    lectus nulla ac mi. Morbi ultricies arcu sagittis elementum condimentum. Proin eget iaculis mi. Nullam facilisis finibus tortor ut euismod. Vivamus sit amet vehicula leo, et cursus ex.</p>`
         div.innerHTML = divComment
         document.getElementById('modal').appendChild(div);
     } else {
         div.setAttribute("id", "menu-template");
         const divComment = `
        <nav class="navbar-menu  ">
        <a href=" ">HOME</a>
        <a href=" ">ABOUT US</a>
        <a href=" ">NEWS</a>
        <a href=" ">GALLERY</a>
        <a href="">CONTACT</a>
    </nav>  `
         div.innerHTML = divComment
         document.getElementById('modal').appendChild(div);
     }
 };

 const deleteContent = (mode) => {
     document.getElementById('modal').classList.remove('show');
     document.getElementById('overlay').classList.remove('show');
     document.getElementById('body').classList.remove('anti-scroll');
     if (mode == "modalText") {
         const div = document.getElementById("modal-text");
         document.getElementById('modal').removeChild(div);
     } else {
         const div = document.getElementById("menu-template");
         document.getElementById('modal').removeChild(div);
     }
 }

 document.getElementById("btn-menu").addEventListener('click', () => {
     print("modalMenu")
 });

 document.getElementById("closeModal").addEventListener('click', () => {
     deleteContent("modalText")
 });

 document.getElementById("btnModal").addEventListener('click', () => {
     print("modalText")
 });

 document.getElementById("closeModal").addEventListener('click', () => {
     deleteContent("modalMenu")
 });