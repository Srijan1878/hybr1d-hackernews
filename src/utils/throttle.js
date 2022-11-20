const throttle = (fn, interval = 0) => {
    let flag = false;
    return (...args) => {
        if (flag) return;

        flag = true;
        setTimeout(() => {
            fn.apply(null, args);
            flag = false;
        }, interval);
    };
};

export default throttle