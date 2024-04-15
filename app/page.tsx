import Image from "next/image";
import Blogs from "@/components/Blogs/Allblogs"
import DataDisplay from "@/components/Blogs/DataDisplay";



const Home: React.FC = () => {
  return (
      <div>
         
          <DataDisplay />
      </div>
  );
};

export default Home;
