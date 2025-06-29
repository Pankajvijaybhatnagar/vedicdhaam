import React from 'react'
import { useNavigate } from 'react-router-dom';
const AuthLayout = ({ children }) => {
    const navigate = useNavigate()
    const [loading, setLoading] = React.useState(true);
    const checkAuth = () => {
        setLoading(true)
        const token = sessionStorage.getItem('accessToken');
        if (!token) {
            navigate('/login')
            setLoading(false)
        }
    }
    React.useEffect(() => {
        checkAuth();
        setLoading(false);
    }, []);
    if (loading) return null;

    return (
        <>
            {children}
        </>
    )
}

export default AuthLayout