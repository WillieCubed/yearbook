import type { PointAwardRecord } from "../lib/points";

function TableHeader() {
  return (
    <thead className="p-2 font-bold text-xl">
      <tr>
        <th className="p-2" scope="col">
          When Awarded
        </th>
        <th className="p-2" scope="col">
          Awarded To
        </th>
        <th className="p-2" scope="col">
          Who Earned
        </th>
        <th className="p-2" scope="col">
          Points
        </th>
      </tr>
    </thead>
  );
}

function PointsEntry({
  awardee,
  houseRecipient: houseRecipeient,
  points,
  timestamp,
}: PointAwardRecord) {
  const localizedTimestamp = timestamp.toLocaleString("en-US");
  return (
    <tr className="p-2">
      <td className="p-2">{localizedTimestamp}</td>
      <td className="p-2">{houseRecipeient}</td>
      <td className="p-2">{awardee}</td>
      <td className="p-2 text-right">{points}</td>
    </tr>
  );
}

interface PointsTableProps {
  records: PointAwardRecord[];
}

/**
 * A table that displays a list of instances of points being earned.
 */
export default function PointsTable({ records }: PointsTableProps) {
  const rows = records
    .sort((record1, record2) => {
      return record1.timestamp.getTime() > record2.timestamp.getTime() ? 1 : -1;
    })
    .map((record) => {
      return <PointsEntry key={record.timestamp.toISOString()} {...record} />;
    });

  const lastTime = new Date();

  return (
    <table className="text-lg shadow-md rounded-lg bg-white dark:bg-gray-700 table-auto">
      <caption className="text-center p-2">
        Points as of {lastTime.toLocaleString("en-US")}.
      </caption>
      <TableHeader />
      <tbody>{rows}</tbody>
    </table>
  );
}
