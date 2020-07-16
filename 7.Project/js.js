var budgetController = (function () {
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };


    var data = {
        allItems: {
            exp: [],
            inc: [],
        },
        total: {
            exp: 0,
            inc: 0
        }
    }

    return {
        addItem: function (type, desc, val) {
            var newItem;
            ID = 0;

            if (type === 'exp') {
                newItem = new Expense(ID, desc, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, desc, val);
            }
            data.allItems[type].push(newItem);
            return newItem;
        }
    }

})();


var UIController = (function () {
    //easy when we change the class name
    var DOMString = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }
    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMString.inputType).value,
                description: document.querySelector(DOMString.inputDescription).value,
                value: document.querySelector(DOMString.inputValue).value,

            }
        },
        getDOMString: function () {
            return DOMString;
        }
    }
})();


var controller = (function (budgetCtrl, UICtrl) {

    var setupEventListener = function () {
        var DOM = UICtrl.getDOMString();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', (event) => {
            if (event.keyCode == 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };


    var ctrlAddItem = function () {
        //1. get input data
        var input = UICtrl.getInput();
        console.log(input);
        //2. add item to the budget controller

        //3. add item to the UI

        //4. Calculate the budget

        //5. display budget on UI
        console.log('here')
    };

    return {
        init: function () {
            console.log('applied');
            setupEventListener();
        }
    }

})(budgetController, UIController);

controller.init();