import DataTableComponent from "@/components/Ui/DataTable";

function MarketZoneStock() {
  // const heading = ["Stock", "Value", "Growth", "Stocks", "Sectors"];
  const data = [
    { stock: "HRL", value: "940", growth: "10%", stocks: "HRL", sectors: "TRADING IND" },
    { stock: "MHCL", value: "861.9", growth: "3%", stocks: "MHCL", sectors: "HYDRO" },
    { stock: "HRL", value: "940", growth: "10%", stocks: "HRL", sectors: "TRADING IND" },
    { stock: "MHCL", value: "861.9", growth: "3%", stocks: "MHCL", sectors: "HYDRO" },
    { stock: "HRL", value: "940", growth: "10%", stocks: "HRL", sectors: "TRADING IND" },
    { stock: "MHCL", value: "861.9", growth: "3%", stocks: "MHCL", sectors: "HYDRO" },
  ];

  return (
    <>
      <h2 className="text-gray-200 border-b border-gray-900">Stocks</h2>
      <DataTableComponent data={data} />
    </>
  );
}

export default MarketZoneStock;