import React, { Component } from 'react';
import * as Mui from '@material-ui/core';


class Users extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          data : [],
        };
      }
    
      componentDidMount() {
        const apiUrl = 'https://jsonfy.com/users';
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => this.setState({ data: data }));
      }
    
      render(){
        const { data } = this.state;
    
        return(
          <Mui.Container fixed>
            <Mui.Typography>
          <div>
                 <center>
                 <center><hr/>
                <Mui.ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                    <Mui.Button href="/">Users</Mui.Button>
                    <Mui.Button href="/Posts">Posts</Mui.Button>
                    <Mui.Button href="/Comments">Comments</Mui.Button>
                </Mui.ButtonGroup>
                </center><br/>
                 </center><hr/>
            <center>
            <h1>DATA JSON USERS</h1><hr/>
            </center><br/>
            <center>
              <table border="1">
                <tr>
                <td>id</td>    
                <td>name</td>
                <td>username</td>    
                <td>email</td>    
                <td>password</td>
                <td>age</td>
                <td>website</td>
                <td>phone</td>    
                <td>date_add</td>    
                <td>date_upd</td>    
                <td>password_md5</td>
                </tr>
                {data.map(todo =>
                  <tr hey={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.name}</td> 
                <td>{todo.username}</td>
                <td>{todo.email}</td> 
                <td>{todo.password}</td> 
                <td>{todo.age}</td>
                <td>{todo.website}</td>
                <td>{todo.phone}</td> 
                <td>{todo.date_add}</td>
                <td>{todo.date_upd}</td>
                <td>{todo.password_md5}</td> 
                  </tr>
                  )}
              </table>
              </center>
             
          </div>
          </Mui.Typography>
          </Mui.Container>
        );
      }
    }
export default Users;