import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import 'animate.css';

const TodoSchema = Yup.object().shape({
  todo: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
});

const animationStyle = `
 @-webkit-keyframes color-change-3x {
  0% {
    background: #19dcea;
  }
  50% {
    background: #b22cff;
  }
  100% {
    background: #ea2222;
  }
}
@keyframes color-change-3x {
  0% {
    background: #19dcea;
  }
  50% {
    background: #b22cff;
  }
  100% {
    background: #ea2222;
  }
}

  .color-change-3x {
	-webkit-animation: color-change-3x 6s linear infinite alternate both;
	        animation: color-change-3x 6s linear infinite alternate both;
    }
`;

const Tod = () => {
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleSubmit = (values, { resetForm }) => {
    if (editIndex !== null) {
      const updatedTodos = todos.map((todo, i) =>
        i === editIndex ? values.todo : todo
      );
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, values.todo]);
    }
    resetForm();
  };

  return (
    <div>
      <style>{animationStyle}</style>
      
      <div className="flex items-center justify-center min-h-screen color-change-3x p-4">
        <div className="container bg-white p-6 rounded-lg shadow-2xl max-w-full w-full sm:max-w-md lg:max-w-3xl xl:max-w-4xl sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 animate__animated animate__backInDown animate__slow 2s">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">To-Do List</h1>

          <Formik
            initialValues={{ todo: editIndex !== null ? todos[editIndex] : '' }}
            validationSchema={TodoSchema}
            onSubmit={handleSubmit}
            enableReinitialize
          >
            {({ errors, touched }) => (
              <Form>
                <div className="flex flex-col sm:flex-row mb-4 space-y-2 sm:space-y-0 sm:space-x-2">
                  <Field
                    name="todo"
                    placeholder="Enter To Do"
                    className="flex-grow border-2 border-black rounded-lg p-2 text-sm sm:text-base lg:text-lg"
                  />
                  <button
                    type="submit"
                    className="bg-blue-800 text-white p-2 rounded-lg border-2 border-black hover:bg-blue-600 text-sm sm:text-base lg:text-lg"
                  >
                    {editIndex !== null ? 'Update Todo' : 'Add Todo'}
                  </button>
                </div>
                {errors.todo && touched.todo ? (
                  <div className="text-red-500 mb-4 text-sm">{errors.todo}</div>
                ) : null}
              </Form>
            )}
          </Formik>

          <ul className="list-disc pl-5 space-y-4">
            {todos.map((todo, index) => (
              <li
                key={index}
                className="flex items-center justify-between font-bold text-sm sm:text-base lg:text-lg animate__animated animate__bounceInLeft"
              >
                {todo}
                <div className="space-x-2">
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded-lg border-2 border-black hover:bg-red-700 text-sm sm:text-base lg:text-lg"
                  >
                    DELETE
                  </button>
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-green-500 text-white px-2 py-1 rounded-lg border-2 border-black hover:bg-green-700 text-sm sm:text-base lg:text-lg"
                  >
                    EDIT
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tod;
