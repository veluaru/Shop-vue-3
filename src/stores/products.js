import { ref } from 'vue'
import { defineStore } from 'pinia'
import apiClient from '../utils/clients/axios';

export const useProductsStore = defineStore('products', () => {
  const allProducts = ref([]);
  const searchText = ref('');
  const loading = ref(false);
  const error = ref(null);

  async function getAllProducts() {
    loading.value = true;
    error.value = null;
    try {
      const response = await apiClient.get('/products');
      allProducts.value = response.data;
    } catch (err) {
      error.value = 'Failed to fetch products.';
      // The global error handling already ran in the interceptor!
      // Here you can set a local state specific to this action if needed.
    } finally {
      loading.value = false;
    }
  }
  async function getProductById(id) {
    loading.value = true;
    error.value = null;
    try {
      const response = await apiClient.get('/products/' + id);
      return response.data; // Return the data directly
    } catch (err) {
      error.value = `Failed to fetch product ${id}.`;
      // Optionally re-throw to let the component handle it
      throw err;
    } finally {
      loading.value = false;
    }
  }
  async function getProductsByValue(value) {
    loading.value = true;
    error.value = null;
    try {
      // API doesn't provide a request by value endpoint
      const response = await apiClient.get('/products/' + value);
      return response.data; // Return the data directly
    } catch (err) {
      error.value = 'Failed to filter products.';
    } finally {
      loading.value = false;
    }
  }
  return { allProducts, searchText, getAllProducts, getProductById, getProductsByValue }
})
