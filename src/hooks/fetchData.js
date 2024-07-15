export const fetchData = async (url, revalidateTime = 4000) => {
  try {
    const response = await fetch(url, { next: { revalidate: 4000 } });

    if (!response.ok) {
      console.log(`Server responded with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Failed to fetch squad data:", error);
    return null;
  }
};
