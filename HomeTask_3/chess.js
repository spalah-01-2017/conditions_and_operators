var linesNumber = 24;
var line = '';

for (var i = 1; i <= linesNumber; i++) {
	for (var k = 1; k <= linesNumber; k++) {
		if ( (k + i) % 2 ) {
		line += '#';
	} else {
		line += ' ';		
	}
  }
  console.log(line);
}











