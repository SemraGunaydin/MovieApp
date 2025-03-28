import React from "react";
import InputField from "../components/InputField";
import { inputs } from "../utils/constants";
import api from "../utils/api";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const Create = () => {

  const navigate =useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // inputlardaki veriyi al (nesne seklinde)
    const formData = new FormData(e.target);
    const movieData = Object.fromEntries(formData.entries());

    // kategorileri diziye cevir
    movieData.genre = movieData.genre.split(",");

    // ekibi diziye cevir
    movieData.cast = movieData.cast.split(",");

    // api'a film olusturmmak icin http istegi at
    api
      .post("/api/movies", movieData)
      
      .then((res) => {
        // bildirim gonder
        toast.success("fil listeye eklendi")
      //detay sayfasina yonlendir
      navigate(`/movies/${res.data.id}`)
      
      })
      
      .catch(() => {
        console.log("hata oldu", err)
      toast.error("uzgunuz :( islem basarisiz");
      });
  };

  return (
    <div className="min-h-screen bg-yellow-600 flex items-center justify-center px-5 py-8">
      <div className="bg-white w-full max-w-[1000px] p-10 rounded shodow-lg grid grid-cols-1 md:grid-cols-2">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <h1 className="text-3xl font-semibold">Create New Movie</h1>

          {inputs.map((props, index) => (
            <InputField key={props.id || index} {...props} />
          ))}
          <button className="shadow border py-3 rounded-lg hover:shadow-lg hover:bg-gray-200 transition font-bold">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
