import axios from 'axios';
import type { ContactForm } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Request interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Server responded with error status
      console.error('API Error:', error.response.data);
      return Promise.reject(error.response.data);
    } else if (error.request) {
      // Request made but no response
      console.error('Network Error:', error.message);
      return Promise.reject({ error: 'Network error. Please try again.' });
    } else {
      // Something else happened
      console.error('Error:', error.message);
      return Promise.reject({ error: 'An unexpected error occurred.' });
    }
  }
);

export const submitContactForm = async (data: ContactForm) => {
  const response = await apiClient.post('/api/contact', data);
  return response.data;
};

export default apiClient;
