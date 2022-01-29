import React from "react";

function RepositoryItem({ name, linkToRepo, fullName }) {
    return (
        <div>
            <h2>{name}</h2>
            <h3>full name:</h3>
            <a href={linkToRepo} target="_blank" rel="noopener noreferrer">{fullName}</a>
        </div>
    );
}

export default RepositoryItem;