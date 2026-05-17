import axios from 'axios';

const API_KEY = '55713445-fbda8ed7255a2117e2c0a47fe'; 

export async function getImagesByQuery(query) {
  const url = 'https://pixabay.com/api/';

  const response = await axios.get(url, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
}