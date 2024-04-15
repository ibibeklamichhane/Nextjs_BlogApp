// utils/api.ts

import axios from 'axios';

export async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(response)
        return response.data;
        
     
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
