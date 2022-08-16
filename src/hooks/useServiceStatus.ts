import { useEffect, useState } from "react";
import * as Constants from "../constants";

export const useServiceStatus = (): any => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    //Could try refactoring with Promise.allSettled
    const fetchAPI = async () => {
      const servicesData: any[] = [];
      for (const service of Constants.SERVICES) {
        try {
          const response = await fetch(
            `${Constants.API_BASE_URL}${service}/health/status`
          );
          const data = await response.json();
          servicesData.push({ ...data, service });
        } catch (error: any) {
          servicesData.push({
            success: false,
            service,
            message: "ERROR",
          });
        }
      }
      setData(servicesData);
    };
    if (data.length === 0) {
      fetchAPI();
    }
    const fetchInterval = setInterval(() => fetchAPI(), 15000);
    return () => clearInterval(fetchInterval);
  }, [data]);

  // useEffect(() => {}, [service]);

  return data;
};
