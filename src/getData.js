module.exports.getData = function(dataRetrieved){

    let routes = ["dateTime",
    "newComments",
    "newTasks",
    "newOrders",
    "tickets",
    "orders",
    "taskItem",
    "tasks",
    "messages",
    "foxes"]

    let fetches = routes.map((r)=>{
      return fetch("/" + r)
      .then(res=>res.json())
      .then(d=>done(d,r))
      .catch(e=>done(null,r));
    });
    const data =  {
        dateTime:"",
        newComments:"",
        newTasks:"",
        newOrders:"",
        tickets:"",
        orders:[],
        taskItem:"",
        tasks:[],
        messages:[],
        } ;

    function done(d,k){
        routes.pop();
        if(d){data[k] = d;}
        if(routes.length ===0)
        dataRetrieved(data);
    }

}