import axios from 'axios';

const api = axios.create({
    baseURL: process.env.API_URL || 'http://localhost:3333',
    headers: { 'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjZjExMTg5Yzk5MzU5M2I3NDQ1NDJlOSIsImVtYWlsIjoicmdyYXNzaTFAZ21haWwuY29tIiwiaWF0IjoxNTU5NTg1MjAwLCJleHAiOjE1NTk2NzE2MDB9.ruTDIGzlg0iwvvB8ZYb1WQP1W2ZDcyM4RO400LNQ71k' }
})

export default api;