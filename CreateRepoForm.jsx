import React, { useState } from 'react';

const CreateRepoForm = () => {
    const [repoName, setRepoName] = useState('');
    const [description, setDescription] = useState('');
    const [isPrivate, setIsPrivate] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!repoName.trim()) {
            setMessage('Repository name is required');
            return;
        }

        // In a real implementation, this would call the GitHub API
        // For now, we'll just show a success message with the repo details
        setMessage(`Repository "${repoName}" would be created as ${isPrivate ? 'private' : 'public'}${description ? ' with description: ' + description : ''}`);
        
        // Reset form
        setRepoName('');
        setDescription('');
        setIsPrivate(false);
    };

    return (
        <div className="create-repo-form">
            <h2>Create New Repository</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="repoName">Repository Name *</label>
                    <input
                        type="text"
                        id="repoName"
                        value={repoName}
                        onChange={(e) => setRepoName(e.target.value)}
                        placeholder="my-awesome-repo"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="A brief description of your repository"
                        rows="3"
                    />
                </div>

                <div className="form-group checkbox-group">
                    <label>
                        <input
                            type="checkbox"
                            checked={isPrivate}
                            onChange={(e) => setIsPrivate(e.target.checked)}
                        />
                        <span>Make repository private</span>
                    </label>
                </div>

                <button type="submit" className="submit-button">
                    Create Repository
                </button>
            </form>

            {message && (
                <div className="message">
                    {message}
                </div>
            )}
        </div>
    );
};

export default CreateRepoForm;
