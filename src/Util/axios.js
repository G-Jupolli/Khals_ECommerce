import axios from 'axios';

const instance = axios.create({
    baseURL:  'https://us-central1-e-commerce-app-af4ee.cloudfunctions.net/api' 
    // 'http://localhost:5001/e-commerce-app-af4ee/us-central1/api'
});

export default instance;