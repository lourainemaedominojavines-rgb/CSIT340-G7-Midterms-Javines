import Bio from "./Bio";
import StatCard from "./StatCard";

export default function Profile () {
    return (

        <div className="flex items-end justify-between bg-[#F5E7C6] px-20 py-10">
        <div>

          <Bio name = "Louraine Mae D. Javines" username = "@lourainemaedominojavines-rgb" ></Bio>

          <div className="mt-6 flex gap-6">
           
            <StatCard value = "Followers" level = "0"></StatCard>
            <StatCard value = "PHP per hour" level = "500"></StatCard>
          </div>
        </div>
        
      </div>

    );
}