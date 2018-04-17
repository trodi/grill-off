export interface IEntry {
    id: number;
    name: string;
    userId: string;
}
export class Entry implements IEntry {
    id: number;
    name: string;
    /** This will point to a user/team id eventually. */
    userId: string;
    img?: string;
    description?: string;
}
