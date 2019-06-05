import axios from 'axios';

const api = axios.create({
    baseURL: process.env.API_URL || 'http://localhost:3333',
    headers: { 'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjZjExMTg5Yzk5MzU5M2I3NDQ1NDJlOSIsImVtYWlsIjoicmdyYXNzaTFAZ21haWwuY29tIiwiaWF0IjoxNTU5NzY3MjIzLCJleHAiOjE1NTk4NTM2MjN9.T1t6lM8r1PPxzj_aDmNz5R3yOHnBgyiv8RcgB4StrZA' }
})

export default api;