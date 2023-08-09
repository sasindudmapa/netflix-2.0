function reducer(state = [], action) {
  if (action.type === "Add") {
    // console.log(action);
    return {
      title: action.title,
      des: action.des,
      poster: action.poster,
      mobilePoster: action.mobilePoster,
    };
  }
}

export default reducer;
