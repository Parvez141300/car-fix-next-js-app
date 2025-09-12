"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const DeleteBooking = ({ bookingId }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleDeleteBooking = async (id) => {
    try {
      setLoading(true);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          setLoading(true);
          const res = await fetch(`http://localhost:3000/api/service/${id}`, {
            method: "DELETE",
          });
          const data = await res.json();
          console.log("delete response", data);
          if (data.deletedCount) {
            setLoading(false);
            Swal.fire({
              title: "Deleted!",
              text: "Your booking has been deleted.",
              icon: "success",
            });
            router.refresh();
          }
        }
      });
    } catch (error) {
      setLoading(false);
      toast.error(error.message, { position: "top-center" });
    } finally {
      setLoading(false);
    }
  };
  return (
    <button
      onClick={() => handleDeleteBooking(bookingId)}
      className="btn rounded-lg"
      disabled={loading}
    >
      <FaTrash size={10}></FaTrash>
      {loading ? (
        <>
          <span className="loading loading-spinner loading-lg"></span> Deleting
        </>
      ) : (
        "Delete"
      )}
    </button>
  );
};

export default DeleteBooking;
