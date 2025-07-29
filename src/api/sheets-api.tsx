import { API_SHEET_KEY, SHEET_ID } from "@/api/api";
import axios from "axios";

export const getDataFromGoogleSheet = async () => {
  const sheetName = "Заборгованість"; // Укажите имя листа
  const range = "A1:B176"; // Укажите диапазон данных (например, A1:B10)
  const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${sheetName}!${range}?key=${API_SHEET_KEY}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data.values; // Возвращает данные таблицы
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    return null;
  }
};
