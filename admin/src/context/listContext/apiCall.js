import axios from "axios";
import {
  createListFailure,
  createListStart,
  createListSuccess,
  deleteListFailure,
  deleteListStart,
  deleteListSuccess,
  getListsFailure,
  getListsStart,
  getListsSuccess,
} from "./ListAction";

export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axios.get("/list/get");
    dispatch(getListsSuccess(res.data));
  } catch (err) {
    dispatch(getListsFailure());
  }
};

export const deleteList = async (id,dispatch) => {
    dispatch(deleteListStart());
    try {
      await axios.delete("/list/delete/"+ id,{
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      }});
      dispatch(deleteListSuccess(id));
    } catch (err) {
      dispatch(deleteListFailure());
    }
  };

// create List

export const createList = async (list, dispatch) => {
  dispatch(createListStart());
  try {
    const res = await axios.post("/list/create",list, {headers: {token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken}});
    dispatch(createListSuccess(res.data));
  } catch (err) {
    dispatch(createListFailure());
  }
};
