export interface Member {
    id: number;
    name: string;
    email: string;
    points: number;
    note?: string;
}

export interface City {
    id: number;
    name: string;
    q: string;
}