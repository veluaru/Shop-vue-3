import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', () => {
	const allProducts = ref([]);
	
	function getAllProducts() {
		return fetch('https://fakestoreapi.com/products')
			.then(response => {
				// Check if the request was successful (status code 200-299)
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				// Parse the response body as JSON
				return response.json();
			})
			.then(data => {
				// Log the fetched data to the console
				allProducts.value = data;
			})
			.catch(error => {
				// Handle any errors that occurred during the fetch operation
				console.error('Error fetching data:', error);
			});
	}
	function getProductById(id) {
		return fetch('https://fakestoreapi.com/products/' + id)
			.then(response => {
				// Check if the request was successful (status code 200-299)
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				// Parse the response body as JSON
				return response.json();
			})
			.then(data => {
				// Log the fetched data to the console
				return data;
			})
			.catch(error => {
				// Handle any errors that occurred during the fetch operation
				console.error('Error fetching data:', error);
			});
	}
	function getProductsByValue(value) {
		return fetch('https://fakestoreapi.com/products' + value)
			.then(response => {
				// Check if the request was successful (status code 200-299)
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				// Parse the response body as JSON
				return response.json();
			})
			.then(data => {
				// Log the fetched data to the console
				allProducts.value = data;
			})
			.catch(error => {
				// Handle any errors that occurred during the fetch operation
				console.error('Error fetching data:', error);
			});
	}
	return { allProducts, getAllProducts, getProductById, getProductsByValue }
})
