import { IPost } from "../../interfaces/post";

export class AgregarPost {
    static readonly type = '[Post] AgregarPost';

    constructor(public payload: IPost) {
    }
}

export class EliminarPost {
    static readonly type = '[Post] EliminarPost';
    constructor(public id: string) { }
}