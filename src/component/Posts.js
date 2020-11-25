import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Posts extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          data : [],
        };
      }
    
      componentDidMount() {
        const apiUrl = 'https://jsonfy.com/posts';
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => this.setState({ data: data }));
      }

    render(){
        const { data } = this.state;

        return(
            <div>
                <Mui.Container Fixed>
                <center>
                <Mui.ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                    <Mui.Button href="/">Users</Mui.Button>
                    <Mui.Button href="/Posts">Posts</Mui.Button>
                    <Mui.Button href="/Comments">Comments</Mui.Button>
                </Mui.ButtonGroup>
                </center><br/>
                <h2>Data Json Posts</h2><br/><hr/>
                <table border="1">
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>use_pos_fk</td> 
                            <td>title</td>
                            <td>body</td> 
                            <td >date_add</td>
                            <td>date_upd</td>
                        </tr>
                    </thead>
                    {data.map(todo =>
                    <thead>
                        <tr hey={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.use_pos_fk}</td> 
                            <td>{todo.title}</td>
                            <td>{todo.body}</td> 
                            <td>{todo.date_add}</td>     
                            <td>{todo.date_upd}</td>
                        </tr>
                    </thead>
                    )}
                </table>
                </Mui.Container>
            </div>
        )
    }
}
    
export default Posts;