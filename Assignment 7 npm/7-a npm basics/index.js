import axios from 'axios';

(async()=>{
    try {
        for(let i=1;i<=10;i++){
            const res=await axios.get(`https://jsonplaceholder.typicode.com/posts/${i}`);
            console.log(res.data);
        }
    } catch (err) {
        console.error(err);
    }
})();
