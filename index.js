function fib(n) {
  // jika n kurang dari 3, maka hasilnya adalah 1
	if (n < 3) return 1;

	// tetapkan nilai sebelumnya dan saat ini ke 1
	let prev = 1;
	let curr = 1;

	// mulai loop dari 2 hingga n-1
	for (let i = 2; i < n; i++) {
		// hitung angka selanjutnya dengan menjumlahkan nilai sebelumnya dan saat ini
		const next = prev + curr;
		// tetapkan nilai sebelumnya menjadi saat ini
		prev = curr;
		// tetapkan nilai saat ini menjadi angka selanjutnya
		curr = next;
	}

	// kembalikan nilai saat ini sebagai hasil
	return curr;
}

console.log(fib(1)); // 1
console.log(fib(2)); // 1
console.log(fib(3)); // 2
console.log(fib(4)); // 3
console.log(fib(5)); // 5
