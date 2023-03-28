import axios from "axios";

const API_KEY = `34207283-4bddbd3e33d2a5a82fc6e194a`;
axios.defaults.baseURL = `https://pixabay.com/api/`;

const fetchPicturesWithQuery = async searchQuery => {
    const response = await axios.get(`?key=${API_KEY}&q=${searchQuery}&page=1&per_page=12&image_type=photo&orientation=horizontal&`);
    const pictures = response.data.hits;
    return pictures;
};

export default fetchPicturesWithQuery;