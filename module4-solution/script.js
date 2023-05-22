var names=new Array();
names[0]="Alejo";
names[1]="laura";
names[2]="Jenny";
names[3]="jason";
names[4]="paula";
names[5]="florence";
names[6]="leonardo";
names[7]="pedro";
names[8]="John";
names[9]="Yaakov";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}