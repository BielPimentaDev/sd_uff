import axios, { AxiosError } from 'axios';
import { PostProduct } from '@/app/types/product';

const URL = 'http://15.229.1.114:8000/public/product';

const headers = {
	headers: {
		accept: 'application/json',
	},
};

// Tipo genérico para respostas das APIs
type ApiResponse<T> = T | null;

export async function getProducts(): Promise<ApiResponse<any[]>> {
	try {
		const response = await axios.get(URL, headers);
		return response.data; // Supondo que a API retorna um array de produtos
	} catch (error) {
		handleAxiosError(error, 'Erro ao buscar produtos');
		return null; // Retorna null em caso de erro
	}
}

export async function postProduct(
	product: PostProduct
): Promise<ApiResponse<any>> {
	try {
		const response = await axios.post(URL, product, headers);
		return response.data; // Supondo que a API retorna o produto criado
	} catch (error) {
		handleAxiosError(error, 'Erro ao criar produto');
		return null;
	}
}

export async function deleteProduct(id: number): Promise<ApiResponse<any>> {
	try {
		const response = await axios.delete(`${URL}/?product_id=${id}`, headers);
		return response.data; // Supondo que a API retorna uma mensagem de sucesso
	} catch (error) {
		handleAxiosError(error, 'Erro ao deletar produto');
		return null;
	}
}

export async function updateProduct(
	id: number,
	product: PostProduct
): Promise<ApiResponse<any>> {
	try {
		const response = await axios.put(
			`${URL}/?product_id=${id}`,
			product,
			headers
		);
		return response.data; // Supondo que a API retorna o produto atualizado
	} catch (error) {
		handleAxiosError(error, 'Erro ao atualizar produto');
		return null;
	}
}

// Função para tratar erros do Axios
function handleAxiosError(error: unknown, customMessage: string): void {
	if (axios.isAxiosError(error)) {
		const axiosError = error as AxiosError;
		console.error(`${customMessage}: ${axiosError.message}`);
		if (axiosError.response) {
			console.error('Detalhes do erro:', axiosError.response.data);
		} else if (axiosError.request) {
			console.error('Nenhuma resposta do servidor:', axiosError.request);
		}
	} else {
		console.error(`${customMessage}:`, error);
	}
}
