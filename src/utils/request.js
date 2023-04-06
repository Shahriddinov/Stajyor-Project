import axios from "axios";

const service = axios.create({
	baseURL: process.env.REACT_APP_API_BASE_URL,
	timeout: 60000
});

service.interceptors.request.use(config => {
	const token = localStorage.getItem("token");
	if (token) {
		config.headers["Authorization"] = `Bearer ${token}`;
	}
	return config;
});

service.interceptors.response.use(
	response => {
		return response.data;
	},
	error => {
		return error.response;
	}
);

export default service;
