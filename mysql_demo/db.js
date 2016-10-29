var mysql = require("mysql");
var con   = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "test",
	port: 3306
});

con.connect(function(err){
	if(err){
		console.log("connect error");
	}else{
		console.log("connect ok");
	}
});

con.query("select * from Orders",function(err,rows){
	console.log(rows);
	for(var i=0 ; i<rows.length ; i++){
		console.log("OrderId:" + rows[i].OrderID);
	}
});

var order = {OrderID: 0001,CustomerID:2,EmployeeID: 3, OrderDate:"", ShipperID:3};
con.query("insert into Orders set ?",order, function(err,res){
	if(err){
		console.log("insert err");
	}else{
		console.log("insert ok" + res.insertId);
	}
});

var newOrder = [222,0001];
con.query("update Orders set CustomerID=? where OrderID=?",newOrder,function(err,res){
	if(err){
		console.log("update err");
	}else{
		console.log("update ok" + res.insertId);
	}
});
con.end(function(err){
	console.log("end db ok");
});