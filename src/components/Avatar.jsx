// src/components/Avatar.jsx
import React, { useState } from 'react';
import MD5 from 'crypto-js/md5';

const Avatar = ({ email, size = 100, defaultAvatar }) => {
    const [imgError, setImgError] = useState(false);

    const hash = MD5(email.trim().toLowerCase()).toString();
    const gravatarUrl = `https://www.gravatar.com/avatar/${hash}?d=404`;

    return (
        <img
            src={imgError ? defaultAvatar : gravatarUrl}
            onError={() => setImgError(true)}
            alt="User Avatar"
            width={size}
            height={size}
            style={{ borderRadius: '50%' }}
        />
    );
};

export default Avatar;
