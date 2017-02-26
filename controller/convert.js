module.exports = {
	 dateToTimestamp: function(date){
		let myDate;
		let newDate;
		//in case the date hase dashes in it 
		if (date.includes('-')) {
			myDate = date.split('-');
		}else{
			myDate = date.split(' ');
		}
		
		newDate = myDate[0]+","+myDate[1]+","+myDate[2];
		return new Date(newDate).getTime();
	},

 	dateToNaturalDate: function(date){
		var monthNames = ["January", "February", "March", "April", "May", "June",
	  		"July", "August", "September", "October", "November", "December"];
		let d = String;

		if (date.includes('-')) {
			d = date.split('-');
		}else{
			d = date.split(' ');
		}
		
		if (!isNaN(d[0])) {
			return monthNames[d[0]-1]+' '+d[1]+', '+d[2];
		}else{
			return d[0]+' '+d[1]+', '+d[2];
		}
		
	}
};