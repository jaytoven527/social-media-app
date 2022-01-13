// one-to-one
// one-to-many
// many-to-many


type UserId = number;
export interface IUser {
    id:         UserId;
    email:      string;
    firstName:  string;
    lastName:   string;
};

export interface IUserHydrated extends IUser {
    login?: ILogin;
}

export interface ILogin {
    id:       number;
    userId:   UserId;
    password: string;
    verified: boolean;
}

interface ILoginHydrated extends ILogin {
    user?: IUser;
}

export {};