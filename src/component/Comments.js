import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Comments extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          data : [],
        };
      }
    
      componentDidMount() {
        const apiUrl = 'https://jsonfy.com/comments';
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => this.setState({ data: data }));
      }

    render(){
        const { data } = this.state;

        return(
            <div>
                <Mui.Container Fixed>
                <center><hr/>
                <Mui.ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                    <Mui.Button href="/">Users</Mui.Button>
                    <Mui.Button href="/Posts">Posts</Mui.Button>
                    <Mui.Button href="/Comments">Comments</Mui.Button>
                </Mui.ButtonGroup>
                </center><br/><hr/>
                <center>
                <h2>DATA JSON COMMENTS</h2><br/><hr/>
                </center><br/>
                <center>
                <table border="1">
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>use_pos_fk</td> 
                            <td>pos_com_fk</td>
                            <td>comment</td> 
                            <td >date_add</td>
                            <td>date_upd</td>
                        </tr>
                    </thead>
                    {data.map(todo =>
                    <thead>
                        <tr hey={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.use_pos_fk}</td> 
                            <td>{todo.pos_com_fk}</td>
                            <td>{todo.comment}</td> 
                            <td>{todo.date_add}</td>     
                            <td>{todo.date_upd}</td>
                        </tr>
                    </thead>
                    )}
                </table>
                </center>
                </Mui.Container>
            </div>
        )
    }
}
    
export default Comments;