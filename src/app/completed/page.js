import { fetchData } from "@/hooks/fetchData";
import React from "react";
import CompletedPageMain from "@/components/CompletedPageMain";

const entity_base_url_v2 = process.env.ENTITY_BASE_URL_V2;
const entity_api_key = process.env.ENTITY_TOKEN;

function getDateWithOffset(offset = 0) {
  const date = new Date();
  date.setDate(date.getDate() + offset);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

const formattedDate = `${getDateWithOffset(-2)}_${getDateWithOffset(2)}`;

const page = async () => {
  const dataStatus3 = await fetchData(
    `${entity_base_url_v2}/competitions/128471/matches/?token=${entity_api_key}&per_page=80&status=2`,
    3000
  );

  const data = [...dataStatus3.response.items];

  // console.log(dataStatus3, "fh894eoi9ohgi4");

  return (
    <>
      <CompletedPageMain data={data} />
    </>
  );
};

export default page;
