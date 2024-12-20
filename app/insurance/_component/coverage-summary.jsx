import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function CoverageSummary() {
  const coverageDetails = [
    {
      service: "Primary Care Visit",
      inNetwork: "$20 copay",
      outOfNetwork: "40% coinsurance",
    },
    {
      service: "Specialist Visit",
      inNetwork: "$40 copay",
      outOfNetwork: "50% coinsurance",
    },
    {
      service: "Emergency Room",
      inNetwork: "$250 copay",
      outOfNetwork: "$250 copay",
    },
    {
      service: "Inpatient Hospital",
      inNetwork: "20% coinsurance",
      outOfNetwork: "50% coinsurance",
    },
    {
      service: "Outpatient Surgery",
      inNetwork: "20% coinsurance",
      outOfNetwork: "50% coinsurance",
    },
  ];

  return (
    <div className="mt-8">
      <h2 className="mb-4 font-merriweather text-2xl font-bold">
        Coverage Summary
      </h2>
      <div className="rounded-lg bg-white p-4">
        <Table className="rounded-lg bg-white p-4">
          <TableHeader>
            <TableRow>
              <TableHead>Service</TableHead>
              <TableHead>In-Network</TableHead>
              <TableHead>Out-of-Network</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {coverageDetails.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.service}</TableCell>
                <TableCell>{item.inNetwork}</TableCell>
                <TableCell>{item.outOfNetwork}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
