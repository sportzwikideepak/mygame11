// import React from "react";
// import { fetchData } from "@/hooks/fetchData";
// import HomeMain from "@/components/Home/HomeMain";

// const entity_base_url_v2 = process.env.ENTITY_BASE_URL_V2;
// const entity_api_key = process.env.ENTITY_TOKEN;

// const fetchSeriesMatches = async (competition_id) => {
//   const url1 = `${entity_base_url_v2}/matches/?token=${entity_api_key}&per_page=80&status=1`;
//   const url2 = `${entity_base_url_v2}/matches/?token=${entity_api_key}&per_page=80&status=3`;
// //comment
//   try {
//     const [res1, res2] = await Promise.all([
//       fetch(url1, { next: { revalidate: 30 } }),
//       fetch(url2, { next: { revalidate: 30 } }),
//     ]);

//     const [data1, data2] = await Promise.all([res1.json(), res2.json()]);

//     return [
//       ...(data1?.response?.items ?? []),
//       ...(data2?.response?.items ?? []),
//     ];
//   } catch (err) {
//     return [];
//   }
// };

// function getDateWithOffset(offset = 0) {
//   const date = new Date();
//   date.setDate(date.getDate() + offset);

//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, "0");
//   const day = String(date.getDate()).padStart(2, "0");

//   return `${year}-${month}-${day}`;
// }

// const formattedDate = `${getDateWithOffset(-2)}_${getDateWithOffset(2)}`;

// const page = async () => {
//   // console.log(dataStatus2?.response, "wihniohioh8");

//   // const dataStatus3 = await fetchData(
//   //   `${entity_base_url_v2}/matches?token=${entity_api_key}&per_page=80?date=${formattedDate}&status=3`,
//   //   3000
//   // );

//   // const dataStatus1 = await fetchData(
//   //   `${entity_base_url_v2}/matches?token=${entity_api_key}&per_page=80?date=${formattedDate}&status=1`,
//   //   3000
//   // );

//   // const data =
//   //   [...dataStatus3?.response?.items, ...dataStatus1?.response?.items] || [];

//   // Indian premier league 128471
//   // World cup 128414
//   const competition_id = 128414;
//   const seriesData = await fetchSeriesMatches();
//   const dataStatus2 = await fetchData(
//     `${entity_base_url_v2}/matches/?token=${entity_api_key}&per_page=80&status=2`,
//     3000
//   );
//   console.log(dataStatus2,"datastatus2")
//   // console.log(seriesData, "8rhi4f0ephy");

//   return (
//     <>
//       <HomeMain
//         data={seriesData}
//         completed_matches={dataStatus2}
//         // data_status_1={dataStatus1}
//         // data_status_3={dataStatus3}
//       />
//     </>
//   );
// };

// export default page;









// import React from "react";
// import { fetchData } from "@/hooks/fetchData";
// import HomeMain from "@/components/Home/HomeMain";

// const entity_base_url_v2 = process.env.ENTITY_BASE_URL_V2;
// const entity_api_key = process.env.ENTITY_TOKEN;

// const fetchSeriesMatches = async () => {
//   const url1 = `${entity_base_url_v2}/matches/?token=${entity_api_key}&per_page=80&status=1`;
//   const url2 = `${entity_base_url_v2}/matches/?token=${entity_api_key}&per_page=80&status=3`;

//   try {
//     const [res1, res2] = await Promise.all([
//       fetch(url1, { next: { revalidate: 30 } }),
//       fetch(url2, { next: { revalidate: 30 } }),
//     ]);

//     const [data1, data2] = await Promise.all([res1.json(), res2.json()]);

//     return [
//       ...(data1?.response?.items ?? []),
//       ...(data2?.response?.items ?? []),
//     ];
//   } catch (err) {
//     return [];
//   }
// };

// const page = async () => {
//   const seriesData = await fetchSeriesMatches();
//   const dataStatus2 = await fetchData(
//     `${entity_base_url_v2}/matches/?token=${entity_api_key}&per_page=80&status=2`,
//     3000
//   );

//   return (
//     <>
//       <HomeMain
//         data={seriesData}
//         completed_matches={dataStatus2.response.items}
//       />
//     </>
//   );
// };

// export default page;













import React from "react";
import { fetchData } from "@/hooks/fetchData";
import HomeMain from "@/components/Home/HomeMain";

const entity_base_url_v2 = process.env.ENTITY_BASE_URL_V2;
const entity_api_key = process.env.ENTITY_TOKEN;

const fetchSeriesMatches = async () => {
  const url1 = `${entity_base_url_v2}/matches/?token=${entity_api_key}&per_page=80&status=1`;
  const url2 = `${entity_base_url_v2}/matches/?token=${entity_api_key}&per_page=80&status=3`;
  const url3 = `${entity_base_url_v2}/matches/?token=${entity_api_key}&per_page=80&status=2`;

  try {
    const [res1, res2, res3] = await Promise.all([
      fetch(url1, { next: { revalidate: 30 } }),
      fetch(url2, { next: { revalidate: 30 } }),
      fetch(url3, { next: { revalidate: 30 } }),
    ]);

    const [data1, data2, data3] = await Promise.all([res1.json(), res2.json(), res3.json()]);

    return {
      upcoming: data1?.response?.items ?? [],
      live: data2?.response?.items ?? [],
      completed: data3?.response?.items ?? []
    };
  } catch (err) {
    return { upcoming: [], live: [], completed: [] };
  }
};

const page = async () => {
  const seriesData = await fetchSeriesMatches();

  return (
    <>
      <HomeMain
        data={seriesData.upcoming}
        live_matches={seriesData.live}
        completed_matches={seriesData.completed}
      />
    </>
  );
};

export default page;
