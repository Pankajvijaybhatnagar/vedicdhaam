import React, { useState } from 'react';
import './login.scss';
import conf from '../../conf/config';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const router = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setErrorMessage('');

        try {
            const url = conf.apiBaseUrl
            const response = await fetch(
                `${conf.apiBaseUrl}/api/v1/users/login`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username,
                        email: username,
                        password,
                    }),
                }
            );

            if (response.ok) {
                const data = await response.json();
                toast.success(data.message || 'Login successful!');
                console.log(data.data.refreshToken)
                sessionStorage.setItem("refreshToken",data.data.refreshToken)
                sessionStorage.setItem("accessToken",data.data.accessToken)
                router('/admin');
            } else {
                let msg = '';
                switch (response.status) {
                    case 400:
                        msg = 'Bad request.';
                        break;
                    case 401:
                        msg = 'Invalid Password';
                        break;
                    case 403:
                        msg = 'Forbidden: Access denied.';
                        break;
                    case 404:
                        msg = 'User not found.';
                        break;
                    case 500:
                        msg = 'Server error. Please try again later.';
                        break;
                    default:
                        msg = `Login failed (Status ${response.status}).`;
                }
                setErrorMessage(msg);
                toast.error(msg);
            }
        } catch (error) {
            console.error('Login error:', error);
            const msg = 'Network error. Please check your connection.';
            setErrorMessage(msg);
            toast.error(msg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container" style={{ paddingTop: '100px' }}>
            <form onSubmit={handleSubmit} className="login-form">
                <h3 style={{ textAlign: 'center' }}>Login Page</h3>

                <div className="form-group">
                    <label htmlFor="username">Username or Email:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        disabled={loading}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        disabled={loading}
                    />
                </div>

                {/* Show error message here */}
                {errorMessage && (
                    <div
                        style={{
                            color: 'red',
                            marginBottom: '10px',
                            textAlign: 'center',
                            fontSize: '14px',
                        }}
                    >
                        {errorMessage}
                    </div>
                )}

                <button type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
