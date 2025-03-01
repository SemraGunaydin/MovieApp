import { FaTrash } from "react-icons/fa";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const DeleteButton = ({ id }) => {
  const navigate = useNavigate();

  // Filmi silme fonksiyonu
  const handleDelete = async () => {
    try {
      await api.delete(`/api/movies/${id}`);
      
      // Kullanıcıya bildirim göster
      toast.warning("Film kaldırıldı");

      // Ana sayfaya yönlendir
      navigate("/");
      
    } catch (err) {
      console.error("Silme işlemi başarısız:", err);

      // Hata mesajını kullanıcıya göster
      toast.error("Silme işlemi başarısız!");
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-600 text-white p-2 rounded-md hover:bg-red-400 transition"
    >
      <FaTrash />
    </button>
  );
};

export default DeleteButton;