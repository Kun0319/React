import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 10 },
            { id: 3, value: 8 },
            { id: 4, value: 9 }
        ]
    }


    render() {
        return (
            <div>
                {
                    // c是自己命名的?
                    this.state.counters.map(
                        (c, index) => <Counter
                            key={c.id}
                            value={c.value}
                            order={index}
                            onDelete={this.handleDelete}
                        />
                    )
                }
            </div>
        );
    }

    handleDelete = (e) => {
        // ...
        var newState = { ...this.state };
        newState.counters.splice(e, 1);
        this.setState(newState);
        // alert(e);
    }
}

export default Counters;