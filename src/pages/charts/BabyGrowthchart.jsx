
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useContext, useEffect, useState } from "react";
import { BabyContext } from "../../context/BabyContext";
import Cookies from "universal-cookie";
import axios from "axios";

// تسجيل المكونات المطلوبة
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChartComponent = ({weightactive , heightactive}) => {
  const { activegender, activeBaby } = useContext(BabyContext);
  const cookies = new Cookies();
  const getToken = cookies.get("Bearer");
  const idbaby = cookies.get("activebaby");
  const [heights, setHeights] = useState([]);
  const [weights, setWeights] = useState([]);

  useEffect(() => {
    const fetchBabies = async () => {
      try {
        const res = await axios.get(`https://carenest-serverside.vercel.app/babies/${idbaby}`, {
          headers: { Authorization: ` ${getToken}` },
        });

        const babyData = res.data?.data || {};
        const babyHeights = babyData.height || [];
        const babyWeights = babyData.weight || [];

        const validHeights = babyHeights
          .filter((entry) => entry?.height !== null && entry?.ageCategory !== null)
          .map((entry) => ({ 
            value: entry.height, 
            month: `Month ${parseInt(entry.ageCategory.replace("month_", ""), 10)}` 
          }));

        const validWeights = babyWeights
          .filter((entry) => entry?.weight !== null && entry?.ageCategory !== null)
          .map((entry) => ({
            value: entry.weight,
            month: `Month ${parseInt(entry.ageCategory.replace("month_", ""), 10)}`
          }));

        setHeights(validHeights);
        setWeights(validWeights);
      } catch (error) {
        console.error("❌ Error fetching babies:", error);
      }
    };

    fetchBabies();
  }, [getToken, idbaby]);

  const maleWeightData = [3.2, 4.0, 4.9, 5.1, 6.0, 6.2, 7.0, 7.2, 7.3, 8.0, 8.4, 8.8, 11];
  const femaleWeightData = [3.0, 4.0, 3.0, 5.0, 6.0, 5.9, 6.1, 6.9, 7.6, 7.8, 8.0, 8.1, 10];

  const maleHeightData = [50, 54, 57, 60, 61, 63, 65, 66, 66, 69, 70, 70.1, 81];
  const femaleHeightData = [50, 53, 55, 57, 59, 61, 63, 64, 65, 67, 69, 70, 79];

  const months = [
    "Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6",
    "Month 7", "Month 8", "Month 9", "Month 10", "Month 11", "Month 12", "Year 2"
  ];

  const firstRecordedMonth = heights.length > 0 ? heights[0].month : "Month 1";
  const startIndex = months.indexOf(firstRecordedMonth);

  const slicedMonths = months.slice(startIndex);
  const slicedMaleHeightData = maleHeightData.slice(startIndex);
  const slicedFemaleHeightData = femaleHeightData.slice(startIndex);
  const slicedMaleWeightData = maleWeightData.slice(startIndex);
  const slicedFemaleWeightData = femaleWeightData.slice(startIndex);

  // const data = {
  //   labels: slicedMonths,
  //   datasets: [
  //     {
  //       label: activegender === "Male" ? "Standard Male Weight (kg)" : "Standard Female Weight (kg)",
  //       data: activegender === "Male" ? slicedMaleWeightData : slicedFemaleWeightData,
  //       borderColor: "rgba(75, 192, 192, 1)",
  //       backgroundColor: "rgba(75, 192, 192, 0.2)",
  //       borderWidth: 2,
  //       tension: 0.2,
  //       fill: false,
  //       pointRadius: 0,
  //       borderDash: [5, 5],
  //     },
  //     {
  //       label: activegender === "Male" ? "Standard Male Weight (kg)" : "Standard Female Weight (kg)",
  //       data: activegender === "Male" ? slicedMaleHeightData : slicedFemaleHeightData,
  //       borderColor: "green",
  //       backgroundColor: "rgba(102, 255, 99, 0.2)",
  //       borderWidth: 2,
  //       tension: 0.2,
  //       fill: false,
  //       pointRadius: 0,
  //       borderDash: [5, 5],
  //     },
  //     {
  //       label: `Recorded ${activeBaby} Height`,
  //       data: heights.map((entry) => entry.value),
  //       borderColor: "rgba(75, 192, 192, 1)",
  //       borderWidth: 2,
  //       tension: 0.2,
  //       fill: false,
  //     },
  //     {
  //       label: `Recorded ${activeBaby} Weight`,
  //       data: weights.map((entry) => entry.value),
  //       borderColor: "green",
  //       borderWidth: 2,
  //       tension: 0.2,
  //       fill: false,
  //     }
  //   ]
  // };

  // ✅ إضافة خيارات الرسم البياني
  const data = {
    labels: slicedMonths,
    datasets: [
      ...(weightactive || !weightactive && !heightactive
        ? [
            {
              label: activegender === "Male" ? "Standard Male Weight (kg)" : "Standard Female Weight (kg)",
              data: activegender === "Male" ? slicedMaleWeightData : slicedFemaleWeightData,
              borderColor: "rgba(75, 192, 192, 1)",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderWidth: 2,
              tension: 0.2,
              fill: false,
              pointRadius: 0,
              borderDash: [5, 5],
            },
            {
              label: `Recorded ${activeBaby} Weight`,
              data: weights.map((entry) => entry.value),
              borderColor: "green",
              borderWidth: 2,
              tension: 0.2,
              fill: false,
            }
          ]
        : []),
      ...(heightactive || !weightactive && !heightactive
        ? [
            {
              label: activegender === "Male" ? "Standard Male Height (cm)" : "Standard Female Height (cm)",
              data: activegender === "Male" ? slicedMaleHeightData : slicedFemaleHeightData,
              borderColor: "green",
              backgroundColor: "rgba(102, 255, 99, 0.2)",
              borderWidth: 2,
              tension: 0.2,
              fill: false,
              pointRadius: 0,
              borderDash: [5, 5],
            },
            {
              label: `Recorded ${activeBaby} Height`,
              data: heights.map((entry) => entry.value),
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 2,
              tension: 0.2,
              fill: false,
            }
          ]
        : [])
    ]
  };
  
  const options = {
    responsive: true,
 
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Growth Rate of your baby", // عنوان المخطط
      },
      tooltip: {
        enabled: true, // تفعيل `tooltip`
        mode: "nearest",
        intersect: false,
      },
    },
    scales: {
      y: {
        max: 95, // ✅ تحديد الحد الأقصى للمحور `Y`
      },
    },
  };

  return (
    <div style={{ width: "95%", margin: " 0 auto", height: "400px", display:"flex" ,justifyContent:"center" , alignItems:"center" , gap:"10px" , paddingLeft:"2.5%"  }}>
      <Line data={data} options={options}  />
    </div>
  );
};

export default LineChartComponent;

