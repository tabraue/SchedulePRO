import React from "react";
import { Link} from "react-router-dom";
import FolderOpen from "../../../components/Icon/FolderOpen";

function ListDepartment({ info }) {

/*
  const handle = () => {
    if(onClick) onClick()
  }
*/

  return (
    <div className="border-solid border-2 border-yellow-sandy m-1 p-3 grid grid-cols-3 content-center rounded-md  bg-white-sand h-full flex-shrink-0  w-9/12 ">
      <button className="col-start-1 col-end-1 justify-self-center"
      >
        <FolderOpen />
      </button>
      <div className="min-w-0 col-start-2   justify-self-start self-center">
        <Link to={`/home/departments/${info._id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-paradiso hover:text-yellow-sandy">
            {info.name}
          </h5>
        </Link>
      </div>
      <div className="col-start-2 col-end-3">
        <p className="text-sm text-black h-full">
          {info.description}
        </p>
      </div>
    </div>
  );
}

export default ListDepartment;


// <div className="border-solid border-2 border-yellow-sandy m-1 p-3 grid auto-rows-auto content-center rounded-md bg-white-sand h-full flex-shrink-0  w-9/12 ">
//