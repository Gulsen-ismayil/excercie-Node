const profile ={ 
 name :'Mewww' ,
 campus : 'paris' ,
};

const myInfos = () => {
//     console.log(`Hi, this is ${name}, I'm in ${campus}`);
};

const cowsay = require("cowsay");

console.log(cowsay.say({
	text : `Hi, this is ${profile.name}, I'm in ${profile.campus}`,
	e : "oO",
	T : "U "
}));

// or cowsay.think()
module.exports = myInfos;
