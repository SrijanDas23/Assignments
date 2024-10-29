let largeImg=null;
let buttonContainer=null;
let currentIndex=0;
const images=['img1.jpg', 'img2.jpg', 'img3.jpg'];

function enlarge(img){
    console.log("working");
    
    if (largeImg) {
        largeImg.remove();
    }
    if(buttonContainer){
        buttonContainer.remove();
    }
    
    let imgSrc=img.getAttribute('src');
    currentIndex=images.indexOf(imgSrc);
    console.log(currentIndex);

    largeImg = document.createElement('img');
    const largeImgContainer=document.getElementById('largeImgContainer');
    largeImg.src=img.src;
    largeImg.style.width='500px';
    largeImgContainer.appendChild(largeImg);

    buttonContainer=document.createElement('div');
    
    const prev=document.createElement('button');
    prev.textContent='prev';
    prev.addEventListener('click', showPrev);

    const next=document.createElement('button');
    next.textContent='next';
    next.addEventListener('click', showNext);

    largeImgContainer.appendChild(buttonContainer);

    buttonContainer.style.display='flex';
    buttonContainer.style.justifyContent='space-between';
    buttonContainer.style.width='500px';


    buttonContainer.appendChild(prev);
    buttonContainer.appendChild(next);
}

function showPrev(){
    if(currentIndex>0){
        currentIndex--;
        updateImage();
    }
    else if(currentIndex===0){
        currentIndex=images.length-1;
        updateImage();
    }
}

function showNext(){
    if(currentIndex<images.length-1){
        currentIndex++;
        updateImage();
    }
    else if(currentIndex===images.length-1){
        currentIndex=0;
        updateImage();
    }
}

function updateImage(){
    largeImg.src=images[currentIndex];
}