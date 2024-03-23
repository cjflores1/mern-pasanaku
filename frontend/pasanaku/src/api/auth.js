import axios from "axios";

const API = import.meta.env.VITE_BACKEND_URL;
const currentYear = new Date().getFullYear();

export const userRequest = (user) => axios.post(`${API}/users`, user);

export const pasanakuId = () => axios.get(`${API}/pasanakus/${currentYear}`);

export const getNumberPlayer = (pasanakuID) => axios.patch(`${API}/pasanakus/${pasanakuID}/getNumber`);

export const updatePlayersPasanaku = (pasanakuID) => axios.patch(`${API}/pasanakus/${pasanakuID}`)

export const updatePositionPlayer = (userID, positionPlayer) => axios.patch(`${API}/users/${userID}`, {position: positionPlayer})
