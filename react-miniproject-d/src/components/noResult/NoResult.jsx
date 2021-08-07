import React from 'react';
import imgSearch from '../../img/no-search-result.svg'

const NoResult = () => {
    return (
        <div className="d-flex justify-content-center flex-column text-center">
            <img className="mx-auto"  src={imgSearch} alt="" style={{width: '20rem' }}/>
            <h4 className="mb-5 text-primary">Sorry, no result found...</h4>
        </div>
    );
}

export default NoResult;
