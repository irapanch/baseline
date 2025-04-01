import axios from "axios";
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const getDataFromGoogleSheet = async () => {
  const sheetId = process.env.NEXT_PUBLIC_OSBB27_SHEET_ID; // Вставьте ID вашей таблицы
  const sheetName = "Заборгованість"; // Укажите имя листа
  const range = "A1:B176"; // Укажите диапазон данных (например, A1:B10)
  const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}!${range}?key=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data.values; // Возвращает данные таблицы
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    return null;
  }
};

export default getDataFromGoogleSheet;
