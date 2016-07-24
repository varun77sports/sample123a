/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'new':function(req,res){
		res.view();
	},
	create: function(req,res,next){
		console.log(">>>>>>>11");
		var results =  req.params.all();
		var insert = "insert into user(fName,lName,email,mNumber) values ('"+results.fName+"','"+results.lName+"','"+results.email +"','"+results.mNumber+"');"
		User.query(insert , function(err , results){
			if (err){
				console.error();
				console.log("error in insert");
				console.log(err);
			}else{
				res.redirect('/user/index');
				console.log(results);
			}
		})
		// User.create(req.params.all(),function userCreated(err , user){
		// 	if (err) {
		// 		console.log("error>>");
		// 		console.log(req.params.all());
		// 		console.log("---------------");
		// 		console.log("---------------");
		// 		consoel.log(user)
		// 		console.log(err);
		// 		res.redirect('/user/new');
		// 	}
		// 	res.redirect('/user/index');
		// 	console.log(user);
		// });
	},
	index: function(req,res,next){
		var select = "select * from user";
		try{
		User .query(select ,function(err , results ){
			if (err){
				console.log(err);
			}else{
				console.log("select success");
				console.log(results);
				res.view({
						users:results
								});
			}
		})
	}catch(error){
		console.error();
	}
// 		User.find(function foundUser (err, user){
// 				if (err) return next(err);
// //console.log(user);
// 				res.view({
// 						users:user
// 					});
// 		})

	}
};
