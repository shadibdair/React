import axios from 'axios';

export default axios.create({
        baseURL: 'https://api.unsplash.com',
        headers:{
            Authorization:'Client-ID 4aeb0686f3b48fb072479dc2246af2646b73030438cc901f4f9c3366ef69b92a'
        }
    });
