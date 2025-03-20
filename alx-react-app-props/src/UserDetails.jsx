import { useContext } from "react";
import UserContext from "./UserContext";  // ✅ Correct import

function UserDetails() {
  const userData = useContext(UserContext);  // ✅ Get data from Context

  return (
    <div>
      <p>Name: {userData?.name}</p>  {/* ✅ Use optional chaining in case userData is undefined */}
      <p>Email: {userData?.email}</p>
    </div>
  );
}

export default UserDetails;
