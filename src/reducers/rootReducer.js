const initState = {
  posts : [
    {id : '1', title : 'sunt aut facere repellat provident ', body : 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'},
    {id : '2', title : 'Lorem ipsum dolor sit amet ', body : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ultrices tincidunt arcu non'},
    {id : '3', title : 'facere repellat provident sunt aut ', body : 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ultrices tincidunt arcu non consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'}
  ]
}

const rootReducer = (state = initState, action) =>{
  return state;
}

export default rootReducer;