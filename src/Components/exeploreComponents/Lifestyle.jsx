import { useQuery } from "@tanstack/react-query";
import React from "react";
import LoginSkeleton from "../Shared/Skeleton/LoginSkeleton";
import Gigcard from "../showGigs/Gigcard";
import Nogigs from "./Nogigs";

const Lifestyle = () => {
  const { data: lifeStyle = [], isLoading } = useQuery({
    queryKey: ["lifeStyle"],
    queryFn: async () => {
      const res = await fetch(
        " https://freelancer-nation-backend.vercel.app/lifestyle"
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <LoginSkeleton></LoginSkeleton>;
  }
  if (lifeStyle.length === 0) {
    return <Nogigs></Nogigs>;
  }

  return (
    <div className="bg-gray-100 pt-10 pb-16 px-10">
      <h2 className="text-3xl font-bold">Gigs From Programming and Tech</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
        {lifeStyle &&
          lifeStyle?.map((g, i) => <Gigcard gig={g} key={i}></Gigcard>)}
      </div>
    </div>
  );
};

export default Lifestyle;
