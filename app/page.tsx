"use client";

import { useRouter, useParams } from "next/navigation";

import { Provider } from "react-redux";
import { appStore } from "./store";

import List from "../components/List";
import Details from "../components/Details";

export default function App() {
  const params = useParams();
  console.log(params);
  return <></>;
}
