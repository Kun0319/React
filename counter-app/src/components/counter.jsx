import React, { Component } from 'react';
// cc
// ccc
class Counter extends Component {
    state = {
        count: this.props.value

    }
    render() {
        // 重構!!!可以截取函式內容 將它變成一個個副程式 放到主程式外 可以比較好閱讀程式碼
        let classes = this.getBadgeClasses();

        return (
            // 或者用 <React.Fragment> 代替div 一定要有東西包住裡面
            <div>
                <span className={classes} >{this.formatCount()}</span>
                {/* onClick可以接箭頭函式  */}
                {/* onClick指定的函式沒有要立即執行 所以沒有小括號 */}
                <button onClick={this.handleIncrement} className='btn btn-primary btn-sm m-2'>Increment</button>
                {/* 為什麼要加箭頭函式再寫函式 */}
                {/*  */}
                <button onClick={() => { this.props.onDelete(this.props.order) }} className='btn btn-danger btn-sm'>Delete</button>
            </div>
        );
    }

    handleIncrement = () => {
        // 這裡是設定state狀態的count屬性 設定state的count屬性為原本的值再加1
        this.setState({ count: this.state.count + 1 });
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return (count === 0) ? "Zero" : count

    }
}

export default Counter;