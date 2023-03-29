import { Component } from "react";
import PropTypes from 'prop-types';

import fetchPicturesWithQuery from "../../services/api";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

import s from './ImageGallery.module.scss';



class ImageGallery extends Component {

    static propTypes = {
        query: PropTypes.string.isRequired
    };

    state = {
        query: '',
        pictures: null,
        page: 1,
        isLoading: false,
        error: null
    };

    static getDerivedStateFromProps(props, state) {
        if (state.query !== props.query) {
          return { page: 1, query: props.query };
        }
        return null;
    };

    async componentDidUpdate(prevProps, prevState) {
        const prevQuery = prevProps.query;
        const newQuery = this.props.query;
        if (prevQuery !== newQuery) {
            this.setState({ isLoading: true });
            try {
                const pictures = await fetchPicturesWithQuery(newQuery);
                this.setState({ pictures });
            } catch (error) {
                this.setState({ error });
            } finally {
                this.setState({ isLoading: false });
            };
        };
    };

    render () {
        return (
            <ul className={s.ImageGallery}>
                {/* <!-- Набір <li> із зображеннями --> */}
                    {this.state.pictures && this.state.pictures.map(picture =>
                            <ImageGalleryItem
                                key={picture.id}
                                smallPictureUrl={picture.webformatURL}
                                largePictureUrl={picture.largeImageURL}
                            />
                        )
                    }
                {this.state.error && <div>Error! Something went wrong with search query {this.props.query}</div>}
                {this.state.isLoading && <div>Loading...</div>}
                {!this.state.pictures && <div>Type your search query</div>}
            </ul>
        );
    };
};

export default ImageGallery;

// http requests here