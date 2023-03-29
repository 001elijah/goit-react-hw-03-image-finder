import axios from "axios";

const API_KEY = `34207283-4bddbd3e33d2a5a82fc6e194a`;
axios.defaults.baseURL = `https://pixabay.com`;

const fetchPicturesWithQuery = async (searchQuery, page = 1) => {
    const response = await axios.get(`/api/?key=${API_KEY}&q=${searchQuery}&page=${page}&per_page=12&image_type=photo&orientation=horizontal`);
    const pictures = response.data.hits;
    return pictures;
};

export default fetchPicturesWithQuery;
