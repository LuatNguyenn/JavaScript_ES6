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

var budgetController = (function () {
    var values = [];
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

    return {
        addItem: function (type, desc, val) {
            var newItem;

            //create new ID 
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            //create new item based on inc or exp
            if (type === 'exp') {
                newItem = new Expense(ID, desc, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, desc, val);
            }
            data.allItems[type].push(newItem);
            return newItem;
        },
        calBudget: function (inputValue, type) {
            let val = parseInt(inputValue);
            if (inputValue != "" && inputValue != undefined && inputValue != NaN) data.total[type] = val + data.total[type];      
            if(type === 'exp' ? val = -val : val = val);
            values.push(val);
            totalBudget = values.reduce(function (a, b) {
                return a + b;
            }, 0);
            return totalBudget;
        }
    }

})();


var UIController = (function () {
    //easy when we change the class name
    var DOMString = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        totalBudgetValue: '.budget__value',
        totalIncomeValue: '.budget__income--value',
        totalExpenseValue: '.budget__expenses--value'
    }
    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMString.inputType).value,
                description: document.querySelector(DOMString.inputDescription).value,
                value: document.querySelector(DOMString.inputValue).value,

            }
        },

        addListItem: function (obj, type) {
            //create HTML string with placeholder text
            var html, newHtml;

            if (type === 'inc') {
                element = DOMString.incomeContainer
                html = '<div class="item    clearfix" id="income-%id%"><div class="item__description">%description%</div> <div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div> </div>'
            } else if (type === 'exp') {
                element = DOMString.expensesContainer;
                html = '<div class="item clearfix" id="expense-0"><div class="item__description">Apartment rent</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }

            //replace the placeholder text with some actual 
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            //insert html to dom
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },


        clearFields: function () {
            var fields;
            fields = document.querySelectorAll(DOMString.inputDescription + ', ' + DOMString.inputValue)
            fieldArr = Array.prototype.slice.call(fields);
            console.log(fieldArr);
            fieldArr.forEach(function (current, index, array) {
                current.value = "";
            });
            fieldArr[0].focus();
        },

        updateTotalBudget(totalNumber) {
            document.querySelector(DOMString.totalBudgetValue).innerHTML = totalNumber;
            income = document.querySelector('.item__value').value;
            document.querySelector(DOMString.totalIncomeValue).innerHTML = data.total.inc;
            document.querySelector(DOMString.totalExpenseValue).innerHTML = data.total.exp;

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
        var input, newItem;
        //1. get input data
        var input = UICtrl.getInput();
        console.log(input);
        //2. add item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        //3. add item to the UI
        UICtrl.addListItem(newItem, input.type);

        //4. clear fields
        UICtrl.clearFields();
        //4. Calculate the budget
        UICtrl.updateTotalBudget(budgetCtrl.calBudget(input.value, input.type));
        //5. display budget on UI
    };

    return {
        init: function () {
            console.log('Application running');
            setupEventListener();
        }
    }

})(budgetController, UIController);

controller.init();