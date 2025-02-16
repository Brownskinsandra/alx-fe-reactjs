// const UserProfile = (props) => {
//    return (
//      <div>
//        <h2>{props.name="Alice"}</h2>
//        <p>Age: {props.age="25"}</p>
//        <p>Bio: {props.bio="Loves hiking and photography"}</p>
//      </div>
//    );
//  };

//  export default UserProfile;
const UserProfile = (props) => {
  return <p>[{props.name="Alice"}, {props.age="25"}, {props.bio="Loves hiking and photography"}]</p>;
};

export default UserProfile;
