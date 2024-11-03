import { Action, State, StateContext } from "@ngxs/store";
import { PostsStateModel } from "./post.model";
import { AgregarPost, EliminarPost } from './post.actions';
import { Injectable } from "@angular/core";
import { IPost } from "../../interfaces/post";


@State<PostsStateModel>({
    name: 'posts',
    defaults: {
        listPosts: []
    }
})
@Injectable()
export class PostsState {


    @Action(AgregarPost) agregar(ctx: StateContext<PostsStateModel>, action: AgregarPost) {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            listPosts: [...state.listPosts, action.payload]
        })

    }

    @Action(EliminarPost) eliminar(ctx: StateContext<PostsStateModel>, { id }: EliminarPost) {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            listPosts: state.listPosts.filter(post => post.id !== id)
        })
    }
}