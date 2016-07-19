var React = require("react");
var TodoList = require("TodoList");


var TodoApp = React.createClass({
    getInitialState: function () {
      return {
          todos: [
              {
                  id: 1,
                  text: 'first todo list'
              },
              {
                  id: 2,
                  text: '2nd todo list'
              }
              
              
          ]
      };  
    },
    
    render: function () {
        var {todos} = this.state;
        return (
            
            <div>
            <TodoList todos={todos}/>
            </div>
            
            );
    }
});


module.exports = TodoApp;