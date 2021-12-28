import React from "react";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Justice-Reskill Head Quarters 1",
    description: "One of the fastest growing startups in Colorado 2021!",
    imageUrl: "",
    creator: "u1",
    address: "303 E. 17th Avenue Suite #400, Denver, CO 80203",
    location: {
      lat: 39.7435392,
      lng: -104.9829703,
    },
  },
  {
    id: "p2",
    title: "Justice-Reskill Head Quarters 2",
    description: "One of the fastest growing startups in Colorado 2021!",
    imageUrl: "",
    creator: "u2",
    address: "4800 Baseline Road, E104 #386 Boulder, CO 80303",
    location: {
      lat: 39.9986808,
      lng: -105.2469732,
    },
  },
];

const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
