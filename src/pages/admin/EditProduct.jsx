import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../../components/loader/Loader";

const EditProduct = () => {
  const categoryList = [
    {
      name: "fashion",
    },
    {
      name: "shirt",
    },
    {
      name: "jacket",
    },
    {
      name: "mobile",
    },
    {
      name: "laptop",
    },
    {
      name: "shoes",
    },
    {
      name: "home",
    },
    {
      name: "books",
    },
  ];

  const { id } = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getSingleProductFunction = async () => {
    setLoading(true);
    try {
      const docRef = doc(fireDB, "product", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const product = docSnap.data();
        setValue("title", product.title);
        setValue("price", product.price);
        setValue("productImageUrl", product.productImageUrl);
        setValue("category", product.category);
        setValue("description", product.description);
        setValue("quantity", product.quantity);
      } else {
        toast.error("Product not found");
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch product");
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleProductFunction();
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const docRef = doc(fireDB, "product", id);
      await updateDoc(docRef, data);
      toast.success("Product updated successfully");
      setLoading(false);
      navigate("/admin-dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update product");
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {loading && <Loader />}
      <div className="login_Form bg-pink-50 px-8 py-6 border border-pink-100 rounded-xl shadow-md">
        <h2 className="text-center text-2xl font-bold text-pink-500 mb-5">
          Update Product
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Input One */}
          <div className="mb-3">
            <input
              type="text"
              placeholder="Product Name"
              {...register("title", { required: "Product name is required" })}
              className="bg-pink-50 text-pink-300 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300"
            />
            {errors.title && (
              <p className="text-red-500">{errors.title.message}</p>
            )}
          </div>

          {/* Input Two */}
          <div className="mb-3">
            <input
              type="number"
              placeholder="Price"
              {...register("price", { required: "Price is required" })}
              className="bg-pink-50 text-pink-300 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300"
            />
            {errors.price && (
              <p className="text-red-500">{errors.price.message}</p>
            )}
          </div>

          {/* Input Three */}
          <div className="mb-3">
            <input
              type="text"
              placeholder="Product Image Url"
              {...register("productImageUrl", {
                required: "Product image URL is required",
              })}
              className="bg-pink-50 text-pink-300 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300"
            />
            {errors.productImageUrl && (
              <p className="text-red-500">{errors.productImageUrl.message}</p>
            )}
          </div>
          {/* Input Four  */}
          <div className="mb-3">
            <select
              {...register("category", {
                required: "Product category is required",
              })}
              className="w-full px-1 py-2 text-pink-300 bg-pink-50 border border-pink-200 rounded-md outline-none  "
            >
              <option disabled>Select Product Category</option>
              {categoryList.map((value, index) => {
                const { name } = value;
                return (
                  <option
                    className=" first-letter:uppercase"
                    key={index}
                    value={name}
                  >
                    {name}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Input Five */}
          <div className="mb-3">
            <textarea
              {...register("description", {
                required: "Product description is required",
              })}
              placeholder="Product Description"
              rows="5"
              className="w-full px-2 py-1 text-pink-300 bg-pink-50 border border-pink-200 rounded-md outline-none placeholder-pink-300"
            />
            {errors.description && (
              <p className="text-red-500">{errors.description.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="mb-5">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md flex justify-center items-center"
              disabled={loading}
            >
              {loading ? <Loader /> : "Update Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
