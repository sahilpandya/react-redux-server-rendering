import request from 'axios';
request.defaults.baseURL = 'http://ec2-54-238-127-209.ap-northeast-1.compute.amazonaws.com/v1/profiles';
request.defaults.headers.post['Content-Type'] = 'application/json';
request.defaults.headers.common['Authorization'] = 'Bearer bb55a2e9f08aa3a7d8f87dd9fa4b753936ca7618';
//request.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
request.defaults.headers.common['set-cookie'] = 'SESS15dfa26f31ea72e21097a903a2b1b263=9xEFvuh3oo36qsdhyEwCojXAv651qh0hCG6GVEUvWCg';
const BACKEND_URL = 'https://webtask.it.auth0.com/api/run/wt-milomord-gmail_com-0/redux-tutorial-backend?webtask_no_cache=1';
const url = "http://ec2-54-238-127-209.ap-northeast-1.compute.amazonaws.com/v1/profiles";
/*export function createTodo(text) {
  return {
    type: 'CREATE_TODO',
    text,
    date: Date.now()
  }
}*/

export function createTodo(text) {
  return {
    type: 'CREATE_TODO',
      promise: request.post(url, {
        "account" : {
          "email":"user+5029@localhost.localdomain",
          "password": "password"
        } 
      }
    )
  }
}

export function editTodo(id, text) {
  return {
    type: 'EDIT_TODO',
    id,
    text,
    date: Date.now()
  };
}
export function deleteTodo(id) {
  return {
    type: 'DELETE_TODO',
    id
  };
}

export function getTodos() {
  return {
    type: 'GET_TODOS',
    promise: request.get(url)
  }
}