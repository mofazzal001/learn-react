import React from "react";
import unsplash from "../API/unsplash";

import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchResultCount: 0, images: [], showCount: 0};
    }

    onSearchSubmit = async (term) => {
        const response = await unsplash
            .get('/search/photos', {
                params: {
                    query: term,
                },
            });
        console.log(response);
        this.setState({searchResultCount: response.data.total, images: response.data.results, showCount: response.data.results.length});
    };

    render() {
        return (
            <div className={`ui container`} style={{marginTop: '10px'}}>
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
                <div>Showing {this.state.showCount} images out of {this.state.searchResultCount} images</div>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App;
