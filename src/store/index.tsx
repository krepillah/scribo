import { create } from "zustand";

interface IUser {
    id: string,
    email: string,
    token: string,
}

interface IUserActions {
    initialSetUser: (user: IUser) => void,
    // removeUser: (state: string) => void,
}

const useStore = create<IUser & IUserActions>()((set) => ({
    id: '',
    email: '',
    token: '',
    initialSetUser: (user) => set(() => ({
        id: user.id,
        email: user.email,
        token: user.token,
    })),
}))

export {
    useStore
}