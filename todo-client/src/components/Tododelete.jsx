import React, { Component } from 'react';
import axios from 'axios';


class Tododelete extends Component {
    state = {
        todoItem: { "todoTableId": 1, "title": "Job X", "isComplete": 1 },
    }
    render() {
        return (

            <div className="container">

                <h1>待辦事項清單 - 刪除</h1>
                <hr />
                <div>
                    <dl className="row">
                        <dt className="col-sm-2">
                            項目名稱
                        </dt>
                        <dd className="col-sm-10" id="Name" >
                            {this.state.todoItem.title}
                        </dd>
                        <dt className="col-sm-2">
                            是否已完工
                        </dt>
                        <dd className="col-sm-10">
                            <input className="check-box" disabled="disabled" id="isComplete"
                                type="checkbox"
                                checked={this.state.todoItem.isComplete ? "checked" : ""} />
                        </dd>
                    </dl>

                    <hr />
                    <h3>確定要刪除這筆資料嗎?</h3>

                    <form action="/Todo/Delete" method="post">
                        <input type="hidden" id="TodoItemId" name="TodoItemId" value="1" />
                        <input type="button" value="確定"
                            className="btn btn-outline-danger"
                            onClick={this.ok_click} /> |
                        <a href="/Todo/Index" className="btn btn-outline-info">取消</a>
                    </form>
                </div>
            </div>

        );
    }


    // 下面這行就是去後端提供的API中撈資料 這裡是撈全部id
    async componentDidMount() {
        var url = `http://localhost:8000/todo/item/${this.props.match.params.id}`;
        var result = await axios.get(url);
        let newState = { ...this.state };
        newState.todoItem = result.data;
        this.setState(newState);
    }

    ok_click = async () => {
        // console.log(this.state.todoItem)
        var url = `http://localhost:8000/todo/delete/${this.state.todoItem.todoTableId}`;
        // console.log(url);
        await axios.delete(url);
        window.location="/todo/index"

    }

}

export default Tododelete;