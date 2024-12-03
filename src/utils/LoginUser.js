// LoginUser.js
import { sha256 } from "crypto-hash";

export const loginUser = async ({ email, password }) => {
  try {
    // Хешируем пароль
    const hashedPassword = await sha256(password);
    // Отправляем запрос с хэшированным паролем
    const response = await fetch(
      `http://localhost:3000/users/?email=${email}&password=${hashedPassword}`
    );
    const data = await response.json();
    // Если данные найдены, возвращаем их
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
};
