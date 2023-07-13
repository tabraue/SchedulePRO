import React from "react";
import { Link} from "react-router-dom";
import FolderOpen from "../../../components/Icon/FolderOpen";

function ListDepartment({ info }) {
  return (
    <div className="border-solid border-2 border-yellow-sandy p-3 grid grid-cols-5 grid-rows-2 content-center rounded-md  bg-white-sand ">
      <button className="col-start-1 col-end-1 row-start-1 justify-self-center">
        <FolderOpen />
      </button>
      <div className="min-w-0 col-start-2 col-end-5 row-start-1  justify-self-start self-center">
        <Link to={`home/departments/${info._id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-paradiso hover:text-yellow-sandy">
            {info.name}
          </h5>
        </Link>
      </div>
      <div className="col-start-2 col-end-6 row-start-2 row-end-3">
        <p className="text-sm text-black h-full">
          {info.description}
        </p>
      </div>
    </div>
  );
}

export default ListDepartment;


