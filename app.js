const arr =  [
	{
		name: "Ha",
		gender: 'female',
		poin: 8
	},
	{
		name: "Huy",
		gender: 'male',
		poin: 9
	},
	{
		name: "Hung",
		gender: 'male',
		poin: 7
	},
	{
		name: "Phuong",
		gender: 'female',
		poin: 6
	},
	{
		name: "Huyen",
		gender: 'female',
		poin: 10
	},
	{
		name: "Long",
		gender: 'male',
		poin: 5
	},
	{
		name: "Luan",
		gender: 'male',
		poin: 10
	},
	{
		name: "Linh",
		gender: 'female',
		poin: 8
	}

  ];
  
 const checkMale = arr.filter (function(arr) {
  return arr.gender == 'male'});
//   console.log(checkMale.length);
  const checkFemale = arr.filter (function(arr) {
    return arr.gender == 'female'});
    // console.log(checkFemale.length);
 const getThePoin = thePoin => {
    return thePoin.reduce((acc,curr)=> acc + curr.poin,0); 
 }
//  console.log(getThePoin(checkMale));
//  console.log(getThePoin(checkFemale));
 let avgMale = getThePoin(checkMale)/checkMale.length;
 let avgFemale = getThePoin(checkFemale)/checkFemale.length;
 console.log(avgMale);
 console.log(avgFemale);
 
 
 
 
 
 


 
