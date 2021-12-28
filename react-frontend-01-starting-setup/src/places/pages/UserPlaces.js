import React from "react";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Justice-Reskill Head Quarters 1",
    description: "One of the fastest growing startups in Colorado 2021!",
    imageUrl:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFCJ_NisWYAo26gz%3Fformat%3Djpg%26name%3Dlarge&imgrefurl=https%3A%2F%2Ftwitter.com%2Fjusticereskill&tbnid=8D7v2I3miXsaeM&vet=12ahUKEwiC4uyegof1AhXSO80KHXOkBcEQMygBegQIARAl..i&docid=aeoKaO1hlZ0afM&w=1150&h=2048&itg=1&q=Justice%20Reskill%20headquarters%20pictures&ved=2ahUKEwiC4uyegof1AhXSO80KHXOkBcEQMygBegQIARAl",
    creator: "u1",
    address: "303 E. 17th Avenue Suite #400, Denver, CO 80203",
    location: {
      lat: 39.7435392,
      lng: -104.9829703,
    },
  },
  {
    id: "p2",
    title: "Justice-Reskill Head Quarters 1",
    description: "One of the fastest growing startups in Colorado 2021!",
    imageUrl:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FFCJ_NisWYAo26gz%3Fformat%3Djpg%26name%3Dlarge&imgrefurl=https%3A%2F%2Ftwitter.com%2Fjusticereskill&tbnid=8D7v2I3miXsaeM&vet=12ahUKEwiC4uyegof1AhXSO80KHXOkBcEQMygBegQIARAl..i&docid=aeoKaO1hlZ0afM&w=1150&h=2048&itg=1&q=Justice%20Reskill%20headquarters%20pictures&ved=2ahUKEwiC4uyegof1AhXSO80KHXOkBcEQMygBegQIARAl",
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
