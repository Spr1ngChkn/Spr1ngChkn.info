import React from 'react';
import InstagramVideoEmbed from './InstagramVideoEmbed';
import CreateRepoForm from './CreateRepoForm';

const App = () => {
    return (
        <div className="app">
            <h1>Spr1ngChkn.info</h1>
            <CreateRepoForm />
            <InstagramVideoEmbed />
        </div>
    );
};

export default App;
