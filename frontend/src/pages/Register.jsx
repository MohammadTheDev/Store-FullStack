import React from "react";
import AuthForm from "../components/AuthForm";

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <AuthForm type="register" />
    </div>
  );
};

export default Register;
