import React from 'react';

function StarIcon({ filled }) {
    return (
        <svg
            height="20"
            width="20"
            fill={filled ? "#FFD700" : "none"}
            stroke="#FFD700"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    );
}

function Rating({rating}) {
    const normalizedRating = Math.max(1, Math.min(rating, 5)); 
    const stars = [...Array(5)].map((_, index) => (
        <StarIcon key={index} filled={index < normalizedRating} />
    ));

    return (
        <div style={{ marginBottom: '1.25rem', marginTop: '0.625rem', display: 'flex', alignItems: 'center' }}>
            {stars}
            <span style={{
                marginLeft: '0.75rem',
                marginRight: '0.5rem',
                borderRadius: '0.375rem',
                backgroundColor: '#67e8f9',
                padding: '0.125rem 0.625rem',
                fontSize: '0.75rem',
                fontWeight: '600',
                color: '#155e75',
            }}>
                {normalizedRating.toFixed(1)}
            </span>
        </div>
    );
}

export default Rating;
