import React, { Component } from 'react';
import axios from 'axios';


class TodoEdit extends Component {
    state = {
        todoItem: { "todoTableId": 1, "title": "Job Test", "isComplete": 0 },
    }
    render() {
        return (



            <div className="container">


                <h1>待辦事項清單 - 修改</h1>
                <hr />
                <div className="row">
                    <div className="col-md-4">
                        <form action="/Todo/Edit" method="post">

                            <input type="hidden" id="TodoItemId"
                                name="TodoItemId" value="1" />
                            <div className="form-group">
                                <label className="control-label" htmlFor="Name">項目名稱</label>
                                <input className="form-control" type="text"
                                    id="Name" name="Name"
                                    value={this.state.todoItem.title}
                                    onChange={this.name_change} />
                            </div>
                            <div className="form-group form-check">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox"
                                        id="IsComplete" name="IsComplete"
                                        value="1"
                                        checked={this.state.todoItem.isComplete ? "checked" : ""}
                                        onChange={this.isComplete_change}
                                    /> 是否已完工
                                </label>
                            </div>
                            <div className="form-group">
                                <input type="button" value="確定"
                                    className="btn btn-outline-primary"
                                    onClick={this.ok_click} /> |
                                <a href="/Todo/index" className="btn btn-outline-info">取消</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>





        );
    }
    name_change = (e) => {
        // console.log(e.target.value);
        let newState = { ...this.state };
        newState.todoItem.title = e.target.value;
        this.setState(newState);

    }
    isComplete_change = (e) => {
        // console.log(e.target.value, e.target.checked);
        let newState = { ...this.state };
        newState.todoItem.isComplete = e.target.checked ? 1 : 0;
        this.setState(newState);
        console.log(newState);
    }
    async componentDidMount() {
        var url = `http://localhost:8000/todo/item/${this.props.match.params.id}`;
        var result = await axios.get(url);
        let newState = { ...this.state };
        newState.todoItem = result.data;
        this.setState(newState);
    }
    ok_click = async () => {
        console.log(this.state.todoItem)
        var url = 'http://localhost:8000/todo/item';
        await axios.put(url, this.state.todoItem);
        window.location = "/todo/index";
    }


}

export default TodoEdit;

// {this.props.match.params.id}