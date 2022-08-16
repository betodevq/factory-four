import { useEffect, useState } from "react";
import * as Constants from "../constants";

type ServiceStatus = {
  success: boolean;
  message: string;
  hostname?: string;
  time: number;
  service: string;
};

export const useServiceStatus = (): any => {
  const [data, setData] = useState<ServiceStatus[] | []>([]);

  useEffect(() => {
    //Could try refactoring with Promise.allSettled
    const fetchAPI = async () => {
      const servicesData: ServiceStatus[] = [];
      for (const service of Constants.SERVICES) {
        try {
          const response = await fetch(
            `${Constants.API_BASE_URL}${service}/health/status`
          );
          const data: ServiceStatus = await response.json();
          servicesData.push({ ...data, service, message: "Operational" });
        } catch (error: any) {
          servicesData.push({
            success: false,
            service,
            message: "Outage",
            time: Date.now(),
          });
        }
      }
      setData(servicesData);
    };

    if (data.length === 0) {
      fetchAPI();
    }
    const fetchInterval = setInterval(
      () => fetchAPI(),
      Constants.REFRESH_INTERVAL
    );
    return () => clearInterval(fetchInterval);
  }, [data]);

  return data;
};
