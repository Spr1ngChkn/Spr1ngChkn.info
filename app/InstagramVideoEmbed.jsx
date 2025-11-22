import React, { useState } from 'react';

const InstagramVideoEmbed = () => {
    const videoUrl = "https://www.instagram.com/reel/DD-ZQ4Vzbdf/";
    const [error, setError] = useState(false);

    const handleLoadError = () => {
        setError(true);
    };

    return (
        <div className="instagram-embed">
            {error ? (
                <div>Error loading video. Please try again later.</div>
            ) : (
                <iframe
                    src={`https://www.instagram.com/p/DD-ZQ4Vzbdf/embed`}
                    width="400"
                    height="500"
                    frameBorder="0"
                    allowTransparency={true}
                    allow="encrypted-media"
                    title="Instagram Reel"
                    onError={handleLoadError}
                ></iframe>
            )}
        </div>
    );
};

export default InstagramVideoEmbed;
