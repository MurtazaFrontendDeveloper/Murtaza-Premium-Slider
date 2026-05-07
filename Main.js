const nextEl = document.querySelector('.next')

const prevEl = document.querySelector('.prev')

const ImgContainerEl = document.querySelector('.img-container')

const imgEl = document.querySelectorAll('img')

let currentimg = 1

let timeout;

nextEl.addEventListener('click', ()=>{
    clearTimeout(timeout)
    currentimg++
    updateImg()
})
prevEl.addEventListener('click', ()=>{
    clearTimeout(timeout)
    currentimg--
    updateImg()
})

updateImg()

function updateImg (){
    if(currentimg > imgEl.length){
        currentimg = 1
    } else if(currentimg < 1){
        currentimg = imgEl.length;
    }
    const width = imgEl[0].clientWidth;
    ImgContainerEl.style.transform = `translateX(-${(currentimg - 1) * width}px)`;
    timeout = setTimeout(()=>{
        currentimg++
        updateImg()
    },3000)
}