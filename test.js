const yargs = require('yargs')
const fs=require('fs')
const fileName ="book.json"
const LoadFile = function (){
	try{
		const notes= fs.readFileSync(fileName,{encoding : 'utf-8'});
		const notesObj = JSON.parse(notes);
		return notesObj;
	}
	catch(err){
		return[]
	}
	return notes;
}
const SaveFile= function(notes){
	const convert = JSON.stringify(notes);
	fs.writeFileSync(fileName,convert);
}
yargs.version('1.1.0')

yargs.command({ 
	command: 'add',
	describe: 'Add a new note', 
	builder: {
    title: {
      describe: 'Note title', 
      demandOption: true, 
      type: 'string'
    }, 
    body: {
      describe: 'Note body', 
      demandOption: true, 
      type: 'string'
    } 
  },
	handler: function (argv) {
		 const notes = LoadFile();
		try{
			notes.forEach(fun); 
			function fun (item,index){
				if(item.title===argv.title)
					throw "Da ton tai!";
			};
			const note = {
		 		title:argv.title,
		 		body:argv.body
		 	};
		 	notes.push(note);
		 	SaveFile(notes);
		}
		catch(err){
			console.log(err);
		}
		 
	}
		
}).argv;


