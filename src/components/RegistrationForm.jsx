import React, { useState } from "react";
import { z } from "zod";

const emailSchema = z.string().email();
const passwordSchema = z
  .string()
  .min(8, { message: "Пароль должен содержать не менее 8 символов" })
  .regex(/[A-Z]/, {
    message: "Пароль должен содержать хотя бы одну заглавную букву",
  })
  .regex(/[a-z]/, {
    message: "Пароль должен содержать хотя бы одну строчную букву",
  })
  .regex(/[0-9]/, { message: "Пароль должен содержать хотя бы одну цифру" });

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    let validationErrors = {};
    try {
      emailSchema.parse(formData.email);
    } catch (error) {
      validationErrors.email = error.errors[0].message;
    }

    try {
      passwordSchema.parse(formData.password);
    } catch (error) {
      validationErrors.password = error.errors[0].message;
    }

    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = "Пароли не совпадают";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const userId = Date.now(); // Уникальный идентификатор
      const createdAt = new Date().toISOString(); // Дата создания
      console.log({ ...formData, userId, createdAt });
      setSuccessMessage("Регистрация успешна!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <h2 className="text-xl mb-4">Регистрация</h2>
      <div className="mb-4">
        <label className="block mb-1">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="border p-2 w-full"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-1">Пароль</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="border p-2 w-full"
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-1">Повторите пароль</label>
        <input
          type="password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
          className="border p-2 w-full"
        />
        {errors.confirmPassword && (
          <p className="text-red-500">{errors.confirmPassword}</p>
        )}
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Зарегистрироваться
      </button>

      {successMessage && (
        <p className="text-green-500 mt-4">{successMessage}</p>
      )}
    </form>
  );
};

export default RegistrationForm;
