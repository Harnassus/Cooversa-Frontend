export interface CreateUser {
    email:    string;
    password: string;
}

export interface CreateProfile {
    firstName:        string;
    lastName:         string;
    age:              number;
    phoneNumber:      string;
    gender:           string;
    state:            string;
    country:          string;
    avatar?:           string;
    paymentReference: string;
}


export interface User {
    userId:          string;
    email:           string;
    role:            string;
    status:          string;
    isEmailVerified: boolean;
    profile:         Profile;
    schoolId:        string;
    school:          School;
    createdAt:       Date;
    updatedAt:       Date;
}

export interface Profile {
    profileId:        string;
    firstName:        string;
    lastName:         string;
    age:              number;
    phoneNumber:      string;
    gender:           string;
    state:            string;
    country:          string;
    avatar:           string;
    paymentReference: string;
    userId:           string;

    user?:            User;

    createdAt:        Date;
    updatedAt:        Date;
}

export interface School {
    schoolId:    string;
    name:        string;
    slug:        string;
    description: string;
    createdAt:   Date;
    updatedAt:   Date;
}
