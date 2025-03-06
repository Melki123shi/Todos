import { create } from "zustand";

interface AuthStore {
    user: string;
    login: (user_name: string) => void;
    logout: () => void;
}

const useAuthStore = create<AuthStore>(set => ({
    user: "",
    login: (user_name: string) => set({ user: user_name }),
    logout: () => set({ user: "" }),
}));

export default useAuthStore;