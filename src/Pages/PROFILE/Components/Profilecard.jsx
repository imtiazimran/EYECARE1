const UserProfileCard = () => {
  // Replace the following data with your actual user information
  const user = {
    photo:
      "https://s3-alpha-sig.figma.com/img/2469/d293/c6b5d0f76af6f394fbe501c76b567cc2?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TvCQeFrClggoq92ud-LpunX5rTblcMeQzu46b2GZQPYNg4xX4U4YHPeTmZwYmPv04Oesv3iLsgN0rt6vl00Oovv1koDyhxpQ1pbqjOgIWxk53PTb7rZNoBM4UEXgR9lxe3OsXr1ERrwAiBi39X2-2GBI753~2YdZv11NTvw5s8D7X0dv7TdFLkUEyRLU6AUdwaX5x7b1iiLCfQh0GEFGRdMDI-hr-YgVbg76Iz9KyzSHz3yG7nf3OXlwuebknpiwmYUp~xpkgLfFg01Jk2zZilLh6JnfebmGEB8tITwX3q649lC36LYXyc~ue8PYp0PzJk4z2KCwQBm0hH~-i0w8CQ__",
    name: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "+1234567890",
    dateOfBirth: "DD/MM/YYYY",
  };

  return (
    <div className="  bg-white  rounded-md flex w-full h-full p-1">
      <img
        src={user.photo}
        alt={user.name}
        className="   bg-slate-300  rounded-full border border-slate-300 flex  items-center  w-[30%] "
      />
      <div className="text-center w-full   font-bold ">
        <h2 className="text-lg font-semibold">{user.name}</h2>
        <p className="text-gray-600 ">{user.email}</p>
        <p className="text-gray-600 ">{user.phoneNumber}</p>
        <p className="text-gray-600">{`Date of Birth: ${user.dateOfBirth}`}</p>
      </div>
    </div>
  );
};

export default UserProfileCard;
