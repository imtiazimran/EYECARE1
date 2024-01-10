import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import "./card.css";
const UserAddressCard = () => {
  // Replace the following data with your actual user and address information
  const user = {
    name: "John Doe",
    city: "New York",
    address: "123 Main Street",
    state: "State",
    mobile: " +91 0000000000",
  };

  const handleEdit = () => {
    // Implement edit functionality
    console.log("Edit button clicked");
  };

  const handleDelete = () => {
    // Implement delete functionality
    console.log("Delete button clicked");
  };

  return (
    <div
      className="shadow-md 
     rounded-md w-[50%]  addresscard    "
    >
      <div className=" ml-[3%]   ">
        <h2 className="text-lg font-semibold ">{user.name}</h2>

        <p className="text-gray-600 ">{user.city}</p>
        <p className="text-gray-600 ">{user.address}</p>
        <p className="text-gray-600 ">{user.state}</p>
        <p className="text-gray-600 ">{user.mobile}</p>
      </div>
      <div className="flex items-center  justify-end">
        <button
          className="  px-3  flex   justify-center items-center hover:font-bold "
          onClick={handleEdit}
        >
          <MdEdit />
          <p className="ml-1">Edit</p>
        </button>
        <button
          className="  px-3 py-1 rounded  flex  text-red-400 items-center  justify-center hover:text-red-700"
          onClick={handleDelete}
        >
          <RiDeleteBin5Line />
          <p className=" ml-1">Delete</p>
        </button>
      </div>
    </div>
  );
};

export default UserAddressCard;
