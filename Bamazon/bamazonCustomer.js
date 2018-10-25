var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  start();
  
});


function start() {
  // query the database for all items being sold
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    // once you have the items, prompt the user for which they'd like to buy based on ID
    inquirer
      .prompt([
        {
          name: "choice",
          type: "list",
          message: "What is the ID of the item you would like to buy?",
          choices: function() {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].Item_id.toString());
              // console.log(results[i].Item_id);
            }
            // console.log(choiceArray);
            return choiceArray;
          },
          
        },
        {
          name: "itemNum",
          message: "How many would you like?",
        }

      ])
      .then(function(answer) {
        console.log(answer);
        
        // get the information of the chosen item

        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].Item_id === parseInt(answer.choice)) {
            chosenItem = results[i];
          }
          
        }
        console.log("You chose: " + chosenItem.Product_Name);

        var itemQuantity = chosenItem.Stock_Quantity;
        // console.log(itemQuantity);
        var updateQuantity = chosenItem.Stock_Quantity - parseInt(answer.itemNum);
        // console.log(updateQuantity);
        // determine if there is enough inventory 
        if (answer.itemNum <= parseInt(itemQuantity)) {
          
          // If ther is a sufficient quantity, update db, let the user know,
          connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                Stock_Quantity: updateQuantity
              },
              {
                Item_id: chosenItem.Item_id
              }
            ],
            function(error) {
              if (error) throw err;
              console.log("Your order has been placed!");
              // total price of order
              console.log("Total Price: " + answer.itemNum * chosenItem.Price);
              
            }
          );
        }
        else {
          // NOt enough stock left so let user know and start over
          console.log("Insufficient quantity!");
          start();
        }
      });
  });
}
