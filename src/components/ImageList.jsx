import React from "react"

import './ImageList.css'
import ImageCard from "./ImageCard";

class ImageList extends React.Component {
    render() {
        const images = this.props.images.map((image) => {
            return <ImageCard key={image.id} image={image} />
        });
        return (
            <div className={`image-list`} style={{marginTop: '10px'}}>
                {images}
            </div>
        );
    }
}

export default ImageList;
