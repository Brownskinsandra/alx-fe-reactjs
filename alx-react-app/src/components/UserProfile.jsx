const UserProfile = (props) => {
   return (
     <div>
       <h2>{props.name="Alice"}</h2>
       <p>Age: {props.age="25"}</p>
       <p>Bio: {props.bio="Loves hiking and photography"}</p>
     </div>
   );
 };

 export default UserProfile;