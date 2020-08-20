import React, { useState } from 'react';

import classes from './calculator.module.scss';

export default function Calculator() {

    const init = {
        num: 500,
        sales: 1000,
        percentage: 10,
        retail: 100,
        estimated: 10000
    }

    const [state, setState] = useState(init);

    const changeState = (e, field) => {
        let myState = { ...state }
        myState[field] = e.target.value;
        setState(myState);
    }

    console.log(state)
    return (
        <section className={classes.Calculator}>
            <h2>Work out <b>how much you could be earning</b> with Device Protect</h2>
            <div>
                <span>#</span>
                <input type='number' value={state.num} onChange={(e) => changeState(e, 'num')} />
                <p>Total number of handsets sold per annum</p>
            </div>
            <div>
                <span>$</span>
                <input type='number' value={state.sales} onChange={(e) => changeState(e, 'sales')} />
                <p>Total number of handsets sold per annum</p>
            </div>
            <div>
                <span>%</span>
                <input type='number' value={state.percentage} onChange={(e) => changeState(e, 'percentage')} />
                <p>Total number of handsets sold per annum</p>
            </div>

            <button>Go</button>

            <h6 className={classes.disclaimer}> 
                *extended warranty 12 monhts
            </h6>

            <div className={classes.output}> 
            <h3>{`$  ${state.retail}`}</h3>
            <p className={classes.disc}>Estimated retail price*</p>

            <h3>{`$  ${state.estimated}`}</h3>
            <p className={[classes.disc, classes.revenue].join(" ")}>Estimated revenue share*</p>
            </div>
        </section>
    )
}
