
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const TypeRedirect = () => {
    const { type } = useParams(); // Extract type from URL parameters
    const navigate = useNavigate();

    useEffect(() => {
        if (type) {
            navigate(`/products?type=${type}`); // Redirect to the Products page with type query parameter
        }
    }, [type, navigate]);

    return null; // Component does not render anything
};

export default TypeRedirect;
