// fetch("https://jsonplaceholder.typicode.com/posts/1",
// 	{
// 		method: "GET",
// 		headers: {
// 			"Content-Type": "application/json",
// 			"Authorization": "Bearer Your-token-here",
// 			"Custom-Header": "CustomValue"
// 		}
// 	}
// )
// 	.then(response => {
// 		if (!response.ok) {
// 			throw new Error("Network response was not OK" + response.statusText);
// 		}

// 		return response.json()
// 	})
// 	.then(data => {
// 		console.log(data)
// 	})
// 	.catch(error => {
// 		console.error("There was a peoblem with the fetch poeration: ", error)
// 	});



// async function displayRandomImage() {
// 	try {
// 		const response = await fetch("https://picsum.photos/400");
// 		if (!response.ok) throw new Error("Failed to fetch image");

// 		const blobImage = await response.blob();
// 		const ImageElement = document.createElement("img");
// 		ImageElement.src = URL.createObjectURL(blobImage)

// 		document.body.appendChild(ImageElement)
// 	} catch (error) {
// 		console.error("Error: ", error)
// 	}
// }
// displayRandomImage()
// displayRandomImage()
// displayRandomImage()
// displayRandomImage()
// displayRandomImage()
// displayRandomImage()