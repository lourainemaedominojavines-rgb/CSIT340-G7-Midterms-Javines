export default function Hire ({hours, rate}) {
    return (
        <>
        <div className = "mx-20 mt-8 flex item-center justify-between rounded-xl bg-[#222222] p-6 text-[#FAF3E1]">
            <div>
                <h3 className = "text-2xl font-bold">Hire for {hours} hours</h3>
                <p className = "mt-1 text-xl">
                    Total: 
                    <span classname = "font-bold text-[#FA8112]">PHP {hours} * {rate}</span>
                </p>

            </div>

            <div className = "flex gap-4">
                <button className = "curson-pointer rounded-lg bg-[#FA8112] px-8 text-xl font-bold text-[#222222]" onClick = {handleAddHour}>
                    Add hour
                </button>

                <button className = "curson-pointer rounded-lg border-2 border-[#FAF3E1] px-8 text-xl font-bold" onClick = {handleClear}>
                    Clear
                </button>

            </div>

        </div> 
        
        </>
    );   
}