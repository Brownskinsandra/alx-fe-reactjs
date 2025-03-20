import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
//import FormikForm from "./components/formikForm";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Form Submitted", values);
        alert("Form Submitted Successfully!");
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
          <div className="mb-4">
            <label className="block text-sm font-medium" htmlFor="username">Username</label>
            <Field className="w-full p-2 border rounded" type="text" name="username" />
            <ErrorMessage className="text-red-500 text-xs" name="username" component="div" />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium" htmlFor="email">Email</label>
            <Field className="w-full p-2 border rounded" type="email" name="email" />
            <ErrorMessage className="text-red-500 text-xs" name="email" component="div" />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium" htmlFor="password">Password</label>
            <Field className="w-full p-2 border rounded" type="password" name="password" />
            <ErrorMessage className="text-red-500 text-xs" name="password" component="div" />
          </div>
          
          <button
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Register"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
