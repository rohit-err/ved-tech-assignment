import { create } from "zustand";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

axios.defaults.withCredentials = true;

const useStore = create((set) => ({
  isAuthenticated: false,
  isCheckingAuth: true,
  isLoggingIn: false,
  isLoadingSubmissions: false,
  error: null,
  submissions: [],
  selectedSubmission: null,

  checkAuth: async () => {
    set({ isCheckingAuth: true, error: null });
    try {
      await axios.get(`${BASE_URL}/auth/checkAuth`);
      set({ isAuthenticated: true, isCheckingAuth: false });
    } catch {
      set({ isAuthenticated: false, isCheckingAuth: false });
    }
  },

  login: async (email, password) => {
    set({ isLoggingIn: true, error: null });
    try {
      await axios.post(`${BASE_URL}/auth/login`, { email, password });
      set({ isAuthenticated: true, isLoggingIn: false });
      return { success: true };
    } catch (error) {
      const message = error.response?.data?.message || "Error logging in";
      set({ error: message, isLoggingIn: false });
      return { success: false, message };
    }
  },

  logout: async () => {
    try {
      await axios.post(`${BASE_URL}/auth/logout`);
    } catch {
      // API failure is non-critical — still clear local state
    } finally {
      set({
        isAuthenticated: false,
        error: null,
        submissions: [],
        selectedSubmission: null,
      });
    }
  },

  getSubmissions: async () => {
    set({ isLoadingSubmissions: true, error: null });
    try {
      const response = await axios.get(`${BASE_URL}/submission`);
      const submissions = response.data.submissions;
      set({ submissions, isLoadingSubmissions: false });
      return { success: true, submissions };
    } catch (error) {
      const message =
        error.response?.data?.message || "Failed to fetch submissions";
      set({ error: message, isLoadingSubmissions: false });
      return { success: false, message };
    }
  },

  setSelectedSubmission: (submission) =>
    set({ selectedSubmission: submission }),
}));

export default useStore;
