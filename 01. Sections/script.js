function create(words) {
   let content = document.querySelector('#content');

   for (let word of words) {
      let div = document.createElement('div');
      let para = document.createElement('p');
      para.textContent = word;
      para.style.display = 'none';
      content.appendChild(div);
      div.appendChild(para);
      div.addEventListener('click', reveal);

   }

   function reveal(ev) {
      ev.target.children[0].style.display = '';
   }
   
}