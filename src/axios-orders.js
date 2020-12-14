import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://my-burger-4001b.firebaseio.com/'
});


export default instance;