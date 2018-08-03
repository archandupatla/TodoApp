(function(){
const ul = document.querySelector('ul');
const liCol = ul.children;
const del = document.querySelectorAll('span');
for(let i=0; i<liCol.length; i++){
    liCol[i].addEventListener('click', function(){
        let self = this;
        this.classList.toggle('completed');
        // this.children[0].addEventListener('click', function(){
        //    self.remove();
        // })
    })
}
for(let i = 0; i< del.length; i++){
    del[i].addEventListener('click', function(e){
        e.stopPropagation();
        this.parentElement.style.transition = "all 0.2s"
    })
}
})();