import { jwtDecode } from "jwt-decode";
import create from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      auth: null,
      setAuth: (accessToken) => {
        const { user } = jwtDecode(accessToken);
        set({ auth: { accessToken, user } });
      },
      setUser: (user) =>
        set((state) => ({
          auth: { ...state?.auth, user },
        })),
      clearAuth: () => set({ auth: null }),
    }),
    {
      name: "AuthData",
      getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;
