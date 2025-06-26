const jsonString = '{"name": "Alice", "birthDate": "2008-11-02"}';


const obj = JSON.parse(jsonString, (key, value) => {
	if (key === "birthDate") return new Date(value).toDateString();
	return value;
})

console.log(obj)