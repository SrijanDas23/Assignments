(async()=>{
    try{
        const requests=[];
        for(let i=1;i<=10;i++){
            const response=await axios.get('https://dog.ceo/api/breeds/image/random');
            console.log(response.data.message);
            requests.push(response.data.message);
        }
        const imgContainer=document.getElementById('images');

        requests.forEach((url)=>{
            const img=document.createElement('img');
            img.src=url;
            img.alt='dog image';
            imgContainer.appendChild(img);
        });
    } catch(err){
        console.error(err);
    }
})();
