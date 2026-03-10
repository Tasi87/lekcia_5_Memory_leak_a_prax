//idea	Memory heap

// Objekty
// Funkcie
// Premenné
// Closures

//idea Garbage collector
	//	uvoľnuje pamäť v určitom momente

const garbageCollectorExample = () => {
	let num1 = 42;
	let num2 = 100;

	console.log(num1, num2);
}

garbageCollectorExample();

// Pokarčuje ďalej kód

//idea	Memory heap a memory leak
	//	Zlý prístup ku garbage collectoru

	const names = ["Tasi", "Harry", "Ron"];

	for (let i = 2; i > 1; i++) {
		names.push("Hermiona");
	}