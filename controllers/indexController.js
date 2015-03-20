var Applicant = require('../models/applicants.js');
//var mongoose = require('mongoose');

var indexController = {
	
	appListing: function (req,res){
		Applicant.find({}, function(err,results){
			// return the results as applicants variable
			res.render('applicants',{
				applicantList: results });
			 });
	},

	newApplicant: function(req,res){
		var weApplied = req.body;
		//console.log(weApplied);

		var person=new Applicant({
				name: weApplied.name, 
				bio: weApplied.bio, 
				skills: weApplied.skills.split(','), 
				exp: weApplied.exp, 
				reason: weApplied.reason			
		});

		person.save(function(err,result){
			//console.log(person);
			res.redirect('/applicants');
		});
	},

	appRemove: function(req,res){
		Applicant.findByIdAndRemove(req.params.info,function(err,results){
			//console.log(results);
		});
		res.redirect('/applicants');
	}
};

module.exports=indexController;