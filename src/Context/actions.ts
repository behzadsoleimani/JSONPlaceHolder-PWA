import http from "../api";

const actions = (dispatch: any) => ({
  async getUsers() {
    const res = await http({
      url: "/users"
    });

    dispatch({
      type: "GET_USERS",
      payload: res.data
    });
  },

  async getPosts(id: string | number) {
    const res = await http({
      url: `/posts?userId=${id}`
    });

    dispatch({
      type: "GET_POSTS",
      payload: res.data
    });
  },

  async getComments(id: string | number) {
    const res = await http({
      url: `/posts/${id}/comments`
    });

    dispatch({
      type: "GET_COMMENTS",
      payload: res.data
    });
  }
});

export default actions;
