import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    trigger,
    getValues,
  } = useForm({
    defaultValues: {
      to: "",
      message: "",
    },
  });

  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const sent = function (data) {
    console.log(data);
  };

  const algo = async function () {
    const result = await trigger("to");
    if (result) {
      phoneNumbers.push(getValues("to"));
      setPhoneNumbers([...phoneNumbers]);
    }
  };

  return (
    <div className="bg-white shadow-lg p-10 dark:bg-gray-600 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white rounded-xl w-1/2 mr-2">
      <form onSubmit={handleSubmit()} className="flex flex-row space-x-10">
        <div className="w-2/4">
          <div className="mb-6 space-y-2 flex flex-col">
            <label
              htmlFor="number"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Number
            </label>
            <input
              {...register("to", {
                required: true,
                pattern:
                  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
              })}
              id="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="+(503) 72318899"
              required
            />
            {errors.to && (
              <p className="text-red-400">
                This field is Required and have a number format
              </p>
            )}

            <button
              type="button"
              onClick={() => algo()}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add number
            </button>
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <textarea
              {...register("message", { pattern: /^[A-Za-z]+$/i })}
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800"
          >
            Sent
          </button>
        </div>
        <div className="w-2/4 dark:bg-gray-700 p-4 rounded-lg ">
          {phoneNumbers.length > 0 ? (
            <ul>
              {phoneNumbers.map(function (number) {
                return <li key={number}>{number}</li>;
              })}
            </ul>
          ) : (
            <p>no hay</p>
          )}
        </div>
      </form>
    </div>
  );
}
