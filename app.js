// task1
// const button = document.querySelector("button")!;
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;
// function add(num1: number, num2: number) {
//   return num1 + num2;
// }
// button.addEventListener("click", function() {
//   console.log(add(+input1.value, +input2.value));
// });
{
    var age = void 0;
    age = 50;
    var name_1;
    name_1 = 'Max';
    var toggle = void 0;
    toggle = true;
    var empty = void 0;
    empty = null;
    var notInitialize = void 0;
    notInitialize = undefined;
    var callback = void 0;
    callback = function (a) { return 100 + a; };
    var anything = void 0;
    anything = -20;
    anything = 'Text';
    anything = {};
    var some = void 0;
    some = 'Text';
    var str = void 0;
    if (typeof some === 'string') {
        str = some;
    }
    var person = void 0;
    person = ['Max', 21];
    var Status = void 0;
    (function (Status) {
        Status[Status["LOADING"] = 0] = "LOADING";
        Status[Status["READY"] = 1] = "READY";
    })(Status || (Status = {}));
    ;
    var currentStatus = {
        status: Status.LOADING
    };
    var union = void 0;
    var literal = void 0;
    function showMessage(message) {
        console.log(message);
    }
    function calc(num1, num2) {
        return num1 + num2;
    }
    function customError() {
        throw new Error('Error');
    }
    var page1 = {
        title: 'The awesome page',
        likes: 100,
        accounts: ['Max', 'Anton', 'Nikita'],
        status: 'open',
        details: {
            createAt: '2021-01-01',
            updateAt: '2021-05-01'
        }
    };
    var page2 = {
        title: 'Python or Js',
        likes: 5,
        accounts: ['Alex'],
        status: 'close'
    };
}
