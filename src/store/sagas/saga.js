import axios from "axios";
import * as actionTypes from "../actions/rootActionTypes";
import {all, put, takeLatest} from "redux-saga/effects";

function* getAllPostAsync() {
    try {
        const json = yield axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.data);
        yield put(actionTypes.getPostsSuccess(json));
    }
    catch (error) {
        yield put(actionTypes.getPostFailed());
    }
}

export function* getPosts() {
    yield takeLatest(actionTypes.GETALLPOSTS, getAllPostAsync);
}

export default function* rootSaga() {
    yield all([
        yield takeLatest(actionTypes.GETALLPOSTS, getAllPostAsync)
    ])
}
