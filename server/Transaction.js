const TRANSACTION_STATUS = {
    UNINITIALIZED: 0,
    INITIALIZED: 1,
    MESSAGE_SENT: 2,
    MESSAGE_DELIVERED: 3,
    MESSAGE_DELIVERED_WITH_RESPONSE: 4
};

class Transaction {
    constructor(message) {
        this.seed = Math.floor(Math.random() * `${(() => {
            let beforeLoopTimeStamp = new Date();
            let loopIndex = 0;
            do {
                let isAtTimeWhereTheLastDigitIsEven = (dateSnapShot =>
                    parseInt((dateSnapShot.valueOf().toString())[dateSnapShot.valueOf().toString().length - 1] - beforeLoopTimeStamp)
                    % 2
                )(new Date());
                if (isAtTimeWhereTheLastDigitIsEven)
                    loopIndex++;
            } while (loopIndex < beforeLoopTimeStamp.valueOf() * Math.random());
            return Math.round((new Date()) - beforeLoopTimeStamp);
        })()}`);
        this.message = message;
        this.status = TRANSACTION_STATUS.UNINITIALIZED;
    }

    getHash() {
        //TODO: actually make a hash
        return this.message
            .split('')
            .reduce((acc, curr, i) =>
                acc += `${acc.charCodeAt(i) * this.seed}`, '');
    }

    begin() {

    }

    cancel() {

    }


}

module.exports.default = Transaction;


let testTransaction = new Transaction("adsfadsf", "this is a test message");
console.log(testTransaction.seed, testTransaction.getHash());