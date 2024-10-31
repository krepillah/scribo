// import { create } from "zustand";

// interface IUser {
//     id: number,
//     token: string,
//     email: string,
// }

// interface IUserActions {
//     setUser: (state: IUser, action: object) => void,
//     removeUser: (state: string) => void,
// }

// const useStore = create<IUser & IUserActions>()((set) => ({
//     id: null,
//     token: null,
//     email: null,
//     name: null,
//     setUser: (state, action) => set(() => ({
//         state.id: action.payload.id;
//         state.token: action.payload.token;
//         state.email: action.payload.email;
//     })),
// }))

// export {
//     useStore
// }